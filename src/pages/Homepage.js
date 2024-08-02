import React from 'react'
import logo from '../picture/logo.png'
import img1 from '../picture/img1.jpeg'
import img2 from '../picture/img2.png'
import img3 from '../picture/img3.jpg'
import img4 from '../picture/img4.jpg'
import img5 from '../picture/im5.jpg'
import down from './down.svg'
import { Link } from 'react-router-dom'

const Homepage = () => {
   return (
    <> 
    <script async defer src="https://apis.google.com/js/platform.js" />
      <div className='nav text-black mb-[10vh]'>
        <div className='nav1 flex flex-row mt-[6vh] ml-[3vw]'>
        <div className='logo'>
         <img src={logo} alt="" className='h-[5vh]' ></img>
        </div>
        <div className='search ml-[10vw] flex flex-col'>
        <div className='flex flex-row'>
        <input type='text' className='w-[35vw] h-[5vh] px-4 rounded-full bg-pink-100'></input>
        <i className="fa-solid fa-magnifying-glass absolute right-[31vw] top-[7vh] text-xl"></i>
        </div>
        <div className='flex flex-row gap-10 mt-[5vh] pl-3 text-xl tracking-wider'>
          <div className='flex flex-row gap-3'>
          <h1>MEN</h1>
          <i className="fa-solid fa-caret-down text-xl"></i>
          </div>
           <div className='flex flex-row gap-3'>
          <h1>WOMEN</h1>
          <i className="fa-solid fa-caret-down text-xl"></i>
          </div>
           <div className='flex flex-row gap-3'>
          <h1>KIDS</h1>
          <i className="fa-solid fa-caret-down text-xl"></i>
          </div>
           <div className='flex flex-row gap-3'>
          <h1>BRANDS</h1>
          <i className="fa-solid fa-caret-down text-xl"></i>
          </div>
        </div>
        </div>
        <div className='sign in flex flex-row ml-[11vw] gap-6'>
        <i className="fa-regular fa-heart text-3xl"></i>
        <i className="fa-solid fa-bag-shopping text-3xl"></i>
        <h1 className='text-black text-2xl'>SIGN IN</h1>
        </div>
        </div>
      </div>
      <div className='main h-[70vh] w-full bg-black mb-[10vh] flex flex-row'>
      <div className='h-[70vh] w-[50vw] '>
        <img src={img2} alt="" className='h-[70vh] w-[50vw] border-y-2 border-pink-200'></img>
      </div>
      <div className='h-[70vh] w-[50vw] '>
      <img src={img1} alt="" className='h-[70vh] w-[50vw]'></img>
      </div>
      </div>
      <div className='flex flex-row mb-[10vh] justify-evenly text-white font-semibold text-2xl text-center '>
     <div className={`h-[50vh] w-[25vw] bg-blue-400 bg-[url('${img3}')] bg-cover rounded-[6vmin] pt-[30vh]`}>
    <h1>BOOK A HOME TRIAL</h1>
     </div>
      <div className={`h-[50vh] w-[25vw] bg-blue-400 bg-[url('${img4}')] bg-cover rounded-[6vmin] pt-[30vh]`}>
        <h1>GET FASHION </h1>
        <h1>RECOMMENDATION</h1>
      </div>
       <div className={`h-[50vh] w-[25vw] bg-blue-400 bg-[url('${img5}')] bg-cover rounded-[6vmin] pt-[30vh]`}>
        <h1>GET FASHION </h1>
        <h1>RECOMMENDATION</h1>
      </div>
      </div>
      <div>
      <div className='h-[100vh] w-[100vw] bg-red-50'>
      <h1 className='pt-[5vh] text-[40px] font-normal text-center tracking-wider'>TRENDING PICKS</h1>
      <div className='flex flex-row gap-[30vw]'>
        <div className='relative mt-[10vh] ml-[10vw]'>
        <div className='h-[40vh] w-[22vw] bg-red-500  top-0 absolute z-10 rounded-3xl'>
          <img className='h-[40vh] w-[22vw] rounded-3xl' src={img4} alt=""></img>
        </div>
         <div className='h-[60vh] w-[20vw] bg-white  top-0 left-[1vw] absolute rounded-3xl'></div>
         </div>
          <div className='relative mt-[10vh]'>
        <div className='h-[40vh] w-[22vw] bg-red-500 top-0 absolute z-10 rounded-3xl'>
          <img className='h-[40vh] w-[22vw] rounded-3xl' src={img4} alt=""></img>
        </div>
         <div className='h-[60vh] w-[20vw] bg-white top-0 left-[1vw] absolute rounded-3xl'></div>
         </div>
          <div className='relative mt-[10vh]'>
        <div className='h-[40vh] w-[22vw] bg-red-500 top-0 absolute z-10 rounded-3xl'>
          <img className='h-[40vh] w-[22vw] rounded-3xl' src={img4} alt=""></img>
        </div>
         <div className='h-[60vh] w-[20vw] bg-white  top-0 left-[1vw] absolute rounded-3xl'></div>
         </div>
        
      </div>
      </div>
      
      <div className='explore h-[68vh] w-full  flex flex-row border-b-2 border-black relative mb-[10vh]'>
        <div className='w-[15vw] h-[14vh] absolute top-[-7vh] right-[40vw] z-20 bg-white border-2 border-black rounded-3xl'>
          <h1 className='text-center text-3xl py-[4vh]'>EXPLORE</h1>
        </div>
        <div className='heading flex flex-row w-[62vw] pl-[10vw] gap-[5vw] pt-[22vh] text-center'>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-[18vh]'>50+</h1>
          <h1 className='text-3xl font-bold'>BRANDS</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-[18vh]'>100+</h1>
          <h1 className='text-3xl font-bold'>CUSTOMERS</h1>
        </div>
        </div>
<div className=''><img src={img3} className='h-[52vh] w-[36vw] mt-[10vh]' alt=''></img></div>
      </div>
      </div>
    </>
  );
}

export default Homepage
