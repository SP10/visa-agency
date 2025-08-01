class TextAnimation {
  constructor(selector) {
    this.textElements = document.querySelectorAll(selector);
    this.windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Функція для перевірки видимості елементів
  checkVisibility() {
    this.textElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Якщо елемент хоча б частково у видимій області
      if (rect.top <= this.windowHeight * 0.8 && rect.bottom >= 0) {
        element.classList.add("active");
      }
    });
  }

  // Обробник події скролу
  handleScroll() {
    this.checkVisibility();
  }

  // Ініціалізація: додаємо слухача подій та викликаємо перевірку
  init() {
    window.addEventListener("scroll", this.handleScroll);
    this.checkVisibility();
  }
}

export default TextAnimation;
