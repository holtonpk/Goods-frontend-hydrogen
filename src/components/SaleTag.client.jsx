import React from 'react';
import {AiFillTag} from 'react-icons/ai';

const SaleTag = ({salePercent, color}) => {
  return (
    <div className="z-0 flex flex-row items-center w-fit h-fit">
      <AiFillTag className="w-3 h-3 mr-1 md:h-5 md:w-5 fill-white" />
      <h1 className="text-xs text-white whitespace-nowrap md:text-sm">
        {salePercent + '% OFF'}
      </h1>
    </div>
  );
};

export default SaleTag;
