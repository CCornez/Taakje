import randomColor from "randomcolor";
import { randomNumber } from "../randomNumber";
import { figures } from "../index";

export default class Square {
  #width;
  #margin;
  #x;
  #y;
  constructor() {
    this.#width = randomNumber(50, 100);
    this.#margin = 10 + this.#width;
    this.#x = randomNumber(10, window.innerWidth / 2 - this.#margin);
    this.#y = randomNumber(10, window.innerHeight / 2 - this.#margin);
    this.htmlRef = this.#init();
    this.#setStyling();
    this.#add();
  }
  #init() {
    document
      .querySelector("#root")
      .insertAdjacentHTML("beforeend", `<div class="square"></div>`);
    return document.querySelector(".square:last-child");
  }
  #setStyling() {
    const styles = {
      top: this.#y + "px",
      left: this.#x + "px",
      width: this.#width + "px",
      height: this.#width + "px",
      backgroundColor: randomColor(),
    };
    Object.assign(this.htmlRef.style, styles);
  }
  #add() {
    figures.push({
      figure: "square",
      htmlRef: this.htmlRef,
    });
  }
}
