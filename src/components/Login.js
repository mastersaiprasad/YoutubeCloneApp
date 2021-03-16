import React from 'react';
import axios from 'axios';

class Login extends React.Component{

  constructor(){
      super();
       console.log("constructor called");

       this.state= {
                password: "",
                emailId: "",
                role:"ROLE_CUSTOMER"
       }
  }
     componentDidMount(){
         console.log("component did mount called");
     }
     componentDidUpdate(){
         console.log("component did update called");
     }

      captureData = (event) =>{
          var name=event.target.name;
          var value=event.target.value;
          this.setState({[name]:value});
      }
      login=(event)=>{
            event.preventDefault();
            console.log('data',this.state);
            axios.post("http://localhost:9017/user/login",this.state).then(
               response => {
                 console.log(response);
                 if(response.data.token){
                   sessionStorage.setItem('token',response.data.token);
                   sessionStorage.setItem('currentUser',this.state.emailId)
                   this.props.history.push('/userDashboard');
                 }
               }  
            ,
            error =>{
              console.log(error)
            }
            )
      }
    render(){

        console.log("render called");
        return(

          
                <div>

 <form className="form-horizontal">
  <fieldset>
    <div id="legend">
      <legend className="">Login</legend>
    </div>
 
    <div className="control-group">
  
      <label className="control-label" htmlFor="email">E-mail</label>
      <div className="controls">
        <input onChange={this.captureData} size="50" type="text" id="email" name="emailId" placeholder="" className="input-xlarge"/>
        <p className="help-block">Please provide your E-mail</p>
      </div>
    </div>
 
    <div className="control-group">
      
      <label className="control-label" htmlFor="password">Password</label>
      <div className="controls">
        <input onChange={this.captureData} size="50" type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
        <p className="help-block">Password should be at least 4 characters</p>
      </div>
    </div>
    <div className="control-group">
      
      <div className="controls">
        <button onClick={this.login} className="btn btn-success">Login</button>
      </div>
    </div>
  </fieldset>
</form> 

                </div>
            
        )
    }
    componentWillUnmount(){
        console.log("component unmounted");
    }
}
export default Login;

