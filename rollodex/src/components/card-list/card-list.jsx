import React from 'react';
import './card-list.css'
import Card from '../card/card';
class CardList extends React.Component{
    render(){
        return(
            <div className='card-list'>
              <Card/>  
            </div>
        );
    }
}
export default CardList;