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
import ProductCard from '../../components/ProductCard.client';
import NotFound from '../../components/NotFound.server';

export default function Collection({collectionProductCount = 24, params}) {
  const {languageCode} = useShop();
  const {countryCode = 'US'} = useSession();
  console.log('************', params);

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
  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;

  return (
    <Layout>
      {/* the seo object will be expose in API version 2022-04 or later */}
      <Seo type="collection" data={collection} />
      <h1 className="mt-6 mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
        {collection.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{__html: collection.descriptionHtml}}
        className="text-lg"
      />
      <p className="mt-5 mb-5 text-sm text-gray-500">
        {products.length} {products.length > 1 ? 'products' : 'product'}
      </p>
      <ul className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <LoadMoreProducts startingCount={collectionProductCount} />
      )}
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
