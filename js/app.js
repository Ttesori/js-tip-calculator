import TipCalc from './TipCalc.js';
import UI from './UI.js';

const state = {
  bill: 0,
  tip: 5,
  numPeople: 0,
  resultTip: 0,
  resultTotal: 0
}

const setUpEventListeners = () => {
  UI.els.percentsContainer.addEventListener('change', e => handlePercentChange(e));
  UI.els.customPercentContainer.addEventListener('focus', e => handleCustomFocus(e));
  UI.els.numBill.addEventListener('change', e => handleBillChange(e));
  UI.els.numPeople.addEventListener('change', e => handlePeopleChange(e));
  UI.els.btnReset.addEventListener('click', e => console.log('reset', e));
}

const handlePercentChange = (e) => {
  console.log('Updating percent change...');
  const value = Number(e.target.value);
  if (value >= 0) {
    state.tip = value;
    console.log(state);
    if (state.bill > 0 && state.people > 0) {
      handleUpdateTotals();
    }
  }
  UI.handlePercentChange(e);
}

const handleCustomFocus = (e) => {
  const value = Number(e.target.value);
  if (value >= 0) {
    state.tip = value;
    if (state.bill > 0 && state.people > 0) {
      handleUpdateTotals();
    }
  }
  UI.handleCustomFocus(e);
}

const handleUpdateTotals = () => {
  console.log('updating totals...')
  const result = TipCalc.calculate(state.bill, (state.tip / 100), state.people);
  state.resultTotal = result[0];
  state.resultTip = result[1];
  UI.handleUpdateResults(state.resultTip, state.resultTotal);
}

const handleBillChange = (e) => {
  console.log('updating bill...');
  const value = Number(e.target.value);
  if (value >= 0) {
    state.bill = Number(value).toFixed(2);
    console.log(state);
    if (state.bill > 0 && state.people > 0) {
      handleUpdateTotals();
    }
  }
}

const handlePeopleChange = (e) => {
  console.log('updating people...');
  const value = Number(e.target.value);
  if (value >= 0) {
    state.people = value;
    console.log(state);
    if (state.bill > 0 && state.people > 0) {
      handleUpdateTotals();
    }
  }
}

const init = () => {
  setUpEventListeners();
  console.log(state);
}

init();
