const button = document.getElementById('btn');
const jokeText = document.getElementById('text')

const dadJokes = async() => {
   const joke = await fetch('https://icanhazdadjoke.com/', {
 headers:  {
    'Accept': "application/json" 
}
 });
    const response = await joke.json()
     console.log(response.joke) 

}

btn.addEventListener('click', dadJokes);
