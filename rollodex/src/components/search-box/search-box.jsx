import React from "react";
import './search-box.css';
class SearchBox extends React.Component{
     render(){
        return(
            <input className = "search-box" id="email" name="email" type="search" placeholder = "search monsters"/>
        );
     }
}

export default SearchBox