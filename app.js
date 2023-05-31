const makePlayer = (name, marker) => {
	return { name, marker };
};

const game = (() => {
	// player
	const player1 = makePlayer('player1', 'X');
	const player2 = makePlayer('player2', 'O');

	let correctPlayer = player1;

	let board = [];

	const gameboard = document.querySelectorAll('.gameboard div');
	gameboard.forEach((e) => {
		if (e.innerText == '') {
			e.addEventListener('click', () => {
				e.innerText = correctPlayer.marker;
				if (correctPlayer == player1) {
					correctPlayer = player2;
				} else {
					correctPlayer = player1;
				}
				board.push(e.innerText);
				console.log(e);
			});
		} else {
			console.log('no');
		}
	});
	// clean the board
	function cleanBoard() {
		gameboard.forEach((e) => (e.innerText = ''));
	}
})();
