var numRookCaptures = function(board) {
    let count = 0
    let row,column;

    for(let i = 0;i < board.length;i++) {
        for(let j =0;j < board.length;j++) {
            if(board[i][j] === 'R') {
                row = i
                column = j

            
            }
        }
    }
    let boardRow = board[i];
    let boardColumn = [];

    for(let k = 0;k <8;k++) {
        boardColumn.push(board[k][column]);
    }

    for(let w =boardRow.indexOf('R') + 1;w <8;w++) {
        if(boardRow[w] != '.') {
            if(boardRow[w] === 'p') {
                count++
                break
            }
            else {
                break
            }
        }

    }
    for(let e = boardRow.indexOf('R') -1;e >= 0;e--) {
        if(boardRow[e] != '.') {
            if(boardRow[e] === 'p') {
                count++;
                break;
            }
            else {
                break
            }
        }
    }
    for(let c = boardColumn.indexOf('R') +1;c<8;c++ ) {
        if(boardColumn[c] != '.') {
            if(boardColumn[c] === 'p') {
                count++;
                break;
            }
            else {
                break
            }
        }

    }

    for(let o = boardColumn.indexOf('R') -1;c>=0;c-- ) {
        if(boardColumn[c] != '.') {
            if(boardColumn[c] === 'p') {
                count++;
                break;
            }
            else {
                break
            }
        }

    }

return count 
    
};

numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]])