import { DomHandler } from "./domHandler.js";

class MyCalculator {
  constructor() {
    this.domHandler = new DomHandler(
      this.selectOperation,
      this.evaluateCalculation
    );
    this.currentNumber = DomHandler.currentNumber;
    this.previousNumber = DomHandler.previousNumber;
  }

  selectOperation(selectedOperation) {
    if (this.currentNumber === "") return;
    if (this.previousNumber !== "") {
      this.currentNumber = this.evaluateCalculation(
        this.previousNumber,
        this.currentNumber
      );
      this.previousNumber = "";
    }
    this.selectedOperation = selectedOperation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  evaluateCalculation(prev, curr) {
    if (!prev || !curr) return;
    if (this.selectedOperation == "+") {
      return parseFloat(prev) + parseFloat(curr);
    } else if (this.selectedOperation == "-") {
      return parseFloat(prev) - parseFloat(curr);
    } else if (this.selectedOperation == "*") {
      return parseFloat(prev) * parseFloat(curr);
    } else if (this.selectedOperation == "/") {
      return parseFloat(prev) / parseFloat(curr);
    } else if (this.selectedOperation == "%") {
      return (parseFloat(prev) * parseFloat(curr)) / 100;
    } else {
      return;
    }
  }
}

const myCalculator = new MyCalculator();
