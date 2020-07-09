import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
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
                <Route path="/sign-in"><h1>Alo</h1></Route>
                <Route path="/sign-up"><h1>Up</h1></Route>
                <Route path="/manage/links/create"><h1>Aslo</h1></Route>
                <Route path="/manage/links/edit"><h1>Aslo</h1></Route>
                <Route path="/manage/links"><h1>Alos</h1></Route>


            </Switch>
        </div>
      
      
        </BrowserRouter>
    ) 
}
export default App;