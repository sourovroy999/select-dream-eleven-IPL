import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { GrFlagFill } from 'react-icons/gr';
import { IoMdPerson } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';

const Player = ({ playerInside, clickToAddPlayer }) => {
    // console.log(playerInside);

    const { image, name, country, role, biddingPrice, bowlingStyle, battingStyle, playerId } = playerInside;




    return (
        <div className='border border-gray-300 sm:w-[300px] md:w-[370px] lg:w-full mx-auto  p-5 rounded-2xl'>
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
                    <button id='${playerId}' onClick={() => clickToAddPlayer(playerInside)} className='btn hover:bg-blue-500 '>Choose Player</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            </div>




        </div>
    );
};

export default Player;