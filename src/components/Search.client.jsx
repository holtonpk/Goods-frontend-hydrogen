import React, {useState} from 'react';
import {IoSearchOutline, IoCloseOutline} from 'react-icons/io5';

const Search = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <>
      {showSearch && (
        <div className="fixed z-50 hidden w-full">
          <div className="top-6 z-40 flex flex-row items-center justify-between w-[90%] h-10 px-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2 ">
            <input type="text" placeholder="Search..." className="w-3/4" />
            <IoSearchOutline className="w-6 h-6 text-c1 " />
          </div>
          <span
            onClick={() => setShowSearch(false)}
            className="absolute w-screen h-screen bg-black opacity-50"
          ></span>
        </div>
      )}
    </>
  );
};

export default Search;
