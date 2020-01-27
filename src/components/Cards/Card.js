import React from 'react';

const Card = ({card: {id, price = '', title = '', imgPath = ''}, hundlerCardDelete})=>(
    <div className = 'card'>
        <div className = 'cardWrapper'>
            <h2 onClick = {hundlerCardDelete}>X</h2>
            <img 
                src = {imgPath} 
                alt = 'T-shirt'
            />
            <div className = "cardTitle">
                <p>{title}</p>
                <span className = "cardPrice">₽{price}</span>
            </div>
        </div>
    </div>
)

export default Card;