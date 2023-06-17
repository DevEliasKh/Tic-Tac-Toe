// todo 1. function that make the board
// todo 2. function that show player turn
// todo 3. function that make player
// todo 4.

const makePlayer = function (name, mark) {
	this.name = name;
	this.mark = mark;
};

const makeBoard = (() => {
	const main = document.querySelector('.gameboard');
	for (let i = 0; i < 9; i++) {
		const div = document.createElement('div');
		div.setAttribute('data-number', i);
		main.appendChild(div);
	}
})();

const renderBoard = (() => {
	let gameboard = ['', '', '', '', '', '', '', '', ''];
	const square = document.querySelectorAll('.gameboard div');
	function fillBoard() {
		for (let i = 0; i < 9; i++) {
			square[i].innerText = gameboard[i];
		}
	}
	return { square, gameboard, fillBoard };
})();

const PlayerOption = (() => {
	let round = +document.querySelector('#round-number').value;
	let currentPlayer;
	const playerOne = new makePlayer('playerOne', 'X');
	const playerTwo = new makePlayer('playerTwo', 'O');
	renderBoard.square.forEach((square) => {
		square.addEventListener('click', () => {
			if (currentPlayer == playerOne) {
				currentPlayer = playerTwo;
			} else {
				currentPlayer = playerOne;
			}
			let indexOfGamenoard = square.getAttribute('data-number');
			renderBoard.gameboard[indexOfGamenoard] = currentPlayer.mark;
			renderBoard.fillBoard();
			endGame.finishGame();
			console.log(renderBoard.gameboard, round);
		});
	});
	return { currentPlayer, round };
})();

const endGame = (() => {
	function finishGame() {
		if (renderBoard.gameboard.indexOf('') == -1) {
			console.log('end game');
			renderBoard.gameboard = ['', '', '', '', '', '', '', '', ''];
			renderBoard.fillBoard();
		}
	}
	return { finishGame };
})();
