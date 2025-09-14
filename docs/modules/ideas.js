export default class {
  #recent = [];
  update(el, _event) {
    let newNum;
    if (this.#recent.length > 50) {
      this.#recent.shift();
    }
    for (let numCheck = 0; numCheck < 100; numCheck += 1) {
      newNum = Math.floor(Math.random() * data.length);
      if (!this.#recent.includes(newNum)) {
        this.#recent.push(newNum);
        break;
      }
    }
    el.innerHTML = data[newNum];
  }
}
