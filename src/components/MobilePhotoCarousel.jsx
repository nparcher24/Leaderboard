import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MobilePhotoCarousel(props) {
  const {
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
  } = props.imageDict;

  function RightArrow(props) {
    return (
      <button
        class="h-16 w-16 backdrop-filter backdrop-blur-lg rounded-full absolute top-40 md:top-32 right-2"
        style={props.style}
        onClick={props.onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 stroke-current text-white my-auto mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          // stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  }

  const LeftArrow = (props) => {
    return (
      <button
        class="h-16 w-16 backdrop-filter backdrop-blur-lg rounded-full absolute top-40 md:top-32 left-2 z-50"
        style={props.style}
        onClick={props.onClick}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 stroke-current text-white my-auto mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          // stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <div className="max-w-3xl mx-auto ">
      <Slider {...settings}>
        <img
          class="w-full h-96 object-cover"
          src={firstImage.url}
          alt={firstImage.altText}
        />
        <img
          class="w-full  h-96 object-cover"
          src={secondImage.url}
          alt={secondImage.altText}
        />
        <img
          class="w-full  h-96 object-cover"
          src={thirdImage.url}
          alt={thirdImage.altText}
        />
        <img
          class="w-full  h-96 object-cover"
          src={fourthImage.url}
          alt={fourthImage.altText}
        />
        <img
          class="w-full  h-96 object-cover"
          src={fifthImage.url}
          alt={fifthImage.altText}
        />
      </Slider>
    </div>
  );
}
