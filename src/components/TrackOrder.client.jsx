import React from 'react';
import {alpha, styled} from '@mui/material/styles';
import {TextField} from '@material-ui/core';
const TrackOrder = () => {
  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'white',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: 'white',
    },

    input: {
      '&::placeholder': {
        color: 'gray',
      },
      color: 'white', // if you also want to change the color of the input, this is the prop you'd use
    },
  });

  return (
    <div className="h-fit bg-c2 rounded-t-2xl w-[90%] mx-auto pt-10 md:pb- pb-4">
      <div className="flex flex-col items-center justify-between w-full px-3 mx-auto mb-20 md:flex-row md:px-0 md:w-5/6 trackPage h-5/6">
        <div className="flex flex-col justify-between gap-10 border-gray-200 h-fit md:w-1/2 md:pl-4 md:border-l-2 md:order-1">
          <div>
            <h1 className="mb-3 text-2xl font-bold text-center text-white capitalize md:text-4xl font-f1 md:text-left md:whitespace-nowrap">
              Sign in to view order
            </h1>
            <h1 className="w-full mb-3 text-center text-white text-md md:text-xl font-f2 md:text-left">
              Use the same sign-in credentials for any brand in our family of
              brands.
            </h1>
          </div>
          <ValidationTextField
            fullWidth
            name="email"
            type="text"
            label="Email"
            variant="outlined"
            InputLabelProps={{
              style: {color: '#fff'},
            }}
            id="validation-outlined-input"
          />

          <ValidationTextField
            fullWidth
            name="password"
            type="text"
            label="Password"
            variant="outlined"
            InputLabelProps={{
              style: {color: '#fff'},
            }}
            id="validation-outlined-input"
          />
          <button className="p-4 text-xl font-bold text-white rounded-full md:text-3xl md:p-2 h-fit bg-c4 font-c1 md:mt-0">
            Sign In
          </button>
        </div>
        <div className="flex flex-col justify-between gap-10 mt-10 h-fit md:w-1/2 md:pr-4 md:mt-0 ">
          <div>
            <h1 className="mb-3 text-2xl font-bold text-center text-white md:text-4xl font-f1 md:text-left">
              Order Search
            </h1>
            <h1 className="w-full mb-3 text-center text-white text-md md:text-xl font-f2 md:text-left">
              New orders may take up to 24 hours to appear while we complete
              processing.
            </h1>
          </div>
          <ValidationTextField
            fullWidth
            name="orderNumber"
            type="text"
            label="Order Number"
            variant="outlined"
            InputLabelProps={{
              style: {color: '#fff'},
            }}
            id="validation-outlined-input"
          />
          <button className="p-4 text-xl font-bold text-white rounded-full md:text-3xl md:p-2 h-fit bg-c3 font-c1 md:mt-0">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
