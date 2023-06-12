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
		div.setAttribute('data-number', i + 1);
		main.appendChild(div);
	}
})();

const renderBoard = (() => {
	let gameboard = ['', '', '', '', '', '', '', '', ''];
	const square = document.querySelectorAll('.gameboard div');
	for (let i = 0; i < 9; i++) {
		square[i].innerText = gameboard[i];
	}
	return { square };
})();

const displayController = (() => {
	let round = 0;
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
			square.innerText = currentPlayer.mark;
			round++;
			console.log(round);
		});
	});
	return { currentPlayer };
})();
