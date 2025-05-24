import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
export default function CardDetails() {
 
   const data = useLoaderData();

  const {user} = useContext(AuthContext);
 console.log(user.email)
  const { id } = useParams();
  const [news, setNews] = useState({});
     console.log(data, id, news.likes);
      const [likeCount,setLikeCount] = useState( 0 );
      const [showContact,setShowContact] = useState(false);
      console.log(likeCount)
       useEffect(() => {
    const cardDetails = data.find((singleCard) => singleCard._id == id);
    setNews(cardDetails);
    if(cardDetails?.likes!==undefined){
      setLikeCount(cardDetails.likes)
    }
   
  }, [data, id]);
   const handleLike = async()=>{
    if(user?.email === news.email )
      return;
    await fetch(`https://roommate-server-side.vercel.app/like/${news._id}`,{
      method:"PATCH",
      })
  
    setLikeCount(pre=>pre+1)
    setShowContact(true)

   }
 
    
  return (
    <>
    <h1 className="font-bold text-center text-2xl text-blue-950 mt-12">{likeCount} People Interested </h1>
         <div className=" bg-[#F4F7FF] shadow-sm mt-12 mb-12 p-6">
  <div className="">
   
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        
        <span className="text-3xl text-bold "> {news.title}</span>
      
      </li>
       <hr className="pt-2 w-1/4"></hr>
      <li>
        
        <span className="text-xl text-bold "> {news.description}</span>
      
      </li>
       <li className="flex gap-4">
        {/* <FaLocationDot size={24} className="mt-1 "/> */}
           <FaLocationDot size={24} className="mt-1 "/>
        <span className="text-xl pb-1">Location : {news.location}</span>
      </li>
        <li>
        
        <span className="text-xl text-bold "> Rent : {news.rent}</span>
      
      </li>
      <li>
        
        <span className="text-xl text-bold ">RoomType : {news.roomType}</span>
      
      </li>
     
      
    
    </ul>
   <button onClick={handleLike} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-2 mt-4">Like</button>
  
  </div>
</div>
 {showContact && (
  <div className="flex gap-4">
   <IoMdContact  size={28} className="mt-3 "/>
    <p className="mt-3 text-lg font-medium mb-12">Contact  Please By This Number: {news.contact}</p></div>
   )}
    </>
  );
}