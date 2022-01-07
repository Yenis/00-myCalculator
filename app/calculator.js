// trebas imati negdje kod koji ce povezati sve,
// a ne da ti kalkulator ima direktu vezu na dom handler.
// kalkulator treba samo da radi kalkulaciju, ne treba da zna za bilo kakav domHandler

export class MyCalculator {
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
