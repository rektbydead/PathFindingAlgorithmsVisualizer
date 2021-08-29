import { getTypeColor, getColorType, TYPE } from "../objects/DOT.js";
import * as arrayUtils from "..//utils/ArrayUtils.js";
const defaultWidth = 40;
const defaultHeight = 30;
export let points = {
    startX: 5,
    startY: 5,
    endX: 10,
    endY: 5,
};
export function redefinePoints() {
    let table = getNodeList();
    for (let x = 0; x < table.length; x++) {
        for (let y = 0; y < table[0].length; y++) {
            const td = table[x][y].child;
            const color = td.style.backgroundColor;
            if (getColorType(color) == TYPE.START) {
                points.startX = x;
                points.startY = y;
            }
            if (getColorType(color) == TYPE.END) {
                points.endX = x;
                points.endY = y;
            }
        }
    }
}
export function generateEmptyMap() {
    var _a, _b;
    const width = defaultWidth;
    const height = defaultHeight;
    (_a = document.getElementsByTagName("table")[0]) === null || _a === void 0 ? void 0 : _a.remove();
    const table = document.createElement('table');
    for (let y = 0; y < height; y++) {
        let line = document.createElement('tr');
        for (let x = 0; x < width; x++) {
            let child = document.createElement('td');
            child.id = "colorTransition";
            child.draggable = true;
            if (x == points.startX && y == points.startY) {
                child.style.backgroundColor = getTypeColor(TYPE.START);
            }
            else if (x == points.endX && y == points.endY) {
                child.style.backgroundColor = getTypeColor(TYPE.END);
            }
            else {
                child.style.backgroundColor = getTypeColor(TYPE.NORMAL);
            }
            line.appendChild(child);
        }
        table.appendChild(line);
    }
    (_b = document.getElementsByClassName("table")[0]) === null || _b === void 0 ? void 0 : _b.appendChild(table);
}
export function generateRandomWalls() {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");
    for (let y = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        for (let x = 0; x < tr.children.length; x++) {
            const td = tr.children[x];
            const color = td.style.backgroundColor;
            const type = getColorType(color);
            if (type == TYPE.START || type == TYPE.END) {
                continue;
            }
            td.style.backgroundColor = getTypeColor(TYPE.NORMAL);
            const element = document.getElementById("wallPercentage");
            const percentage = Number(element === null || element === void 0 ? void 0 : element.value);
            const random = Math.floor(Math.random() * 100);
            if (random < percentage) {
                td.style.backgroundColor = getTypeColor(TYPE.WALL);
            }
        }
    }
}
export function clearWalls() {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");
    for (let y = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        for (let x = 0; x < tr.children.length; x++) {
            const td = tr.children[x];
            const color = td.style.backgroundColor;
            const type = getColorType(color);
            if (type == TYPE.START || type == TYPE.END) {
                continue;
            }
            td.style.backgroundColor = getTypeColor(TYPE.NORMAL);
        }
    }
}
export function getNodeList() {
    var _a, _b;
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");
    let tableArray = [];
    for (let i = 0; i < ((_b = (_a = trs[0]) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length); i++)
        tableArray[i] = [];
    for (let y = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        for (let x = 0; x < tr.children.length; x++) {
            const td = tr.children[x];
            const dot = {
                child: td,
                x,
                y,
                gCost: 0,
                hCost: 0,
                type: getColorType(td.style.backgroundColor),
            };
            tableArray[x][y] = dot;
        }
    }
    return tableArray;
}
export function clearInvalidColors() {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");
    for (let y = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        for (let x = 0; x < tr.children.length; x++) {
            const td = tr.children[x];
            const type = getColorType(td.style.backgroundColor);
            if (type == TYPE.START || type == TYPE.END) {
                continue;
            }
            if (colorIsValid(td.style.backgroundColor)) {
                continue;
            }
            td.style.backgroundColor = getTypeColor(TYPE.NORMAL);
        }
    }
}
function colorIsValid(color) {
    const colorType = getColorType(color);
    console.log(color);
    let types = [TYPE.TRACKED, TYPE.VISITED, TYPE.NOT_VISITED];
    return !arrayUtils.containsType(types, colorType);
}
