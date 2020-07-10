import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import SignIn from '../src/screens/SingIn/index';
import SignUp from '../src/screens/SignUp/index';
import ManagerLinks from '../src/screens/Manager/Links/index';
import CreateLinks from '../src/screens/Manager/Links/Create/index';
import EditLinks from '../src/screens/Manager/Links/Edit/index';
import Home from '../src/screens/Home/index'

const App= () =>{
    return(
        <BrowserRouter>
        <div>
            <nav>
                <ul>
                <li><Link to="/sign-in">Sign in</Link> </li>
                <li><Link to="/sign-up">Sign up</Link> </li>
                <li><Link to="/manage/links/create">Create Link</Link> </li>
                <li><Link to="/manage/links/edit">Edit Link</Link> </li>
                <li><Link to="/manage/links">Links</Link> </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/sign-in"><SignIn /> </Route>
                <Route path="/sign-up"><SignUp /></Route>
                <Route path="/manage/links/create"><CreateLinks/></Route>
                <Route path="/manage/links/edit"><EditLinks /></Route>
                <Route path="/manage/links"><ManagerLinks /></Route>
                <Route path="/" exact><Home /></Route>


            </Switch>
        </div>
      
      
        </BrowserRouter>
    ) 
}
export default App;