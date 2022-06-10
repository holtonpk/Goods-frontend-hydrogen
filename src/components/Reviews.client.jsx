import React, {useState} from 'react';
import {RiStarSFill, RiStarSLine, RiStarHalfSFill} from 'react-icons/ri';
import ReviewSlider from './ReviewsSlider.client';
import ReviewStars from './ReviewStarts.client';
import reviewData from '../../public/Reviews.json';

const Reviews = ({expanded}) => {
  const [visibleReviews, setVisibleReviews] = useState(expanded);

  console.log('rdata', reviewData);

  const getAverage = (param) => {
    let allReviews = 0;
    for (let review of reviewData) {
      allReviews += review[param];
    }
    return Math.round((allReviews / reviewData.length) * 10) / 10;
  };

  const configPercent = () => {
    const totalReviews = reviewData.length;
    const starData = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    for (let review of reviewData) {
      let roundedStar = Math.floor(review.stars);
      starData[roundedStar] += 1;
    }
    let starChart = [];
    Object.keys(starData).map((numberOfStars, i) => {
      starChart.push(
        <div key={i} className="flex flex-row items-center mt-3">
          <h1 className="mx-auto text-xl text-black w-fit whitespace-nowrap">
            {numberOfStars + ' star'}
          </h1>
          <div className="relative w-40 h-3 mx-3 bg-gray-300 rounded-full md:w-80 ">
            <span
              id={numberOfStars + '-slider'}
              style={{
                width: (starData[numberOfStars] / totalReviews) * 100 + '%',
              }}
              className="absolute h-full bg-c3 rounded-3xl"
            ></span>
          </div>
          <h1 className="mx-auto text-lg text-black w-fit">
            {(starData[numberOfStars] / totalReviews) * 100 + '%'}
          </h1>
        </div>,
      );
    });
    return starChart.reverse();
  };

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto my-20 ">
      <h1 className="mx-auto text-4xl font-bold text-black md:mb-6 md:text-5xl w-fit ">
        Reviews
      </h1>
      <div className="flex flex-col items-center w-3/4 xl:flex-row md:w-full md:mx-auto md:justify-between">
        <div className="flex flex-col items-center mb-6 md:mb-0 ">
          <h1 className="mx-auto font-bold text-black text-7xl md:text-9xl w-fit ">
            {getAverage('stars')}
          </h1>
          <ReviewStars
            stars={getAverage('stars')}
            size="h-8 w-8"
            fill="fill-c3"
          />
          <h1 className="mx-auto text-xl font-bold text-black w-fit ">
            {reviewData.length + ' Reviews'}
          </h1>
        </div>
        <div className="flex flex-col items-start mb-6 md:mb-0">
          {configPercent()}
        </div>
        <div className="flex flex-col items-center w-5/6 mb-6 xl:w-1/3 xl:mb-0">
          <div className="flex flex-col w-full xl:w-3/4">
            <h1 className="float-left text-xl font-bold text-black w-fit">
              Satisfaction
            </h1>

            <ReviewSlider
              position={getAverage('satisfaction')}
              width={'w-full'}
            />

            <div className="flex flex-row justify-between w-full">
              <h1 className="text-lg text-c1 w-fit">Unsatisfied</h1>
              <h1 className="text-lg text-c1 w-fit ">Satisfied</h1>
            </div>
          </div>
          <div className="flex flex-col w-full mt-3 xl:w-3/4">
            <h1 className="float-left text-xl font-bold text-black w-fit">
              Delivery Speed
            </h1>
            <ReviewSlider position={getAverage('delivery')} width={'w-full'} />
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-lg text-c1 w-fit">Slow</h1>
              <h1 className="text-lg text-c1 w-fit ">Fast</h1>
            </div>
          </div>
          <div className="flex flex-col w-full mt-3 xl:w-3/4">
            <h1 className="float-left text-xl font-bold text-black w-fit">
              Value
            </h1>
            <ReviewSlider position={getAverage('value')} width={'w-full'} />
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-lg text-c1 w-fit">Poor</h1>
              <h1 className="text-lg text-c1 w-fit ">Excellent</h1>
            </div>
          </div>
        </div>
      </div>

      {reviewData.slice(0, visibleReviews).map((review, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-start w-full p-8 mx-auto mt-6 bg-white shadow-xl"
          >
            <div className="mb-3">
              <ReviewStars stars={review.stars} size="h-8 w-8" fill="fill-c3" />
            </div>
            <h1 className="text-4xl font-bold text-black w-fit">
              {review.title}
            </h1>
            <h3 className="mb-3 text-lg text-black md:w-1/2">{review.body}</h3>

            <div className="flex flex-col items-center justify-between w-11/12 py-4 mb-6 xl:items-center xl:flex-row">
              <div className="flex flex-col w-full xl:w-fit ">
                <h1 className="float-left text-xl font-bold text-black w-fit">
                  Satisfaction
                </h1>

                <ReviewSlider
                  position={review.satisfaction}
                  width={'w-full xl:w-60'}
                />
                <div className="flex flex-row justify-between w-full">
                  <h1 className="text-lg text-black w-fit">Unsatisfied</h1>
                  <h1 className="text-lg text-black w-fit ">Satisfied</h1>
                </div>
              </div>
              <div className="flex flex-col w-full mt-3 xl:mt-0 xl:w-fit ">
                <h1 className="float-left text-xl font-bold text-black w-fit">
                  Delivery Speed
                </h1>
                <ReviewSlider
                  position={review.delivery}
                  width={'w-full xl:w-60'}
                />
                <div className="flex flex-row justify-between w-full">
                  <h1 className="text-lg text-black w-fit">Slow</h1>
                  <h1 className="text-lg text-black w-fit ">Fast</h1>
                </div>
              </div>
              <div className="flex flex-col w-full mt-3 xl:mt-0 xl:w-fit ">
                <h1 className="float-left text-xl font-bold text-black w-fit">
                  Value
                </h1>
                <ReviewSlider
                  position={review.value}
                  width={'w-full xl:w-60'}
                />
                <div className="flex flex-row justify-between w-full">
                  <h1 className="text-lg text-black w-fit">Poor</h1>
                  <h1 className="text-lg text-black w-fit ">Excellent</h1>
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-black w-fit ">
              {review.name}
            </h1>
            <h1 className="text-xl text-c3 w-fit">{review.date}</h1>
          </div>
        );
      })}
      <div className="flex flex-col items-center w-full">
        {(() => {
          if (visibleReviews) {
            return (
              <>
                <h2 className="mx-auto mt-10 mb-3 text-lg text-c3 w-fit h-fit">
                  {'Showing ' + visibleReviews + ' of ' + reviewData.length}
                </h2>
                <button
                  id="showMore"
                  onClick={() => {
                    if (visibleReviews + 3 > reviewData.length) {
                      setVisibleReviews(reviewData.length);
                      document
                        .getElementById('showMore')
                        .classList.add('hidden');
                    } else {
                      setVisibleReviews(visibleReviews + 3);
                    }
                  }}
                  className="px-6 py-2 text-xl text-white rounded-full bg-c3 w-fit h-fit "
                >
                  Load More
                </button>
              </>
            );
          } else {
            return (
              <>
                <button
                  id="showMore"
                  onClick={() => {
                    setVisibleReviews(3);
                  }}
                  className="px-6 py-3 mt-6 text-xl text-white rounded-full bg-c3 w-fit h-fit"
                >
                  Show Reviews
                </button>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Reviews;
