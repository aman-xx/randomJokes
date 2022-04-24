{
  /* <div id="joke" class="joke">Awesome joke is loading😳...</div>
<button id="jokeBtn" class="btn">Next Joke</button> */
}

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = async() => {
    try {  const setHeader = {
    headers: {
      Accept: "application/json"
    }
  };  const res= await fetch('https://icanhazdadjoke.com', setHeader);
  const data =await res.json();
  jokes.innerHTML=data.joke;
}catch(err){
    console.log(`The error is ${err}`);
}
 
}

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
