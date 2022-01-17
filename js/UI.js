class UI {
  static els = {
    percentsContainer: document.querySelector('.splitter-percents'),
    customPercentContainer: document.querySelector('#percent-custom'),
    numBill: document.querySelector('#num-bill'),
    numPeople: document.querySelector('#num-people'),
    btnReset: document.querySelector('.result-btn-reset'),
  }

  static handlePercentChange() {
    // TODO: Handle clicks on tip amount
    // - Remove selected class on currently selected element
    // // document.querySelector('.selected').classList.remove('selected');
    // - Add selected class to label parentelement
    // //  e.target.parentElement.classList.add('selected');
    // - set current tip amount
    // if bill amount entered, update results
  }

}

export default UI;