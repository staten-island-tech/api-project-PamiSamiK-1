import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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
`

setupCounter(document.querySelector('#counter'))

function greet(name){
  const greetPromise = newPromise(function(resolve,rejected){
      resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const nuggies = greet("Nuggies");
nuggies.then((result) =>{
console.log(result);


});

const URL = ''
async function getData(URL){
  try{

 
  const response= await fetch(URL)
  console.log(response);
  if(response.status !=200){
      throw new Error(response.statusText);
  }
  const data =await response.json();
  docoument.querySelector("h1").textContent = data.content;
  docoument.querySelector("h2").textContent = data.author;
}catch(error){
  document.querySelector("h1).textContent =error")    
}
}

getData(URL);

const URL= "https://any-api.com/nba_com/nba_com/docs/_allstarballotpredictor"

async function getData(URL){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    }
}
const DOMSelectors = {
button:document.querySelector(),
input:document.querySelector()


}