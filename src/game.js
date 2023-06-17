const makePlayer = function (name, mark) {
	this.name = name;
	this.mark = mark;
};
let square = [];
function makeBoard() {
	const main = document.querySelector('.gameboard');
	for (let i = 0; i < 9; i++) {
		const div = document.createElement('div');
		div.setAttribute('data-number', i);
		main.appendChild(div);
	}
	square = document.querySelectorAll('.gameboard div');
	return square;
}

let gameboard = ['', '', '', '', '', '', '', '', ''];

function fillBoard() {
	for (let i = 0; i < 9; i++) {
		square[i].innerText = gameboard[i];
	}
}

export function PlayerOption() {
	let currentPlayer;
	const playerOne = new makePlayer('playerOne', 'X');
	const playerTwo = new makePlayer('playerTwo', 'O');
	square.forEach((square) => {
		square.addEventListener('click', () => {
			if (currentPlayer == playerOne) {
				currentPlayer = playerTwo;
			} else {
				currentPlayer = playerOne;
			}
			let indexOfGamenoard = square.getAttribute('data-number');
			gameboard[indexOfGamenoard] = currentPlayer.mark;
			fillBoard();
			console.log(gameboard);
			finishGame();
		});
	});
}

function finishGame() {
	if (gameboard.indexOf('') == -1) {
		console.log('end game');
		square.forEach((square) => {
			square.innerText = '';
		});
	}
}

export function startGame() {
	makeBoard();
	fillBoard();
	console.log(gameboard);
}
