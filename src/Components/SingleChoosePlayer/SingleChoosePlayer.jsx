import React from 'react';

const SingleChoosePlayer = ({selectedPlayer}) => {
    const{image,name, role, playerId}=selectedPlayer;
    console.log(name);
    
    return (
        <div>
            <div className='flex justify-between border border-gray-300 rounded-md  p-3 '>
                <div className='flex gap-3'>
                    <div ><img className='w-15 h-15 rounded-md object-cover' src={image} alt="" /></div>
                    <div>
                        <h1 className='font-bold'>{name}</h1>
                        <p className='text-gray-400'>{role}</p>
                    </div>
                </div>
                <button><img className='h-10' src="https://img.icons8.com/?size=100&id=119057&format=png&color=000000" alt="" /></button>
            </div>
        </div>
    );
};

export default SingleChoosePlayer;