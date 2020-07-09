const express = require('express');
const  cors = require('cors');
const db = require('./models/index');
const authController= require( './controllers/auth')
const linkController= require( './controllers/link')
const checkJwt= require('./middlewares/jwt');
const response = require('./middlewares/reponse'); 
const app=  express();


app.use(cors());
app.use(response);
app.use(checkJwt);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
//sing-in
//sing-up 
app.use('/link',linkController);

app.use('/auth',authController);
app.get('/', 
(req,res)=>{
    return res.json('api running...');
}
)
db.sequelize.sync().then(()=>{

    app.listen(3000,()=>{
        console.log('listening on port 3000');
    });


});