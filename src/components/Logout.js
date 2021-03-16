import React from 'react';
class Logout extends React.Component{
    render(){
        sessionStorage.removeItem('token')
        return(
            <div>
                <h1>you have been sucessfully logout</h1>
            </div>

        )
    }
}
export default Logout