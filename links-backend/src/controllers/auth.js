const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const saltRounds = 10;
const { getMessage } = require("../helpers/validators");
const { Account } = require("../models");
const { accountSignUp, accountSignIn } = require("../validators/account");
const { generateJwt, generateRefreshJwt, getTokenFromHeaders } = require("../helpers/jwt");

router.post("/sign-in", accountSignIn, async (req, res) => {
    const { email, password } = req.body;
    const account = await Account.findOne({ where: { email } });

    //se conta ou senha estiverem erradas retorna bad request
    const match = account ? bcrypt.compareSync(password, account.password) : null;
    if (!match) return res.jsonBadRequest(null, "account.signin.invalid");

    const token = generateJwt({ id: account.id, version: account.jwtVersion });
    const refreshToken = generateRefreshJwt({ id: account.id });

    return res.jsonOK(account, getMessage("account.signin.success"), { token, refreshToken });
});

router.post("/sign-up", accountSignUp, async (req, res) => {
    //usando o destruction
    const { email, password } = req.body;
    const account = await Account.findOne({ where: { email } });
    if (account) {
        return res.jsonBadRequest(null, "account.signup.email_exists");
    } else {
        const hash = bcrypt.hashSync(password, saltRounds);
        const newAccount = await Account.create({ email, password: hash });

        const token = generateJwt({ id: newAccount.id });
        const refreshToken = generateRefreshJwt({ id: newAccount.id, version: newAccount.jwtVersion });

        return res.jsonOK(newAccount, getMessage("account.signup.sucess"), { token, refreshToken });
    }
});

router.post('/refresh', async (req, res) => {
    const token = getTokenFromHeaders(req.headers);
    if (!token) {
      return res.jsonUnauthorized(null, 'Invalid token');
    }
  
    try {
      const decoded = verifyRefreshJwt(token);
      const account = await Account.findByPk(decoded.id);
      if (!account) return res.jsonUnauthorized(null, 'Invalid token');
  
      if (decoded.version !== account.jwtVersion) {
        return res.jsonUnauthorized(null, 'Invalid token');
      }
      const meta = {
        token: generateJwt({ id: account.id }),
      };
  
      return res.jsonOK(null, null, meta);
    } catch (error) {
      return res.jsonUnauthorized(null, 'Invalid token');
    }
  });
module.exports = router;
