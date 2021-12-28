class InitializeScreenButtons {
    constructor() {
        this.initializeScreen();
        this.initializeNumbersAndButtons();
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
}
export { InitializeScreenButtons }