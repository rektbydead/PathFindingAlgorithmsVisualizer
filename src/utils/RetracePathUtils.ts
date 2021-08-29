import { getTypeColor, DOT, TYPE, getColorType } from "../objects/DOT.js"
import { points } from "../map/GenerateMap.js";


const defaultWaitTime = 5;
let timeOutNumber = 1;
let ids : number[] = [];

function retracePath(table : DOT [][]) {
    let pathArray : DOT[] = [];

    let node : DOT = table[points.endX][points.endY];
    while (node.x != points.startX || node.y != points.startY) {
        pathArray.push(node);
        node = node.parent ?? node;
    }

    for (let i : number = pathArray.length - 1; i >= 1; i--) {
        let id = setTimeout(() => {
            pathArray[i].child.style.backgroundColor = getTypeColor(TYPE.TRACKED);
        }, defaultWaitTime * (pathArray.length - i));

        ids.push(id);
    }
}

export function retrace(table : DOT [][], closed : DOT []) {
    let id = setTimeout(() => {
        retracePath(table);
    }, defaultWaitTime * timeOutNumber++);

    ids.push(id);
}

export function cancelAnimation() {
    ids.forEach((value) => {
        clearInterval(value);
    });

    ids = [];
    timeOutNumber = 1;
}


export function paintNode(node: DOT, type : TYPE, increment : boolean = false) {
    const color : string = node.child.style.backgroundColor;
    const colorType : TYPE = getColorType(color);
    if (colorType == TYPE.START || colorType == TYPE.END)
        return;

    const waitTime : number = timeOutNumber * defaultWaitTime;
    if (increment) { timeOutNumber++; }

    let id : number = setTimeout(() => {
            node.child.style.backgroundColor = getTypeColor(type);
    }, waitTime);

    ids.push(id);
}