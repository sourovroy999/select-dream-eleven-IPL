import React from 'react';
import logoFooter from '/milestone-seven/my-dream-eleven/src/assets/logo-footer.png'
import bgShadow from '/milestone-seven/my-dream-eleven/src/assets/bg-shadow.png'


const Footer = () => {
    return (
        <>

            <div className='bg-black text-white  md:h-[790px] mt-50 pt-36  mx-auto   md:px-6 '>


            {/* newsletter area */}
                <div className='border rounded-2xl mb-3 max-w-4xl text-black border-gray-200 outline outline-gray-300 outline-offset-[10px] md:outline-offset-[16px] px-2 md:px-0  bg-white bgImage py-14 sm:px-8 w-11/12 md:w-5/6 lg:w-4/6 mx-auto content-center text-center -mt-72 space-y-4 z-20 '>

                    <h1 className='font-bold text-4xl'>Subscribe to our Newsletter</h1>
                    <p>Get the latest updates and news right in your inbox</p>

                    <div className='flex flex-col px-3 md:px-0 md:flex-row gap-3 items-center justify-center'>
                        <input type="text" placeholder="Enter Your Email" class="input input-lg" />
                        <button class="btn bg-linear-to-r from-purple-500 from-0% to-yellow-200 to-100% ">Subscribe</button>
                    </div>


                </div>


{/* actual footer area */}
                <div className=''>
                    <img className='mx-auto mt-4' src={logoFooter} alt="" />
                    <div className='flex flex-col px-3 gap-6 md:pl-0 md:flex-row justify-between max-w-6xl mx-auto my-16  z-10'>
                        <div className='w-full md:w-1/3'>
                            <div className=''>
                                <h1 className='font-bold'>About Us</h1>
                                <p className='mt-3 text-gray-300'>We are a passionate team dedicated to providing the best services to our customers.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <div className='flex flex-col '>
                                <div>
                                    <h1 className='font-bold mb-3'>Quick Links</h1>

                                    <ul className='space-y-2 list-[square] ml-8'>
                                        <li>Home</li>
                                        <li >Services</li>
                                        <li>About</li>
                                        <li>Content</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <h1 className='font-bold '>Subscribe</h1>
                            <p className='text-gray-300 my-3'>Subscribe to our newsletter for the latest updates.</p>
                            <fieldset class="w-64">
                                <label>Enter your email address</label>
                                <div class="join">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        class="input input-bordered join-item" />
                                    <button class="btn text-black btn-primary bg-linear-to-r from-yellow-200 from-0% to-purple-500 to-100% join-item">Subscribe</button>
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