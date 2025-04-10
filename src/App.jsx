import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

import bannerMain from './assets/banner-main.png'
import Players from './Components/Players/Players'
import ChoosePlayer from './Components/ChoosePlayer/ChoosePlayer'

import { ToastContainer, toast } from 'react-toastify';
import Footer from './Components/Footer/Footer'
import Newsletter from './Components/Footer/Newsletter'
import 'react-toastify/dist/ReactToastify.css';

// import { Toaster, toast } from 'sonner';







function App() {

  const [credit, setCredit] = useState(0)
  const [show, setShow] = useState(true)

  const [selectedPlayer, setSelectedPlayer] = useState([])

  // const successToast=()=>toast('sucessfully credit added', {autoClose:3000})
  const successToast = () => alert('successdull')

  function handleCredit() {
    const newCredit = credit + 4500000;
    setCredit(newCredit)



  }

  const handleHiddenPlayer = () => {
    setShow(false)
    document.getElementById('selected-btn').classList.add('bg-[#E7FE29]');
    document.getElementById('available-btn').classList.remove('bg-[#E7FE29]');
    document.getElementById('players-count').innerText = ''


  }
  const handleShowPlayerBtn = () => {
    setShow(true)
    document.getElementById('selected-btn').classList.remove('bg-[#E7FE29]');
    document.getElementById('available-btn').classList.add('bg-[#E7FE29]');
    document.getElementById('players-count').innerText = 'Available Players'

  }

  const handleFreeCredit = () => {
    handleCredit()
    successToast()

  }


  const clickToAddPlayer = (p) => {

    const isExist = selectedPlayer.find(item => item.playerId == p.playerId)

    console.log(p.playerId);




    if (p.biddingPrice >= credit) {
      toast.error('your credit is low')


    }
    else {

      if (isExist) {
        toast.error('player already exists')
      }
      else if (selectedPlayer.length >= 6) {
        toast.error('players exceids 6')
      }
      else {
        // toast.success('added successfull')
        alert('player added successfully')
        const newPlayer2 = [...selectedPlayer, p]
        setSelectedPlayer(newPlayer2)
        setCredit(credit - p.biddingPrice)


        console.log('selected players', selectedPlayer);

      }
    }



    //   if(p.biddingPrice<=credit&& !isExist && selectedPlayer.length<6){
    //     const newPlayer2=[...selectedPlayer, p]
    //     setSelectedPlayer(newPlayer2) 
    //     setCredit(credit-p.biddingPrice)
    // }

    //   else{
    //     console.log('hello');


    //   }








  }




  const handleDelete = (id) => {
    const newPlayer = selectedPlayer.filter(item => item.playerId !== id)
    setSelectedPlayer(newPlayer)

  }


  console.log(selectedPlayer);

  const { name } = selectedPlayer;
  console.log(name);





  return (
    <>
      <div className='px-4 mx-auto max-w-7xl'>

        <img src="https://ibb.co.com/LdLX2bdV" alt="" />

        <nav className='mt-10 hidden'>


          <img className='' src={logo} alt="" />

          <div className='sm:flex sm:flex-col gap-7 text-xl items-center'>
            <a href="">Home</a>
            <a href="">Fixture</a>
            <a href="">Teams</a>
            <a href="">Schedule</a>
            <button className='border rounded-[10px] px-2 h-[52px] flex gap-3 justify-center items-center text-center'><p className='bold '><span>{credit}</span> Coin</p> <img className='w-7 h-7' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></button>
          </div>

        </nav>


        {/* daisy navbar */}
        <div class="navbar flex justify-between bg-base-100 shadow-sm">
          <div class="inline-flex items-center ">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li> <a href="">Home</a> </li>

                <li><a href="">Fixture</a></li>
                <li><a href="">Teams</a></li>
                <li> <a href="">Schedule</a></li>
              </ul>
            </div>


            <img className='' src={logo} alt="" />
          </div>

          <div class="inline-flex items-center">

            <div class=" hidden md:flex">
              <ul class="menu menu-horizontal px-1">
                <li> <a href="">Home</a> </li>

                <li><a href="">Fixture</a></li>
                <li><a href="">Teams</a></li>
                <li> <a href="">Schedule</a></li>
              </ul>
            </div>
            <button className='border rounded-[10px] px-2 h-[52px] flex gap-3 justify-center items-center text-center'><p className='bold '><span>{credit}</span> Coin</p> <img className='w-7 h-7' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></button>
          </div>
        </div>




        {/* hero section start */}
        <div className='text-center  space-y-5 mt-6 bg-black bgImage rounded-3xl h-[545px] content-center'>
          <img className='flex mx-auto' src={bannerMain} alt="" />
          <h1 className='text-5xl text-white sm:px-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-white'>Beyond Boundaries Beyond Limits</p>


          <div className='content-center mx-auto border-[#E7FE29] border  w-[225px] h-16 rounded-3xl'>

            <button onClick={handleFreeCredit} className=' w-[200px] h-12 rounded-2xl bg-[#E7FE29] font-bold btn '>Claim Free Credit</button>



          </div>
        </div>
        {/* hero section end */}

        {/* main section start */}

        <div className='flex justify-between mt-7 items-center'>
          <div id='players-count' className='font-bold'>Available Players</div>
          <div className='w-60 h-14 '>
            <button onClick={handleShowPlayerBtn} id='available-btn' className='w-1/2 h-full bg-[#E7FE29] rounded-l-xl font-bold border border-gray-200'>Available</button>
            <button id='selected-btn' onClick={handleHiddenPlayer} className='w-1/2 h-full  rounded-r-2xl border border-gray-200'>Selected (<span>{selectedPlayer.length}</span>) </button>
          </div>
        </div>



        {/* main section end */}
        {/* players all */}
        {
          show ? <Players clickToAddPlayer={clickToAddPlayer}></Players> : <ChoosePlayer handleDelete={handleDelete} selectedPlayer={selectedPlayer}></ChoosePlayer>
        }





      </div >

      <Newsletter></Newsletter>
      <Footer></Footer>

    </>
  )
}

export default App
