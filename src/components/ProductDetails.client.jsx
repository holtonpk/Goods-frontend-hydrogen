import {
  flattenConnection,
  useProduct,
  useParsedMetafields,
  ProductProvider,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  BuyNowButton,
} from '@shopify/hydrogen/client';
import {AiFillTag} from 'react-icons/ai';
import {RiChatSmile2Fill} from 'react-icons/ri';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdRestartAlt,
  MdOutlineLocalShipping,
  MdOutlineClose,
} from 'react-icons/md';
import ProductOptions from './ProductOptions.client';
import Gallery from './Gallery.client';
import {GoPackage} from 'react-icons/go';
import ReviewStars from './ReviewStarts.client';
import reviewData from '../../public/Reviews.json';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from '@shopify/hydrogen/client';

import {BsFillHandbagFill, BsCartFill} from 'react-icons/bs';
import Reviews from './Reviews.client';
import react, {useEffect} from 'react';
function AddToCartMarkup() {
  const {selectedVariant} = useProduct();
  const isOutOfStock = !selectedVariant.availableForSale;

  const scroll = () => {
    let element = document.getElementById('buyNow');
    var topPos = element.getBoundingClientRect().top + element.offsetHeight;
    var stickPoint = window.innerHeight;
    if (topPos < stickPoint) {
      console.log('stick');
      element.classList.add('stickyButton');
    } else {
      element.classList.remove('stickyButton');
    }
    console.log(window.scrollY);
    console.log(stickPoint * 1.2);

    if (window.scrollY > stickPoint) {
      document.getElementById('supportButton').classList.remove('hidden');
    }
  };
  useEffect(() => {
    if (screen.width <= 1024) {
      document.addEventListener('scroll', scroll);
    }
  });

  return (
    <div className="mb-4 space-y-2 ">
      <Link
        onClick={() => setIsOpen(false)}
        to={'/Contact'}
        id="supportButton"
        className="hidden p-2 bg-black rounded-full w-fit h-fit chatButton fade-in"
      >
        <RiChatSmile2Fill className="w-10 h-10 fill-white" />
      </Link>

      <AddToCartButton className="relative w-full mt-3" disabled={isOutOfStock}>
        <Button
          fullWidth
          variant="contained"
          className="w-full py-2 rounded-full bg-c3 hover:bg-gray-900"
        >
          <div
            id="addButton"
            className="flex flex-row items-center mx-auto w-fit "
          >
            {isOutOfStock ? (
              <p className="text-center text-white">Out of stock</p>
            ) : (
              <>
                <BsFillHandbagFill className="w-4 h-4 mr-3 fill-white" />
                <h1 className="text-lg text-white">ADD TO BAG</h1>
              </>
            )}
          </div>
        </Button>
      </AddToCartButton>
      {isOutOfStock ? (
        <p className="text-center text-black">Available in 2-3 weeks</p>
      ) : (
        <BuyNowButton
          id="buyNow"
          variantId={selectedVariant.id}
          className="relative w-full"
        >
          <Button
            fullWidth
            variant="contained"
            className="w-full py-2 rounded-full bg-c2"
          >
            <div
              id="addButton"
              className="flex flex-row items-center mx-auto w-fit "
            >
              <BsCartFill className="w-4 h-4 mr-3 fill-white" />
              <h1 className="text-lg text-white">BUY NOW</h1>
            </div>
          </Button>
        </BuyNowButton>
      )}
    </div>
  );
}

function ProductPrices() {
  const product = useProduct();

  return (
    <div className="flex flex-row items-center">
      <ProductPrice
        className="mr-3 text-xl font-semibold text-gray-500 line-through"
        priceType="compareAt"
        variantId={product.selectedVariant.id}
      />
      <ProductPrice
        className="mr-3 text-3xl font-semibold text-c4"
        variantId={product.selectedVariant.id}
      />
      <Sale />
    </div>
  );
}
function Sale() {
  const product = useProduct();
  const getSalePercent = () => {
    return Math.round(
      ((product.selectedVariant.compareAtPriceV2.amount -
        product.selectedVariant.priceV2.amount) /
        product.selectedVariant.compareAtPriceV2.amount) *
        100,
    );
  };
  if (product.selectedVariant.compareAtPriceV2)
    return (
      <div className="flex flex-row items-center w-fit">
        <AiFillTag className="w-4 h-4 mr-1 md:h-6 md:w-6 fill-c4" />
        <h1 className="text-c4 text-md md:text-lg whitespace-nowrap">
          {getSalePercent() + '% OFF'}
        </h1>
      </div>
    );
}

export default function ProductDetails({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  return (
    <>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] md:gap-x-8 md:mb-16 w-full bg-gray-200 md:bg-white">
          <Gallery />

          <div>
            <div className="hidden mt-3 md:block">
              <div id="reviews" className="flex flex-row items-center w-fit">
                <ReviewStars stars={4.5} size="h-6 w-6" fill="fill-black" />
                <h2 className="text-lg text-black ">
                  {'(' + reviewData.length + ')'}
                </h2>
              </div>
              <ProductTitle as="h1" className="text-2xl font-bold text-c2 " />
              {/* {product.vendor && (
                  <div className="mb-2 text-sm font-medium text-gray-900">
                    {product.vendor}
                  </div>
                )} */}

              <ProductPrices />
            </div>
            {/* Product Options */}
            <div className="px-4 pt-4 pb-3 mt-5 bg-white md:hidden">
              <div className="flex flex-row justify-between w-full">
                <div
                  id="reviews"
                  className="flex flex-row items-center order-2 w-fit"
                >
                  <ReviewStars stars={4.5} size="h-4 w-4" fill="fill-black" />
                  <h2 className="text-black text-md ">
                    {'(' + reviewData.length + ')'}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <ProductTitle as="h1" className="text-xl font-bold text-c2" />
                  {/* {product.vendor && (
                    <div className="mb-2 text-sm font-medium text-gray-900">
                      {product.vendor}
                    </div>
                  )} */}
                </div>
              </div>
              <span />
              <div className="flex justify-between md:block w-fit">
                <ProductPrices />
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 bg-white border-t-2 border-gray-200 md:px-0 md:border-0 ">
              <ProductOptions />
              <AddToCartMarkup />
              <div className="flex space-x-4 items"></div>
            </div>
            <div className="flex flex-col justify-between w-full p-6 mx-auto my-6 bg-gray-200 h-fit ">
              <div className="flex flex-row items-center mb-6">
                <MdRestartAlt className="w-6 h-6 mr-6 fill-black" />
                <h1 className="font-semibold text-black text-md">
                  Free Return On All Orders
                </h1>
              </div>
              <div className="flex flex-row items-center mb-6">
                <GoPackage className="w-6 h-6 mr-6 fill-black" />
                <h1 className="font-semibold text-black text-md">
                  Free Standard Over $75
                </h1>
              </div>
              <div className="flex flex-row items-center ">
                <MdOutlineLocalShipping className="w-6 h-6 mr-6 fill-black" />
                <h1 className="font-semibold text-black text-md">
                  Free Express Over $150
                </h1>
              </div>
            </div>
            <div className="flex flex-col h-fit descriptionBox">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Description
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <ProductDescription className="px-2 text-xl prose text-black " />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Delivery & Returns
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="px-2 text-xl text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis ab, cumque minus quod optio similique, rerum magnam,
                    facilis voluptate molestiae eaque debitis commodi tempore
                    laboriosam ut error dolorum? Iure, dolorum.Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quis ab, cumque minus
                    quod optio similique, rerum magnam, facilis voluptate
                    molestiae eaque debitis commodi tempore laboriosam ut error
                    dolorum? Iure, dolorum.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis ab, cumque minus quod
                    optio similique, rerum magnam, facilis voluptate molestiae
                    eaque debitis commodi tempore laboriosam ut error dolorum?
                    Iure, dolorum.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <Reviews expanded={null} />
      </ProductProvider>
    </>
  );
}
