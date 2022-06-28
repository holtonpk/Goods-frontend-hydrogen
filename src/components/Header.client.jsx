import {useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {GoPackage} from 'react-icons/go';
import {IoPersonOutline, IoBagHandleOutline} from 'react-icons/io5';
import SearchToggle from './SearchToggle.client';
import Search from './Search.client';
import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
import CountrySelector from './CountrySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';
import {RiHome2Line} from 'react-icons/ri';
import IconButton from '@mui/material/IconButton';
import {BsFillTriangleFill} from 'react-icons/bs';
import Signin from './Signin.client';
import logo from '../../public/goodslogo.svg';
/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName, products}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();
  const [bannerIndex, setBannerIndex] = useState(0);
  // let bannerIndex = 0;

  const onhover = (event, elem) => {
    if (event == 'in') {
      elem.classList.add('bounce-top');
      elem.getElementsByTagName('h1').item(0).classList.remove('hidden');
    } else {
      elem.classList.remove('bounce-top');
      elem.getElementsByTagName('h1').item(0).classList.add('hidden');
    }
  };

  const bannerMessages = [
    'Free Standard Shipping Over $75',
    'Free Express Shipping Over $150',
    'Free Returns for 30 days',
    'Unlock exclusive deals when you create an account',
  ];

  const bannerCarousel = () => {
    console.log(bannerIndex);
    // console.log('Message: ', bannerMessages[bannerIndex]);
    // if (bannerIndex + 1 <= bannerMessages.length - 1) {
    //   setBannerIndex(bannerIndex + 1);
    // } else {
    //   setBannerIndex(0);
    // }
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(scrollbarWidth);

    document.querySelectorAll('.navButton').forEach((item) => {
      item.addEventListener('mouseover', () => onhover('in', item));
      item.addEventListener('mouseout', () => onhover('out', item));
    });
  }, [isCartOpen]);

  return (
    <>
      <Signin />
      <Search />

      <div>
        <header
          className={`top-0 bg-back-1 left-0   w-full relative min-h-fit  h-[10vh] sm:h-[15vh] lg:h-[15vh] lg:pb-0 mx-auto    
           ${isMobileNavOpen ? '' : 'bg-opacity-95'}`}
          role="banner"
        >
          <div
            className="flex w-full pt-2 h-fit bg-none lg:flex-col place-content-between "
            style={{
              paddingRight: isCartOpen ? scrollbarWidth : 0,
            }}
          >
            <div className="grid items-center w-11/12 grid-cols-3 pb-2 mx-auto bg-back-1 top-1/2 ">
              <MobileNavigation
                collections={collections}
                isOpen={isMobileNavOpen}
                setIsOpen={setIsMobileNavOpen}
              />

              <Link to="/" className="hidden w-fit lg:block">
                <img src={logo} alt="" className="w-[250px] h-full " />
              </Link>
              <Link to="/" className="w-full lg:hidden ">
                <img
                  src={logo}
                  alt=""
                  className="relative w-full h-full mx-auto  max-w-[200px]"
                />
              </Link>

              <Navigation collections={collections} storeName={storeName} />
              <div className="order-3 w-full mx-auto md:w-full ">
                <div className="flex flex-row justify-between float-right w-fit h-fit">
                  <SearchToggle products={products} />
                  <Link
                    to="/Order"
                    id="tracking"
                    className="relative flex-col items-center hidden p-2 rounded-full lg:mr-10 md:flex border- border-c2 navButton w-fit h-fit "
                  >
                    <GoPackage
                      id="trackingIcon"
                      className="w-4 h-4 md:w-6 md:h-6 text-c2 navButtonIcon"
                    />
                    <h1 className="absolute hidden mt-4 text-c2 font-f1 text-md top-6 whitespace-nowrap">
                      Track Package
                    </h1>
                  </Link>

                  <div className="hidden md:block">
                    <CartToggle
                      handleClick={() => {
                        if (isMobileNavOpen) setIsMobileNavOpen(false);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
