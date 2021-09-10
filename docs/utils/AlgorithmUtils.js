import { TYPE } from "../objects/DOT.js";
export function getNeighbors(table, dot) {
    let neighbors = [];
    const element = document.getElementById('Diagonal');
    let diagonal = element.checked;
    let check = 0;
    let avoid = [1, 3, 7, 9];
    for (let x = dot.x - 1; x <= dot.x + 1; x++) {
        for (let y = dot.y - 1; y <= dot.y + 1; y++) {
            if (x < 0 || y < 0 || x >= table.length || y >= table[0].length)
                continue;
            if (avoid.indexOf(++check) != -1 && !diagonal) {
                continue;
            }
            if (x == dot.x && y == dot.y) {
                continue;
            }
            if (table[x][y].type == TYPE.WALL) {
                continue;
            }
            /*if (table[x][y].type != TYPE.START && table[x][y].type != TYPE.END)
            table[x][y].child.style.backgroundColor = "purple";*/
            neighbors.push(table[x][y]);
        }
    }
    return neighbors;
}
