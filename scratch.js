let newPlayer = (playerNumber) => {

    let box = document.getElementById(`textBox${playerNumber}`)
    let throwButton = document.getElementById(`throw${playerNumber}`)

    let player = {
        score: 0,
        element: box,
        throwButton: throwButton,

        setup() {
            throwButton.addEventListener("click", () => {
                // get random number
                let randomNumber = 0;
                this.addToScore(randomNumber)
            })
        },

        addToScore(n) {
            this.score += n;
            this.element.textContent = `${this.score}`;
        }
    }

    return player;

};

let p1 = newPlayer();
p1.setup()
let p2 = newPlayer();
p2.setup()

const printScores = () => {
  console.log(`p1 score: ${p1.score}; p2 score: ${p2.score}`);
};

printScores();

p1.addToScore(1);
p2.addToScore(3);

printScores();
