import React from 'react'
import Productbg from '../Assets/productsbg.png'

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
        <h1 className='lg:text-2xl sm:px-4 sm:py-4 md:py-40 lg:py-20 sm:mb-4 lg:mb-20 font-semibold'>Products/Solutions</h1>
       <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:mb-4">
  <div className="flex flex-col items-center px-4 mb-8 md:mb-0">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
      <p className="text-[#A8E6E9] lg:text-lg font-bold mb-2">Hubbly app</p>
      <div className="text-md lg:text-lg text-[#494D4D] font-Raleway font-medium ">
        <h1 className="font-bold">Hubbly App</h1>
        <p className="mt-2">Get the household help you need with our intuitive app</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full text-md lg:text-lg sm:w-[160px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center px-4 mb-8 md:mb-0">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
      <p className="text-white lg:text-lg font-bold mb-2">Octasight</p>
      <div className="text-md lg:text-lg text-[#494D4D] font-Raleway font-medium ">
        <h1 className="font-bold">Octasight</h1>
        <p className="mt-2">Gain insights and analytics to drive informed decision-making.</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full text-md lg:text-lg sm:w-[160px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center px-4 mb-8 md:mb-0">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
      <p className="text-[#A8E6E9] lg:text-lg font-bold mb-2">Documangsys</p>
      <div className="text-md lg:text-lg text-[#494D4D] font-Raleway font-medium ">
        <h1 className="font-bold">Document Management System</h1>
        <p className="mt-2">Organize, secure, and access your documents with ease.</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full text-md lg:text-lg sm:w-[140px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center px-4">
    <div className="flex-shrink-0 flex flex-col items-center px-4 text-center lg:text-left">
      <p className="text-white lg:text-lg font-bold mb-2">towncrier</p>
      <div className="text-md lg:text-lg text-[#494D4D] font-Raleway font-medium ">
        <h1 className="font-bold">TownCrier</h1>
        <p className="mt-2">Connect with your community and stay informed with our platform.</p>
      </div>
      <button className="bg-[#048392] text-[#FFFFFF] rounded-full text-md lg:text-lg sm:w-[140px] w-full py-2">
        Learn more
      </button>
    </div>
  </div>
</div>
</div>
  )
}

export default Products