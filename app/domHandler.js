export class DomHandler {
  constructor(selectOperation, evaluateCalculation) {
    this.initializeDomElements();
    this.initializeEventListeners();
    this.currentNumber = "";
    this.previousNumber = "";
    this.selectOperation = selectOperation;
    this.evaluateCalculation = evaluateCalculation;
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentNumber;
    if (this.selectedOperation) {
      this.previousOperandTextElement.innerText = `${this.previousNumber} ${this.selectedOperation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
  joinNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number;
  }
  initializeDomElements() {
    this.previousOperandTextElement = document.querySelector(
      "[data-result-display]"
    );
    this.currentOperandTextElement = document.querySelector(
      "[data-operation-display]"
    );
    this.numberButtonsAll = document.querySelectorAll("[data-number]");
    this.operationButtons = document.querySelectorAll(
      "[data-operation-button]"
    );
    this.equalsButton = document.querySelector("[data-equals-button]");
    this.deleteButton = document.querySelector("[data-delete-button]");
    this.clearButton = document.querySelector("[data-clear-button]");
  }
  initializeEventListeners() {
    this.numberButtonsAll.forEach((button) => {
      button.addEventListener("click", () => {
        this.joinNumber(button.innerText);
        this.updateDisplay();
      });
    });
    this.operationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.selectOperation(button.innerText);
        this.updateDisplay();
      });
    });
    this.equalsButton.addEventListener("click", () => {
      this.currentNumber = this.evaluateCalculation(
        this.previousNumber,
        this.currentNumber
      );
      this.previousNumber = "";
      this.updateDisplay();
    });
    this.clearButton.addEventListener("click", () => {
      this.currentNumber = "";
      this.previousNumber = "";
      this.updateDisplay();
    });
    this.deleteButton.addEventListener("click", () => {
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
      this.updateDisplay();
    });
  }
}
