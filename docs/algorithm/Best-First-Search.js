import { TYPE } from "../objects/DOT.js";
import { points } from "../map/GenerateMap.js";
import { heuristic } from "../algorithm/Heuristic.js";
import * as ArrayUtils from "../utils/ArrayUtils.js";
import * as AlgorithmUtils from "../utils/AlgorithmUtils.js";
import * as retraceUtils from "../utils/RetracePathUtils.js";
export function find(table) {
    let open = [];
    let closed = [];
    let startNode = table[points.startX][points.startY];
    let endNode = table[points.endX][points.endY];
    open.push(startNode);
    while (open.length > 0) {
        const node = minDistanceTarget(open, endNode);
        open = ArrayUtils.removeFromArray(open, node);
        closed.push(node);
        if ((node === null || node === void 0 ? void 0 : node.x) == endNode.x && (node === null || node === void 0 ? void 0 : node.y) == endNode.y) {
            retraceUtils.retrace(table, closed);
            return;
        }
        retraceUtils.paintNode(node, TYPE.VISITED, true);
        let neighbors = AlgorithmUtils.getNeighbors(table, node);
        neighbors.forEach((neighbor) => {
            if (ArrayUtils.contains(closed, neighbor) || ArrayUtils.contains(open, neighbor)) {
                return;
            }
            neighbor.parent = node;
            open.push(neighbor);
            retraceUtils.paintNode(neighbor, TYPE.NOT_VISITED, false);
        });
    }
}
function minDistanceTarget(open, target) {
    let node = open[0];
    for (let i = 1; i < open.length; i++) {
        if (heuristic(node, target) > heuristic(open[i], target)) {
            node = open[i];
        }
    }
    return node;
}
