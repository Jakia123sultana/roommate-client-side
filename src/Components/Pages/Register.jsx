// import { createUserWithEmailAndPassword } from 'firebase/auth';

import {Link, Navigate, useNavigate} from "react-router";

import {use, useState} from "react";

// import { Helmet } from 'react-helmet-async';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {AuthContext} from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
//import { updateProfile } from "firebase/auth";

// import { auth } from '../../firebase.init';

const Register = () => {
  const {createUser, updateUser} = use(AuthContext);

  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const {email, password, photo, name} = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        return updateUser({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          const userProfile = {
            email,
            name,
            photo,
            // creationTime: result.user?.metadata?.creationTime,
            // lastSignInTime: result.user?.metadata?.lastSignInTime
          };

          return fetch("https://roommate-server-side.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          });
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account is created.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {/* <Helmet><title>Register Page</title></Helmet> */}
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {nameError && <p className="text-xs text-error">{nameError}</p>}

              {/* Photo URl  */}
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URl"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password  */}
              {/* <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            /> */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Allready Have An Account ?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
