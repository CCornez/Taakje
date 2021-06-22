import randomColor from "randomcolor";
import { randomNumber } from "../randomNumber";
import { figures } from "../index";

export default class Circle {
  #radius;
  #margin;
  #x;
  #y;
  constructor() {
    this.#radius = randomNumber(50, 100);
    this.#margin = 10 + this.#radius;
    this.#x = randomNumber(10, window.innerWidth / 2 - this.#margin);
    this.#y = randomNumber(10, window.innerHeight / 2 - this.#margin);
    this.htmlRef = this.#init();
    this.#setStyling();
    this.#add();
  }
  #init() {
    document
      .querySelector("#root")
      .insertAdjacentHTML("beforeend", `<div class="circle"></div>`);
    return document.querySelector(".circle:last-child");
  }
  #setStyling() {
    const styles = {
      top: this.#y + "px",
      right: this.#x + "px",
      width: this.#radius + "px",
      height: this.#radius + "px",
      backgroundColor: randomColor(),
    };
    Object.assign(this.htmlRef.style, styles);
  }
  #add() {
    figures.push({
      figure: "circle",
      htmlRef: this.htmlRef,
    });
  }
}
