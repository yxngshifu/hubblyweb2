import React from 'react';
import contactbg from '../Assets/contactbg.png';
import logo1 from '../Assets/logo1.svg';
import msgd from '../Assets/msgd.svg';
import phoned from '../Assets/phoned.png';
import fbicon from '../Assets/fbicon.png'
import xicon from '../Assets/xicon.png'
import linkd from '../Assets/linkdicon.png'
import igicon from '../Assets/igicon.png'
import { Link } from 'react-scroll';


function Contact() {
  const contactBackgroundStyle = {
    backgroundImage: `url(${contactbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    color: 'white',
  };
   const handlePrivacy = () => {
    window.location.href = 'https://hubbly.me/privacy';
  };
  const handleTerms =() =>{
    window.location.href ='https://hubbly.me/terms'
  };

  return (
    <div id='contact' style={contactBackgroundStyle}>
      <div className="flex flex-col items-center text-black ">
        <img className="sm:w-20 lg:w-40 md:w-36 my-4" src={logo1} alt="Logo" />
        <h1 className="font-bold sm:text-sm lg:mb-8 text-black lg:text-2xl text-center">
          Ready to Get Started?
        </h1>

         <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:gap-40 sm:mb-2 lg:mb-20 font-MuseoModerno">
      <div className="flex flex-col items-center justify-center text-center">
        <img className="sm:w-10 lg:w-16 md:w-16 my-4" src={phoned} alt="Phone" />
        <h2 className="font-bold sm:text-md text-black lg:text-xl lg:mb-2">
          0115 990 2076
        </h2>
        <p className="text-sm">Our Phone</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img className="sm:w-10 lg:w-16 md:w-16 my-4" src={msgd} alt="Email" />
        <h2 className="font-bold sm:text-md text-black lg:text-xl lg:mb-2">
          info@hubbly.me
        </h2>
        <p className="text-sm">Our Email</p>
      </div>
    </div>
     <div className="max-w-[1240px] font-bold text-[#048392] mx-auto grid md:grid-cols-6 lg:gap-10 sm:mb-4 lg:mb-12 font-Raleway">
        <div className='hover:text-[#000000] cursor-pointer'>
             <Link to="about" smooth={true} duration={500}>
            <p>About Us</p>
            </Link>
        </div>
       <div className='hover:text-[#000000] cursor-pointer'>
         <Link to="services" smooth={true} duration={500}>
            <p>Our Services </p>
            </Link>
        </div>
        <div className='hover:text-[#000000] cursor-pointer'>
           <Link to="competency" smooth={true} duration={500}>
            <p>Core competencies</p>
            </Link>
        </div>
        <div className='hover:text-[#000000] cursor-pointer'>
           <Link to="competency" smooth={true} duration={500}>
            <p>Contact Us</p>
            </Link>
        </div>
        <div className='hover:text-[#000000] cursor-pointer'>
            <p onClick={handlePrivacy}>Privacy Policy</p>
        </div>
        <div className='hover:text-[#000000] cursor-pointer'>
            <p onClick={handleTerms}>Terms & Conditions</p>
        </div>
     </div>
     <div>
        <p className='lg:text-sm sm:text-xs lg:mb-14'>Copyright 2024 Engitech by OceanThemes. All Rights Reserved</p>
     </div>
     <div className="max-w-[1240px]  mx-auto grid md:grid-cols-4 lg:gap-4 sm:mb-2 lg:mb-8 font-Raleway">
        <div className=' cursor-pointer  hover:scale-105 duration-300'>
        <img className="sm:w-10 lg:w-16 md:w-16  sm:my-2 my-4" src={fbicon} alt="Phone" />
        </div>
         <div className=' cursor-pointer hover:scale-105 duration-300'>
            <a href="https://www.instagram.com/hubbly.me?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img className="sm:w-10 lg:w-16 md:w-16 my-4" src={igicon} alt="Phone" />
        </a>
        </div>
        <div className=' cursor-pointer hover:scale-105 duration-300'>
              <a href="https://twitter.com/Hubbly_me" target="_blank" rel="noopener noreferrer">
        <img className="sm:w-10 lg:w-16 md:w-16 my-4" src={xicon} alt="Phone" />
        </a>
        </div>
        <div className=' cursor-pointer hover:scale-105 duration-300'>
            <a href="https://linkedin.com/company/Hubbly-me/" target="_blank" rel="noopener noreferrer">
        <img className="sm:w-10 lg:w-16 md:w-16 my-4" src={linkd} alt="Phone" />
        </a>
        </div>
     </div>
      </div>
    </div>
  );
}

export default Contact;
