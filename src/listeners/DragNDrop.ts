import * as app from "../app.js";
import { getColorType, getInverseType, TYPE } from "../objects/DOT.js";
import * as generator from "../map/GenerateMap.js";

let oldTarget : HTMLElement;

export function activateDragPoints() {
    const elements = document.getElementsByTagName("td");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("dragstart", (event) => { 
            const color = elements[i].style.backgroundColor;
            if (getColorType(color) != TYPE.START && getColorType(color) != TYPE.END) {
                event.preventDefault();
                return;
            }

            const target = event.target as HTMLElement;
            const colorTarget = target.style.backgroundColor;
            event?.dataTransfer?.setData("background", colorTarget);

            oldTarget = target;
        });

        elements[i].addEventListener("drop", (event) => { 
            event.preventDefault();
 
            let data : string = event?.dataTransfer?.getData("background") ?? "";
            const target = event.target as HTMLElement;
            const color = target.style.backgroundColor;

            if (getColorType(color) == TYPE.START || getColorType(color) == TYPE.END) {
                return;
            }

            target.style.backgroundColor = data;
            oldTarget.style.backgroundColor = "white";

            generator.redefinePoints();
            app.findPoint();
        });

        elements[i].addEventListener("dragover", (event) => { 
            event.preventDefault();
        });
    }
}