import React from 'react';
import {TextField} from '@material-ui/core';
const Signin = () => {
  return (
    <div id="signIn" className="hidden fixed top-0  w-screen h-screen z-50 ">
      <button
        onClick={() =>
          document.getElementById('signIn').classList.toggle('hidden')
        }
        className="w-full h-full"
      ></button>
      <div className="absolute flex flex-col items-start justify-between w-3/4 px-4 md:px-10 py-5 pr-4 -translate-x-1/2 -translate-y-1/2 bg-white border-black md:w-1/2 top-1/2 left-1/2 rounded-xl lightplace">
        <h1 className="md:mb-3  text-xl md:text-3xl text-black font-f1">
          Sign in or Create Account
        </h1>
        <h1 className="w-full mb-3 text-md md:text-xl text-gray-500 font-f2">
          Use the same sign-in credentials for any brand in our family of
          brands.
        </h1>

        <div className="mb-3 w-full">
          <TextField
            fullWidth
            name="email"
            color="black"
            type="text"
            label="Email"
            variant="outlined"
            // error={!!errors.firstName}
            // {...register('firstName', {required: true})}
          />
        </div>
        <div className="mb-3 w-full">
          <TextField
            fullWidth
            name="password"
            color="black"
            type="text"
            label="Password"
            variant="outlined"
            // error={!!errors.firstName}
            // {...register('firstName', {required: true})}
          />
        </div>

        <div className="flex flex-row items-center">
          <button className="p-3 text-md md:text-xl text-white bg-black border-2 text-f2 rounded-xl hover:opacity-70 ">
            Sign In
          </button>
          <button className="p-3 text-md md:text-xl text-black bg-white border-1 border-black text-f2 rounded-xl hover:opacity-70 ">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
