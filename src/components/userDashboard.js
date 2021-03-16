import React from 'react';
import { NavLink } from 'react-router-dom';
import YoutubeDashboard from './YoutubeDashboard';
import Logout from './Logout';
class userDashboard extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        var currentUser=sessionStorage.getItem('currentUser');
        var token=sessionStorage.getItem("token")
        if(!token){
            this.props.history.push('/Login')
        }
        
        return(
            <div>
                <h3>hiii {currentUser}</h3>
                <NavLink    className="nav-link" to="/Logout">Logout</NavLink>
                <h1>iam in userDashboard</h1>
                <YoutubeDashboard/>

            </div>
         
        )
    }
}
export default userDashboard