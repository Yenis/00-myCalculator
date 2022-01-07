import { DomHandler } from "./app/domHandler.js";
import { MyCalculator } from "./app/calculator.js";

const myCalculator = new MyCalculator();
const domHandler = new DomHandler(myCalculator.selectOperation, myCalculator.evaluateCalculation);
