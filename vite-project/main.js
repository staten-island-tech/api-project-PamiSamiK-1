const API_URL = 'https://www.balldontlie.io/api/v1/players';

// Fetch data from the API
async function fetchDataFromAPI(URL) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    console.log(data);

    document.querySelector("h1").textContent = data.player;
    document.querySelector("h2").textContent = data.height;

    
    injectCards(data); 
  } catch (error) {
    console.error("Error fetching API data:", error);
    document.querySelector("h1").textContent = error.message;
  }
}

const DOMSelectors = {
  gallery: document.querySelector('#gallery'),
  cardContainer: document.getElementById('card-container')
};

function injectCards(peopleList) {
  DOMSelectors.gallery.innerHTML = '';
  peopleList.forEach(person => {
    DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
      <div class="card">
        <h2>${person.first_name} ${person.last_name}</h2>
        <!-- Add other details -->
      </div>
    `);
  });
}

fetchDataFromAPI(API_URL);

