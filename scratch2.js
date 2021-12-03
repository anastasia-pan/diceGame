const throwYourDie = (
    thisThrow,
    score,
    imagehere,
    player,
    numberText,
    scoretext
  ) => {
    thisThrow.addEventListener("click", () => {
      if (thisThrow == thisThrow1) {
        thisThrow1.style.display = "hide";
        thisThrow2.style.display = "block";
      } else if (thisThrow == thisThrow2) {
        thisThrow1.style.display = "block";
        thisThrow2.style.display = "hide";
      }
  
      getRandomArbitrary();
      score += throwNumber;
      // accruescore(score);
      replaceImage(imagehere);
      sound.play();
      if (throwNumber == 1) {
        console.log("A 1");
        numberText.textContent = "You rolled a 1, you lose!";
        thisThrow.style.display = "none";
        return (player = "loser");
      }
      if (score > desiredscore) {
        numberText.textContent = `You rolled a ${throwNumber}, your score is above ${desiredscore}, you lose!`;
        scoretext.textContent = score;
        thisThrow.style.display = "none";
        return (player = "loser");
      } else {
        numberText.textContent = `You rolled a ${throwNumber}, your score is ${score}`;
        scoretext.textContent = score;
      }
    });
    if (player1 == "loser") {
      winnerhere.textContent = "Player 2 is the winner!";
      thisThrow1.style.display = "none";
      thisThrow2.style.display = "none";
    } else if (player2 == "loser") {
      winnerhere.textContent = "Player 1 is the winner!";
      thisThrow1.style.display = "none";
      thisThrow2.style.display = "none";
    }
  };
  
  throwYourDie(
    thisThrow1,
    scoreplayer1,
    dieimage1,
    player1,
    numberText1,
    scoretext1
  );
  
  throwYourDie(
    thisThrow2,
    scoreplayer2,
    dieimage2,
    player2,
    numberText2,
    scoretext2
  );
  