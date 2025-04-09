import React from 'react';
import SingleChoosePlayer from '../SingleChoosePlayer/SingleChoosePlayer';

const ChoosePlayer = ({selectedPlayer}) => {
   
   
    
    
    return (
        <div className='space-y-3 mt-5'>

            {
                selectedPlayer.map(pPlayer=><SingleChoosePlayer selectedPlayer={pPlayer}></SingleChoosePlayer>)
            }
        </div>
    );
};

export default ChoosePlayer;