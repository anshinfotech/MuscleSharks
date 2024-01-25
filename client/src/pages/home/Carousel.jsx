import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = () => {
  const options={
    loop:true,
    // margin:10,
    arrows:false,
    dots:false,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
  }
  return (
    <>
      <OwlCarousel className="owl-theme" {...options}>
        <div class="item">
        <img src="/ms/cre.jpg" alt="..." className="bg-contain w-full h-full" />
        </div>
        <div class="item">
        <img src="/ms/fat.jpg" alt="..." className="bg-contain w-full h-full" />
        </div>
        <div class="item">
        <img src="/ms/arg.jpg" alt="..." className="bg-contain w-full h-full" />
        </div>
        <div class="item">
        <img src="/ms/eaa.jpg" alt="..." className="bg-contain w-full h-full" />
        </div>
        <div class="item">
        <img
          src="/ms/omega.jpg"
          alt="..."
          className="bg-contain w-full h-full"
        />
        </div>
        <div class="item">
         <img
          src="/ms/IMG-20231212-WA0005.jpg"
          alt="..."
          className="bg-contain w-full h-full"
        />
        </div>
        <div class="item">
        <img src="/ms/pre.jpg" alt="..." className="bg-contain w-full h-full" />
        </div>
        <div class="item">
        <img
          src="/ms/test.jpg"
          alt="..."
          className="bg-contain w-full h-full"
        />
        </div>
        <div class="item">
        <img
          src="/ms/IMG-20231212-WA0001.jpg"
          alt="..."
          className="bg-contain w-full h-full"
        />
        </div>
        <div class="item">
          <img
          src="/ms/IMG-20231212-WA0003.jpg"
          alt="..."
          className="bg-contain w-full h-full"
        />
        </div>
        <div class="item">
          <img
          src="/ms/IMG-20231212-WA0004.jpg"
          alt="..."
          className="bg-contain w-full h-full"
        />
        </div>
      </OwlCarousel>
      ;
    </>
  );
};

export default Carousel;
