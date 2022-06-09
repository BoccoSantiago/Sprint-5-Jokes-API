const jokes = async() => {
    try{
const joke = await fetch('https://icanhazdadjoke.com/')
      /* .then(response => response.json())
      .then(json => console.log(json)); */
      console.log(joke)
const datos = await joke.json();
console.log(datos)
    } catch(error){
        console.log(error)
    }
}

jokes()