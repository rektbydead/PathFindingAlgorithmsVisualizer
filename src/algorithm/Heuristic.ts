
import { DOT } from "../objects/DOT.js";

export function heuristic(dot1 : DOT, dot2 : DOT) : number {
    const element : HTMLSelectElement = document?.getElementById("heuristicSelector") as HTMLSelectElement;
    const type : string = element.options[element.selectedIndex].value;

    switch(type.toUpperCase()) {
        case "CHEBYSHEV":
            return chebyshev(dot1, dot2);
        case "EUCLIDEAN":
            return euclidean(dot1, dot2);
        case "MANHATTAN":
            return manhattan(dot1, dot2);
        default:
            return -1;
    }
}

function manhattan(dot1 : DOT, dot2 : DOT) : number {
    let distX : number = Math.abs(dot2.x - dot1.x);
    let distY : number = Math.abs(dot2.y - dot1.y);

    return distX + distY;
}


function euclidean(dot1 : DOT, dot2 : DOT) : number {
    let distX : number = (dot2.x - dot1.x) ** 2;
    let distY : number = (dot2.y - dot1.y) ** 2;

    return Math.sqrt(distX + distY);
}

function chebyshev(dot1 : DOT, dot2 : DOT) : number {
    let distX : number = dot2.x - dot1.x;
    let distY : number = dot2.y - dot1.y;


    return Math.max(distX, distY);
}
