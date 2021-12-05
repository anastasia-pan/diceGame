//non user-specific objects, userinput box, inputbutton, overall desired score etc

let userinput = document.getElementById("userinput");
let userbox = document.getElementById("userbox");
let inputButton = document.getElementById("inputButton");
let topscore = document.getElementById("topscore");
const resetButton = document.getElementById("resetButton");
const sound = document.getElementById("sound");
let winnerhere = document.getElementById("winnerhere");

// setting a default desired score and asking the player to set their own
let desiredscore = 20;

inputButton.addEventListener("click", () => {
  desiredscore = userinput.value;
  userbox.style.visibility = "hidden";
  topscore.textContent = `Don't go above ${desiredscore}!`;
});

// function to generate randomnumber 1-6 and assign to variable throwValue
function getRandomArbitrary() {
  throwValue = Math.floor(Math.random() * (7 - 1) + 1);
  return throwValue;
}

const player1 = {
  loser: false,
  winner: false,
  name: "Player 1",
  throwValue: 0,
  numberText: document.getElementById("numberText"),
  score: 0,
  scoretext: document.getElementById("scoreValuePlayer1"),
  dieimage: document.getElementById("dieface"),
  throwButton: document.getElementById("throwButton"),
};

const player2 = {
  loser: false,
  winner: false,
  name: "Player 2",
  throwValue: 0,
  numberText: document.getElementById("numberText2"),
  score: 0,
  scoretext: document.getElementById("scoreValuePlayer2"),
  dieimage: document.getElementById("dieface2"),
  throwButton: document.getElementById("throwButton2"),
};

// a function to accrue player score
// const accruescore = (score) => {
//   getRandomArbitrary();
//   score += throwNumber;
// };

//a function to replace an image according to the throwNumber
const replaceImage = (player) => {
  player.dieimage.style.display = "block";
  player.dieimage.src = `dice/Dice${player.throwValue}.svg`;
};

const returnloser = (player) => {
  if (player.throwValue == 1) {
    console.log("A 1");
    player.numberText.textContent = "You rolled a 1, you lose!";
    player.throwButton.style.display = "none";
    player.loser = true;
  } else if (player.score > desiredscore) {
    player.numberText.textContent = `You rolled a ${player.throwValue}, your score is above ${desiredscore}, you lose!`;
    player.scoretext.textContent = player.score;
    player.throwButton.style.display = "none";
    player.loser = true;
  } else {
    player.numberText.textContent = `You rolled a ${player.throwValue}, your score is ${player.score}.`;
    player.scoretext.textContent = player.score;
  }

  if (player.loser == true) {
    winnerhere.textContent = `${player.name} lost!`;
    player1.throwButton.style.display = "none";
    player2.throwButton.style.display = "none";
  }
};

const hidebuttons = () => {
  if ((player1.throwButton.style.display = "block")) {
    player1.throwButton.style.display = "hide";
    player2.throwButton.style.display = "block";
    return;
  } else if ((player2.throwButton.style.display = "block")) {
    player1.throwButton.style.display = "hide";
    player2.throwButton.style.display = "block";
    return;
  }
};

const roll = (player) => {
  player.throwButton.addEventListener("click", () => {
    //hide this throw button, appear the other player's
    hidebuttons();
    //add a new value to throwValue between 1-6
    player.throwValue = getRandomArbitrary();
    //update score with new throwValue
    player.score += throwValue;

    replaceImage(player);
    sound.play();
    returnloser(player);
  });
};

roll(player1);
roll(player2);
// };
// player1.throwButton.addEventListener("click", () => {
//   //hide this throw button, appear the other player's
//   hidebuttons();
//   //add a new value to throwValue between 1-6
//   player1.throwValue = getRandomArbitrary();
//   //update score with new throwValue
//   player1.score += throwValue;

//   replaceImage(player1);
//   sound.play();
//   returnloser(player1);
// });

// player2.thisThrow.addEventListener("click", () => {
//   //hide this throw button, appear the other player's
//   thisThrow2.style.display = "hide";
//   thisThrow1.style.display = "block";

//   getRandomArbitrary();
//   scoreplayer2 += throwNumber;

//   replaceImage(dieimage2);
//   sound.play();

//   returnloser(player2, thisThrow2, numberText2, scoreplayer2, scoretext2);

//   if (player2 == "loser") {
//     winnerhere.textContent = "Player 1 is the winner!";
//     thisThrow1.style.display = "none";
//     thisThrow2.style.display = "none";
//   }
// });

// let throwPlayer1 = 0;
// let scoreplayer1 = 0;
// let player1 = "";

// let throwPlayer2 = 0;
// let scoreplayer2 = 0;
// let player2 = ""};
