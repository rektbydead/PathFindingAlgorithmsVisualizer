import * as AStar from "../algorithm/AStar.js";
import * as DJ from "../algorithm/Dijkstra.js";
import * as BFS from "../algorithm/Breadth-first-search.js";
import * as DFS from "../algorithm/Depth-First-Search.js";
import * as BestFS from "../algorithm/Best-First-Search.js";
export function pickAlgorithm(table) {
    const select = document === null || document === void 0 ? void 0 : document.getElementById("algorithmSelector");
    const type = select.options[select.selectedIndex].value;
    switch (type.toUpperCase()) {
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
        case "BEST-FIRST-SEARCH": {
            BestFS.find(table);
            break;
        }
    }
}
