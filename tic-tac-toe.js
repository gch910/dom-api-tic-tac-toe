window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayerSymbol = "x";
  let opponent = "o";
  let squareValues = ["", "", "", "", "", "", "", "", ""];
  let gameStatus = "";



  const board = document.getElementById("tic-tac-toe-board");
  const gameOverDiv = document.getElementById("game-over");
  const statusHeader = document.getElementById("game-status");
  const newGame = document.getElementById("new-game");
  const giveUp = document.getElementById("give-up");
  //const gameOverDiv = document.getElementById('game-over')

  const findWinner = () => {
    if (
      squareValues[0] === squareValues[1] &&
      squareValues[1] === squareValues[2] &&
      squareValues[2] !== ""
    ) {
      gameStatus = `winner ${squareValues[2]}`;
      statusHeader.innerText = `${squareValues[2].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[3] === squareValues[4] &&
      squareValues[4] === squareValues[5] &&
      squareValues[5] !== ""
    ) {
      gameStatus = `winner ${squareValues[5]}`;
      statusHeader.innerText = `${squareValues[5].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[6] === squareValues[7] &&
      squareValues[7] === squareValues[8] &&
      squareValues[8] !== ""
    ) {
      gameStatus = `winner ${squareValues[8]}`;
      statusHeader.innerText = `${squareValues[8].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[0] === squareValues[3] &&
      squareValues[3] === squareValues[6] &&
      squareValues[6] !== ""
    ) {
      gameStatus = `winner ${squareValues[6]}`;
      statusHeader.innerText = `${squareValues[6].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[1] === squareValues[4] &&
      squareValues[4] === squareValues[7] &&
      squareValues[7] !== ""
    ) {
      gameStatus = `winner ${squareValues[7]}`;
      statusHeader.innerText = `${squareValues[7].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[2] === squareValues[5] &&
      squareValues[5] === squareValues[8] &&
      squareValues[8] !== ""
    ) {
      gameStatus = `winner ${squareValues[8]}`;
      statusHeader.innerText = `${squareValues[8].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[0] === squareValues[4] &&
      squareValues[4] === squareValues[8] &&
      squareValues[8] !== ""
    ) {
      gameStatus = `winner ${squareValues[8]}`;
      statusHeader.innerText = `${squareValues[8].toUpperCase()}'s WIN!`;
    } else if (
      squareValues[2] === squareValues[4] &&
      squareValues[4] === squareValues[6] &&
      squareValues[6] !== ""
    ) {
      gameStatus = `winner ${squareValues[6]}`;
      statusHeader.innerText = `${squareValues[6].toUpperCase()}'s WIN!`;
    }
  };

  newGame.addEventListener("click", (event) => {
    squareValues = ["", "", "", "", "", "", "", "", ""];
    const filledSquare = document.querySelectorAll(".square");
    filledSquare.forEach((square) => {
      square.innerHTML = "";
    });
    gameStatus = "";
    statusHeader.innerHTML = "Let's Play!";
  });

  giveUp.addEventListener("click", () => {
    statusHeader.innerHTML = `Player Symbol ${currentPlayerSymbol.toUpperCase()} Has Forfeit! ${opponent.toUpperCase()}s WIN!`;
    gameStatus = "quitter";
  });

  board.addEventListener("click", (e) => {
    const squareId = e.target.id;
    const square = e.target;
    if (!squareId.startsWith("square-")) return;

    const squareIndex = Number.parseInt(squareId[squareId.length - 1]);

    if (squareValues[squareIndex] !== "") return;

    if (gameStatus !== "" || gameStatus === "quitter") {
      return;
    }

    if (currentPlayerSymbol === "x") {
      squareValues[squareIndex] = currentPlayerSymbol;
      const x = document.createElement("img");
      x.src = "./images/player-x.svg";
      square.appendChild(x);
      currentPlayerSymbol = "o";
      opponent = "x"
      console.log(squareValues);
    } else if (currentPlayerSymbol === "o") {
      squareValues[squareIndex] = currentPlayerSymbol;
      const o = document.createElement("img");
      o.src = "./images/player-o.svg";
      square.appendChild(o);
      currentPlayerSymbol = "x";
      opponent = "o"
      console.log(squareValues);
    }

    if (squareValues.every((value) => value !== "")) {
      const gameOver = document.createElement("h1");
      gameOver.innerText = "GAME OVER, IT IS A TIE";
      gameOver.style.textAlign = "center";
      gameOverDiv.appendChild(gameOver);
      gameStatus = "Tie";
      statusHeader.innerText = gameStatus;
    }
    console.log(currentPlayerSymbol)
    console.log(opponent)
    findWinner();
  });

});
