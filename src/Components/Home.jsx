import { useLoaderData } from "react-router";
import Slider from "./slider/Slider";
import { useState } from "react";
import Card from "./slider/Card";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'
import Collaps from "./Collaps";
import SwiperSlider from "./Swiper";
export default function Home() {
    const data= useLoaderData();
       const [roomes,setRoomes] = useState(data);
  return (
    <>
   <div className="flex justify-center items-center pb-8 ">
   <div>
      <div>
        <Slider/>
        <div className=" mt-12  items-center">
         <h1 className="font-bold text-3xl text-blue-800 text-center mb-4"> 
          <Typewriter 
          words={['Welcome to our event platform','Explore top-rated room','Book your stay now!']}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          /></h1>
          <Fade duration={2000} delay={500} triggerOnce>
  <p className="font-bold text-blue-900 text-center">I will gently appear as I enter the viewport</p>
</Fade>
        </div>


     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
      {roomes.map((room)=>
      <Card room={room}/>
     )}
     </div>
    <div className="flex justify-center items-center gap-14">
        <div className="w-[40%] ml-8">
      <SwiperSlider/>
       </div>
       <div className="w-[40%] mr-8">
       <Collaps/>
       </div>
   
    </div>
      </div>
   </div>
   </div>
    </>
  );
}