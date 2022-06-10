import {useCartUI} from './CartUIProvider.client';
import {IoPersonOutline, IoBagHandleOutline} from 'react-icons/io5';
import {useCart} from '@shopify/hydrogen/client';
/**
 * A client component that defines the behavior when a user toggles a cart
 */
export default function CartToggle({handleClick}) {
  const cartUI = useCartUI();
  const {totalQuantity} = useCart();

  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const {isCartOpen, toggleCart} = cartUI;

  return (
    <button
      type="button"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      className="relative flex flex-col items-center md:p-2 md:border-c2 md:border- md:rounded-full text-c2 navButton border-c2 w-fit h-fit"
      onClick={() => {
        toggleCart();
        handleClick();
      }}
    >
      <IoBagHandleOutline
        id="cartIcon"
        className="w-6 h-6 text-c2 navButtonIcon"
      />
      {totalQuantity != 0 ? (
        <div className="absolute flex flex-row items-center w-5 h-5 mx-auto text-center text-white -translate-x-1/2 -translate-y-1/2 rounded-full md:top-2 bg-c2 md:-translate-x-full left-3/4 md:left-full">
          <h2 className="mx-auto text-sm">{totalQuantity}</h2>
        </div>
      ) : (
        <></>
      )}
      <h1 className="absolute hidden mt-4 text-c2 font-f1 text-md top-6">
        Bag
      </h1>
    </button>
  );
}
