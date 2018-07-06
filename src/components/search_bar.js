import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query : ''
        }
    }

    handleQuery(event){
        this.setState({'query' : event.target.value});
    }

    handleKeyPress(e){
        if (e.key === 'Enter') {
             this.props.onQuery(this.state.query);
        }
      }
    
    render(){
        return(
            <input className="searchBar form-control" type="text" onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleQuery.bind(this)}/>
        )
    }
}

export default SearchBar;