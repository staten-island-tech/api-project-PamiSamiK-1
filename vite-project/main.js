const API_URL = 'https://www.balldontlie.io/api/v1/players';
let player1, player2;

async function fetchRandomPlayers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    const data = await response.json();
    const players = data.data;
    
    player1 = getRandomPlayer(players);
    player2 = getRandomPlayer(players);
    displayPlayers(player1, player2);

    // Set up event listeners after players are displayed
    document.getElementById('option1').addEventListener('click', () => choosePlayer(player1));
    document.getElementById('option2').addEventListener('click', () => choosePlayer(player2));

  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}

function getRandomPlayer(players) {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
}

function displayPlayers(player1, player2) {
  document.getElementById('option1').textContent = `${player1.first_name} ${player1.last_name}`;
  document.getElementById('option2').textContent = `${player2.first_name} ${player2.last_name}`;
}

function choosePlayer(player) {
  console.log(`You chose ${player.first_name} ${player.last_name}`);
  fetchRandomPlayers();
}

fetchRandomPlayers();

