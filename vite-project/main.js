const API_URL = 'https://www.balldontlie.io/api/v1/players';
const players = {};

async function fetchRandomPlayers() {
 try {
   const response = await fetch(API_URL);
   if (!response.ok) {
     throw new Error(response.statusText);
   }
  
   const data = await response.json();
   const fetchedPlayers = data.data; // Rename to avoid conflicts with 'players' variable

   players.player1 = getRandomPlayer(fetchedPlayers);
   players.player2 = getRandomPlayer(fetchedPlayers);
   displayPlayers(players.player1, players.player2);

   // Set up event listeners after players are displayed
   document.getElementById('option1').addEventListener('click', () => choosePlayer(players.player1));
   document.getElementById('option2').addEventListener('click', () => choosePlayer(players.player2));

 } catch (error) {
   console.error("Error fetching player data:", error);
 }
}

function getRandomPlayer(players) {
 const randomIndex = Math.floor(Math.random() * players.length);
 return players[randomIndex];
}

function displayPlayers(player1, player2) {
 const playerInfo1 = `${player1.first_name} ${player1.last_name} (${player1.team.full_name})`;
 const playerInfo2 = `${player2.first_name} ${player2.last_name} (${player2.team.full_name})`;

 document.getElementById('option1').textContent = playerInfo1;
 document.getElementById('option2').textContent = playerInfo2;
}

function choosePlayer(player) {
 console.log(`You chose ${player.first_name} ${player.last_name}`);
 fetchRandomPlayers();
}

fetchRandomPlayers();
