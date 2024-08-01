const cards = document.querySelectorAll(".card");

const runSlaidDown = (num) => {
    cards[num + 1].classList.add("active");
    cards[num].classList.add("disabled");
    cards[num].classList.remove("active");
    cards[num + 1]?.classList.remove("disabled");
    setTimeout(() => { cards[num + 1].classList.add("index-top"); }, 600);
    
}

const runSlaidUp = (num) => {
    cards[num - 1].classList.add("active");
    cards[num].classList.add("disabled");
    cards[num].classList.remove("active");
    cards[num - 1]?.classList.remove("disabled");
    setTimeout(() => { cards[num].classList.remove("index-top"); }, 600);
    if (num === 1) {
        setTimeout(() => { cards[num - 1].classList.add("index-top"); }, 600);
    }
   
    // cards[num].classList.remove("index-top");
}

// document.body.scrollHeight

const target = document.getElementById('marker');


const observerOptions = {
    root: null, // спостерігаємо в контексті вікна браузера
    rootMargin: '0px',
    threshold: [0, 1] // спрацьовує при вході та виході елемента
};
let flag = false;
let firstLoadingDown = false;
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (entry.boundingClientRect.top < 0) {
                console.log('Елемент заходить у зону видимості з низу');

                runSlaidUp(2);
            } else if (entry.boundingClientRect.bottom > window.innerHeight) {
                console.log('Елемент заходить у зону видимості з верху');


                runSlaidDown(0);

            } else if (!flag) {

                runSlaidDown(0);
                return flag = true;
            }
        } else {
            if (entry.boundingClientRect.top < 0) {
                console.log('Елемент виходить з зони видимості з верху');
                if (!firstLoadingDown) {
                    runSlaidDown(0);
                    firstLoadingDown = true;
                }
                runSlaidDown(1);

            } else if (entry.boundingClientRect.bottom > window.innerHeight) {
                console.log('Елемент виходить з зони видимості з низу');
                runSlaidUp(1);
            }
        }
    });
}


function checkInitialVisibility() {
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Елемент частково або повністю видимий
        runSlaidDown(0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkInitialVisibility();
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(target);
});












const steps1 = document.querySelectorAll(".step1");
const slidshowImg1 = document.querySelectorAll(".slidshowImg1");


const steps2 = document.querySelectorAll(".step2");
const slidshowImg2 = document.querySelectorAll(".slidshowImg2");


const steps3 = document.querySelectorAll(".step3");
const slidshowImg3 = document.querySelectorAll(".slidshowImg3");


const arraySteps = [steps1, steps2, steps3];

const arraySlidshowImg = [slidshowImg1, slidshowImg2, slidshowImg3];

let startIndex = 0;
let intervalID;



const startSlaidShow = (index, slaid) => {

    let start;
    if (index === "none") {
        start = startIndex;
        if (start === arraySteps[slaid].length) {
            start = 0;
            startIndex = 0;
        }
        console.log(startIndex)
    } else if (index !== "none") {
        start = index;
        console.log(index)
    }

    arraySteps[slaid].forEach(element => {
        element.classList.remove("active");
        console.log(element)
    });
 
    arraySlidshowImg[slaid].forEach(element => {
        element.classList.remove("active");
    });
    console.log(start, index)
    arraySlidshowImg[slaid][start].classList.add("active");

 
    arraySteps[slaid][start].classList.remove("active");
    setTimeout(() => arraySteps[slaid][start].classList.add("active"), 10);

    if (start < arraySteps[slaid].length) {

        if (index !== "none") {
            return startIndex = index;
        } else {
            return startIndex += 1;
        }

    } else {
        console.log("HUH")
        return startIndex = 0;
    }
}




const activeStatus = (index, slaid) => {
    if (intervalID) {
        clearInterval(intervalID);
    }
    startSlaidShow(index, slaid);
    intervalID = setInterval(() => startSlaidShow("none", slaid), 6000);
    return startIndex = index + 1;
}

steps1.forEach((element, index) => {
    element.addEventListener("click", () => activeStatus(index, 0));
});


steps2.forEach((element, index) => {
    element.addEventListener("click", () => activeStatus(index, 1));
});

steps3.forEach((element, index) => {
    element.addEventListener("click", () => activeStatus(index, 2));
});


const targetNode1 = document.getElementById('card1');
const targetNode2 = document.getElementById('card2');
const targetNode3 = document.getElementById('card3');
const classNameToWatch = 'active'; // Назва класу, який потрібно відслідковувати

// Функція, яка запускається, коли клас з'являється
function onClassAdded(e) {
    switch (e) {
        case 'card1':
            console.log("1")
            activeStatus(0, 0);
            break;
        case 'card2':
            console.log("2")
            activeStatus(0, 1);
            break;

        case 'card3':
            console.log("3")
            activeStatus(0, 2);
            break;
        default:
            return null;

    }

}



// Налаштування MutationObserver
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (mutation.target.classList.contains(classNameToWatch)) {
                onClassAdded(mutation.target.id);
                console.log("LA")
            }
        }
    }
});

// Конфігурація спостереження
const config = { attributes: true };

// Початок спостереження
observer.observe(targetNode1, config);
observer.observe(targetNode2, config);
observer.observe(targetNode3, config);