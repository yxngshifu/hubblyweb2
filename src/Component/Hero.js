import React from 'react'
import hero from '../Assets/herobg1.png'
import Navbar from './Navbar';



function Hero() {
     const herobackground = {
    backgroundImage: `url(${hero})`,
     backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
  };
  return (
    <div id='home'>
    <div style={herobackground}> 
            <Navbar/>
       < div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4  flex-col'>
      
          <div className=" lg:px-60 md:px-40 sm:px-10 sm:py-60 md:py-80 lg:py-80 text-justify ">
        <h2 className=' text-[#FFFFFF] sm:text-sm  font-Raleway pb-4 md:text-xl lg:text-xl'>Welcome to hubbly.me</h2>
        <p className=' text-[#FFFFFF] font-bold sm:text-l md:text-2xl lg:text-5xl font-MuseoModerno'>Where Innovation Meets Efficiency In Software Development.</p>
        </div>
      
                    </div>
                    </div>
                    </div>
  )
}

export default Hero