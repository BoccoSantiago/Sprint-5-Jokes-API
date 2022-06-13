const button = document.getElementById("btn");
const jokeText = document.getElementById("text");
const scoresDiv = document.getElementById("scores");
const forecast = document.getElementById("forecast");
const reportAcudits = [];
const d = new Date();
let date = d.toISOString();
scoresDiv.style.display = "none";
const weatherApi =
  "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&exclude=hourly,daily&units=metric&lang=sp&appid=f033bc883319078da9dd983162b7cb55";

/*Utilizando Async Await */

/* const dadJokes = async() => {
   const joke = await fetch('https://icanhazdadjoke.com/', {
 headers:  {
    'Accept': "application/json" 
}
 });
    const response = await joke.json()
    text.innerHTML = response.joke

} */

/* Utilizando Promises */
const dadJokes = () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      jokeText.innerHTML = data.joke;
      console.log(data);
      scoresDiv.style.display = "block";
    });
};

btn.addEventListener("click", dadJokes);

const weather = () => {
  fetch(weatherApi)
    .then((response) => response.json())
    .then((data) => {
      forecast.innerHTML = `${data.main.temp.toFixed(1)} °C con 
      ${data.weather[0].description}`;
      console.log(data);
    });
};
weather();

function getScore(id) {
  reportAcudits.push({
    joke: jokeText.innerHTML,
    score: id,
    date: date,
  });
  console.log(reportAcudits);
}
