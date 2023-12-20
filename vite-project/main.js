import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from './vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

TODAY = datetime.today()
BASE_URL = 'http://stats.nba.com/stats/{endpoint}'
HEADERS = {
    'user-agent': ('Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'),  # noqa: E501
    'Dnt': ('1'),
    'Accept-Encoding': ('gzip, deflate, sdch'),
    'Accept-Language': ('en'),
    'origin': ('http://stats.nba.com')
    }









setupCounter(document.querySelector('#counter'));

function greet(name) {
  return new Promise(function(resolve, reject) {
    resolve(`Hello ${name}`);
  });
}

const nuggies = greet("Nuggies");
nuggies.then((result) => {
  console.log(result);
});

const URL = ''; // Replace with your URL
async function getData(URL) {
  try {
    const response = await fetch(URL);
    console.log(response);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.author;
  } catch (error) {
    document.querySelector("h1").textContent = error;
  }
}

getData(URL);

const apiURL = "http://stats.nba.com";

async function fetchAPIData(apiURL) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
}

fetchAPIData(apiURL);

const DOMSelectors = {
  button: document.querySelector('#yourButtonSelector'), // Replace with your valid selector
  input: document.querySelector('#yourInputSelector'), // Replace with your valid selector
};


