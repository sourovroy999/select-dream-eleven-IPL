import React from 'react';

const Player = ({playerInside}) => {
    console.log(playerInside);

    const{image, name, country, role, biddingPrice}=playerInside;

    console.log(name);
    console.log(image);
    
    
    
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            
            <p>{country}</p>

            
        </div>
    );
};

export default Player;