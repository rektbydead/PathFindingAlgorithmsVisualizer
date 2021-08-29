//import * as app from "../app.js";
//import * as generator from "../map/GenerateMap.js";
export function activateButton() {
    var _a, _b;
    //document?.querySelector("#findPoint")?.addEventListener("click", () => { app.findPoint() });
    (_a = document === null || document === void 0 ? void 0 : document.querySelector("#randomWalls")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        //generator.generateRandomWalls();
        //app.findPoint();
    });
    (_b = document === null || document === void 0 ? void 0 : document.querySelector("#clearWall")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        //generator.clearWalls();
        //app.findPoint();
    });
}
