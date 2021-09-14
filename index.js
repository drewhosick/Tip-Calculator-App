const tipSize = document.querySelectorAll("li");
const customTip = document.querySelector(".customLi");
const billAmount = document.querySelector(".inputBillAmount");
const numberOfPeople = document.querySelector(".inputNumberOfPeople");
const tipAmountPerPerson = document.querySelector(".tipPerPersonAmountText");
const totalAmountPerPerson = document.querySelector(".totalPerPersonAmountText");
const resetButton = document.querySelector(".resetBox");




tipSize.forEach(tip => {
    tip.addEventListener('click', e => {
        for (let i = 0; i < tipSize.length; i++) {
            tipSize[i].classList.remove("addSelectorColor");
        }
        e.target.classList.add("addSelectorColor");
        

    });
});

resetButton.addEventListener('click', () => {
    billAmount.value = "142.55";
    numberOfPeople.value = "5";
    for (let i = 0; i < tipSize.length; i++) {
        // customTip.classList.remove("addSelectorColor");
        tipSize[i].classList.remove("addSelectorColor");
        tipSize[2].classList.add("addSelectorColor"); // reset to 15% highlighted
    }
});