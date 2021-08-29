import { getTypeColor, TYPE, getColorType } from "../objects/DOT.js";
import { points } from "../map/GenerateMap.js";
const defaultWaitTime = 5;
let timeOutNumber = 1;
let ids = [];
function retracePath(table) {
    var _a;
    let pathArray = [];
    let node = table[points.endX][points.endY];
    while (node.x != points.startX || node.y != points.startY) {
        pathArray.push(node);
        node = (_a = node.parent) !== null && _a !== void 0 ? _a : node;
    }
    for (let i = pathArray.length - 1; i >= 1; i--) {
        let id = setTimeout(() => {
            pathArray[i].child.style.backgroundColor = getTypeColor(TYPE.TRACKED);
        }, defaultWaitTime * (pathArray.length - i));
        ids.push(id);
    }
}
export function retrace(table, closed) {
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
export function paintNode(node, type, increment = false) {
    const color = node.child.style.backgroundColor;
    const colorType = getColorType(color);
    if (colorType == TYPE.START || colorType == TYPE.END)
        return;
    const waitTime = timeOutNumber * defaultWaitTime;
    if (increment) {
        timeOutNumber++;
    }
    let id = setTimeout(() => {
        node.child.style.backgroundColor = getTypeColor(type);
    }, waitTime);
    ids.push(id);
}
