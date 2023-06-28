const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/" ,
    key: "846ad206a08b114ebe34787f52534b84"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();

    console.log(result);
    displayResult(result);
}

function displayResult(result) {

    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = "Feels : " + `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = `<span>Min: </span>${Math.round(result.main.temp_min)}<span>°  Max: </span>${Math.round(result.main.temp_max)}<span>°</span>`

    let windDegree = document.querySelector("#windDegree");
    windDegree.innerHTML = ` <span> Wind Degree : </span>${Math.round(result.wind.speed)}<span>°</span>`

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `<span>Humidity: </span>${Math.round(result.main.humidity)}<span>°</span>`
}

function getOurDate() {
    const myDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
    let date = document.querySelector("#date");
    date.innerHTML = `${days[myDate.getDay()]}` + " " + `${myDate.getDate()}`+ " " + `${months[myDate.getMonth()]}` + " " + `${myDate.getFullYear()}`
}