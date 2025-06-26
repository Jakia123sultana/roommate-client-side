import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function BrowseListing() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://roommate-server-side.vercel.app/roommates")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("fail to fetch", err));
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl text-blue-900 text-center mt-8 mb-8 font-bold mb-4">Browse Listings</h1>
      {/* Responsive wrapper added here */}
      <div className="overflow-x-auto">
        <div className="table  w-full">
          <thead className="bg-blue-900 text-white">
            <tr className="">
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {posts.map((post) => (
              <tr className="hover:bg-blue-100" key={post._id}>
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>${post.rent}</td>
                <td>{post.contact}</td>
                <td>
                  <Link
                    to={`/card-details/${post._id}`}
                    className="btn bg-blue-900 btn-sm text-white"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
}
