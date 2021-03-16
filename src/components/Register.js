import React from 'react';
import axios from 'axios';

class Register extends React.Component{

  constructor(){
      super();
       console.log("constructor called");

       this.state= {
                username: "",
                password: "",
                emailId: ""
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
      register=(event)=>{
            event.preventDefault();
            console.log('data',this.state);
            axios.post("http://localhost:9017/user/register",this.state).then(
               response => {
                 console.log(response);
                 if(response.data.token){
                   sessionStorage.setItem('token',response.data.token);
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
      <legend className="">Register</legend>
    </div>
    <div className="control-group">
     
      <label className="control-label"  htmlFor="username">Username</label>
      <div className="controls">
        <input onChange={this.captureData} type="text" size="50" id="username" name="username" placeholder="" className="input-xlarge"/>
        <p className="help-block">Username can contain any letters or numbers, without spaces</p>
      </div>
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
        <button onClick={this.register} className="btn btn-success">Register</button>
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
export default Register;

