import {useLoaderData} from "react-router";
import Slider from "./slider/Slider";
import {useState} from "react";
import Card from "./slider/Card";
import React from "react";
import {Fade} from "react-awesome-reveal";
import {Typewriter} from "react-simple-typewriter";
import Collaps from "./Collaps";
import SwiperSlider from "./Swiper";
// export default function Home() {
//     const data= useLoaderData();
//        const [roomes,setRoomes] = useState(data);
//   return (
//     <>
//    <div className="flex justify-center items-center pb-8 ">
//    <div>
//       <div>
//       <div  className="mx-auto max-w-7xl">
//           <Slider/>
//       </div>
//         <div className=" mt-12  items-center">
//          <h1 className="font-bold text-3xl text-blue-800 text-center mb-4">
//           <Typewriter
//           words={['Welcome to our event platform','Explore top-rated room','Book your stay now!']}
//           loop
//           cursor
//           cursorStyle="_"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1000}
//           /></h1>
//           <Fade duration={2000} delay={500} triggerOnce>
//   <p className="font-bold text-blue-900 text-center">I will gently appear as I enter the viewport</p>
// </Fade>
//         </div>

//      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
//       {roomes.map((room)=>
//       <Card room={room}/>
//      )}
//      </div>
//     <div className="flex justify-center items-center gap-14">
//         <div className="w-[40%] ml-8">
//       <SwiperSlider/>
//        </div>
//        <div className="w-[40%] mr-8">
//        <Collaps/>
//        </div>

//     </div>
//       </div>
//    </div>
//    </div>
//     </>
//   );
// }

export default function Home() {
  const data = useLoaderData();
  const [roomes, setRoomes] = useState(data);
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 bg-[#f9fafb] min-h-screen">
        <div className="flex justify-center items-center pb-8">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="mx-auto max-w-7xl">
              <Slider />
            </div>
            <div className="mt-12 items-center">
              <h1 className="font-bold text-3xl text-blue-800 text-center mb-4">
                <Typewriter
                  words={[
                    "Welcome to our event platform",
                    "Explore top-rated room",
                    "Book your stay now!",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <Fade duration={2000} delay={500} triggerOnce>
                <p className="font-bold text-blue-900 text-center">
                  I will gently appear as I enter the viewport
                </p>
              </Fade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
              {roomes.map((room) => (
                <div key={room.id} className="  p-6">
                  <Card room={room} />
                </div>
              ))}
            </div>

          <div className="bg-white rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 mt-4">
              <div className="w-full md:w-2/5 ml-0 md:ml-8  p-6">
                <SwiperSlider />
              </div>
              <div className="w-full md:w-2/5 mr-0 md:mr-8  p-6">
                <Collaps />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
