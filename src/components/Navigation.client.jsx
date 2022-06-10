import {Link} from '@shopify/hydrogen/client';
import {BsFillTriangleFill} from 'react-icons/bs';
import {useEffect} from 'react';
/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections}) {
  const hoverCatalog = (Over) => {
    if (Over) {
      document.getElementById('catalogDropdown').classList.remove('hidden');
    } else {
      document.getElementById('catalogDropdown').classList.add('hidden');
    }
  };

  useEffect(() => {
    document
      .getElementById('Catalog')
      .addEventListener('mouseover', () => hoverCatalog(true));
    document
      .getElementById('Catalog')
      .addEventListener('mouseout', () => hoverCatalog(false));
  });

  return (
    <nav className="z-30 hidden mx-auto text-center lg:block">
      <ul className="items-center justify-center md:flex">
        <li>
          <Link
            to={'/About'}
            className="block p-4 text-xl font-bold hover:text-c2 text-c2 whitespace-nowrap"
          >
            About
          </Link>
        </li>
        <li id="Catalog" className="relative">
          <Link
            to={'/Catalog'}
            className="block p-4 text-xl font-bold cursor-pointer hover:text-c2 text-c2 whitespace-nowrap"
          >
            Catalog
          </Link>
          <div
            id="catalogDropdown"
            className="absolute bg-white w-fit h-fit rounded-2xl top-[110%] p-6 left-1/2 -translate-x-1/2 hidden z-40"
          >
            <BsFillTriangleFill className="absolute top-[2px] w-5 h-5 -translate-x-1/2 -translate-y-full fill-white left-1/2 " />

            <div className="flex flex-col pb-4 border-b-2 border-gray-200 w-fit">
              <h1 className="mb-2 text-lg text-left text-gray-400 w-fit whitespace-nowrap">
                Shop by Category
              </h1>

              <div className="flex flex-col w-full gap-4">
                <Link to={'/Catalog/Tech'}>
                  <h1 className="text-xl cursor-pointer text-c2 w-fit whitespace-nowrap hover:text-c2">
                    Tech
                  </h1>
                </Link>
                <h1 className="text-xl cursor-pointer text-c2 w-fit whitespace-nowrap hover:text-c2">
                  Furniture
                </h1>

                <Link to={'/Catalog/Kitchen'}>
                  <h1 className="text-xl cursor-pointer text-c2 w-fit whitespace-nowrap hover:text-c2">
                    Kitchen
                  </h1>
                </Link>
                <Link to={'/Catalog/Decor'}>
                  <h1 className="text-xl cursor-pointer text-c2 w-fit whitespace-nowrap hover:text-c2">
                    Decor
                  </h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-col mt-6 w-fit">
              <h1 className="mb-2 text-lg text-left text-gray-400 w-fit whitespace-nowrap">
                Shop by Collection
              </h1>

              <div className="flex flex-col w-full gap-4 ">
                <Link to={'/Catalog/Sale'}>
                  <h1 className="text-xl cursor-pointer w-fit text-c2 whitespace-nowrap hover:text-c2">
                    Clearance
                  </h1>
                </Link>

                <h1 className="text-xl cursor-pointer w-fit text-c2 whitespace-nowrap hover:text-c2">
                  Best Selling
                </h1>

                <Link to={'/Catalog/all'}>
                  <h1 className="text-xl cursor-pointer w-fit text-c2 whitespace-nowrap hover:text-c2">
                    As Seen on TikTok
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link
            to={'/Contact'}
            className="block p-4 text-xl font-bold hover:text-c2 text-c2 whitespace-nowrap"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
