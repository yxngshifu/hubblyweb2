import React from 'react'
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
import deliver from '../Assets/deliver.png'

function Solutions() {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8  lg:mb-8 font-Raleway'>
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px] flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={analytics} alt="/" />
             UX Driven Engineering
             <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
       <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-8 h-10 mr-4  " src={phone} alt="/" />
              Developing Shared Understanding
             <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
      
         <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={backend} alt="/" />

            Backend Development
            <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
      
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-8 mr-4  " src={web} alt="/" />

            Web Design
            <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={technical} alt="/" />

             Technical Support
             <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
      <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={devops} alt="/" />

             DevOps
             <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
      <div className=' sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={ui} alt="/" />

           UI/UX Design
           <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
      <div className=' sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={frontend} alt="/" />

            Front-End Development
            <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
       <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={qa} alt="/" />

            QA & Testing
            <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>
       <div className='sm:px-10 lg:px-20'>
        <button className='shadow-xl bg-[#fdfcfc] text-black rounded-lg hover:scale-105 duration-300 font-medium sm:w-[320px] lg:w-[600px]  flex items-center  px-4 py-2'>
           <img className="w-10 h-10 mr-4  " src={cloud} alt="/" />
               Cloud Solutions
               <p className='text-sm'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            </button>
      </div>   
          </div>
    </div>
  )
}

export default Solutions