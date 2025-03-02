import React from 'react'

import  resume  from "../assets/resume.jpg";

export default function About() {

  const config={

    link:"https://pdfobject.com/pdf/sample.pdf"
  }
  return (
   <section id='res' className='flex flex-col md:flex-row bg-primary' >

<div className='md:w-1/2 flex py-9 justify-center'>
    <img src={resume} className='w-[300px]' />
</div>

<div className='md:w-1/2 flex justify-center py-4'>
<div className='flex flex-col justify-center text-white'>

<h1 className='text-4xl text-white border-b-4 border-primary mb-4 w-[140px] font-bold'>Resume</h1>
<p className='text-white'>You can Check my resume  

    <a href={config.link} className='btn ml-[10px]'>Download</a>
</p>
</div>
     
</div>


    
   </section>
  )
}
