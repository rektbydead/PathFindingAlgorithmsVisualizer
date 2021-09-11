import { getTypeColor, getColorType, getInverseType, DOT, TYPE } from "../objects/DOT.js"


export function getNeighbors(table : DOT[][], dot : DOT) : Array<DOT> {
    let neighbors: Array<DOT> = [];

    const element : HTMLInputElement = document.getElementById('Diagonal') as HTMLInputElement;

    let check: number = 0;
    let vertices: Array<number> = [1, 3, 7, 9];
    for(let x : number = dot.x - 1; x <= dot.x + 1; x++) {
        for(let y : number = dot.y - 1; y <= dot.y + 1; y++) {
            const isVertex : boolean = vertices.indexOf(++check) != -1;
            const allowVertex : boolean = element.checked;

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

            if (!allowVertex && isVertex){
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
function checkIfVertexIsBlocked(table : DOT[][], dot : DOT, vertex : DOT) : boolean {
    const element : HTMLInputElement = document.getElementById('crossCorners') as HTMLInputElement;

    if (element?.checked == true) {
        return false;
    }

    let above : boolean = table[dot.x][dot.y - 1]?.type == TYPE.WALL ?? false; 
    let bellow : boolean = table[dot.x][dot.y + 1]?.type == TYPE.WALL ?? false; 
    let right : boolean = table[dot.x + 1][dot.y]?.type == TYPE.WALL ?? false; 
    let left : boolean = table[dot.x - 1][dot.y]?.type == TYPE.WALL ?? false; 

    if (dot.x > vertex.x && dot.y > vertex.y) {
        return left && above;
    } else if (dot.x < vertex.x && dot.y < vertex.y) {
        return right && bellow;
    } else if (dot.x < vertex.x && dot.y > vertex.y) {
        return right && above;
    }

    return left && bellow;
}