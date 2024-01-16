const api = 'https://www.balldontlie.io/api/v1/players'; 


async function fetchAPIData(api) {
  try {
    const response = await fetch(api)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const fetchedPlayers = data.data;

    let galleryHTML = '';
    fetchedPlayers.forEach(player => {
      galleryHTML += createPlayerCard(player);
    });

    document.getElementById('playerGallery').innerHTML = galleryHTML;
    //console.log(data);
  } catch (error) {
    console.error("Error fetching player data:", error);
    console.error("Error fetching API data:", error);
  }
}function createPlayerCard(player) {
  return `
    <div class="card">
      <h3>${player.first_name} ${player.last_name}</h3>
      <p>Team: ${player.team.full_name}</p>
    </div>
  `;
}
function showplayers(player1, player2) {
  const playerInfo1 = `${player1.first_name} ${player1.last_name} (${player1.team.full_name})`;
  const playerInfo2 = `${player2.first_name} ${player2.last_name} (${player2.team.full_name})`;
 
  document.getElementById('option1').textContent = playerInfo1;
  document.getElementById('option2').textContent = playerInfo2;
 }
 


fetchAPIData(api);

const players = {};

async function fetchRandomPlayers() {
 try {
   const response = await fetch(api);
   if (!response.ok) {
     throw new Error(response.statusText);
   }
  
   const data = await response.json();
   const fetchedPlayers = data.data; 

   
   players.player1 = getRandomPlayer(fetchedPlayers);
   players.player2 = getRandomPlayer(fetchedPlayers);
   
   showplayers(players.player1, players.player2);

   
   
   
   document.getElementById('option1').addEventListener('click', () => choosePlayer(players.player1));
   document.getElementById('option2').addEventListener('click', () => choosePlayer(players.player2));
 } catch (error) {
   console.error("Error fetching player data:", error);
 }
}


async function displayAllPlayers() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    const data = await response.json();
    const fetchedPlayers = data.data;

    let galleryHTML = '';
    fetchedPlayers.forEach(player => {
      galleryHTML += createPlayerCard(player);
    });

    document.getElementById('playerGallery').innerHTML = galleryHTML;
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}




function getRandomPlayer(players) {
 const randomIndex = Math.floor(Math.random() * players.length);
 const randomPlayer = players[randomIndex]
 return randomPlayer;
}



function choosePlayer(player) {
  console.log(`You chose ${player.first_name} ${player.last_name}`);
  showchosenplayer(player); 
  fetchRandomPlayers();
}

function showchosenplayer(player) {
  const playerName = `${player.first_name} ${player.last_name}`;
  const chosenPlayerElement = document.getElementById('chosenPlayer');
  
  chosenPlayerElement.textContent = `You chose ${playerName}`;
}

// Function to filter players by team
async function filterByTeam(team) {
  try {
    const teamResponse = await fetch(`${api}?team=${team}`);
    if (!teamResponse.ok) {
      throw new Error(teamResponse.statusText);
    }
    
    const teamData = await teamResponse.json();
    console.log(teamData)
    const teamPlayers = teamData.data;
    console.log(teamPlayers)

    const filteredPlayer1 = getRandomPlayer(teamPlayers);
    const filteredPlayer2 = getRandomPlayer(teamPlayers);

    showplayers(filteredPlayer1, filteredPlayer2);

    // displayAllPlayers 
    await displayAllPlayers();
  } catch (error) {
    console.error("Error fetching team player data:", error);
  }
}
// Create buttons for each team
const teamsToFilter = ['IND', 'NYK', 'BOS', 'MEM', 'TOR', 'OKC', 'DET', 'LAC', 'GSW', 'PHI', 'UTA', 'DET', 'SAC', 'CLE', 'HOU', 'SAC', 'MEM', 'LAC', 'POR', 'BOS', 'CLE', 'ATL', 'ORL'];

const teamButtonsContainer = document.getElementById('teamButtonsContainer');

teamsToFilter.forEach(team => {
  const button = document.createElement('button');
  button.textContent = `Filter by ${team}`;
  button.classList.add("filterButton");
  button.addEventListener('click', () => filterByTeam(team));
  teamButtonsContainer.appendChild(button);
});
// ...

window.onload = async () => {
  try {
    await fetchRandomPlayers(); 
    await displayAllPlayers();
  } catch (error) {
    console.error("Error on page load:", error);
  }}
fetchAPIData(api);

const DOMSelectors = {
  button: document.querySelector('#yourButtonSelector'), 
  input: document.querySelector('#yourInputSelector'), 
};


function injectCards(api){
  DOMSelectors.gallery.innerHTML = '';
  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    `
)}