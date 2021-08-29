export function getNeighbors(table, dot) {
    let neighbors = [];
    let check = 0;
    let avoid = [1, 3, 7, 9];
    for (let x = dot.x - 1; x <= dot.x + 1; x++) {
        for (let y = dot.y - 1; y <= dot.y + 1; y++) {
            check++;
            if (x < 0 || y < 0 || x >= table.length || y >= table[0].length || avoid.indexOf(check) != -1)
                continue;
            if (x == dot.x && y == dot.y)
                continue;
            neighbors.push(table[x][y]);
        }
    }
    return neighbors;
}
