class TipCalc {
  static calculate(bill, tip, people) {
    const calcBill = bill / people;
    return [calcBill, calcBill * tip]
  }
}

export default TipCalc;