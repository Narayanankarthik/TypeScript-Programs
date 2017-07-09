var i, j, space, k;
var rows = 5;
for (i = 1; i <= rows; ++i, k = 0) {
    for (space = 1; space <= rows - i; ++space) {
        console.log("  ");
    }
    while (k != 2 * i - 1) {
        console.log("*");
        ++k;
    }
    console.log("\n");
}
cosole.log("Its not watching");
console.log("Hey its watching now");
