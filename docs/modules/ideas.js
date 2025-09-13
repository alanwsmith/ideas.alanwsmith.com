export default class {
  #currentIndex = 0;
  update(el, _event) {
    for (let numCheck = 0; numCheck < 100; numCheck += 1) {
      const newNum = Math.floor(Math.random() * data.length);
      if (newNum !== this.#currentIndex) {
        this.#currentIndex = newNum;
        el.innerHTML = data[this.#currentIndex];
        break;
      }
    }
  }
}
