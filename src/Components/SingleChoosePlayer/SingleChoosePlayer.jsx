import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const deleteToast =()=>toast.success('removedd')




const SingleChoosePlayer = ({ selectedPlayer, handleDelete }) => {
    const { image, name, role, playerId } = selectedPlayer;
    console.log(name);

    const handleDeleteBtn=()=>{

        handleDelete(playerId);
        deleteToast()
        
    }

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
                <button onClick={() => handleDeleteBtn()}><img className='h-10' src="https://img.icons8.com/?size=100&id=119057&format=png&color=000000" alt="" /></button>
               
            </div>
            <ToastContainer
                    position="top-right"
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
    );
};

export default SingleChoosePlayer;