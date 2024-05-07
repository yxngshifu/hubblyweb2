import React from 'react';
import contactbg from '../Assets/contactbg.png';
import logo1 from '../Assets/logo1.svg';
import msgd from '../Assets/msgd.svg';
import phoned from '../Assets/phoned.png';
import fbicon from '../Assets/fbicon.png'
import xicon from '../Assets/xicon.png'
import linkd from '../Assets/linkdicon.png'
import igicon from '../Assets/igicon.png'

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

  return (
    <div style={contactBackgroundStyle}>
      <div className="flex flex-col items-center text-black">
        <img className="w-40 lg:w-40 md:w-36 my-4" src={logo1} alt="Logo" />
        <h1 className="font-bold text-xl mb-8 text-black lg:text-2xl text-center">
          Ready to Get Started?
        </h1>

         <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:gap-40 lg:mb-20 font-MuseoModerno">
      <div className="flex flex-col items-center justify-center text-center">
        <img className="w-20 lg:w-16 md:w-16 my-4" src={phoned} alt="Phone" />
        <h2 className="font-bold text-lg text-black lg:text-xl mb-2">
          0115 990 2076
        </h2>
        <p className="text-sm">Our Phone</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img className="w-20 lg:w-16 md:w-16 my-4" src={msgd} alt="Email" />
        <h2 className="font-bold text-lg text-black lg:text-xl mb-2">
          info@hubbly.me
        </h2>
        <p className="text-sm">Our Email</p>
      </div>
    </div>
     <div className="max-w-[1240px] font-bold text-[#048392] mx-auto grid md:grid-cols-6 lg:gap-10 lg:mb-12 font-Raleway">
        <div>
            <p>About Us</p>
        </div>
        <div>
            <p>Our Services </p>
        </div>
        <div>
            <p>Core competencies</p>
        </div>
        <div>
            <p>Contact Us</p>
        </div>
        <div>
            <p>Privacy Policy</p>
        </div>
        <div>
            <p>Terms & Conditions</p>
        </div>
     </div>
     <div>
        <p className='lg:text-sm lg:mb-14'>Copyright 2024 Engitech by OceanThemes. All Rights Reserved</p>
     </div>
     <div className="max-w-[1240px]  mx-auto grid md:grid-cols-4 lg:gap-4 lg:mb-8 font-Raleway">
        <div>
        <img className="w-20 lg:w-16 md:w-16 my-4" src={fbicon} alt="Phone" />
        </div>
        <div>
        <img className="w-20 lg:w-16 md:w-16 my-4" src={igicon} alt="Phone" />
        </div>
        <div>
        <img className="w-20 lg:w-16 md:w-16 my-4" src={xicon} alt="Phone" />
        </div>
        <div>
        <img className="w-20 lg:w-16 md:w-16 my-4" src={linkd} alt="Phone" />
        </div>
     </div>
      </div>
    </div>
  );
}

export default Contact;
