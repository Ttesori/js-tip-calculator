import TipCalc from './TipCalc.js';
import UI from './UI.js';

const setUpEventListeners = () => {
  UI.els.percentsContainer.addEventListener('change', e => handlePercentChange(e));
  UI.els.numBill.addEventListener('change', e => console.log(e.target.value));
  UI.els.numPeople.addEventListener('change', e => console.log(e.target.value));
  UI.els.btnReset.addEventListener('click', e => console.log(e));
}

const handlePercentChange = (e) => {
  console.log('Updating percent change...')
  UI.handlePercentChange(e);
}

const handleUpdateTotals = () => {
  console.log('updating totals...')
}

const init = () => {
  setUpEventListeners();
  console.log(TipCalc.calculate(30, .2, 2));
}

init();
