import * as app from "../app.js";

export function changeBox() {
    const element : HTMLSelectElement = document.getElementById('algorithmSelector') as HTMLSelectElement;
    const type : string = element.options[element.selectedIndex].value;

    element?.addEventListener('change', (e) => {
        const value : string  = element.value;
        console.log(value);
        
        let isHeuristic : boolean = value == "ASTAR" || value == "DIJKSTRA" || value == "BEST-FIRST-SEARCH";

        const elementToChange : HTMLSelectElement = document.getElementById('heuristicSelector') as HTMLSelectElement;

        if (!isHeuristic) {
            elementToChange.style.display = "none"
        }
        else { 
            elementToChange.style.display = "initial"
        }
    });
}

export function checkBox() {
    const select : HTMLSelectElement = document?.getElementById("algorithmSelector") as HTMLSelectElement;
    select?.addEventListener("change", (event) => {
        app?.findPoint();
    });
}