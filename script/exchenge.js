let buy = 1.8;
let buyElement = document.querySelector("#buy");
let buyBTN = document.querySelector(".buy-btn");

const elementCurr = document.querySelector("#curr");
const elementCoin = document.querySelector("#coin");





buyElement.innerHTML = buy;
buyBTN.addEventListener('click', () => {
    window.open("https://app.cryptohub.exchange/", "_blank")
});
const inputCurr = document.querySelector("#inputCurr");
const inputCoin = document.querySelector("#inputCoin");

function validateInput(event) {
    const input = event.target.value;
    const validInput = input.replace(/[^0-9.]/g, '');

    // Якщо вхід містить більше однієї крапки, залишаємо тільки першу
    const parts = validInput.split('.');
    if (parts.length > 2) {
        event.target.value = parts[0] + '.' + parts.slice(1).join('');
    } else {
        event.target.value = validInput;
    }
}

inputCurr.addEventListener('input', (event) => {
    validateInput(event);
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
        inputCoin.value = (value * buy).toFixed(2);
    } else {
        inputCoin.value = '';
    }
});

inputCoin.addEventListener('input', (event) => {
    validateInput(event);
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
        inputCurr.value = (value / buy).toFixed(2);
    } else {
        inputCurr.value = '';
    }
});




function getCurrentTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const day = daysOfWeek[now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day} ${hours}:${minutes}`;
}

function displayCurrentTime() {
    const currentTimeElement = document.getElementById('date');
    currentTimeElement.innerHTML = getCurrentTime();
}


displayCurrentTime();



const bntCurrs = document.querySelectorAll(".btn-curr");
const bntCoins = document.querySelectorAll(".btn-coin");


const changeToEUR = () => {
    buy = 1.08;
    buyElement.innerHTML = buy;
    elementCurr.innerHTML = "EUR";
    if (!isNaN(inputCurr.value)) {
        inputCoin.value = (inputCurr.value * buy).toFixed(2);
    }
};

const changeToUSD = () => {
    buy = 0.99;
    buyElement.innerHTML = buy;
    elementCurr.innerHTML = "USD";
    if (!isNaN(inputCurr.value)) {
        inputCoin.value = (inputCurr.value * buy).toFixed(2);
    }
};



const changeToUSDT = () => {

    elementCoin.innerHTML = "USDT";
    if (!isNaN(inputCurr.value)) {
        inputCoin.value = (inputCurr.value * buy).toFixed(2);
    }
};

const changeToUSDC = () => {

    elementCoin.innerHTML = "USDC";
    if (!isNaN(inputCurr.value)) {
        inputCoin.value = (inputCurr.value * buy).toFixed(2);
    }
};






bntCurrs.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener("click", () => changeToEUR());
    } else if (index === 1) {
        element.addEventListener("click", () => changeToUSD());
    }
});




bntCoins.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener("click", () => changeToUSDT());
    } else if (index === 1) {
        element.addEventListener("click", () => changeToUSDC());
    }
});


const selectCurr = document.getElementById('selectCurr');
const selectCoin = document.getElementById('selectCoin');

const currencies = {
    EUR: {
        imgSrc: './static/eurCurr.svg',
        altText: 'eur',
        text: ' EUR'
    },
    USD: {
        imgSrc: './static/usdCurr.svg',
        altText: 'usd',
        text: ' USD'
    }
};

const coins = {
    USDT: {
      imgSrc: './static/usdtCurr.svg',
      altText: 'usdt',
      text: ' USDT'
    },
    USDC: {
      imgSrc: './static/usd-coin-usdc-logo.png',
      altText: 'usdc',
      text: ' USDC'
    }
  };

let currentCurrency = 'EUR';
let currentCoin = 'USDT';

function toggleCurrency(e) {
    currentCurrency = e
    const currency = currencies[e];
    selectCurr.innerHTML = `<img src="${currency.imgSrc}" alt="${currency.altText}" />${currency.text}`;
}


function toggleCoin(e) {
    currentCoin = e
    const coin = coins[e];
    selectCoin.innerHTML = `<img src="${coin.imgSrc}" alt="${coin.altText}" />${coin.text}`;
}




bntCurrs.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener("click", () => toggleCurrency("EUR"));
    } else if (index === 1) {
        element.addEventListener("click", () => toggleCurrency("USD"));
    }
});


bntCoins.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener("click", () => toggleCoin("USDT"));
    } else if (index === 1) {
        element.addEventListener("click", () => toggleCoin("USDC"));
    }

});