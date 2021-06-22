import randomColor from "randomColor";
import { randomNumber } from "../randomNumber";
import { figures } from "../index";

export default class Triangle {
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
      .insertAdjacentHTML("beforeend", `<div class="triangle"></div>`);
    return document.querySelector(".triangle:last-child");
  }
  #setStyling() {
    const styles = {
      bottom: this.#y + "px",
      left: this.#x + "px",
      borderLeft: this.#width / 2 + "px solid transparent",
      borderRight: this.#width / 2 + "px solid transparent",
      borderBottom: this.#width + "px solid " + randomColor(),
    };
    Object.assign(this.htmlRef.style, styles);
  }
  #add() {
    figures.push({
      figure: "triangle",
      htmlRef: this.htmlRef,
    });
  }
}
