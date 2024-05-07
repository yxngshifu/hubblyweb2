import React from 'react'
import Productbg from '../Assets/productsbg.png'
import letterh from '../Assets/letterh.PNG'

function Products() {
      const projectbackground = {
    backgroundImage: `url(${Productbg})`,
     backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
  };
  return (
    <div  style={projectbackground}>
        <h1 className='lg:text-2xl sm:px-4 sm:py-2 md:py-40 lg:py-20  lg:mb-20 font-semibold'>Products/Solutions</h1>
       <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:gap-8 sm:gap-2">
  <div className="flex flex-col items-center px-4 lg:mb-8 sm:mb-2 md:mb-0">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
       <img className="lg:w-[100px] sm:w-[20px] lg:mx-10 md:mx-6 my-4 flex items-center" src={letterh} alt="/" />
      <div className="sm:text-xs  text-white  font-Raleway font-medium lg:mb-6 sm:mb-2 ">
         <p className="text-white text-center lg:text-sm font-bold ">Hubbly App</p>
        <p className="mt-2 text-center lg:text-sm">Get the household help you need with our intuitive app</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full sm:text-xs lg:text-md sm:w-[82px] lg:w-[120px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center px-4 sm:mb-2 mb-8 md:mb-0">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
       <img className="lg:w-[100px] sm:w-[20px] lg:mx-10 md:mx-6 my-4 flex items-center" src={letterh} alt="/" />
      <div className="sm:text-xs  text-white font-Raleway font-medium  lg:mb-6">
         <p className="text-white text-center lg:text-sm font-bold mb-2">Octasight</p>
        <p className="mt-2 text-center lg:text-sm">Gain insights and analytics to drive informed decision-making.</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full sm:text-xs lg:text-md sm:w-[82px] lg:w-[120px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center px-4 sm:mb-2 mb-8 md:mb-0">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
      <img className="lg:w-[100px] sm:w-[20px] lg:mx-10 md:mx-6 my-4 flex items-center" src={letterh} alt="/" />
      <div className="sm:text-xs  text-white font-Raleway font-medium  lg:mb-6">
        <p className="text-white text-center lg:text-sm font-bold mb-2">Document Management System</p>
        <p className="mt-2 text-center lg:text-sm">Organize, secure, and access your documents with ease.</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full sm:text-xs lg:text-md sm:w-[82px] lg:w-[120px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center px-4 sm:mb-2">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
     <img className="lg:w-[100px] sm:w-[20px] lg:mx-10 md:mx-6 my-4 flex items-center" src={letterh} alt="/" />
      <div className="sm:text-xs  text-white font-Raleway font-medium  lg:mb-6">
       <p className="text-white text-center lg:text-sm font-bold mb-2">TownCrier</p>
        <p className="mt-2 text-center lg:text-sm">Connect with your community and stay informed with our platform.</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full sm:text-xs lg:text-md sm:w-[82px] lg:w-[120px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>
</div>
</div>
  )
}

export default Products