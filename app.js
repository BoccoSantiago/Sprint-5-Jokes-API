const button = document.getElementById("btn");
const jokeText = document.getElementById("text");
const scoresDiv = document.getElementById("scores");
const forecast = document.getElementById("forecast")
const reportAcudits = [];
const d = new Date();
let date = d.toISOString();
scoresDiv.style.display = "none";
const key = fc039ba514d11c2f32d2397f66b8233a;

/* const bad = document.getElementById('1');
const good = document.getElementById('2');
const excellent = document.getElementById('3'); */

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
   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}")
   .then((response) => response.json())
   .then((data) => {
     forecast.innerHTML = data; 
      console.log(data);
})
};
weather()

function getScore(id) {
  reportAcudits.push({
    joke: jokeText.innerHTML,
    score: id,
    date: date,
  });
  console.log(reportAcudits);
}
