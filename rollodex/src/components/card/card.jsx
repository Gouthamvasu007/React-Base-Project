
import React from 'react';
import './card.css';
class Card extends React.Component{
render(){
    return(
        <div className='card-container'>
                     <img alt='monster' src='https://robohash.org/9?set=set2&size=180x180' />
                     <h2>Name</h2>
                     <p>Email address</p>
                </div>
    );
}
}
export default Card;