import React from 'react';
import Layout from '../components/Layout.server';

import {Link} from '@shopify/hydrogen';
import CategoryBox from '../components/CategoryBox.client';

const Catalog = () => {
  return (
    <Layout>
      <div className="w-screen min-h-screen mb-6">
        <h1 className="mx-auto mt-10 text-5xl font-bold text-c2 font-c1 w-fit">
          Catalog
        </h1>
        <div className="grid justify-between w-5/6 grid-cols-1 gap-6 mx-auto mt-10 md:grid-cols-3 md:flex-row">
          <CategoryBox
            title="Tech"
            description=" Browse our unique collection of drinking glasses, home decor and
                more"
            img="smartphone-backside.png"
            href="/Catalog/Tech"
          />
          <CategoryBox
            title="Decor"
            description=" Browse our unique collection of drinking glasses, home decor and
                more"
            img="decorative-plant.png"
            href="/Catalog/Decor"
          />
          <CategoryBox
            title="Kitchen"
            description=" Browse our unique collection of drinking glasses, home decor and
                more"
            img="set-of-spatula.png"
            href="/Catalog/Kitchen"
          />
          <CategoryBox
            title="Sale"
            description=" Browse our unique collection of drinking glasses, home decor and
                more"
            img="sale.png"
            href="/Catalog/Sale"
          />
          <CategoryBox
            title="As seen on TikTok"
            description=" Browse our unique collection of drinking glasses, home decor and
                more"
            img="tiktok-logo.png"
            href="/Catalog/all"
          />
          <CategoryBox
            title="Best Sellers"
            description=" Browse our unique collection of drinking glasses, home decor and
                more"
            img="best-seller.png"
            href="/Catalog/Kitchen"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
