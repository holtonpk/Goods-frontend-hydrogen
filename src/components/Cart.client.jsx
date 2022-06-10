import {
  useCart,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  CartShopPayButton,
  CartEstimatedCost,
  useCartLine,
} from '@shopify/hydrogen/client';
import {MdOutlineClose} from 'react-icons/md';
import {Dialog} from '@headlessui/react';
import {useState} from 'react';
import {useCartUI} from './CartUIProvider.client';

import {BUTTON_PRIMARY_CLASSES} from './Button.client';

import * as React from 'react';
import {Box, Drawer, Typography} from '@mui/material';
/**
 * A client component that contains the merchandise that a customer intends to purchase, and the estimated cost associated with the cart
 */
export default function Cart() {
  const {isCartOpen, closeCart} = useCartUI();
  const {totalQuantity} = useCart();
  const [drawer, setDrawer] = useState(true);

  return (
    <>
      {/* <div
        className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
          isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={isCartOpen ? closeCart : null}   md:w-[470px] min-w-[270px]
      > */}
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={closeCart}
        // onOpen={setDrawer(false)}
      >
        <div className="z-20 h-full overflow-y-scroll rounded-b-lg shadow-2xl w-[40vh] md:w-[60vh] bg-gray-50">
          <CartHeader />
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartItems />
              <CartFooter />
            </>
          )}
        </div>

        {/* <div className="absolute w-[250px] h-60 top-0 right-0 bg-red-500"></div> */}
      </Drawer>
    </>
  );
}

function CartHeader() {
  const {closeCart} = useCartUI();
  return (
    <header className="sticky top-0 flex items-center justify-between px-6 py-3 bg-white border-b border-gray-300">
      <button type="button" onClick={closeCart}>
        <MdOutlineClose className="w-8 h-8 fill-black" />
        <span className="sr-only">Close cart</span>
      </button>

      <span className="text-xs text-gray-500">
        Free shipping on orders over $50
      </span>
    </header>
  );
}

function CartItems() {
  return (
    <div className="flex-grow px-7" role="table" aria-label="Shopping cart">
      <div role="row" className="sr-only">
        <div role="columnheader">Product image</div>
        <div role="columnheader">Product details</div>
        <div role="columnheader">Price</div>
      </div>
      <CartLines>
        <LineInCart />
      </CartLines>
    </div>
  );
}

function LineInCart() {
  const {merchandise} = useCartLine();

  return (
    <div
      role="row"
      className="flex text-gray-900 border-b border-gray-300 py-7 last:border-b-0 "
    >
      <div role="cell" className="flex-shrink-0 mr-7">
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className="bg-white border border-black border-opacity-5 rounded-xl "
            options={{width: 98, height: 98, crop: 'center'}}
          />
        </Link>
      </div>
      <div
        role="cell"
        className="flex flex-col items-start justify-between w-full mr-4 flex-grow-1"
      >
        <Link
          to={`/products/${merchandise.product.handle}`}
          className="hover:underline"
        >
          <CartLineProductTitle className="text-lg font-medium" />
        </Link>
        <ul className="space-y-1 text-xs">
          {merchandise.selectedOptions.map(({name, value}) => (
            <li key={name}>
              {name}: {value}
            </li>
          ))}
        </ul>
        <CartLinePrice className="text-md" />
        <CartItemQuantity />
        <CartLineQuantityAdjustButton
          adjust="remove"
          aria-label="Remove from cart"
          className="disabled:pointer-events-all disabled:cursor-wait"
        >
          <h2 className="text-sm text-gray-400">Remove</h2>
        </CartLineQuantityAdjustButton>
      </div>
    </div>
  );
}

function CartItemQuantity() {
  return (
    <div className="flex items-center mt-2 overflow-auto border border-gray-300 rounded ">
      <CartLineQuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
        className="p-2 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
      <CartLineQuantity
        as="div"
        className="p-2 text-xs text-center text-gray-900"
      />
      <CartLineQuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
        className="p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
    </div>
  );
}

function CartFooter() {
  return (
    <footer className="sticky bottom-0 pb-8 border-t border-black border-opacity-5">
      <div className="relative text-gray-900 bg-white h-60 p-7">
        <div role="table" aria-label="Cost summary">
          <div role="row" className="flex justify-between">
            <span className="font-semibold" role="rowheader">
              Subtotal
            </span>
            <CartEstimatedCost
              amountType="subtotal"
              role="cell"
              className="text-right "
            />
          </div>
          <div role="row" className="flex justify-between mt-2">
            <span className="font-semibold" role="rowheader">
              Shipping
            </span>
            <span role="cell" className="uppercase">
              Free
            </span>
          </div>
        </div>
        <CartShopPayButton className="flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md" />
        <CartCheckoutButton className={BUTTON_PRIMARY_CLASSES}>
          Checkout
        </CartCheckoutButton>
      </div>
    </footer>
  );
}

function CartEmpty() {
  const {closeCart} = useCartUI();
  return (
    <div className="flex flex-col p-7">
      <p className="mb-4 text-lg text-center text-gray-500">
        Your cart is empty
      </p>
      <button
        type="button"
        onClick={closeCart}
        className={BUTTON_PRIMARY_CLASSES}
      >
        Continue Shopping
      </button>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
