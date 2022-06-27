import {
  useSession,
  useShop,
  useShopQuery,
  Seo,
  flattenConnection,
  useRouteParams,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import ProductDetails from '../../components/ProductDetails.client';
import NotFound from '../../components/NotFound.server';
import Layout from '../../components/Layout.server';
import ProductCarousel from '../../components/ProductCarousel.server';
import Carousel from '../../components/Carousel.client.jsx';

export default function Product() {
  const {handle} = useRouteParams();
  const {countryCode = 'US'} = useSession();

  const {languageCode} = useShop();

  const {
    data: {product},
  } = useShopQuery({
    query: QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle,
    },
    preload: true,
  });

  if (!product) {
    return <NotFound />;
  }
  console.log('prod:', product);

  return (
    <Layout>
      <Seo type="product" data={product} />
      <ProductDetails product={product} />
      <FeaturedProductsBox country={countryCode} />
    </Layout>
  );
}

function FeaturedProductsBox() {
  const {languageCode} = useShop();
  const {countryCode = 'US'} = useSession();

  console.log('LANG', languageCode);
  console.log('COnt', countryCode);

  const {data} = useShopQuery({
    query: QUERY2,
    variables: {
      handle: 'all',
      country: countryCode,
      language: languageCode,
      numProducts: 5,
    },
    preload: true,
  });

  if (data?.collection == null) {
    return <></>;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);

  return <Carousel products={products} title={'You may also like'} />;
}

const QUERY = gql`
  query product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product: product(handle: $handle) {
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
      description
      descriptionHtml
      featuredImage {
        url
        width
        height
        altText
      }
      handle
      id
      media(first: 6) {
        edges {
          node {
            ... on MediaImage {
              mediaContentType
              image {
                id
                url
                altText
                width
                height
              }
            }
            ... on Video {
              mediaContentType
              id
              previewImage {
                url
              }
              sources {
                mimeType
                url
              }
            }
            ... on ExternalVideo {
              mediaContentType
              id
              embedUrl
              host
            }
            ... on Model3d {
              mediaContentType
              id
              alt
              mediaContentType
              previewImage {
                url
              }
              sources {
                url
              }
            }
          }
        }
      }

      priceRange {
        maxVariantPrice {
          currencyCode
          amount
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      seo {
        description
        title
      }
      title
      variants(first: 250) {
        edges {
          node {
            availableForSale
            compareAtPriceV2 {
              amount
              currencyCode
            }
            id
            image {
              id
              url
              altText
              width
              height
            }

            priceV2 {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
            unitPriceMeasurement {
              measuredType
              quantityUnit
              quantityValue
              referenceUnit
              referenceValue
            }
          }
        }
      }
      vendor
    }
  }
`;
const QUERY2 = gql`
  query CollectionDetails($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collection(handle: "Sale") {
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
      products(first: 10) {
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
