import {Suspense} from 'react';
import {Image, Link} from '@shopify/hydrogen';
import {AiFillTag} from 'react-icons/ai';
import MoneyCompareAtPrice from './MoneyCompareAtPrice.client';
import MoneyPrice from './MoneyPrice.client';
import SaleTag from './SaleTag.client';
import ReviewStars from './ReviewStarts.client';
/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCard({product}) {
  const selectedVariant = product.variants.edges[0].node;
  if (selectedVariant == null) {
    return null;
  }

  return (
    <div className="relative w-[150px]  xsm:w-[200px] xsm:min-h-[300px] h-fit  pb-4 mx-auto mb-4 overflow-hidden bg-white shadow-xl text-md md:mx-0 rounded-3xl ">
      {(() => {
        if (selectedVariant.compareAtPriceV2) {
          let salePercent = Math.round(
            ((selectedVariant.compareAtPriceV2.amount -
              selectedVariant.priceV2.amount) /
              selectedVariant.compareAtPriceV2.amount) *
              100,
          );

          return (
            <div className="absolute top-0 left-0 z-10 p-2 rounded-lg bg-c3 w-fit md:w-36 h-fit">
              <SaleTag salePercent={salePercent} />
            </div>
          );
        }
      })()}
      <Link to={`/products/${product.handle}`}>
        <div className="relative flex items-center justify-center object-cover w-full xsm:h-[200px]  h-[150px]">
          <Image
            className="absolute top-0 object-center w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover rounded-t-3xl hover:scale-110"
            data={selectedVariant.image}
          />
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className="absolute px-4 py-3 text-xs text-white bg-black top-3 left-3 rounded-3xl">
              Out of stock
            </div>
          )}
        </div>
        <div className="px-6 pl-2 w-fit md:mx-0">
          {/* {product.vendor && (
            <p className="text-gray-900 font-medium text-xs md:text-sm mb-0.5">
              {product.vendor}
            </p>
          )} */}

          <span className="text-c2 font-semibold mb-0.5 xsm:text-xl text-sm w-[60%]">
            {product.title}
          </span>

          <div
            id="reviews"
            className="flex flex-row items-center order-2 w-fit"
          >
            <ReviewStars
              stars={4.5}
              size="xsm:h-6 xsm:w-6 h-3 w-3"
              fill="fill-yellow-500"
            />
            <h2 className="text-xs text-black whitespace-nowrap xsm:text-lg ">
              4.0 (12)
              {/* {'(' + reviewData.length + ')'} */}
            </h2>
          </div>

          <div className="flex flex-col xsm:items-center xsm:flex-row">
            {selectedVariant.compareAtPriceV2 && (
              <Suspense fallback={null}>
                <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
              </Suspense>
            )}
            <Suspense fallback={null}>
              <MoneyPrice money={selectedVariant.priceV2} />
            </Suspense>
          </div>
        </div>
      </Link>
    </div>
  );
}
