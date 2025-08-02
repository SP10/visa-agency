class Carousel {
    constructor(selector, config = {}) {
        this.selector = selector || '[data-carousel]';
        this.config = config;
        this.init();
    }

    init() {
        let element = document.querySelectorAll(this.selector);
        element.forEach((el) => {
            const slidesPerView =  el.getAttribute('data-slides-per-view');
            if (slidesPerView) {
                this.config.breakpoints[768].slidesPerView = slidesPerView;
            }
            // now we need to assign all parameters to Swiper element
            Object.assign(el,  this.config);

            // and now initialize it
            el.initialize();
        });
    }
}

export default Carousel
