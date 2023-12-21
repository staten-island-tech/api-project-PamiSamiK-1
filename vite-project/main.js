
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
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
async function getData(URL) {
  try {
    const response = await fetch(URL);
    console.log(response);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = await response.data.json();
    console.log(data)
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.author;
  } catch (error) {
    document.querySelector("h1").textContent = error;
  }
}

getData(URL);


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

const DOMSelectors = {
  button: document.querySelector('#yourButtonSelector'), // Replace with your valid selector
  input: document.querySelector('#yourInputSelector'), // Replace with your valid selector
};


