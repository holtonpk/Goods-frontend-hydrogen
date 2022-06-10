import React from 'react';

const CategoryCard = () => {
  return (
    <div className="bg-back-2 rounded-xl">
      <h1 className="md:text-5xl text-2xl text-c1 font-f1 text-center md:text-left font-bold mb-3">
        Furniture
      </h1>
      <h2 className="text-2xl hidden md:block  text-gray-500 font-f1 mb-3 w-3/4 text-left">
        Browse our unique collection of drinking glasses, home decor and more
      </h2>

      <button className="p-2 mx-auto text-xl rounded-fullbg-white shadow-lg w-fit font-f1 md:hidden ">
        Shop now
      </button>
    </div>
  );
};

export default CategoryCard;
