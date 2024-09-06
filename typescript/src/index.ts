import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";

const circle: Shape = newCircle(3)
const renderer = newRenderer(circle)
renderer.draw();