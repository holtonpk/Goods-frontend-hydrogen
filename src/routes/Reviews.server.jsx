import React from 'react';
import Layout from '../components/Layout.server';
import Reviews from '../components/Reviews.client';
const ReviewsPage = () => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="md:w-[70%] mx-auto">
          <Reviews expanded={5} />
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
