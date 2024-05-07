import React from 'react'
import softsol from '../Assets/softsol.png'

function Services() {
const herobackground = {
    backgroundImage: `url(${softsol})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '20vh', // Adjusted minimum height to fill more of the screen
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    textAlign: 'center', // Center text
    maxWidth: '800px', // Set maximum width for the hero section
    margin: '0 auto', // Center horizontally using margin
    padding: '2rem', // Added padding for content spacing
  };
  return (
    <div className='bg-[#cdf1f3] '>
        <h1 className='text-[#000000] font-MuseoModerno font-semibold sm:text-l lg:text-2xl sm:py-10 lg:py-20'>Our Services</h1>
      
       <div className="sm:px-10 lg:px-80 flex flex-col items-start mb-4">
  <h1 className="lg:text-4xl sm:text-xl font-bold font-MuseoModerno hover:text-[#048392]">API Integration Services</h1>
  <p className='sm:text-xs lg:text-sm font-Raleway'>Seamlessly connect your systems and enhance functionality.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>

 <div className="sm:px-10  lg:px-80 flex flex-col items-start mb-4">
  <h1 className="lg:text-4xl sm:text-xl font-bold font-MuseoModerno hover:text-[#048392]">Product Discovery Phase</h1>
  <p className=' sm:text-xs lg:text-sm font-Raleway'>Identify key objectives and map out a roadmap for success.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>

 <div className=" sm:px-10 lg:px-80 flex flex-col items-start mb-4">
  <h1 className="lg:text-4xl sm:text-xl font-bold font-MuseoModerno hover:text-[#048392]">Software Re-engineering</h1>
  <p className='sm:text-xs lg:text-sm font-Raleway'>Upgrade and optimize your existing software for enhanced perfomance.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>

<div className="sm:px-10  lg:px-80 flex flex-col items-start mb-4">
  <h1 className="lg:text-4xl sm:text-l font-bold font-MuseoModerno hover:text-[#048392]">Application Modernization Services</h1>
  <p className='sm:text-xs lg:text-sm font-Raleway'>Stay ahead with cutting-edge technology and user-centric design.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>

<div className=" sm:px-10 lg:px-80 flex flex-col items-start mb-4">
  <h1 className="lg:text-4xl sm:text-xl font-bold font-MuseoModerno hover:text-[#048392]">Software Product Development</h1>
  <p className='sm:text-xs lg:text-sm font-Raleway'>From concept to execution, we bring your ideas to life.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>

<div className=" sm:px-10 lg:px-80 flex flex-col items-start mb-4">
  <h1 className="  lg:text-4xl sm:text-xl font-bold font-MuseoModerno hover:text-[#048392]">CTO as a Service for Start-Ups</h1>
  <p className='sm:text-xs lg:text-sm font-Raleway'>Get expert guidance and technical leadership tailored to your startup's needs.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>
<div className=" sm:px-10 lg:px-80 flex flex-col items-start mb-4 pb-12">
  <h1 className="lg:text-4xl sm:text-xl font-bold font-MuseoModerno hover:text-[#048392]">Offshore Development Services</h1>
  <p className='sm:text-xs lg:text-sm font-Raleway'>Access top-tier talent while optimizing costs.</p>
  <hr className="border-t-4 border-gray-400 my-2 w-full" />
</div>
<div className='py-20'style={herobackground}> 
 < div className=' grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-2 lg:gap-4  flex-col'>
  <div className='text-white font-MuseoModerno font-bold lg:text-xl'>
    <p>We Deliver software solutions that drive change.</p>
  </div>
  <div>
     <button className="bg-[#FFFFFF] text-[#048392] rounded-full sm:text-xs lg:text-md sm:w-[82px] lg:w-[120px] w-full py-2">
        Get Started
      </button>
  </div>
 </div>
</div>

    </div>
  )
}

export default Services