import * as AStar from "../algorithm/AStar.js";
import * as DJ from "../algorithm/Dijkstra.js";
import * as BFS from "../algorithm/Breadth-first-search.js";
import * as DFS from "../algorithm/Depth-First-Search.js";
import { DOT } from "../objects/DOT.js";

export function pickAlgorithm(table : DOT[][]) : void {
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
        case "BREADTH-FIRST-SEARCH": {
            BFS.find(table);
            break;
        }
        case "DEPTH-FIRST-SEARCH": {
            DFS.find(table);
            break;
        }
    }
}