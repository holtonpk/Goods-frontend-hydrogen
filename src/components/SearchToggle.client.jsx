import {IoSearchOutline, IoCloseOutline} from 'react-icons/io5';
import {useEffect, useState} from 'react';
import ProductCard from './ProductCard.client';
export default function Search({products}) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  // let search = '';

  const searchInput = (e) => {
    let currentSearch = e.target.value.toUpperCase();
    if (currentSearch !== search) {
      let resultList = [];
      if (currentSearch !== '' || currentSearch !== search) {
        for (let product of products) {
          if (product.title.toUpperCase().includes(currentSearch)) {
            if (!resultList.includes(product)) resultList.push(product);
          }
        }
        setSearch(currentSearch);
      }

      if (searchResults != resultList) {
        setSearchResults(resultList);
      }
    }
    if (currentSearch == '') {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document
        .getElementById('searchInput')
        .addEventListener('input', searchInput);

      return () => {
        try {
          document
            .getElementById('searchInput')
            .removeEventListener('input', searchInput);
        } catch {}
      };
    } else {
      setSearchResults([]);
      setSearch('');
    }
  });

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
            <input
              id="searchInput"
              type="text"
              placeholder="Search..."
              className="w-3/4"
            />
            <IoSearchOutline className="w-6 h-6 text-c2 " />
          </div>
          <div className="absolute z-30 flex flex-col -translate-x-1/2 w-fit left-1/2 top-20">
            {(() => {
              if (search !== '') {
                return (
                  <h1 className="text-3xl font-bold text-center text-white">
                    {searchResults.length} Results for "{search}"
                  </h1>
                );
              }
            })()}

            <div className="w-screen overflow-scroll">
              <div className="flex flex-row gap-6 mx-auto mt-6 w-fit">
                {searchResults.map((product) => {
                  return (
                    <div className="h-[400px] w-[280px] pb-8 pt-3">
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <span
            onClick={() => setShowSearch(false)}
            className="absolute w-screen h-screen bg-black opacity-80"
          ></span>
        </div>
      )}
    </div>
  );
}
