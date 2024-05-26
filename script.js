const getJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const responseData = await response.json();
    const joke = responseData.joke;
    console.log(joke);
    return joke;
  } catch (error) {
    console.log(error);
  }
};

//get a specified number of jokes
const getManyJokes = async (num = 1) => {
  for (let i = 0; i < num; i++) {
    console.log(`Joke ${i + 1}`);
    await getJoke();
  }
};

const container = document.querySelector('div[id="jokes"]');
const button = document.querySelector('button[id="getJoke"]');
const newJoke = document.createElement("p");
const jokeText = document.querySelector('p[id="joke"]');

// button.addEventListener("click", async function () {
//   console.log("button clicked");
//   const joke = await getJoke();
//   const newJoke = document.createElement("p");
//   newJoke.innerText = joke;
//   container.append(newJoke);
// });

//update so that it only updates the text, as opposed to spawning a new p each time
button.addEventListener("click", async function () {
  console.log("button clicked");
  const joke = await getJoke();
  jokeText.innerText = joke;
});

//ideas on how to handle this
//check if there is a 'p' with id of joke
//if there is not, create it
//if there is, change the inner text only
