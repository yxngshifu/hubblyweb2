import React, { useState, useEffect  } from 'react'
import logo1 from '../Assets/logo1.svg';
import hubblyname from '../Assets/hubblyname.PNG'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Navbar() {
   const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

 
  return (
    <div>
        <div className={`font-MuseoModerno bg-transparent fixed top-0 left-0 right-10 z-10 ${nav ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center mx-auto px-4 text-white">
         <img className="w-[100px] lg:mx-10 md:mx-6 my-4 flex items-center" src={logo1} alt="/" />
        <ul className="space-x-4 text-white font-bold p-4 flex items-center ml-[-10px]">
         
           
          
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            
              About Us
            
          </li>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            
              Our Services
          
          </li>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            
             Core competencies
           
          </li>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            
              Contact Us
            
          </li>
        </ul>

        <div onClick={handleMobileNav} className="block md:hidden" style={{ color: 'black', cursor: 'pointer' }}>
          {mobileNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {mobileNav && (
          <div className="fixed left-0 top-16 w-full h-full bg-[#003049] text-white ease-in-out duration-500">
            
              <img className="w-[100px] mx-4 my-4 flex items-center" src={hubblyname} alt="/" />
           

            <ul className='flex-col w-full space-y-12 text-white font-bold p-4 items-center'>
              <li>
                
                  About Us
               
              </li>
              <li>
                
                 Our Services
              
              </li>
              <li>
                
                 Core competencies
               
              </li>
              <li>
               
                Contact Us
              
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Navbar