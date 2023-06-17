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
	const info = document.querySelector('#info');
	const playerOne = new makePlayer('playerOne', 'X');
	const playerTwo = new makePlayer('playerTwo', 'O');
	square.forEach((square) => {
		square.addEventListener('click', () => {
			if (currentPlayer == playerOne) {
				currentPlayer = playerTwo;
			} else {
				currentPlayer = playerOne;
			}
			info.innerText = `${currentPlayer.name} just played, it's your turn now!`;
			let indexOfGamenoard = square.getAttribute('data-number');
			gameboard[indexOfGamenoard] = currentPlayer.mark;
			fillBoard();
			findWinner();
			finishGame();
		});
	});
}

function finishGame() {
	if (gameboard.indexOf('') == -1) {
		findWinner();
		console.log('end game');
		square.forEach((square) => {
			square.innerText = '';
		});
		gameboard = ['', '', '', '', '', '', '', '', ''];
		info.innerText = `Start with clicking on any square you want`;
	}
}

function findWinner() {
	const winCondition = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6],
		[0, 3, 6],
		[2, 4, 7],
		[3, 5, 8],
	];
	winCondition.forEach((condition) => {
		if (
			gameboard[condition[0]] != '' &&
			gameboard[condition[1]] != '' &&
			gameboard[condition[2]] != ''
		) {
			if (
				gameboard[condition[0]] == gameboard[condition[1]] &&
				gameboard[condition[1]] == gameboard[condition[2]]
			) {
				alert('we have a winner');
			}
		}
	});
}

export function startGame() {
	makeBoard();
	fillBoard();
}
