const kiloAmount = document.querySelector('#kiloAmount');
const convertBtn = document.querySelector('#convert');
const resultDisplay = document.querySelector('#result');

const convertKiloToLb = (kilo: number) => {
    return (kilo * 2.20462);

}

const makeNumString = (num: number) => {
    return num.toString();
}

const displayConversion = () => {
        if (kiloAmount instanceof HTMLInputElement && 'value' in kiloAmount && resultDisplay instanceof HTMLSpanElement) {
            resultDisplay.innerText = makeNumString(convertKiloToLb(parseInt(kiloAmount.value)));
        } 

}

// Optional Chaining
convertBtn?.addEventListener('click', displayConversion);
