import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';


const Players = ({clickToAddPlayer }) => {
    const[players, setPlayers]= useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=> setPlayers(data)
        )
    },[])

    

    return (
        <div id='players-section' className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-8'>
            {/* <h1>All players length:{players.length}</h1> */}
            {
                players.map(pPlayer=>
                    <Player clickToAddPlayer={clickToAddPlayer}  key={pPlayer.playerId} playerInside={pPlayer}>

                    </Player>
                )
                
            }
        </div>
    );
};

export default Players;