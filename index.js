const tipSize = document.querySelectorAll("li");
const customTip = document.querySelector(".liInput");
const billAmount = document.querySelector(".inputBillAmount");
const numberOfPeople = document.querySelector(".inputNumberOfPeople");
const tipAmountPerPerson = document.querySelector(".tipPerPersonAmountText");
const totalAmountPerPerson = document.querySelector(".totalPerPersonAmountText");
const resetButton = document.querySelector(".resetBox");
let tipChoice = 15;

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}


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
                // wait for custom to be entered and then enter key to be hit
                break;
        }

        if(tipChoice != 0) {
            let tipCalc = Number(billAmount.value) * tipChoice / Number(numberOfPeople.value);
            let totalCalc = (Number(billAmount.value) + (Number(billAmount.value) * tipChoice)) / Number(numberOfPeople.value);
            tipAmountPerPerson.innerText = "$" + roundToTwo(tipCalc).toFixed(2);
            totalAmountPerPerson.innerText = "$" + roundToTwo(totalCalc).toFixed(2);
        }
        

    });
});

resetButton.addEventListener('click', () => {
    billAmount.value = "142.55";
    numberOfPeople.value = "5";
    customTip.value = "Custom";
    tipAmountPerPerson.value = "$4.28";
    totalAmountPerPerson.value = "$32.79";
    for (let i = 0; i < tipSize.length; i++) {
        customTip.classList.remove("addSelectorColor");
        tipSize[i].classList.remove("addSelectorColor");
        tipSize[2].classList.add("addSelectorColor"); // reset to 15% highlighted
    }
});