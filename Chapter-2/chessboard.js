chessboard = ""

for (y = 0; y < 8; y = y + 1) {
    for (x = 0; x < 8; x = x + 1) {
        sum = x + y;
        if (sum % 2 == 0) {
            chessboard = chessboard + "#";
        } else {
            chessboard = chessboard + " ";
        }
    }
    chessboard += "\n";
}
console.log(chessboard);