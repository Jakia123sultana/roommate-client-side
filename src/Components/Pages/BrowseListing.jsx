import {useEffect, useState} from "react";
import {Link} from "react-router";

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
      <h1 className="text-2xl font-bold mb-4">Browse Listings</h1>
      <div className="table  w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Contact</th>
            <th></th>
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
                <Link
                  to={`/card-details/${post._id}`}
                  className="btn btn-primary btn-sm text-white"
                >
                  See More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
