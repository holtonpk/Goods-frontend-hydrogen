import React from 'react';
import {Link} from '@shopify/hydrogen';
import {Image} from '@shopify/hydrogen';
const CategoryBox = ({title, description, img, href}) => {
  return (
    <div className="relative w-[90%] mx-auto p-4 mb-10 overflow-hidden bg-back-2 rounded-xl md:mb-0 max-w-[500px]">
      <div className="flex flex-col w-[75%]">
        <h1 className="mb-3 text-xl text-center capitalize md:text-4xl text-c2 font-f1 md:text-left">
          {title}
        </h1>
        <h2 className="text-md w-[80%] text-c1 font-f1 mb-3 text-left capitalize">
          {description}
        </h2>
        <Link
          to={href}
          className="p-2 text-xl text-white rounded-lg shadow-lg bg-c4 w-fit font-f1 "
        >
          Shop now
        </Link>
        <div className=" w-[60%] h-full  absolute left-[90%]  -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="absolute -translate-y-1/2 h-fit top-1/2">
            <img rel="preload" src={img} className="w-[150%] h-100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
