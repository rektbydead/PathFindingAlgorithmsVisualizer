import * as generator from "./map/GenerateMap.js";
import { DOT } from "./objects/DOT.js";
import * as listener from "./listeners/ListenersActivator.js";
import * as AStar from "./algorithm/AStar.js";
import * as DJ from "./algorithm/Dijkstra.js";
import * as retraceUtils  from "./utils/RetracePathUtils.js";
import * as BFS from "./algorithm/Breadth-first-search.js";
import * as DFS from "./algorithm/Depth-First-Search.js";

console.log("0");
generator.generateEmptyMap();
console.log("1");
listener.activateListeners();
console.log("2");

function startAlgorithm(table : DOT[][]) : void {
    const select : HTMLSelectElement = document?.getElementById("algorithmSelector") as HTMLSelectElement;
    const type : string = select.options[select.selectedIndex].value;

    switch(type.toUpperCase()) {
        case "DIJKSTRA": {
            DJ.find(table);
            break;
        }
        case "ASTAR": {
            AStar.find(table);
            break;
        }
        case "BREADTHFIRSTSEARCH": {
            BFS.find(table);
            break;
        }
        case "DEPTHFIRSTSEARCH": {
            DFS.find(table);
            break;
        }
    }
}

export function findPoint() {
    retraceUtils.cancelAnimation();
    generator.clearInvalidColors();
    let table : DOT[][] = generator.getNodeList();
    
    startAlgorithm(table);
}

findPoint();

