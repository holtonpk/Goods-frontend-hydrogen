import React from 'react';
import card1img from '../../public/card1img.png';
import card2img from '../../public/card2img.jpeg';
import {GiWineGlass} from 'react-icons/gi';
import {MdOutlineFoodBank} from 'react-icons/md';
import {AiOutlinePicture} from 'react-icons/ai';
const PromoCards = () => {
  return (
    <div
      id="promo"
      className="relative grid justify-between grid-cols-1 gap-10 mx-auto mb-10 opacity-0 md:gap-0 lg:gap-20 w-fit md:grid-cols-3 "
    >
      <div className="w-full mx-auto md:mx-0 max-w-[350px] md:w-full h-[500px] rounded-2xl md:rounded-none lg:rounded-2xl overflow-hidden min-w-[250px]">
        <div className="h-[65%] w-full bg-red-200">
          <img src={card1img} alt="" className=" w-full h-[100%]" />
        </div>
        <div className="h-[35%] justify-start w-full bg-box-c1 py-3 px-12 flex flex-col items-center ">
          <GiWineGlass className="w-8 h-8 mb-4 fill-c2" />
          <h2 className="mb-3 text-lg text-center text-c2">
            Up to 30% off on all Glasses
          </h2>
          <button className="p-2 bg-white shadow-lg text-c3 text-md whitespace-nowrap w-fit rounded-xl">
            Browse Products
          </button>
        </div>
      </div>
      <div className="w-full  mx-auto md:mx-0 max-w-[350px] md:w-full h-[500px] rounded-2xl md:rounded-none lg:rounded-2xl overflow-hidden min-w-[250px]">
        <div className="relative w-full h-full bg-box-c2">
          <div className="absolute flex flex-col items-center px-12 my-auto -translate-x-1/2 -translate-y-1/2 h-fit top-1/2 left-1/2">
            <AiOutlinePicture className="w-8 h-8 fill-c2" />
            <h2 className="text-lg text-center text-c2">
              Up to 50% off on all Decor
            </h2>
            <button className="p-2 bg-white shadow-lg text-c3 text-md whitespace-nowrap w-fit rounded-xl">
              Browse Products
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  mx-auto md:mx-0  max-w-[350px] md:w-full h-[500px] rounded-2xl md:rounded-none lg:rounded-2xl overflow-hidden min-w-[250px]">
        <div className="h-[65%] w-full bg-red-200">
          <img src={card2img} alt="" className=" w-full h-[100%]" />
        </div>
        <div className="h-[35%] w-full bg-box-c3 py-3 px-12 flex flex-col items-center justify-between">
          <MdOutlineFoodBank className="w-8 h-8 fill-c2" />
          <h2 className="text-lg text-center text-c2">
            Up to 15% off on all Kitchen
          </h2>
          <button className="p-2 bg-white shadow-lg text-c3 text-md whitespace-nowrap w-fit rounded-xl">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
