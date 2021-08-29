import * as app from "../app.js";
import { getColorType, TYPE } from "../objects/DOT.js";
import * as generator from "../map/GenerateMap.js";
export function activateButton() {
    var _a, _b, _c;
    (_a = document === null || document === void 0 ? void 0 : document.querySelector("#findPoint")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => { app.findPoint(); });
    (_b = document === null || document === void 0 ? void 0 : document.querySelector("#randomWalls")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        generator.generateRandomWalls();
        app.findPoint();
    });
    (_c = document === null || document === void 0 ? void 0 : document.querySelector("#clearWall")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        generator.clearWalls();
        app.findPoint();
    });
}
let oldTarget;
export function activateDragPoints() {
    const elements = document.getElementsByTagName("td");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("dragstart", (event) => {
            var _a;
            const color = elements[i].style.backgroundColor;
            if (getColorType(color) != TYPE.START && getColorType(color) != TYPE.END) {
                event.preventDefault();
                return;
            }
            const target = event.target;
            const colorTarget = target.style.backgroundColor;
            (_a = event === null || event === void 0 ? void 0 : event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("background", colorTarget);
            oldTarget = target;
        });
        elements[i].addEventListener("drop", (event) => {
            var _a, _b;
            event.preventDefault();
            let data = (_b = (_a = event === null || event === void 0 ? void 0 : event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("background")) !== null && _b !== void 0 ? _b : "";
            const target = event.target;
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
