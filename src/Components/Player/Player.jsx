import React from 'react';
import { FaFlag} from 'react-icons/fa';
import { GrFlagFill } from 'react-icons/gr';
import { IoMdPerson } from 'react-icons/io';

const Player = ({playerInside}) => {
    console.log(playerInside);

    const{image, name, country, role, biddingPrice,bowlingStyle,battingStyle}=playerInside;

    console.log(name);
    console.log(image);
    
    
    
    return (
        <div className='border p-5 rounded-2xl'>
            <img className='w-[340px] h-[220px] object-cover rounded-2xl transition duration-300 ease-out hover:scale-95' src={image} alt="" />
            <div className='flex items-center gap-2 mt-3'>
                 <IoMdPerson></IoMdPerson>
                <h1 className='font-bold'>{name}</h1>
            </div>

            <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <GrFlagFill className='text-gray-400'></GrFlagFill>
            <p className='text-xs'>{country}</p>

            </div>

                <div className='border w-auto'>{role}</div>
            </div>
   


            
        </div>
    );
};

export default Player;