import "../css/style.scss";
import Circle from "./classes/Circle";
import Square from "./classes/Square";
import Triangle from "./classes/Triangle";
import { randomNumber } from "./randomNumber";

const split = () => {
  const root = document.querySelector("#root");
  root.insertAdjacentHTML(
    "afterbegin",
    `<div id="vl"></div><div id="hl"></div>`
  );
  const vl = document.querySelector("#vl");
  const hl = document.querySelector("#hl");
  const stylesVl = {
    position: "absolute",
    left: "50vw",
    width: "1px",
    height: "100%",
    backgroundColor: "gray",
  };
  const stylesHl = {
    position: "absolute",
    top: "50vh",
    width: "100vw",
    height: "1px",
    backgroundColor: "gray",
  };
  Object.assign(vl.style, stylesVl);
  Object.assign(hl.style, stylesHl);
};

split();

export const figures = [];
const counted = [
  { id: "0", figure: "square", count: 0 },
  { id: "1", figure: "circle", count: 0 },
  { id: "2", figure: "triangle", count: 0 },
];

function createFigure() {
  const i = randomNumber(1, 3);
  if (i === 1) {
    new Square();
    counted[0].count++;
  } else if (i === 2) {
    new Circle();
    counted[1].count++;
  } else {
    new Triangle();
    counted[2].count++;
  }
  if (figures.length === 50) {
    clearInterval(appear);
    winner();
  }
  count();
  console.log(figures);
}

const appear = setInterval(createFigure, 1000);

document.querySelector("#root").insertAdjacentHTML(
  "afterbegin",
  `<div id="counter"><ul>
    <li id="nb-square">Number of squares: <span id=countSquares>0</span></li>
    <li id="nb-circle">Number of circles: <span id=countCircles>0</span></li>
    <li id="nb-triangle">Number of triangles: <span id=countTriangles>0</span></li>
    </ul></div>`
);

function count() {
  document.querySelector("#countSquares").innerHTML = counted[0].count;
  document.querySelector("#countCircles").innerHTML = counted[1].count;
  document.querySelector("#countTriangles").innerHTML = counted[2].count;
}

function winner() {
  const id = [...counted].sort((a, b) => b.count - a.count)[0].figure;
  document.querySelector("#nb-" + id).classList.add("won");
}
