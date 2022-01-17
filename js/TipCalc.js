class TipCalc {
  static calculate(bill, tip, people) {
    const calcBill = bill / people;

    const formatMoney = num => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

    return [formatMoney(calcBill), formatMoney(calcBill * tip)]
  }
}

export default TipCalc;