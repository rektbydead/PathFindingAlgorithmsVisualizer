import { getTypeColor, getColorType, getInverseType, DOT, TYPE } from "../objects/DOT.js"


export function getNeighbors(table : DOT[][], dot : DOT) : Array<DOT> {
    let neighbors: Array<DOT> = [];

    const element : HTMLInputElement = document.getElementById('Diagonal') as HTMLInputElement;

    let check: number = 0;
    let vertices: Array<number> = [1, 3, 7, 9];
    for(let x : number = dot.x - 1; x <= dot.x + 1; x++) {
        for(let y : number = dot.y - 1; y <= dot.y + 1; y++) {
            const isVertices : boolean = vertices.indexOf(++check) != -1;
            const allowVertices : boolean = element.checked;

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

            if (!allowVertices && isVertices){
                continue 
            }
            
            neighbors.push(table[x][y]);
        }
    }

    return neighbors;
}