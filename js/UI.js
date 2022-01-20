class UI {
  // Set up elements
  static els = {
    percentsContainer: document.querySelector('.splitter-percents'),
    customPercentContainer: document.querySelector('#percent-custom'),
    numBill: document.querySelector('#num-bill'),
    numPeople: document.querySelector('#num-people'),
    btnReset: document.querySelector('.result-btn-reset'),
    txtResultTip: document.querySelector('#result-tip'),
    txtResultTotal: document.querySelector('#result-total'),
    percent5: document.querySelector('#percent-5'),
    form: document.forms[0]
  }

  // Show selected class on selected percentage
  static handlePercentChange(e) {
    document.querySelector('.selected').classList.remove('selected');
    e.target.parentElement.classList.add('selected');
  }

  // Outline custom tip if selected
  static handleCustomFocus() {
    document.querySelector('.selected').classList.remove('selected');
    this.els.customPercentContainer.classList.add('selected');
  }

  // Display results
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
    // Remove error message after 3500ms
    setTimeout(() => {
      e.target.parentElement.removeChild(alertEl);
      e.target.classList.remove('error');
    }, 3500);
    // Reset field
    e.target.value = '';
  }

  // Create alert element
  static _createErrorAlert = (msg) => {
    const msgEl = document.createElement('div');
    msgEl.textContent = msg;
    msgEl.classList.add('alert-error');
    return msgEl;
  }

  // Reset fields
  static resetUI(state) {
    console.log('resetting UI', state);
    this.els.numBill.value = state.bill;
    this.els.numPeople.value = state.numPeople;
    this.els.txtResultTip.value = '$0.00';
    this.els.txtResultTotal.value = '$0.00';
  }

  // Reset tip percentage
  static resetPercentage() {
    document.querySelector('.selected').classList.remove('selected');
    const radio = this.els.form.elements['percent'];
    radio.value = '5';
    this.els.percent5.parentElement.classList.add('selected');
    console.log(this.els.percent5.parentElement.classList);
    this.els.customPercentContainer.value = '';
  }

}

export default UI;