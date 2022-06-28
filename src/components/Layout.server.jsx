import {
  useShop,
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
  CacheHours,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import Header from './Header.client';
import Footer from './Footer.client';
import Cart from './Cart.client';
import {Suspense} from 'react';
import {Head} from '@shopify/hydrogen/client';
import fav from '../../public/goodslogo2.ico';
import LoadingFallback from './LoadingFallback';
/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({children, hero}) {
  const {data} = useShopQuery({
    query: QUERY,
    preload: true,
  });

  products = flattenConnection(data.products);

  return (
    <LocalizationProvider preload="true">
      <Head>
        <link rel="icon" href={fav} />
      </Head>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 sr-only focus:block focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div className="min-h-screen font-sans text-gray-700 max-w-screen ">
        {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
        <Suspense fallback={<LoadingFallback />}>
          <Header products={products} />
          <Cart />
        </Suspense>
        <main role="main" id="mainContent" className="relative bg-white">
          {hero}
          <div className="">
            <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
}

const QUERY = gql`
  {
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          title
          handle
          variants(first: 1) {
            edges {
              node {
                id
                title
                availableForSale
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  currencyCode
                  amount
                }
                compareAtPriceV2 {
                  currencyCode
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;
