import { getColorType } from "../objects/DOT";

export function changeBox() {
    const element : HTMLSelectElement = document.getElementById('algorithmSelector') as HTMLSelectElement;
    const type : string = element.options[element.selectedIndex].value;

    element?.addEventListener('change', (e) => {
        const value : string  = element.value;
        console.log(value);
        
        let isHeuristic : boolean = value == "ASTAR" || value == "DIJKSTRA";

        const elementToChange : HTMLSelectElement = document.getElementById('heuristicSelector') as HTMLSelectElement;

        if (isHeuristic) {
            elementToChange.style.display = "none"
        }
        else { 
            elementToChange.style.display = "initial"
        }
    });
}