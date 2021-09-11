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
            if (isVertex && checkIfVertexIsBlocked(table, dot, table[x][y])) {
                continue;
            }
            neighbors.push(table[x][y]);
        }
    }
    return neighbors;
}
//REDO
//Checking if there are 2 walls around the vertex
function checkIfVertexIsBlocked(table, dot, vertex) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const element = document.getElementById('crossCorners');
    if ((element === null || element === void 0 ? void 0 : element.checked) == true) {
        return false;
    }
    let above = (_b = ((_a = table[dot.x][dot.y - 1]) === null || _a === void 0 ? void 0 : _a.type) == TYPE.WALL) !== null && _b !== void 0 ? _b : false;
    let bellow = (_d = ((_c = table[dot.x][dot.y + 1]) === null || _c === void 0 ? void 0 : _c.type) == TYPE.WALL) !== null && _d !== void 0 ? _d : false;
    let right = (_f = ((_e = table[dot.x + 1][dot.y]) === null || _e === void 0 ? void 0 : _e.type) == TYPE.WALL) !== null && _f !== void 0 ? _f : false;
    let left = (_h = ((_g = table[dot.x - 1][dot.y]) === null || _g === void 0 ? void 0 : _g.type) == TYPE.WALL) !== null && _h !== void 0 ? _h : false;
    if (dot.x > vertex.x && dot.y > vertex.y) {
        return left && above;
    }
    else if (dot.x < vertex.x && dot.y < vertex.y) {
        return right && bellow;
    }
    else if (dot.x < vertex.x && dot.y > vertex.y) {
        return right && above;
    }
    return left && bellow;
}
