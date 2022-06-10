import React, {useEffect} from 'react';

const ReviewSlider = ({position, width}) => {
  return (
    <div className={'relative rounded-full bg-gray-300 h-3 ' + width}>
      <span
        style={{
          left: position + '%',
        }}
        className="absolute z-10 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-c3 top-1/2"
      ></span>
      <span className="h-full w-0.5 bg-gray-500 left-1/4 absolute"></span>
      <span className="h-full w-0.5 bg-gray-500 left-2/4 absolute"></span>
      <span className="h-full w-0.5 bg-gray-500 left-3/4 absolute"></span>
    </div>
  );
};

export default ReviewSlider;
