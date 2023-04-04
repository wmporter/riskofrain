import React from 'react';
import Card from './Card';

function CardList ({ items }) {
    const cardArray = items.map((item, i) => {
        return <Card key={i} id={items[i].id} color={items[i].color} name={items[i].name} description={items[i].description} synergy={items[i].synergy} logo={items[i].logo} />
    })
    
    return (
        <div className='flex justify-center flex-wrap '>
        {cardArray}
        </div>
    );
}

export default CardList