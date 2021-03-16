import React from 'react';
import {NavLink,HashRouter,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ContactUs from './ContactUs';

import Dashboard from './Dashboard';

import YoutubeDashboard from './YoutubeDashboard';

import userDashboard from './userDashboard';

import Logout from './Logout';


class Header extends React.Component{
    render(){
        return(
            <div>
                  
                   <HashRouter>



<nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <NavLink className="navbar-brand" to="/Home">Logo</NavLink>
  
 
  <ul className="navbar-nav">


  <li className="nav-item">
  <NavLink className="nav-link" to="/Home">HOME</NavLink>
  </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="/login">login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contactus">contactus</NavLink>
    </li>

   
    
   
  </ul>
</nav>            <Route path="/Home" exact component={Home}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route path="/contactus" component={ContactUs}></Route>
                  
                  <Route path="/dashboard" component={Dashboard}></Route>

                  <Route path="/YoutubeDashboard" component={YoutubeDashboard}></Route>

                  <Route path="/userDashboard" component={userDashboard}></Route>

                  <Route path="/Logout" component={Logout}></Route>

                  </HashRouter>

            </div>
        )
    }

}
export default Header;