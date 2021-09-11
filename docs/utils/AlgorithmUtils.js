import { TYPE } from "../objects/DOT.js";
export function getNeighbors(table, dot) {
    let neighbors = [];
    const element = document.getElementById('Diagonal');
    let check = 0;
    let vertices = [1, 3, 7, 9];
    for (let x = dot.x - 1; x <= dot.x + 1; x++) {
        for (let y = dot.y - 1; y <= dot.y + 1; y++) {
            const isVertex = vertices.indexOf(++check) != -1;
            const allowVertex = element.checked;
            //dot is invalid
            if (x < 0 || y < 0 || x >= table.length || y >= table[0].length) {
                continue;
            }
            //dot is wall
            if (table[x][y].type == TYPE.WALL) {
                continue;
            }
            //its the dot itself
            if (x == dot.x && y == dot.y) {
                continue;
            }
            if (!allowVertex && isVertex) {
                continue;
            }
            neighbors.push(table[x][y]);
        }
    }
    return neighbors;
}
function checkIfVertexBlocked() {
}
