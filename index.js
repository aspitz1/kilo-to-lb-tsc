"use strict";
// The types of the querySelectors will be validated in the code below
const kiloAmount = document.querySelector('#kiloAmount');
const convertBtn = document.querySelector('#convert');
const resultDisplay = document.querySelector('#result');
const convertKiloToLb = (kilo) => {
    return (kilo * 2.20462);
};
const makeNumString = (num) => {
    return num.toString();
};
// only preform this action if the variable kiloAmount is an instance of an input element, it has a property of 'value'
// and the resultDisplay is a instance of a span element
const displayConversion = () => {
    if (kiloAmount instanceof HTMLInputElement && 'value' in kiloAmount && resultDisplay instanceof HTMLSpanElement) {
        resultDisplay.innerText = makeNumString(convertKiloToLb(parseInt(kiloAmount.value)));
    }
};
// Optional Chaining
// in the typescript it looks like: convertBtn?.addEventListener('click', displayConversion)
// when the app is built the above code is converted to a ternary operator
convertBtn === null || convertBtn === void 0 ? void 0 : convertBtn.addEventListener('click', displayConversion);

