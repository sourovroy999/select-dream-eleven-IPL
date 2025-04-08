import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import logoFooter from './assets/logo-footer.png'
import bgShadow from './assets/bg-shadow.png'
import bannerMain from './assets/banner-main.png'
import Players from './Components/Players/Players'



function App() {


  return (
    <>

      <div className='max-w-6xl mx-auto'>

        <img src="https://ibb.co.com/LdLX2bdV" alt="" />

        <nav className='flex justify-between mt-10'>


          <img className='' src={logo} alt="" />

          <div className='flex gap-7 text-xl items-center'>
            <a href="">Home</a>
            <a href="">Fixture</a>
            <a href="">Teams</a>
            <a href="">Schedule</a>
            <button className='border rounded-[10px] w-[125px] h-[52px] flex gap-3 justify-center items-center text-center'><p className='bold '>0 Coin</p> <img className='w-7 h-7' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></button>
          </div>

        </nav>

        {/* hero section start */}
        <div className='text-center space-y-5 mt-6 bg-black bgImage rounded-3xl h-[545px] content-center'>
          <img className='flex mx-auto' src={bannerMain} alt="" />
          <h1 className='text-5xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-white'>Beyond Boundaries Beyond Limits</p>


          <div className='content-center mx-auto border-[#E7FE29] border  w-[225px] h-16 rounded-3xl'>

            <button className=' w-[200px] h-12 rounded-2xl bg-[#E7FE29] font-bold btn '>Claim Free Credit</button>
          </div>
        </div>
        {/* hero section end */}

        {/* main section start */}

            <div className='flex justify-between mt-7 items-center'>
              <div className='font-bold'>Available Players</div>
              <div className='w-72 h-14'>
                <button className='w-1/2 h-full bg-[#E7FE29] rounded-l-xl font-bold border border-gray-200'>Available</button>
                <button className='w-1/2 h-full  rounded-r-2xl border border-gray-200'>Selected (0) </button>
              </div>
            </div>

        

        {/* main section end */}
        {/* players all */}

        <Players></Players>

        


      </div >



    </>
  )
}

export default App
