import React from "react";
import './App.css'
import SearchBox from './components/search-box/search-box.jsx';
import CardList  from "./components/card-list/card-list.jsx";
// export let a=10;
// export let b = function add() {
//     return 10;
// };
// let defaultExp = 'default';
// export default defaultExp ; 
// all tags inside renders are properties

class App extends React.Component{
   constructor(){
      super();
      // let arr = [1,2,3,4,5];
      this.state={
         monsters:[],
         searchfield:"",
      }
   }
     render(){
      const monsters = this.state.monsters;
      const searchfield = this.state.searchfield;
        return(
          <div className="App">
             <h1>Monsters Rolodex</h1>
             {/* <input id = 'email'></input> */}
             <SearchBox searchfield = {searchfield}/>
             <CardList monsters = {monsters}/>
             <button type="submit">submit</button>
          </div>
        )
     }
} export default App