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

  static handleErrorField(e, msg) {
    // Add error class to current field
    e.target.classList.add('error');
    // Display error message
    const alertEl = this._createErrorAlert(msg);
    e.target.parentElement.appendChild(alertEl);
    setTimeout(() => {
      e.target.parentElement.removeChild(alertEl);
      e.target.classList.remove('error');
    }, 3500);
    // Reset field
    e.target.value = '';
  }

  static _createErrorAlert = (msg) => {
    const msgEl = document.createElement('div');
    msgEl.textContent = msg;
    msgEl.classList.add('alert-error');
    return msgEl;
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