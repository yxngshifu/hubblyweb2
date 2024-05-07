import React from 'react'
import competencybg from '../Assets/competency.png'
import star from '../Assets/star.png'
import analytics from '../Assets/analytics.png'
import phone from '../Assets/phoneasset.png'
import backend from '../Assets/backend.png'
import web from '../Assets/web.png'
import technical from '../Assets/technical.png'
import devops from '../Assets/devops.png'
import ui from '../Assets/ui:ux.png'
import frontend from '../Assets/frontend.png'
import qa from '../Assets/qa.png'
import cloud from '../Assets/cloud.png'

function Competency() {
     const competencybackground = {
    backgroundImage: `url(${competencybg})`,
     backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
  };
 
  return (
    <div style={competencybackground} >
        <h1 className='font-semibold sm:text-l lg:text-2xl sm:py-2 lg:py-20 text-black sm:mb-2 lg:mb-16 font-MuseoModerno'>Core Competencies</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8  lg:mb-8 font-Raleway'>
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px] flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={analytics} alt="/" />

             Business Analytics
            </button>
      </div>
       <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-8 h-10 mr-4  " src={phone} alt="/" />

             Digital Transformation Consulting
            </button>
      </div>
      
         <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={backend} alt="/" />

            Backend Development
            </button>
      </div>
      
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-8 mr-4  " src={web} alt="/" />

            Web Design
            </button>
      </div>
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={technical} alt="/" />

             Technical Support
            </button>
      </div>
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={devops} alt="/" />

             DevOps
            </button>
      </div>
      <div className=' sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={ui} alt="/" />

           UI/UX Design
            </button>
      </div>
      <div className=' sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={frontend} alt="/" />

            Front-End Development
            </button>
      </div>
       <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={qa} alt="/" />

            QA & Testing
            </button>
      </div>
       <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={cloud} alt="/" />
               Cloud Solutions
            </button>
      </div>
      

        </div>
    </div>
  )
}

export default Competency