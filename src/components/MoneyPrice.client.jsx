import {useMoney} from '@shopify/hydrogen/client';

/**
 * A client component that defines the currency code, currency symbol, and amount of a product
 */
export default function MoneyPrice({money}) {
  const {currencyCode, currencyNarrowSymbol, amount} = useMoney(money);
  return (
    <span className="font-bold text-black  xsm:text-xl">
      {currencyNarrowSymbol}
      {amount}
      &nbsp;
      {currencyCode}
    </span>
  );
}
