import * as generator from "./map/GenerateMap.js";
import * as listener from "./listeners/ListenersActivator.js";
import * as AStar from "./algorithm/AStar.js";
import * as DJ from "./algorithm/Dijkstra.js";
import * as retraceUtils from "./utils/RetracePathUtils.js";
import * as BFS from "./algorithm/Breadth-first-search.js";
import * as DFS from "./algorithm/Depth-First-Search.js";
generator.generateEmptyMap();
listener.activateListeners();
function startAlgorithm(table) {
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
    let table = generator.getNodeList();
    startAlgorithm(table);
}
findPoint();
