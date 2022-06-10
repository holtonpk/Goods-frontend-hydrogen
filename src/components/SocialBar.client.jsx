import React from 'react';
import {
  FaFacebook,
  FaTiktok,
  FaAmazon,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import {useEffect} from 'react';
const SocialBar = ({style}) => {
  useEffect(() => {
    const load = async () => {
      if (typeof window !== undefined) {
        const ScrollMagic = (await import('scrollmagic')).default;
        const controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          triggerElement: '#sec2',
          triggerHook: 0.95,
          reverse: false,
        })

          .setClassToggle('#findUs', 'slide-in-bottom-abs')
          .addTo(controller);

        // new ScrollMagic.Scene({
        //   triggerElement: '#sec2',
        //   triggerHook: 0.4,
        //   reverse: false,
        // })

        //   .setClassToggle('#CategoryDisplay', 'slide-in-bottom')
        //   .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '#promoContainer',
          triggerHook: 0.85,
          reverse: false,
        })

          .setClassToggle('#promo', 'slide-in-bottom')
          .addTo(controller);
      }
    };

    load();
  });
  return (
    <div className="flex flex-row justify-between w-[90%] gap-6 mx-auto ">
      <FaFacebook className={style} />
      <FaTiktok className={style} />
      <FaTwitter className={style} />
      <FaInstagram className={style} />
    </div>
  );
};

export default SocialBar;
