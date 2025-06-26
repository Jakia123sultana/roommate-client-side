import { NavLink } from 'react-router';

import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GiTBrick } from 'react-icons/gi';
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    const links = (
     <>
      <li>
        <NavLink to="/" className="text-lg font-semibold">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addroommate"className="text-lg font-semibold">Add Roommate</NavLink>
      </li>
      <li>
        <NavLink to="/browselisting" className="text-lg font-semibold">Browse Listing </NavLink>
      </li>
       <li>
        <NavLink to="/mylisting" className="text-lg font-semibold">My Listing </NavLink>
      </li>
    </>
      );
  return (
    <div className='bg-blue-900 text-white py-10 px-12'>
     <div>
     
      <div>
        <ul className='flex gap-14 justify-center items-center pt-4 pb-4'>
            {links}
        </ul>
        <div className='border-t-1 border-dashed pt-3'></div>
      </div>
     </div>
     <div className='flex justify-center items-center gap-8 mt-4'>
      <NavLink to="https://www.facebook.com/share/18jN1Xxdn5/">
      <FaFacebook size={36}/>
      </NavLink>
      <NavLink to="https://github.com/Jakia123sultana">
      <BsGithub  size={36}/>
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/jakia-sultana-2b04102b0/">
      <FaLinkedin size={36}/>
      </NavLink>
     </div>
    </div>
  );
}