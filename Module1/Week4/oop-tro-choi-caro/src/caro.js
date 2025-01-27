function Caro() {

    this.drawGameBoard = function() {
        const GRID_SIZE = 10; // Hằng số lưu số ô cờ caro 20x20.
        const PLAYER_1 = 'X';
        const PLAYER_2 = 'O';
        const VALUE_EMPTY = '\u00A0\u00A0\u00A0';
        let turn = PLAYER_2;
        let board = [];
        let isGameOver = false;

        let tbl = document.createElement('table');

        for (let i = 0; i < GRID_SIZE; i++) {
            board[i] = [0, 0, 0];
        }

        for (let i = 0; i < GRID_SIZE; i++) { //Chạy vòng lặp row.
            let rows = document.createElement('tr');
            rows.setAttribute('class', 'rows');
            for (let j = 0; j < GRID_SIZE; j++) { //Chạy vòng lặp column lồng trong vòng lặp row.
                let cols = document.createElement('td');
                cols.setAttribute('class', 'cols');
                let colsText = document.createTextNode(VALUE_EMPTY);
                cols.appendChild(colsText);
                cols.onclick = function () {
                    if (!isGameOver) {
                        if (this.textContent === VALUE_EMPTY) { // Chỉ chèn x hoặc o vào ô trống.
                            if (turn === PLAYER_1) {
                                this.innerHTML = '<span class="text-o">' + PLAYER_2 + '</span>';
                                document.getElementById('output').innerHTML = '<span class="font-weight-bold">' + PLAYER_1 + '</span> Turn';
                                board[i][j] = PLAYER_2; // Gán phần tử board[i][j] bằng giá trị "o".
                                turn = PLAYER_2;
                            }
                            else {
                                this.innerHTML = '<span class="text-x">' + PLAYER_1 + '</span>';
                                document.getElementById('output').innerHTML = '<span class="font-weight-bold">' + PLAYER_2 + '</span> Turn';
                                board[i][j] = PLAYER_1; // Gán phần tử board[i][j] bằng giá trị "x".
                                turn = PLAYER_1;
                            }
                        }
                    }
                    // this.checkForWin(turn);
                };
                rows.appendChild(cols); // Chèn cột vào hàng.
            }
            tbl.appendChild(rows); // Vẽ bảng.
        }
        return tbl;
    };

    this.checkForWin = function(turn) {
        console.log(turn);
    };

}