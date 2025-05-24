import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Provider/AuthProvider";
import {Link} from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
export default function MyListing() {
  const {user} = useContext(AuthContext);
  console.log(user.email);
  const [posts, setPost] = useState([]);
  console.log(posts);
   const handleDelete = (id) => {
      console.log(id);
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            fetch(
              `https://roommate-server-side.vercel.app/roommates/${id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  const remainingCoffees = posts.filter(
                    (cof) => cof._id !== id
                  );
                  setPost(remainingCoffees);
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    };
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://roommate-server-side.vercel.app/roommates?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [user.email]);
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Listings</h1>
        <div className="table  w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Contact</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>${post.rent}</td>
                <td>{post.contact}</td>
                <td>
                  <Link to={`/updateRoommate/${post._id}`} ><FaEdit size={24}/></Link>
                </td>
                <td ><button onClick={() => handleDelete(post._id)}><MdDelete size={24} /></button></td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </>
  );
}
