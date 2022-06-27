import {
  useShop,
  useShopQuery,
  flattenConnection,
  useSession,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from './Layout.server';
import Button from './Button.client';
import ProductCard from './ProductCard.client';

/**
 * A server component that defines the content to display when a page isn't found (404 error)
 */
function NotFoundHero() {
  return (
    <div className="py-10 border-b border-gray-200">
      <div className="max-w-3xl mx-4 text-center md:mx-auto">
        <h1 className="mt-6 mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          We&#39;ve lost this page
        </h1>
        <p className="m-8 text-lg text-gray-500">
          We couldn’t find the page you’re looking for. Try checking the URL or
          heading back to the home page.
        </p>
        <Button
          className="w-full md:mx-auto md:w-96"
          url="/"
          label="Take me to the home page"
        />
      </div>
    </div>
  );
}

export default function NotFound({response}) {
  if (response) {
    response.doNotStream();
    response.writeHead({status: 404, statusText: 'Not found'});
  }

  const {countryCode = 'US'} = useSession();
  const {languageCode} = useShop();

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      countryCode,
      language: languageCode,
    },
  });
  const products = data ? flattenConnection(data.products) : [];

  return (
    <Layout>
      <NotFoundHero />
      <div className="my-8">
        <p className="mb-8 text-lg font-medium text-black uppercase">
          Products you might like
        </p>
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query NotFoundProductDetails(
    $countryCode: CountryCode
    $language: LanguageCode
  ) @inContext(country: $countryCode, language: $language) {
    products(first: 3) {
      edges {
        node {
          handle
          id
          title
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
