const tipSize = document.querySelectorAll("li");
const customTip = document.querySelector(".liInput");
const billAmount = document.querySelector(".inputBillAmount");
const numberOfPeople = document.querySelector(".inputNumberOfPeople");
const tipAmountPerPerson = document.querySelector(".tipPerPersonAmountText");
const totalAmountPerPerson = document.querySelector(".totalPerPersonAmountText");
const resetButton = document.querySelector(".resetBox");
const errorPeople = document.querySelector(".errorPeople");
let tipChoice = 0;
const regBTest = new RegExp("^[0-9\.]+$");
const regPTest = new RegExp("^[0-9]+$");

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

const calculateAll = () => {
    let tipCalc = Number(billAmount.value) * tipChoice / Number(numberOfPeople.value);
    let totalCalc = (Number(billAmount.value) + (Number(billAmount.value) * tipChoice)) / Number(numberOfPeople.value);
    tipAmountPerPerson.innerText = "$" + roundToTwo(tipCalc).toFixed(2);
    totalAmountPerPerson.innerText = "$" + roundToTwo(totalCalc).toFixed(2);
};

tipSize.forEach(tip => {
    tip.addEventListener('click', e => {
        for (let i = 0; i < tipSize.length; i++) {
            tipSize[i].classList.remove("addSelectorColor");
            customTip.classList.remove("addSelectorColor");

        }
        customTip.classList.remove("addSelectorColor");
        e.target.classList.add("addSelectorColor");
        tipChoice = 0;
        resetButton.classList.add('resetBoxActive');

        switch(e.target.id) {
            case "5":
                tipChoice = 0.05;
                break;
            case "10":
                tipChoice = 0.10;
                break;
            case "15":
                tipChoice = 0.15;
                break;
            case "25":
                tipChoice = 0.25;
                break;
            case "50":
                tipChoice = 0.50;
                break;
            default:
                // This is so custom can be used by user.  Seperate call for custom update.
                break;
        }

        if(tipChoice !== 0 && billAmount.value.length != 0 && numberOfPeople.value.length != 0 ) {
            customTip.value = null;
            calculateAll();
        }
    });
});

resetButton.addEventListener('click', () => {
    billAmount.value = null;
    numberOfPeople.value = null;
    customTip.value = null;
    tipAmountPerPerson.innerText = "$0.00";
    totalAmountPerPerson.innerText = "$0.00";
    tipChoice = 0;
    for (let i = 0; i < tipSize.length; i++) {
        customTip.classList.remove("addSelectorColor");
        tipSize[i].classList.remove("addSelectorColor");
    }
    resetButton.classList.remove('resetBoxActive');
});

billAmount.addEventListener('input', () => {
    resetButton.classList.add('resetBoxActive');
    if( tipChoice != 0 && numberOfPeople.value.length != 0 ) {
        if( regBTest.test(billAmount.value)) {
            calculateAll();
        } else {

        }    
    }
});

numberOfPeople.addEventListener('input', () => {
    resetButton.classList.add('resetBoxActive');

    console.log(regPTest.test(numberOfPeople.value));
    if( tipChoice != 0 && billAmount.value.length != 0 ) {
        if(regPTest.test(numberOfPeople.value)) {
            errorPeople.classList.remove("errorPeopleOn");
            errorPeople.classList.add("errorPeople");
            calculateAll();
        } else {
            errorPeople.classList.add("errorPeopleOn");
            errorPeople.classList.remove("errorPeople");
        }
    }
});

customTip.addEventListener('input', () => {
    resetButton.classList.add('resetBoxActive');
    if( billAmount.value.length != 0 && numberOfPeople.value.length != 0 ) {
        tipChoice = Number(customTip.value / 100);
        console.log(tipChoice);
        calculateAll();
    }
});