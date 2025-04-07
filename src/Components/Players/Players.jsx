import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
    const[players, setPlayers]= useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=> setPlayers(data)
        )
    },[])

    return (
        <div>
            <h1>All players length:{players.length}</h1>
            {
                players.map(pPlayer=>
                    <Player key={pPlayer.playerId} playerInside={pPlayer}>
                        
                    </Player>
                )
                
            }
        </div>
    );
};

export default Players;