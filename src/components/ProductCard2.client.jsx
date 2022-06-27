import {Suspense} from 'react';
import {Image, Link} from '@shopify/hydrogen';
import {useMoney} from '@shopify/hydrogen/client';
import {AiFillTag} from 'react-icons/ai';

// import MoneyCompareAtPrice from './MoneyCompareAtPrice.client';
// import MoneyPrice from './MoneyPrice.client';
import SaleTag from './SaleTag.client';
import ReviewStars from './ReviewStarts.client';
/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCard2({product}) {
  const selectedVariant = product.variants.edges[0].node;
  if (selectedVariant == null) {
    return null;
  }
  console.log('/products/' + product.handle);

  return (
    <button className="relative flex flex-col items-center w-full h-full p-2 mb-4 lg:p-4 bg-back-2 rounded-xl xlg:w-full text-md hoverAnimation">
      {/* <Link to={'/products/' + product.handle}> */}
      <div className="relative  w-full top-0 h-[60%] lg:h-[70%] ">
        <Image
          className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover rounded-t-xl"
          data={selectedVariant.image}
        />
        {!selectedVariant?.availableForSale && (
          <div className="absolute px-4 py-3 text-xs bg-black text-c2 top-3 left-3 rounded-3xl">
            Out of stock
          </div>
        )}
      </div>
      <div className=" h-[50%] lg:h-[30%] w-[90%] flex flex-col  justify-between  mt-2 lg:mx-0">
        {/* {product.vendor && (
            <p className="text-gray-900 font-medium text-xs lg:text-sm mb-0.5">
              {product.vendor}
            </p>
          )} */}
        <div className="flex flex-col justify-between it lg:items-center lg:flex-row ">
          <div className="flex flex-col w-full lg:w-[50%] ">
            {(() => {
              if (selectedVariant.compareAtPriceV2) {
                let salePercent = Math.round(
                  ((selectedVariant.compareAtPriceV2.amount -
                    selectedVariant.priceV2.amount) /
                    selectedVariant.compareAtPriceV2.amount) *
                    100,
                );

                return (
                  <div className="z-0 flex flex-row items-center w-fit h-fit">
                    <AiFillTag className="w-3 h-3 mr-1 md:h-5 md:w-5 fill-c4" />
                    <h1 className="text-xs text-c4 whitespace-nowrap md:text-sm">
                      {salePercent + '% OFF'}
                    </h1>
                  </div>
                );
              }
            })()}
            <div className="overflow-hidden font-semibold text-left text-c2 text-md lg:text-xl">
              {product.title}
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end w-fit ">
            <Suspense fallback={null}>
              <MoneyPrice money={selectedVariant.priceV2} />
            </Suspense>
            {selectedVariant.compareAtPriceV2 && (
              <Suspense fallback={null}>
                <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </button>
  );
}

function MoneyPrice({money}) {
  const {currencyCode, currencyNarrowSymbol, amount} = useMoney(money);
  return (
    <span className="font-bold text-c3 text-md lg:text-lg">
      {currencyNarrowSymbol}
      {amount}
      &nbsp;
      {currencyCode}
    </span>
  );
}

function MoneyCompareAtPrice({money}) {
  const {amount, currencyNarrowSymbol} = useMoney(money);
  return (
    <span className="line-through lg:text-lg text-sm mr-2.5 text-gray-500">
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
}
