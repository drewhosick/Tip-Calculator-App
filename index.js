// Getting all the constants declared and nodes connected.
const tipSize = document.querySelectorAll("li");
const customTip = document.querySelector(".liInput");
const billAmount = document.querySelector(".inputBillAmount");
const numberOfPeople = document.querySelector(".inputNumberOfPeople");
const tipAmountPerPerson = document.querySelector(".tipPerPersonAmountText");
const totalAmountPerPerson = document.querySelector(".totalPerPersonAmountText");
const resetButton = document.querySelector(".resetBox");
const errorPeople = document.querySelector(".errorPeople");
const regBTest = new RegExp("^[0-9\.]+$");
const regPTest = new RegExp("^[0-9]+$");


// This is used to set the tip percentage for calculations
// as well as the number for the custom tip.
let tipChoice = 0; 

// Rounding to two decimal places for dollar amounts
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

// Most important function in project.  Used to make the
// final calculations for the tip amount per person and total
// amount per person.  Then it adds it to the text of both displayed
// to the user.
const calculateAll = () => {
    let tipCalc = Number(billAmount.value) * tipChoice / Number(numberOfPeople.value);
    let totalCalc = (Number(billAmount.value) + (Number(billAmount.value) * tipChoice)) / Number(numberOfPeople.value);
    tipAmountPerPerson.innerText = "$" + roundToTwo(tipCalc).toFixed(2);
    totalAmountPerPerson.innerText = "$" + roundToTwo(totalCalc).toFixed(2);
};

// Checking for the tip percentage and doing all
// the grunt work for that.
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


// resets the project back to start for user
resetButton.addEventListener('click', () => {
    billAmount.value = null;
    numberOfPeople.value = null;
    customTip.value = null;
    tipAmountPerPerson.innerText = "$0.00";
    totalAmountPerPerson.innerText = "$0.00";
    tipChoice = 0;
    errorPeople.style.visibility = "hidden";
    customTip.style.textAlign = "center";
    for (let i = 0; i < tipSize.length; i++) {
        customTip.classList.remove("addSelectorColor");
        tipSize[i].classList.remove("addSelectorColor");
    }
    resetButton.classList.remove('resetBoxActive');
});

// input reader for bill amount
billAmount.addEventListener('input', () => {
    resetButton.classList.add('resetBoxActive');
    if( tipChoice != 0 && numberOfPeople.value.length != 0 ) {
        if( regBTest.test(billAmount.value)) {
            calculateAll();
        } else {

        }    
    }
});

// input reader for number of people
numberOfPeople.addEventListener('input', () => {
    resetButton.classList.add('resetBoxActive');
    
    if(regPTest.test(numberOfPeople.value) == true) {
        errorPeople.style.visibility = "hidden";
    
    } else {
        errorPeople.style.visibility = "visible";
    }

    if( tipChoice != 0 && billAmount.value.length != 0 ) {
        if(regPTest.test(numberOfPeople.value) == true) {
            calculateAll();
        }
    }
});

// input reader for custom tip amount
customTip.addEventListener('input', () => {
    resetButton.classList.add('resetBoxActive');
    customTip.style.textAlign = "right";
    tipChoice = Number(customTip.value / 100);
    if( billAmount.value.length != 0 && numberOfPeople.value.length != 0 ) {
        calculateAll();
    }
});