const API_URL = 'https://www.balldontlie.io/api/v1/players';
const players = {};

async function fetchRandomPlayers() {
 try {
   const response = await fetch(API_URL);
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



function getRandomPlayer(players) {
 const randomIndex = Math.floor(Math.random() * players.length);
 return players[randomIndex];
}



function showplayers(player1, player2) {
 const playerInfo1 = `${player1.first_name} ${player1.last_name} (${player1.team.full_name})`;
 const playerInfo2 = `${player2.first_name} ${player2.last_name} (${player2.team.full_name})`;

 document.getElementById('option1').textContent = playerInfo1;
 document.getElementById('option2').textContent = playerInfo2;
}




function showchosenplayer(player) {
  const playerName = `${player.first_name} ${player.last_name}`;
  const chosenPlayerElement = document.getElementById('chosenPlayer');
  
  chosenPlayerElement.textContent = `You chose ${playerName}`;
}


function choosePlayer(player) {
  console.log(`You chose ${player.first_name} ${player.last_name}`);
  showchosenplayer(player); 
  fetchRandomPlayers();
}


fetchRandomPlayers();



//make cards





function createPlayerCard(player) {
  return `
    <div class="card">
      <h3>${player.first_name} ${player.last_name}</h3>
      <p>Team: ${player.team.full_name}</p>
    </div>
  `;
}



async function displayAllPlayers() {
  try {
    const response = await fetch(API_URL);
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

window.onload = displayAllPlayers;