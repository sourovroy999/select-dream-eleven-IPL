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
        <div className='border border-gray-300   p-5 rounded-2xl'>
            <img className='w-[340px] h-[220px] object-cover rounded-2xl transition duration-300 ease-out hover:scale-102' src={image} alt="" />
            <div className='flex items-center gap-2 mt-3'>
                 <IoMdPerson></IoMdPerson>
                <h1 className='font-bold'>{name}</h1>
            </div>

            <div className='flex justify-between mt-2'>
            <div className='flex gap-2 items-center '>
                <GrFlagFill className='text-gray-400'></GrFlagFill>
            <p className='text-xs'>{country}</p>

            </div>

                <div className='border px-3 rounded bg-gray-100'>{role}</div>
            </div>

            <hr className='my-3 border-gray-300' />

            <p className='font-bold'>Rating</p>
            <div className='grid gap-y-2 grid-cols-2 mt-4'>
                <div className='font-bold'>battingStyle</div>
                <div className=''>{battingStyle}</div>
                <div className='font-bold'>bowlingStyle</div>
                <div className='inline-block'>{bowlingStyle}</div>
                <div className='font-bold'>Price: ${biddingPrice}</div>
                <div>
                    <button className='btn  '>Choose Player</button>
                </div>
            </div>
   


            
        </div>
    );
};

export default Player;