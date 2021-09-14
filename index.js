const tipSize = document.querySelectorAll("li");
const customTip = document.querySelector(".customLi");
const customTipInput = document.querySelector(".liInput")


tipSize.forEach(tip => {
    tip.addEventListener('click', e => {
        for (let i = 0; i < tipSize.length; i++) {
            customTipInput.classList.remove("addSelectorColor");
            tipSize[i].classList.remove("addSelectorColor");
        }
        tipSize
        e.target.classList.add("addSelectorColor");
        

    });
});

