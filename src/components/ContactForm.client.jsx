import React from 'react';
import {TextField} from '@material-ui/core';
import {IoSend} from 'react-icons/io5';
import {alpha, styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ContactForm = () => {
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: {'aria-label': item},
  });

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
    <div className="grid w-full grid-rows-5 px-6 mx-auto mt-10 bg-c2 md:shadow-xl md:p-6 md:gap-6 md:rounded-t-xl rounded-t-2xl">
      {/* <h1 className="mx-auto text-5xl font-bold text-center text-c2 font-f1">
        How can we help you?
      </h1> */}
      <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 mb-4 mt-4 md:mt-0">
        <ValidationTextField
          fullWidth
          name="firstName"
          type="text"
          label="First Name"
          variant="outlined"
          InputLabelProps={{
            style: {color: '#fff'},
          }}
          id="validation-outlined-input"
        />
        <ValidationTextField
          fullWidth
          name="lastName"
          type="text"
          label="Last Name"
          variant="outlined"
          id="validation-outlined-input"
          InputLabelProps={{
            style: {color: '#fff'},
          }}
        />
      </div>

      <div className="grid items-center  md:gap-10  grid-cols-1 md:grid-cols-2 gap-4">
        <ValidationTextField
          fullWidth
          name="email"
          type="text"
          label="Email"
          variant="outlined"
          id="validation-outlined-input"
          InputLabelProps={{
            style: {color: '#fff'},
          }}
        />
        <ValidationTextField
          fullWidth
          name="name"
          type="phone"
          label="Phone"
          variant="outlined"
          id="validation-outlined-input"
          InputLabelProps={{
            style: {color: '#fff'},
          }}
        />
      </div>
      <FormControl>
        <h1 className="text-lg font-bold text-white font-f1 text-center md:text-left">
          What can we help you with?
        </h1>

        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="other"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="orderStatus"
            control={<Radio />}
            label="Order Status"
          />
          <FormControlLabel
            value="returns"
            control={<Radio />}
            label="Returns"
          />
          <FormControlLabel
            value="join"
            control={<Radio />}
            label="Join The Team"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <div className="w-full h-fit">
        <ValidationTextField
          fullWidth
          name="message"
          type="text"
          label="Message"
          variant="outlined"
          id="validation-outlined-input"
          InputLabelProps={{
            style: {color: '#fff'},
          }}
        />
      </div>

      <button className="p-4 text-xl font-bold text-white rounded-full md:text-3xl md:p-2 h-fit bg-c4 font-c1 -mt-16 md:mt-0">
        <div className="flex flex-row items-center mx-auto w-fit">
          <h2 className="whitespace-nowrap">Send Message</h2>
          <IoSend className="w-4 h-4 ml-4 md:w-6 md:h-6 fill-white" />
        </div>
      </button>
    </div>
  );
};

export default ContactForm;
