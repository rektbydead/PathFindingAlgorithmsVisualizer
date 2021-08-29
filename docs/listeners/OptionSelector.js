import * as app from "../app.js";
export function activateOptionSelector() {
    const element = document === null || document === void 0 ? void 0 : document.getElementById("heuristicSelector");
    element === null || element === void 0 ? void 0 : element.addEventListener("change", (event) => {
        app === null || app === void 0 ? void 0 : app.findPoint();
    });
    const select = document === null || document === void 0 ? void 0 : document.getElementById("algorithmSelector");
    select === null || select === void 0 ? void 0 : select.addEventListener("change", (event) => {
        app === null || app === void 0 ? void 0 : app.findPoint();
    });
}
