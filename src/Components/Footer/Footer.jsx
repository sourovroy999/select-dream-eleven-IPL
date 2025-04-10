import React from 'react';
import logoFooter from '/milestone-seven/my-dream-eleven/src/assets/logo-footer.png'
import bgShadow from '/milestone-seven/my-dream-eleven/src/assets/bg-shadow.png'


const Footer = () => {
    return (
        <>

            <div className='bg-black text-white h-[790px] mt-50 pt-36  max-w-screen mx-auto relative'>

            <div className='border rounded-2xl text-black border-gray-200 outline outline-gray-300 outline-offset-[20px] w-5xl bg-white bgImage h-60 mx-auto content-center text-center -mt-64 space-y-4 z-20'>

                <h1 className='font-bold text-4xl'>Subscribe to our Newsletter</h1>
                <p>Get the latest updates and news right in your inbox</p>

                <div className='flex gap-3 items-center justify-center'>
                <input type="text" placeholder="Enter Your Email" class="input input-lg" />
                <button class="btn btn-active btn-success">Success</button>
                </div>


</div>


               <div className='mt-32'>
               <img className='mx-auto' src={logoFooter} alt="" />
                <div className='flex justify-between max-w-6xl mx-auto my-10 relative z-10'>
                    <div className='w-1/3'>
                        <div className='w-2/3'>
                            <h1 className='font-bold'>About Us</h1>
                            <p className='mt-3 text-gray-300'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex flex-col ml-10'>
                            <div>
                                <h1 className='font-bold mb-3'>Quick Links</h1>

                                <ul className='space-y-2 list-disc ml-8'>
                                    <li>Home</li>
                                    <li >Services</li>
                                    <li>About</li>
                                    <li>Content</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold '>Subscribe</h1>
                        <p className='text-gray-300 my-3'>Subscribe to our newsletter for the latest updates.</p>
                        <fieldset class="w-80">
                            <label>Enter your email address</label>
                            <div class="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    class="input input-bordered join-item" />
                                <button class="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>


                </div>

                <div className='text-gray-300 mt-10 flex justify-center'>
                        @2025 All Rights Reserved
                    </div>
               </div>
            </div>
        </>

    );
};

export default Footer;