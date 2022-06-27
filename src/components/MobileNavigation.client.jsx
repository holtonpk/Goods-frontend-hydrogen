import {Fragment, useEffect} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';
import MobileCountrySelector from './MobileCountrySelector.client';

export default function MobileNavigation({collections, isOpen, setIsOpen}) {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  useEffect(() => {
    if (isOpen) {
      document.getElementById('hamenu').classList.toggle('active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden ">
      <OpenFocusTrap>
        <button className="flex items-center justify-center w-12 h-full ">
          <svg
            id="hamenu"
            className="ham ham6 "
            viewBox="0 0 100 100"
            width="200"
            onClick={() => {
              setIsOpen((previousIsOpen) => !previousIsOpen);
            }}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </button>

        {isOpen ? (
          <div className="slide-in-left fixed left-0 z-50 w-full h-screen px-4 bg-gray-50 md:px-12 py-7  top-[10vh] sm:top-[15vh] lg:top-[15vh]">
            <ul className="items-center justify-center md:flex">
              <li className=" slide-in-left1">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/#"
                  id="home"
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Home
                </Link>
              </li>
              <li className="slide-in-left2 ">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={'/About'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  About
                </Link>
              </li>
              <li className="slide-in-left3">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={'/Catalog'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Catalog
                </Link>
              </li>
              <li className="slide-in-left4">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={'/Contact'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Contact
                </Link>
              </li>
              <li className="slide-in-left5">
                <Link
                  to={'/Order'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Track Order
                </Link>
              </li>
            </ul>
            <div className="slide-in-left6">
              <MobileCountrySelector />
            </div>
          </div>
        ) : null}
      </OpenFocusTrap>
    </div>
  );
}
