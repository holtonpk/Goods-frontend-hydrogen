import React from 'react';
import Layout from '../components/Layout.server';
import gql from 'graphql-tag';

const OrderPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <h1 className="py-10 mx-auto text-5xl font-bold text-center text-c2 font-f1 w-fit ">
          Track Your Order
        </h1>
        <div className="flex flex-col justify-between w-full px-3 mx-auto mb-20 md:flex-row md:px-0 md:w-5/6 trackPage h-5/6">
          <div className="grid grid-rows-4 border-gray-200 md:w-1/2 md:pl-4 md:border-l-2 md:order-1 h-fit">
            <div>
              <h1 className="mb-3 text-2xl text-center text-c2 capitalize md:text-4xl font-f1 md:text-left md:whitespace-nowrap">
                Sign in to view order
              </h1>
              <h1 className="w-full mb-3 text-center text-c4 text-md md:text-xl font-f2 md:text-left">
                Use the same sign-in credentials for any brand in our family of
                brands.
              </h1>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="w-full h-16 pl-3 text-lg border-2 border-c2 rounded-full text-c2 md:text-2xl font-f1"
            />

            <input
              type="text"
              placeholder="Password"
              className="w-full h-16 pl-3 text-lg border-2 border-c2 rounded-full text-c2 md:text-2xl font-f1"
            />

            <button className="w-full p-5 text-xl font-bold text-white rounded-full h-fit bg-c2 text-md text-f2 hover:bg-gray-200 hover:opacity-6">
              Sign In
            </button>
          </div>
          <div className="grid grid-rows-4 mt-10 md:w-1/2 md:pr-4 h-fit md:mt-0">
            <div>
              <h1 className="mb-3 text-2xl text-center text-c2 md:text-4xl font-f1 md:text-left">
                Order Search
              </h1>
              <h1 className="w-full mb-3 text-center text-c4 text-md md:text-xl font-f2 md:text-left">
                New orders may take up to 24 hours to appear while we complete
                processing.
              </h1>
            </div>
            <input
              type="text"
              placeholder="Order Number"
              className="w-full h-16 pl-3  text-lg border-2 border-c2 rounded-full text-c2 md:text-2xl font-f2"
            />
            <button className="w-full p-5 text-xl font-bold text-white rounded-full h-fit bg-c2 text-md text-f2 hover:bg-gray-200 hover:opacity-6 ">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;
