import Header from "./Header.js";
import TabsCollection from "./Tabs.js";
import VideoPlayerCollection from "./VideoPlayer.js";
import ExpandableContentCollection from "./ExpandableContent.js";
import InputMaskCollection from "./InputMask.js";
import SelectCollection from "./Select.js";
import defineScrollBarWidthCSSVar from "./utils/defineScrollBarWidthCSSVar.js";
import TextAnimation from "./TextAnimation.js";
import Carousel from "./Сarousel.js";

document.addEventListener("DOMContentLoaded", async () => {
  setTimeout(() => {
    new Header();
    new TabsCollection();
    new VideoPlayerCollection();
    new ExpandableContentCollection();
    new InputMaskCollection();
    new SelectCollection();
    new TextAnimation("[data-animation-text]").init();
    new Carousel('[data-carousel]', {
      slidesPerView: 1,
      navigation: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: true,
      paginationClickable: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      },
      injectStyles: [
        `
      .swiper-pagination {
          position: static;
          margin-top: 32px;
      }
      .swiper-pagination-bullet-active {
          width: 14px;
          height: 14px;
          vertical-align: middle;
      }
      `,
      ],
      on: {
        init() {
          // ...
        },
      },
    });


    defineScrollBarWidthCSSVar();
  }, 1000); // Delay to ensure all elements are loaded
});
