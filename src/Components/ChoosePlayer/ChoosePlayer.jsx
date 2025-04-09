import React from 'react';
import SingleChoosePlayer from '../SingleChoosePlayer/SingleChoosePlayer';

const ChoosePlayer = ({selectedPlayer, handleDelete}) => {
   
   
    
    
    return (
        <>
            <h1 className='font-bold'>Selected Players ({selectedPlayer.length}/6 )</h1>
        <div className='space-y-3 mt-5'>


            {
                selectedPlayer.map(pPlayer=><SingleChoosePlayer handleDelete={handleDelete} selectedPlayer={pPlayer}></SingleChoosePlayer>)
            }
        </div>

        </>
    );
};

export default ChoosePlayer;