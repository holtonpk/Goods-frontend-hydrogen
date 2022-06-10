import {useProduct, MediaFile, Image} from '@shopify/hydrogen/client';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import {useState, useEffect} from 'react';
/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export default function Gallery() {
  const {media, selectedVariant} = useProduct();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionTrack, setScrollPositionTrack] = useState(0);

  const featuredMedia = selectedVariant.image || media[0]?.image;
  const featuredMediaSrc = featuredMedia?.url.split('?')[0];
  const galleryMedia = media.filter((med) => {
    if (
      med.mediaContentType === MODEL_3D_TYPE ||
      med.mediaContentType === VIDEO_TYPE ||
      med.mediaContentType === EXTERNAL_VIDEO_TYPE
    ) {
      return true;
    }
    return !med.image.url.includes(featuredMediaSrc);
  });

  if (!media.length) {
    return null;
  }

  useEffect(() => {
    let imgScroll = document.getElementById('imgScroll');
    imgScroll.scrollLeft = imgScroll.clientWidth * scrollPosition - 1;

    imgScroll.addEventListener('scroll', () => {
      if (
        imgScroll.scrollLeft % imgScroll.clientWidth == 0 &&
        !(
          Math.floor(imgScroll.scrollLeft / imgScroll.clientWidth) ==
          scrollPosition
        )
      ) {
        setScrollPosition(
          Math.floor(imgScroll.scrollLeft / imgScroll.clientWidth),
        );
      }
    });
  }, [scrollPosition]);

  return (
    <div className="relative flex-col w-full h-fit ">
      <div className="relative w-fit h-fit">
        {(() => {
          if (scrollPosition != galleryMedia.length) {
            return (
              <button
                onClick={() => {
                  let imgScroll = document.getElementById('imgScroll');
                  imgScroll.scrollLeft += imgScroll.clientWidth;
                  setScrollPosition(scrollPosition + 1);
                }}
                className="absolute z-20 p-1 -ml-2 -translate-x-full bg-white rounded-full md:hidden left-full top-1/2 "
              >
                <MdOutlineKeyboardArrowRight className="w-6 h-6 mx-auto fill-c1" />
              </button>
            );
          }
        })()}

        {(() => {
          if (scrollPosition != 0) {
            return (
              <button
                onClick={() => {
                  let imgScroll = document.getElementById('imgScroll');
                  imgScroll.scrollLeft -= imgScroll.clientWidth;
                  setScrollPosition(scrollPosition - 1);
                }}
                className="absolute left-0 z-20 p-1 ml-2 bg-white rounded-full md:hidden top-1/2"
              >
                <MdOutlineKeyboardArrowLeft className="w-6 h-6 fill-c1" />
              </button>
            );
          }
        })()}

        <div
          id="imgScroll"
          className="md:gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar  scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start relative"
          tabIndex="-1"
        >
          <Image
            fetchpriority="high"
            data={selectedVariant.image}
            className="w-[100vw] md:w-full h-full md:h-auto object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2  md:rounded-lg"
          />
          {galleryMedia.map((med) => {
            let extraProps = {};
            if (med.mediaContentType === MODEL_3D_TYPE) {
              extraProps = MODEL_3D_PROPS;
            }

            return (
              <MediaFile
                tabIndex="0"
                key={med.id || med.image.id}
                className="w-[100vw] md:w-auto h-full md:h-auto object-cover object-center transition-all snap-start  flex-shrink-0 md:rounded-lg"
                data={med}
                fetchpriority="low"
                options={{
                  height: '485',
                  crop: 'center',
                }}
                {...extraProps}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full pl-2 overflow-x-scroll no-scrollbar md:hidden">
        <div className="flex flex-row mt-2 w-fit">
          <button
            onClick={() => setScrollPosition(0)}
            className="w-20 h-20 mr-3"
          >
            {(() => {
              let border = '';
              if (scrollPosition == 0) {
                border = 'border-4';
              }
              return (
                <Image
                  fetchpriority="high"
                  data={selectedVariant.image}
                  className={
                    'w-20 h-20 md:w-auto rounded-3xl  md:h-auto object-cover object-center transition-all snap-start border-c1 flex-shrink-0  ' +
                    border
                  }
                />
              );
            })()}
          </button>
          {galleryMedia.map((med, i) => {
            let extraProps = {};
            let border = '';
            if (scrollPosition == i + 1) {
              border = 'border-4';
            }

            return (
              <button
                onClick={() => setScrollPosition(i + 1)}
                key={med.id || med.image.id}
                className="w-20 h-20 mr-3 "
              >
                <MediaFile
                  tabIndex="0"
                  className={
                    'w-20 h-20 md:w-auto rounded-3xl  md:h-auto object-cover object-center transition-all snap-start border-c1 flex-shrink-0   ' +
                    border
                  }
                  data={med}
                  fetchpriority="low"
                  options={{
                    height: '485',
                    crop: 'center',
                  }}
                  {...extraProps}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MODEL_3D_TYPE = 'MODEL_3D';
const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';
