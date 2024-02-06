function setInputNumber(opts) {

  const selectElem = opts.selectElem;
  const selectOptions = selectElem.querySelectorAll('option');

  const inputField = opts.inputField;
  const btnPlus = opts.btnPlus;
  const btnMinus = opts.btnMinus;
  const rangeSlider = opts.rangeSlider;

  const throttleDoca = (callee, timeout) => {
    let timer = null;

    return function perform(...args) {
      if (timer) return;

      timer = setTimeout(() => {
        callee(...args);

        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  const throttleJS = (func, ms) => {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments); // (1)

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  };

  btnPlus.addEventListener('click', (e) => {
    let currentValue = ++inputField.value;
    if (e.shiftKey) currentValue += 4;

    inputField.value = currentValue;
    rangeSlider.value = currentValue;
    selectElem.selectedIndex = currentValue - 1;
  });

  btnMinus.addEventListener('click', (e) => {
    let currentValue = --inputField.value;
    if (e.shiftKey) currentValue -= 4;
    if (currentValue <= -1) currentValue = 0;

    inputField.value = currentValue;
    rangeSlider.value = currentValue;
    selectElem.selectedIndex = currentValue - 1;
  });

  /*
   rangeSlider.addEventListener('input', throttleDoca(() => {
   let currentValue = rangeSlider.value;

   inputField.value = currentValue;
   selectElem.selectedIndex = currentValue - 1;

   }, 500));
   */

  rangeSlider.addEventListener('input', throttleJS(() => {
    let currentValue = rangeSlider.value;

    inputField.value = currentValue;
    selectElem.selectedIndex = currentValue - 1;

  }, 200));

  selectElem.addEventListener('change', (e) => {
    let num = selectOptions[selectElem.selectedIndex];
    let currentValue = num.value;

    inputField.value = currentValue;
    rangeSlider.value = currentValue;
  });

  inputField.addEventListener('change', (e) => {
    let currentValue = inputField.value;

    rangeSlider.value = currentValue;
    selectElem.selectedIndex = currentValue - 1;
  });

  inputField.addEventListener('keydown', (e) => {
    let currentValue = +inputField.value;

    if (e.shiftKey && e.code == 'ArrowUp') {
      currentValue += 4;
      inputField.value = currentValue;
    } else if (e.shiftKey && e.code == 'ArrowDown') {
      currentValue -= 4;
      if (currentValue <= 0) currentValue = 0;
      inputField.value = currentValue;
    }
  });

  btnPlus.addEventListener('mousedown', function f(e) {

    let i = +inputField.value;
    let a = setInterval(() => {
      if (e.shiftKey) {
        i += 5;
      } else {
        i++;
      }

      inputField.value = i;
      if (i >= 1000) clearInterval(a);
    }, 200);

    btnPlus.addEventListener('mouseup', (e) => {
      clearInterval(a);
    });
  });

}