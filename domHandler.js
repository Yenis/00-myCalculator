class DomHandler {
  constructor(selectOperation, evaluateCalculation) {
    this.initializeScreen();
    this.initializeNumbersAndButtons();
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
    if (number === "." && this.currentNumber.includes(".")) return; // STOLEN
    this.currentNumber = this.currentNumber.toString() + number;
  }

  initializeScreen() {
    this.previousOperandTextElement = document.querySelector(
      "[data-result-display]"
    );
    this.currentOperandTextElement = document.querySelector(
      "[data-operation-display]"
    );
  }

  initializeNumbersAndButtons() {
    this.numberButtonsAll = document.querySelectorAll("[data-number]");
    this.operationButtonAny = document.querySelectorAll(
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

    this.operationButtonAny.forEach((button) => {
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

export { DomHandler };
