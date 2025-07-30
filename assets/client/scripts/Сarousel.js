window.onload = (event) => {
    // swiper element
    const swiperElements = document.querySelectorAll('swiper-container');

    // swiper parameters
    const swiperParams = {
        slidesPerView: 1.2,
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
    };

    for(i = 0; i < swiperElements.length; i++) {

        const slidesPerView = swiperElements[i].getAttribute('data-slides-per-view');
        if (slidesPerView) {
            swiperParams.breakpoints[768].slidesPerView = slidesPerView;
        }
        // now we need to assign all parameters to Swiper element
        Object.assign(swiperElements[i], swiperParams);

        // and now initialize it
        swiperElements[i].initialize();
    }

};
