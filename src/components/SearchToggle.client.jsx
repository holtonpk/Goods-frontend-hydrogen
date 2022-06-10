import {IoSearchOutline, IoCloseOutline} from 'react-icons/io5';
import {useState} from 'react';

export default function Search() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="relative ">
      <button
        className="relative flex flex-col items-center p-2 mr-2 border-0 rounded-full lg:mr-10 md:border- border-c2 navButton w-fit h-fit"
        onClick={() => setShowSearch(true)}
      >
        <IoSearchOutline className="w-8 h-8 md:w-6 md:h-6 text-c2 navButtonIcon" />
        <h1 className="absolute hidden mt-4 text-c2 font-f1 text-md top-6">
          Search
        </h1>
      </button>

      {showSearch && (
        <div className="fixed top-0 left-0 z-50 w-full h-full">
          <div className=" slide-in-top z-40 flex top-6 flex-row items-center justify-between w-[90%] max-w-[400px] h-10 px-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2 ">
            <input type="text" placeholder="Search..." className="w-3/4" />
            <IoSearchOutline className="w-6 h-6 text-c2 " />
          </div>
          <span
            onClick={() => setShowSearch(false)}
            className="absolute w-screen h-screen bg-black opacity-50"
          ></span>
        </div>
      )}
    </div>
  );
}
