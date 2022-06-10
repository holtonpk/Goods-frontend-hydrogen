import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
  Seo,
  CacheDays,
  useSession,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import SocialBar from '../components/SocialBar.client';
import Layout from '../components/Layout.server';
import FeaturedCollection from '../components/FeaturedCollection';
import ProductCard from '../components/ProductCard';
import {Suspense} from 'react';
import PromoCards from '../components/PromoCards.client';
import {Image} from '@shopify/hydrogen';
import heroImg from '../../public/ecommerce-website.png';
import CategoryBox from '../components/CategoryBox.client';
import LoadingFallback from '../components/LoadingFallback';
export default function Index() {
  const {countryCode = 'US'} = useSession();

  const imageLoader = ({src, width, height, scale}) => {
    return `http://localhost:3000/${src}?w=${width}&h=${height}&scale=${scale}`;
  };

  return (
    <Layout>
      <Suspense fallback={null}>
        <SeoForHomepage />
      </Suspense>

      <div className="relative w-screen h-[100vh] md:h-[85vh] bg-back-1 ">
        <div className="relative items-center gap-4 flex flex-col top-[40%] -translate-y-1/2  w-[95%] mx-auto  md:flex-row md:justify-between md:pl-10 max-w-[1600px]  md:h-fit h-fit   ">
          <div className="flex z-20  flex-col items-center md:items-start md:justify-between md:mx-none mx-auto w-5/6 md:h-fit gap-6 md:w-[40%] ">
            <h1 className="text-3xl font-bold text-center xsm:text-4xl text-c2 font-f1 md:text-left xl:whitespace-nowrap">
              Shop Smarter with Goods &trade;
            </h1>

            <h2 className=" md:w-[75%] text-sm sm:text-xl text-center md:text-left md:block text-c3 font-f1">
              Browse our unique collection of drinking glasses, home decor and
              more
            </h2>
            <Link
              className="hidden p-4 px-6 text-xl font-bold text-white capitalize rounded-xl md:block bg-c4 w-fit font-f1"
              to={'/Catalog'}
            >
              Shop now
            </Link>
          </div>
          <div className="sm:w-[70%] max-w-[900px] w-full h-fit  md:-ml-20">
            {/* <img src={heroImg} alt="" /> */}
            <Image
              src={heroImg}
              width={'100%'}
              height={'100%'}
              loader={imageLoader}
              loaderOptions={{scale: 1}}
            />
          </div>
          <Link
            to={'/Catalog'}
            className="p-4 mx-auto text-xl text-white rounded-xl bg-c4 w-fit font-f1 md:hidden "
          >
            Shop now
          </Link>
        </div>

        <div
          id="findUs"
          className="absolute bottom-0 z-10 flex-col hidden w-3/4 px-10 pt-4 pb-6 mx-auto -translate-x-1/2 translate-y-1/2 bg-white shadow-xl left-1/2 rounded-xl h-fit"
        >
          <h1 className="justify-between mb-3 text-lg font-bold text-center text-c2 md:text-2xl font-f1">
            Find us on
          </h1>
          <SocialBar style="md:h-16 md:w-16 h-8 w-8 fill-c3" />
        </div>
      </div>

      <div
        id="sec2"
        className="relative flex flex-col w-screen h-full bg-white md:flex-col "
      >
        <div id="CategoryDisplay" className="opacity-0">
          <div className="flex-col justify-between mx-auto mt-40 w-fit md:grid md:grid-cols-3 md:gap-4 ">
            <CategoryBox
              title="Tech"
              description=" Browse our unique collection of drinking glasses, home decor and
        more"
              img="smartphone-backside.png"
              href="/Catalog/Tech"
            />

            <CategoryBox
              title="Kitchen"
              description=" Browse our unique collection of drinking glasses, home decor and
        more"
              img="set-of-spatula.png"
              href="/Catalog/Kitchen"
            />
            <CategoryBox
              title="Decor"
              description=" Browse our unique collection of drinking glasses, home decor and
        more"
              img="decorative-plant.png"
              href="/Catalog/Decor"
            />
          </div>
        </div>

        <FeaturedProductsBox country={countryCode} />
        <div id="promoContainer"></div>
        <PromoCards Handle="all" />
      </div>
    </Layout>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {title, description},
    },
  } = useShopQuery({
    query: SEO_QUERY,
    cache: CacheDays(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title,
        description,
      }}
    />
  );
}

function FeaturedProductsBox() {
  const {languageCode} = useShop();
  const {countryCode = 'US'} = useSession();

  console.log('LANG', languageCode);
  console.log('COnt', countryCode);

  const {data} = useShopQuery({
    query: QUERY,
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

  return (
    <div className="mt-10 mb-10 md:w-[90%] md:mx-auto max-w-[1700px]">
      {products ? (
        <>
          <div className="flex items-center justify-between mb-8 font-medium text-md ">
            <span className="mx-auto text-4xl uppercase md:mx-0 text-c1 ">
              Clearance
            </span>
            <span className="hidden md:inline-flex">
              <Link
                to={`/collections/${products.handle}`}
                className="text-blue-600 hover:underline"
              >
                Shop all
              </Link>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-12 mx-auto mb-8 w-fit md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
          <div className="text-center md:hidden">
            <Link
              to={`/collections/${products.handle}`}
              className="text-blue-600"
            >
              Shop all
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

const SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      description
    }
  }
`;

const QUERY = gql`
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
      products(first: 5) {
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
