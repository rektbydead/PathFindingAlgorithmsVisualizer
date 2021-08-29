import * as generator from "../map/GenerateMap.js";
import * as app from "../app.js";
import * as listener from "../listeners/ListenersActivator.js";
export function activateInputChange() {
    const widthElement = document === null || document === void 0 ? void 0 : document.getElementById("mapX");
    const heightElement = document === null || document === void 0 ? void 0 : document.getElementById("mapY");
    widthElement.addEventListener("change", () => {
        generator.generateEmptyMap();
        listener.activateListeners();
        app.findPoint();
    });
    heightElement.addEventListener("change", () => {
        generator.generateEmptyMap();
        listener.activateListeners();
        app.findPoint();
    });
}
