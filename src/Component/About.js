import React from 'react'
import Circle from '../Assets/CIRCLEIMAGE.png'
import stain from '../Assets/stain.png'

function About() {
  const ellipseStyle = {
    backgroundImage: `url(${stain})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top ',
    backgroundSize: '30%'
  }
  return (
    
    <div id='about'>
               < div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4  flex-col'>
                 <div className="sm:px-14 sm:py-20 lg:px-40 lg:py-40  text-justify ">
        <h2 className=' text-[#030303] font-MuseoModerno pb-4 lg:text-xl font-bold'>About Us</h2>
        <h1 className='sm:text-xl md:text-2xl lg:text-4xl mb-5 text-[#048392] font-MuseoModerno'>We're your tech-driven business ally.</h1>
        <p className='lg:text-lg sm:text-md mb-6 font-Raleway'>Hubbly.Me is your go-to partner for cutting-edge software development solutions, dedicated to empowering businesses and individuals through technology. Our team, comprised of skilled professionals across various fields, is committed to excellence and collaboration. We tailor our approach to each project, ensuring personalized solutions that exceed expectations.</p>
 <p className='lg:text-lg sm:text-md font-Raleway'>
What sets us apart is our unwavering focus on client value, built on integrity, transparency, and trust. We forge strong partnerships, prioritizing open communication and shared goals. Whether you're a startup or an established enterprise, Hubbly.Me is here to turn your vision into reality, leveraging technology to drive innovation and growth. Join us on this journey towards a brighter, tech-powered future. Welcome to Hubbly.Me.</p>
        </div>
        <div  style={ellipseStyle}>
          <img className="sm:w-[500px] md:w-[800px] md:px-60 lg:w-[400px] sm:px-10 lg:px-10 lg:py-60  " src={Circle} alt="/" />
           <div className="flex flex-wrap justify-center gap-4 p-4">
  {/* Each card */}
  <div className=" sm:w-1/5 md:w-1/3 lg:w-1/4 xl:w-1/4 shadow-xl flex flex-col p-4 bg-[#048392] rounded-lg hover:scale-105 duration-300">
    <p className="text-center text-[#A8E6E9] sm:text-xs lg:text-lg font-bold">80+ Employees</p>
  </div>

  <div className=" sm:w-1/5 md:w-1/3 lg:w-1/6 xl:w-1/4 shadow-xl flex flex-col p-4 bg-[#A8E6E9] rounded-lg hover:scale-105 duration-300">
    <p className="text-center text-white lg:text-lg font-bold">10+ Locations</p>
  </div>

  <div className=" sm:w-1/5 md:w-1/3 lg:w-1/4 xl:w-1/4 shadow-xl flex flex-col p-4 bg-[#048392] rounded-lg hover:scale-105 duration-300">
    <p className="text-center text-[#A8E6E9] lg:text-lg font-bold">500+ Projects</p>
  </div>

  <div className="w-full sm:w-1/5 md:w-1/3 lg:w-1/4 xl:w-1/4 shadow-xl flex flex-col p-4 bg-[#A8E6E9] rounded-lg hover:scale-105 duration-300">
    <p className="text-center text-white lg:text-lg font-bold">321+ Clients</p>
  </div>
</div>

        </div>
               </div>
    </div>
   
  )
}
 
export default About