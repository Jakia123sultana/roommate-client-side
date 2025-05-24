import {useLoaderData, useLocation, useNavigate} from "react-router";
import Swal from "sweetalert2";

export default function UpdateRoommate() {
  
  const navigate = useNavigate();
  const roommate = useLoaderData();
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    preferences,
    contact,
    name,
    email,
    description,
  } = roommate;
  console.log(title);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoomes = Object.fromEntries(formData.entries());
    console.log(updatedRoomes);
    fetch(`https://roommate-server-side.vercel.app/roommates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRoomes),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          }).then(()=>{
                      navigate( "/");
          })
          
        }

      });
  };
  return (
    <>
      <div className="p-24">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-6xl">Update Roommate Listing</h1>
          <p>
            Edit the form below to post your roommate listing.This will help
            others find a match based on your preferences.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input w-full"
                placeholder="Looking for a roommate in NYC"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={location}
                className="input w-full"
                placeholder="City/Area"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Rent Ammount</label>
              <input
                type="number"
                name="rent"
                defaultValue={rent}
                className="input w-full"
                placeholder="$ Rent per month"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Room Type</label>
              <select name="roomType" className="select w-full" required>
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
                <option value="Studio">Studio</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Lifesyle Preferences</label>
              <input
                type="text"
                name="preferences"
                defaultValue={preferences}
                className="input w-full"
                placeholder="Pets,Smoking,Night Owl"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Contact Info</label>
              <input
                type="text"
                name="contact"
                defaultValue={contact}
                className="input w-full"
                placeholder="Phone"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                defaultValue={name}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                defaultValue={email}
                readOnly
              />
            </fieldset>
          </div>
          {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset> */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border  my-12 p-4">
            <label className="label">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="textarea w-full"
              placeholder="Tell us more about the room and your expectations"
            ></textarea>
          </fieldset>
          <input type="submit" className="btn w-full" value="Add Listing" />
        </form>
      </div>
    </>
  );
}
