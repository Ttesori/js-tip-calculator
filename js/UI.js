class UI {
  static els = {
    percentsContainer: document.querySelector('.splitter-percents'),
    customPercentContainer: document.querySelector('#percent-custom'),
    numBill: document.querySelector('#num-bill'),
    numPeople: document.querySelector('#num-people'),
    btnReset: document.querySelector('.result-btn-reset'),
    txtResultTip: document.querySelector('#result-tip'),
    txtResultTotal: document.querySelector('#result-total')
  }

  static handlePercentChange(e) {
    document.querySelector('.selected').classList.remove('selected');
    console.log(e);
    e.target.parentElement.classList.add('selected');
  }

  static handleCustomFocus(e) {
    document.querySelector('.selected').classList.remove('selected');
    this.els.customPercentContainer.classList.add('selected');
  }

  static handleUpdateResults(tip, total) {
    this.els.txtResultTip.value = tip;
    this.els.txtResultTotal.value = total;
  }

  static resetUI(state) {
    console.log('resetting UI', state);
    this.els.numBill.value = state.bill;
    this.els.numPeople.value = state.numPeople;
    this.els.txtResultTip.value = '$0.00';
    this.els.txtResultTotal.value = '$0.00';
    document.querySelector('.selected').classList.remove('selected');
    const form = document.forms[0];
    const radio = form.elements['percent'];
    radio.value = '5';
    document.querySelector('#percent-5').parentElement.classList.add('selected');
    this.els.customPercentContainer.value = '';
  }

}

export default UI;