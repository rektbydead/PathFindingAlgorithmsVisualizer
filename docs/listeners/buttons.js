import * as app from "../app.js";
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
