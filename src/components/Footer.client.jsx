import {Link} from '@shopify/hydrogen';
import logo from '../../public/goodslogo.svg';
export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo">
      <div className="flex flex-row items-center w-full py-3 md:py-6 bg-back-1 h-fit">
        <Link className="relative mx-auto " to="/">
          <img src={logo} alt="" className="w-[100px] md:w-[200px] h-fit" />
        </Link>
      </div>

      <div className="px-6 py-2 bg-back-1 md:px-8 md:mb-0">
        <p className="mx-auto text-xs text-center text-c1 md:text-lg w-fit md:text-left">
          © {new Date().getFullYear()} | goods co. | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
