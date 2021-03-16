import React from 'react';
class Dashboard extends React.Component
{
    render(){
         var token=sessionStorage.getItem('token');
        if(!token){
          this.props.history.push('/login')
        }
        return(
            <div>
                <h1>iam in dashboard component</h1>
            </div>
        )
    }
}
export default Dashboard