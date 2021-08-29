import { DOT, TYPE } from "../objects/DOT.js"

export function removeFromArray(list : DOT[], node : DOT) : DOT[] {
    return list = list.filter((dot, index, array) => { 
        return !(dot.x == node.x && dot.y == node.y);
    });
}

export function contains(list : DOT[], node : DOT) : boolean {
    return list.some((dotN) => node.x == dotN.x && node.y == dotN.y);
}

export function containsType(list : TYPE[], value : TYPE) : boolean {
    return list.some((number) => number == value);
}
