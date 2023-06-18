let square = [];
let currentPlayer;
let winnerStatus = false;
let gameboard = ['', '', '', '', '', '', '', '', ''];

const makePlayer = function (name, mark) {
	this.name = name;
	this.mark = mark;
};

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

function fillBoard() {
	for (let i = 0; i < 9; i++) {
		square[i].innerText = gameboard[i];
	}
}

function resetGame() {
	console.log('end game');
	square.forEach((square) => {
		square.innerText = '';
	});
	gameboard = ['', '', '', '', '', '', '', '', ''];
	info.innerText = `Start with clicking on any square you want`;
}

function endGame() {
	if (gameboard.indexOf('') == -1 && winnerStatus == false) {
		alert('DRAW!!!');
		resetGame();
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
			gameboard[condition[2]] != '' &&
			gameboard[condition[0]] == gameboard[condition[1]] &&
			gameboard[condition[1]] == gameboard[condition[2]]
		) {
			winnerStatus = true;
			alert(`${currentPlayer.name} wins!`);
			resetGame();
		}
	});
}

export function PlayerOption() {
	const info = document.querySelector('#info');
	const playerOne = new makePlayer('player X', 'X');
	const playerTwo = new makePlayer('player O', 'O');
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
			endGame();
			findWinner();
		});
	});
}

export function startGame() {
	makeBoard();
	fillBoard();
}
