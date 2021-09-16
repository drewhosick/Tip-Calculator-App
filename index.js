const tipSize = document.querySelectorAll("li");
const customTip = document.querySelector(".liInput");
const billAmount = document.querySelector(".inputBillAmount");
const numberOfPeople = document.querySelector(".inputNumberOfPeople");
const tipAmountPerPerson = document.querySelector(".tipPerPersonAmountText");
const totalAmountPerPerson = document.querySelector(".totalPerPersonAmountText");
const resetButton = document.querySelector(".resetBox");
let tipChoice = 0;

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

        if(tipChoice != 0) {
            calculateAll();
        }
        

    });
});

resetButton.addEventListener('click', () => {
    billAmount.value = null;
    numberOfPeople.value = null;
    customTip.value = "Custom";
    tipAmountPerPerson.value = "$0.00";
    totalAmountPerPerson.value = "$0.00";
    tipChoice = 0;
    for (let i = 0; i < tipSize.length; i++) {
        customTip.classList.remove("addSelectorColor");
        tipSize[i].classList.remove("addSelectorColor");
    }
    resetButton.classList.remove('resetBoxActive');
});

billAmount.addEventListener('input', () => {
    if(tipChoice != 0 && numberOfPeople.value != null || tipChoice == 0 && customTip.value != "Custom" && numberOfPeople.value != null) {
        calculateAll();
    }
});