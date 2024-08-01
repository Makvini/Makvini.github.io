const targetList = document.querySelectorAll(".question-item");

const toggleItem = (index) => {
    if (targetList[index].classList.contains("active")) {
        targetList[index].classList.remove("active");
    } else {
        targetList[index].classList.add("active");
    }

};

targetList?.forEach((element, index) => {
    element.addEventListener("click", () => toggleItem(index));
});

