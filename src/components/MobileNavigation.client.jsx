import {Fragment, useEffect} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';

import MobileCountrySelector from './MobileCountrySelector.client';
import OpenIcon from './OpenIcon';
import {RiHome2Line} from 'react-icons/ri';

let scrollPosition = 0;

/**
 * A client component that defines the navigation for a mobile storefront
 */
export default function MobileNavigation({collections, isOpen, setIsOpen}) {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  useEffect(() => {
    if (isOpen) {
      document.getElementById('hamenu').classList.toggle('active');
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
    } else if (document.body.style.position) {
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition);
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
          <div className="fixed z-10 w-full h-screen px-4 -left-0 top-20 bg-gray-50 md:px-12 py-7">
            <ul className="items-center justify-center md:flex">
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/#"
                  id="home"
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={'/About'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={'/Catalog'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={'/Contact'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={'/Order'}
                  className="block p-4 text-xl font-bold text-c2 hover:opacity-80"
                >
                  Track Order
                </Link>
              </li>
            </ul>
            <MobileCountrySelector />
          </div>
        ) : null}
      </OpenFocusTrap>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 17L17 1M1 1L17 17"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({className}) {
  return (
    <svg
      className={className}
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999762 12C0.743762 12 0.487762 11.902 0.292762 11.707C-0.0982383 11.316 -0.0982383 10.684 0.292762 10.293L4.58576 6.00001L0.292762 1.70701C-0.0982383 1.31601 -0.0982383 0.684006 0.292762 0.293006C0.683762 -0.0979941 1.31576 -0.0979941 1.70676 0.293006L6.70676 5.29301C7.09776 5.68401 7.09776 6.31601 6.70676 6.70701L1.70676 11.707c2.51176 11.902 1.25576 12 0.999762 12Z"
        fill="black"
      />
    </svg>
  );
}
