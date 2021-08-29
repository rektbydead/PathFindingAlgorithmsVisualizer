import { getTypeColor, getColorType, DOT, TYPE } from "../objects/DOT.js"
import * as arrayUtils from "..//utils/ArrayUtils.js";

const defaultWidth: number = 40;
const defaultHeight: number = 30;

export let points = {
    startX: 5,
    startY: 5,

    endX: 10,
    endY: 5,
}

export function redefinePoints() : void {
    let table : DOT[][] = getNodeList();

    for (let x = 0; x < table.length; x++) {
        for (let y = 0; y < table[0].length; y++) {
            const td : HTMLTableCellElement = table[x][y].child;
            const color : string = td.style.backgroundColor;
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

export function generateEmptyMap() : void {
    const width : number = defaultWidth;
    const height : number = defaultHeight;

    document.getElementsByTagName("table")[0]?.remove();    

    const table = document.createElement('table');

    for (let y : number = 0; y < height; y++) {
        let line = document.createElement('tr');

        for (let x : number = 0; x < width; x++) { 
            let child : HTMLTableCellElement = document.createElement('td');   
            child.id = "colorTransition";
            child.draggable = true;

            if (x == points.startX && y == points.startY) { 
                child.style.backgroundColor = getTypeColor(TYPE.START);
            } else if (x == points.endX && y == points.endY) { 
                child.style.backgroundColor = getTypeColor(TYPE.END);
            } else {
                child.style.backgroundColor = getTypeColor(TYPE.NORMAL);
            }

            line.appendChild(child);
        }

        table.appendChild(line);
    }

    document.getElementsByClassName("table")[0]?.appendChild(table);
}

export function generateRandomWalls() : void {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");

    for (let y : number = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        
        for (let x : number = 0; x < tr.children.length; x++) {
            const td = tr.children[x] as HTMLTableCellElement;
            const color = td.style.backgroundColor;

            const type = getColorType(color);
            if (type == TYPE.START || type == TYPE.END) {
                continue;
            }
            
            td.style.backgroundColor = getTypeColor(TYPE.NORMAL);

            const element = document.getElementById("wallPercentage") as HTMLInputElement;
            const percentage = Number(element?.value);

            const random = Math.floor(Math.random() * 100); 
            if (random < percentage){
                td.style.backgroundColor = getTypeColor(TYPE.WALL);
            }
        }
    }
}

export function clearWalls() {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");

    for (let y : number = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        
        for (let x : number = 0; x < tr.children.length; x++) {
            const td = tr.children[x] as HTMLTableCellElement;
            const color = td.style.backgroundColor;

            const type = getColorType(color);

            if (type == TYPE.START || type == TYPE.END) {
                continue;
            }

            td.style.backgroundColor = getTypeColor(TYPE.NORMAL);
        }
    }
}

export function getNodeList() : DOT[][] {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");

    let tableArray: DOT[][] = [];
    for (let i : number = 0; i < trs[0]?.children?.length; i++) 
        tableArray[i] = [];

    for (let y : number = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        
        for (let x : number = 0; x < tr.children.length; x++) {
            const td : HTMLTableCellElement = tr.children[x] as HTMLTableCellElement;

            const dot : DOT = {
                child: td,
                x,
                y,
                gCost: 0,
                hCost: 0,
                type: getColorType(td.style.backgroundColor),
            }

            tableArray[x][y] = dot;
        }
    }

    return tableArray;
}

export function clearInvalidColors() : void {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");

    for (let y : number = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        
        for (let x : number = 0; x < tr.children.length; x++) {
            const td : HTMLTableCellElement = tr.children[x] as HTMLTableCellElement;

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

function colorIsValid(color : string) : boolean {
    const colorType = getColorType(color);
    console.log(color);
    let types : TYPE[] = [TYPE.TRACKED, TYPE.VISITED, TYPE.NOT_VISITED];
    return !arrayUtils.containsType(types, colorType);
}