import TipCalc from './TipCalc.js';
import UI from './UI.js';

// Initial/Reset App State
const initialState = {
  bill: 0,
  tip: 5,
  numPeople: 0,
  resultTip: 0,
  resultTotal: 0
}

let state = {
  ...initialState
}

// On application load
const init = () => {
  setUpEventListeners();
}

// Set up event listeners
const setUpEventListeners = () => {
  UI.els.percentsContainer.addEventListener('change', e => handlePercentChange(e));
  UI.els.customPercentContainer.addEventListener('focus', e => handleCustomFocus(e));
  UI.els.numBill.addEventListener('change', e => handleBillChange(e));
  UI.els.numPeople.addEventListener('change', e => handlePeopleChange(e));
  UI.els.btnReset.addEventListener('click', handleReset);
}



// When value in Bill changes
const handleBillChange = (e) => {
  const value = Number(e.target.value);
  if (value >= 0) {
    state.bill = Number(value).toFixed(2);
    handleUpdateTotals();
  } else {
    UI.handleErrorField(e, 'Must be more than 0');
  }
}

// When a new percentage is clicked
const handlePercentChange = (e) => {
  // Get field value
  const value = Number(e.target.value);

  if (value >= 0) {
    state.tip = value; // Update state
    UI.handlePercentChange(e);
    handleUpdateTotals(); // Update totals
  } else {
    // If value is invalid
    UI.resetPercentage();
  }

}

// When a custom focus is entered
const handleCustomFocus = (e) => {
  const value = Number(e.target.value);
  if (value >= 0) {
    state.tip = value;
    UI.handleCustomFocus(e);
    handleUpdateTotals();
  }
}

// When value in People changes
const handlePeopleChange = (e) => {
  const value = Number(e.target.value);
  if (value >= 0) {
    state.people = value;
    handleUpdateTotals();
  } else {
    UI.handleErrorField(e, 'Must be more than 0');
  }
}

// When totals need to be updated
const handleUpdateTotals = () => {
  if (state.bill > 0 && state.people > 0) { // if valid values in bill and people
    const result = TipCalc.calculate(state.bill, (state.tip / 100), state.people);
    state.resultTotal = result[0];
    state.resultTip = result[1];
    UI.handleUpdateResults(state.resultTip, state.resultTotal);
  }
}

// When Reset button is clicked
const handleReset = () => {
  state = { ...initialState };
  UI.resetUI(state);
}


window.addEventListener('DOMContentLoaded', init);
