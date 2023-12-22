
document.querySelector('#app').innerHTML = `
<div id="question-container">
  <h2>Would You Rather...</h2>
  <div id="options">
    <button id="option1">Option 1</button>
    <button id="option2">Option 2</button>
  </div>
</div>

`;


async function check(){
  
}







function greet(name) {
  return new Promise(function(resolve, reject) {
    resolve(`Hello ${name}`);
  });
}

const nuggies = greet("Nuggies");
nuggies.then((result) => {
  console.log(result);
});

const URL = 'https://www.balldontlie.io/api/v1/players'; // Replace with your URL
async function fetchPlayers(URL) {
  try {
    const response = await fetch(playerAPI);
    console.log(response);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = await response.data.json();
    console.log(data)
    document.querySelector("h1").textContent = data.player;
    document.querySelector("h2").textContent = data.height;
  } catch (error) {
    document.querySelector("h1").textContent = error;
  }
}



async function fetchAPIData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
}

fetchAPIData(URL);




