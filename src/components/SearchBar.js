import React from 'react';

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            term:''
        }
    }
    searchTermInput = (event)=>{
         event.preventDefault();
         this.props.onSearchTerm(this.state.term);
    }
    render(){
        return(
            <div>
                  <form>
                          <input onChange={event =>{this.setState({term:event.target.value})}} type="text" name="term" size="40" height="30px"></input>
                           <button onClick={this.searchTermInput}>Search</button>
                  </form>
            </div>
        )
    }
}
export default SearchBar;