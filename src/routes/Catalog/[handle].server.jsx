import {
  useSession,
  useShop,
  useShopQuery,
  flattenConnection,
  Seo,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import LoadMoreProducts from '../../components/LoadMoreProducts.client';
import Layout from '../../components/Layout.server';
import ProductCard from '../../components/ProductCard2.client';
import NotFound from '../../components/NotFound.server';

export default function Catalog({collectionProductCount = 24, params}) {
  console.log('************', params);

  const {languageCode} = useShop();
  const {countryCode = 'US'} = useSession();

  const {handle} = params;

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      country: countryCode,
      language: languageCode,
      numProducts: collectionProductCount,
    },
    preload: true,
  });

  if (data?.collection == null) {
    return <NotFound />;
  }

  const collection = data.collection;
  console.log('&&&&&&&&&&&&&', collection);

  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;

  return (
    <Layout>
      {/* the seo object will be expose in API version 2022-04 or later */}
      <Seo type="collection" data={collection} />
      <div className="bg-white h-fit">
        <div className="flex flex-col w-full bg-white h-fit md:mt-0 ">
          <h1 className="mx-auto mt-6 mb-6 text-4xl font-bold text-center text-c2 md:text-5xl w-fit ">
            {(() => {
              if (collection.title === 'all') {
                return 'As Seen On TikTok';
              } else {
                return collection.title;
              }
            })()}
          </h1>
        </div>

        <div
          dangerouslySetInnerHTML={{__html: collection.descriptionHtml}}
          className="text-lg"
        />
        {/* <p className="mt-5 mb-5 text-sm text-gray-500">
        {products.length} {products.length > 1 ? 'products' : 'product'}
      </p> */}
        <ul className="grid prodGrid  h-fit mx-auto mb-4 md:px-0 w-[100%] sm:w-[90%] min-w-[290px] bg-white pt-6 rounded-t-2xl">
          {products.map((product) => (
            <li className="mx-auto prodCard " key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        {hasNextPage && (
          <LoadMoreProducts startingCount={collectionProductCount} />
        )}
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $numProducts: Int!
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
      products(first: $numProducts) {
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
