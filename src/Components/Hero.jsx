import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import img1 from '../assets/andrew-dawes-n4AtuQOVLD0-unsplash.jpg'
import img2 from '../assets/ben-iwara-hvkxtzWTkk8-unsplash.jpg'
import{RxDotFilled} from 'react-icons/rx'

const Hero = () => {
    const heroimg =[{
        src:img1,
        title:"hero1",
    },
    {
        src:img2,
        title:"hero2"
    }]
  
const [currentIndex, setCurrentIndex] = useState(0)
const prevSlide = () => {
const isFirstSlide = currentIndex ===0;
const newIndex = isFirstSlide ? heroimg.length -1:currentIndex-1;
setCurrentIndex(newIndex);
}
const nextSlide = () => {
    const isLastSlide = currentIndex === heroimg.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
}

return (
    <div>
        <div className='w-full h-full  '>
            <div className=' max-w-[1200px] h-[780px] relative m-auto w-full py-4 px-4 group'>
                {/* background image div */}
            <div style={{ backgroundImage:`url(${heroimg[currentIndex].src})` }} 
            className='w-full h-full bg-center bg-cover rounded-2xl duration-500'></div>
              {/* overlay text */}
    <div className='absolute top-[40%] left-20 hidden flex-col text-white group-hover:flex'>
        <div>
            <h1 className='text-4xl'>About short film or art <article></article> </h1>
        </div>
        <div className=' md:w-1/2 max-h-2/3 pr-4'>
        <h1> breif synospsis of the art that was input by the creator to intence viewers Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, est! Dignissimos numquam tenetur dicta blanditiis voluptatum. Recusandae eum fugit consequuntur molestias asperiores quidem debitis cumque ducimus, sint eaque, ipsa corporis.</h1>
        </div>
      <button className='p-2 bg-black w-[100px] rounded-md '> see more </button>
    </div>
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-lg p-2
 bg-black/20 text-white cursor-pointer'>
  
    {/* prev and next button */}
    <BsChevronCompactLeft onClick={prevSlide} size={35} />
</div>
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-lg p-2
 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={35} />
</div>
{/* bottom to go direct */}
<div className='flex top-4 justify-center'>
{ heroimg.map(( slide,slideIndex) => (
<div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className='cursor-pointer'>
<RxDotFilled size={20}/>
</div>
))}
</div>
               
            </div>
        </div>
    </div>
  )
}

export default Hero