import React from 'react';
import Layout from '../components/Layout.server';
import TrackOrder from '../components/TrackOrder.client';

const Order = () => {
  
  return (
    <Layout>
      <div className='bg-back-1'>
      <h1 className="py-10 mx-auto text-5xl font-bold text-center text-c2 font-f1 w-fit ">
          Track Your Order
        </h1>

        <TrackOrder /> 
      
      </div>
    </Layout>
  );
};

export default Order;
