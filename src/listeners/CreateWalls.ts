import { getTypeColor, getColorType, getInverseType, TYPE } from "../objects/DOT.js"
import * as app from "../app.js";

export function activateCreateWallsEvent() : void {
    const table = document.getElementsByTagName("table")[0];
    const trs = table.getElementsByTagName("tr");

    for (let y : number = 0; y < trs.length; y++) {
        const tr = table.getElementsByTagName("tr")[y];
        
        for (let x : number = 0; x < tr.children.length; x++) {
            const td = tr.children[x] as HTMLTableCellElement;
            
                    
            td?.addEventListener("click", () => { changeColorInverse(td) });
            td?.addEventListener("mouseover", (e) => { (e.buttons > 0) ? changeColorInverse(td) : undefined });
        }
    }
}

function changeColorInverse(child : HTMLTableCellElement) : void {
    const color : string = child.style.backgroundColor;

    const type = getColorType(color);
    const inverseType = getInverseType(type);
    child.style.backgroundColor = type  == TYPE.VISITED ? getTypeColor(TYPE.WALL) : getTypeColor(inverseType);

    app.findPoint();
}