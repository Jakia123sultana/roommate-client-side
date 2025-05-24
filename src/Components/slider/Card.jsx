import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router";
export default function Card({room}) {
  const {_id} = room;
    
  return (
    <div className="card w-86 bg-[#F4F7FF] shadow-sm">
  <div className="card-body">
   
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">Items</h2>
      <span className="text-xl text-blue font-bold">${room.rent}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        
        <span className="text-2xl text-bold "> {room.title}</span>
        <hr className="pt-4 "></hr>
      </li>
      <li className="flex gap-4">
        <FaLocationDot size={24} className="mt-1 "/>
        <span className="text-xl pb-1">Location : {room.location}</span>
      </li>
       <li className="flex gap-4">
       <span className="text-xl pb-1"> Room Type : {room.roomType}</span>
      
      </li>
    
    </ul>
    <div className="mt-4 flex justify-center">
      <Link to ={`/card-details/${_id}`} className="btn btn-primary  px-28 text-white rounded-xl ">See More</Link>
    </div>
  </div>
</div>
  );
}