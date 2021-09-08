import * as app from "../app.js";
export function changeBox() {
    const element = document.getElementById('algorithmSelector');
    const type = element.options[element.selectedIndex].value;
    element === null || element === void 0 ? void 0 : element.addEventListener('change', (e) => {
        const value = element.value;
        console.log(value);
        let isHeuristic = value == "ASTAR" || value == "DIJKSTRA" || value == "BEST-FIRST-SEARCH";
        const elementToChange = document.getElementById('heuristicSelector');
        if (!isHeuristic) {
            elementToChange.style.display = "none";
        }
        else {
            elementToChange.style.display = "initial";
        }
    });
}
export function checkBox() {
    const select = document === null || document === void 0 ? void 0 : document.getElementById("algorithmSelector");
    select === null || select === void 0 ? void 0 : select.addEventListener("change", (event) => {
        app === null || app === void 0 ? void 0 : app.findPoint();
    });
}
