import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard.client';
import {Link} from '@shopify/hydrogen';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
const Carousel = ({products, title}) => {
  const [perPage, setPerPage] = useState(1);

  const scroll = () => {
    console.log(document.getElementById('carouselScroll').scrollLeft);
  };

  useEffect(() => {
    let calPerPage = Math.floor(window.innerWidth / 320);
    if (calPerPage !== perPage) {
      if (calPerPage == 0) {
        calPerPage = 1;
      }
      setPerPage(calPerPage);
    }

    function handleResize() {
      let calPerPage = Math.floor(window.innerWidth / 320);
      if (calPerPage !== perPage) {
        if (calPerPage == 0) {
          calPerPage = 1;
        }
        setPerPage(calPerPage);
      }
    }
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mt-10 mb-10 md:w-[90%] md:mx-auto max-w-[1700px] relative  ">
      {products ? (
        <>
          <div className="flex items-center justify-between mb-8 font-medium text-md ">
            <span className="mx-auto text-4xl uppercase md:mx-0 text-c1 ">
              {title}
            </span>
            <span className="hidden md:inline-flex">
              <Link
                to={`/collections/${products.handle}`}
                className="text-blue-600 hover:underline"
              >
                Shop all
              </Link>
            </span>
          </div>
          <div className="w-full h-[400px] ">
            <div id="carouselScroll" className="w-full">
              <Splide
                options={{
                  type: 'loop',
                  gap: '10px',
                  drag: 'free',
                  arrows: true,
                  pagination: false,
                  perPage: perPage,
                  autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    rewind: true,
                    speed: 1,
                  },
                }}
                extensions={{AutoScroll}}
              >
                {products.map((product) => {
                  return (
                    <SplideSlide>
                      <div className="h-[400px] w-[280px] pb-8">
                        <ProductCard key={product.id} product={product} />
                      </div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
          </div>

          <div className="text-center md:hidden">
            <Link
              to={`/collections/${products.handle}`}
              className="text-blue-600"
            >
              Shop all
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
