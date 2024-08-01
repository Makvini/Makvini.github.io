let buy = 1.08;
let buyElement = document.querySelector("#buy");
let buyBTN = document.querySelector(".buy-btn");

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

const changeToEUR = () => {
    buy = 1.08;
    buyElement.innerHTML = buy;
    if (!isNaN(inputCurr.value)) {
        inputCoin.value = (inputCurr.value * buy).toFixed(2);
    }
};

const changeToUSDT = () => {
    buy = 0.99;
    buyElement.innerHTML = buy;
    if (!isNaN(inputCurr.value)) {
        inputCoin.value = (inputCurr.value * buy).toFixed(2);
    }
};


bntCurrs.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener("click", () => changeToEUR()); 
    } else if (index === 1) {
        element.addEventListener("click", () => changeToUSDT());  
    }
   
});



const selectCurr = document.getElementById('selectCurr');

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

  let currentCurrency = 'EUR';

  function toggleCurrency(e) {
    currentCurrency = e
    const currency = currencies[e];
    selectCurr.innerHTML = `<img src="${currency.imgSrc}" alt="${currency.altText}" />${currency.text}`;
  }

  


  bntCurrs.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener("click", () => toggleCurrency("EUR")); 
    } else if (index === 1) {
        element.addEventListener("click", () => toggleCurrency("USD"));  
    }
   
});