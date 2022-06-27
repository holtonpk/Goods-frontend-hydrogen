import React from 'react';
import {useShopQuery, flattenConnection, Link} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import ProductCard from './ProductCard.client';
const ProductCarousel = ({handle, title}) => {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      country: 'US',
      language: 'EN',
      numProducts: 4,
    },
    preload: true,
  });

  if (data?.collection == null) {
    return <></>;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);

  return (
    <>
      {products ? (
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between mb-8 font-medium text-md ">
            <span className="text-2xl capitalize md:text-4xl text-c1">
              {title}
            </span>

            <Link
              to={`/collections/${products.handle}`}
              className="text-blue-600 hover:underline"
            >
              Shop all
            </Link>
          </div>
          <div className="grid justify-between w-full grid-cols-2 mx-auto mb-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4 ">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
          <div className="text-center md:hidden"></div>
        </div>
      ) : null}
    </>
  );
};

export default ProductCarousel;

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      title
      descriptionHtml
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 4) {
        edges {
          node {
            title
            vendor
            handle
            descriptionHtml
            compareAtPriceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                currencyCode
                amount
              }
            }
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
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;
