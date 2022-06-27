import React from 'react';
import {RiH2} from 'react-icons/ri';
import Layout from '../components/Layout.server';
import SocialBar from '../components/SocialBar.client';
import flag from '../../public/american-flag 1.svg';
import customer from '../../public/customer-support 1.svg';
import prod from '../../public/unique-ideas 1.png';
const About = () => {
  return (
    <Layout>
      <div className="w-full h-full px-10 bg-back-1 ">
        <div className="w-full mx-auto mb-10 md:w-[70%]">
          <h1 className="mb-2 text-3xl font-bold text-center text-c2 md:text-5xl font-f1">
            About US
          </h1>
          <p className="text-center text-c2 text-md md:text-2xl font-f1">
            Customer satisfaction is our number one priority. We strive to have
            a quick, easy, and simple online buying process
          </p>
        </div>

        <div className="pb-4  bg-c2 rounded-t-2xl slide-in-bottom">
          <div className="grid lg:grid-cols-3 grid-cols-1  md:w-[90%] w-full gap-6 mx-auto mt-10 ">
            <div className="flex flex-col items-center w-full p-6 bg-c2 h-fit rounded-2xl">
              <img src={flag} alt="" className="h-[80px] w-[80px] mb-2" />
              <h1 className="justify-between mb-3 text-2xl font-bold text-center text-c3 md:text-3xl font-f1">
                US Based
              </h1>
              <h1 className="justify-between mb-3 text-sm text-center text-white md:text-2xl font-f1">
                We are a us based companmy providng fast shipping, seamless
                return, and 24 hours support
              </h1>
            </div>
            <div className="flex flex-col items-center w-full p-6 bg-c2 h-fit rounded-2xl">
              <img src={customer} alt="" className="h-[80px] w-[80px] mb-2" />
              <h1 className="justify-between mb-3 text-2xl font-bold text-center text-c4 md:text-3xl font-f1">
                Customer Support
              </h1>
              <h1 className="justify-between mb-3 text-sm text-center text-white md:text-2xl font-f1">
                Have any questions? We provide 24 hour customer support. Just
                click the contact page
              </h1>
            </div>
            <div className="flex flex-col items-center w-full p-6 bg-c2 h-fit rounded-2xl">
              <img src={prod} alt="" className="h-[80px] w-[80px] mb-2" />
              <h1 className="justify-between mb-3 text-2xl font-bold text-center text-c3 md:text-3xl font-f1">
                Unique Products
              </h1>
              <h1 className="justify-between mb-3 text-sm text-center text-white md:text-2xl font-f1">
                We offer a large range of unique products. We source all of our
                products from us based suppliers.
              </h1>
            </div>
          </div>
          <div className="z-20 flex flex-col w-full px-10 pt-4 pb-6 mx-auto mt-6 bg-c2 md:w-3/4 rounded-xl h-fit ">
            <h1 className="justify-between mb-3 text-lg font-bold text-center text-white md:text-2xl font-f1">
              Find us on
            </h1>
            <SocialBar style="md:h-12 md:w-12 h-5 w-5 fill-white" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
