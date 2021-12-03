let userinput = document.getElementById("userinput");
let userbox = document.getElementById("userbox");
let inputButton = document.getElementById("inputButton");
let topscore = document.getElementById("topscore");
let scoretext = document.getElementById("scoreValuePlayer1");
let thisThrow = document.getElementById("throwButton");
let numberText = document.getElementById("numberText");
const resetButton = document.getElementById("resetButton");
let dieimage = document.getElementById("dieface");
const sound = document.getElementById("sound");

let desiredscore = 20;
let throwNumber = 0;

inputButton.addEventListener("click", () => {
  desiredscore = userinput.value;
  userbox.style.visibility = "hidden";
  topscore.textContent = `Don't go above ${desiredscore}!`;
});

function getRandomArbitrary() {
  throwNumber = Math.floor(Math.random() * (7 - 1) + 1);
  return throwNumber;
}
let score = 0;
const accruescore = () => {
  getRandomArbitrary();
  score += throwNumber;
};
// functionn to replace image
const replaceImage = () => {
  dieimage.style.display = "block";
  dieimage.src = `dice/Dice${throwNumber}.svg`;
};

thisThrow.addEventListener("click", () => {
  accruescore();
  replaceImage();
  sound.play();
  if (throwNumber == 1) {
    console.log("A 1");
    numberText.textContent = "You rolled a 1, you lose! Please reset";
    thisThrow.style.display = "none";
    return;
  }

  if (score > desiredscore) {
    numberText.textContent = `You rolled a ${throwNumber}, your score is above ${desiredscore}, you lose!`;
    scoretext.textContent = score;
    thisThrow.style.display = "none";
  } else {
    numberText.textContent = `You rolled a ${throwNumber}, your score is ${score}`;
    scoretext.textContent = score;
  }
});
