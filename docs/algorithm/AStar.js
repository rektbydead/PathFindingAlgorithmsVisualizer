import { TYPE } from "../objects/DOT.js";
import { points } from "../map/GenerateMap.js";
import { heuristic } from "../algorithm/Heuristic.js";
import * as ArrayUtils from "../utils/ArrayUtils.js";
import * as AlgorithmUtils from "../utils/AlgorithmUtils.js";
import * as retraceUtils from "../utils/RetracePathUtils.js";
export function find(table) {
    let open = [];
    let closed = [];
    let node = table[points.startX][points.startY];
    let endNode = table[points.endX][points.endY];
    H(table);
    open.push(node);
    let i = 0;
    while (open.length > 0) {
        node = getLowestF(open);
        open = ArrayUtils.removeFromArray(open, node);
        closed.push(node);
        if (node.x == endNode.x && node.y == endNode.y) {
            retraceUtils.retrace(table, closed);
            return;
        }
        retraceUtils.paintNode(node, TYPE.VISITED, true);
        let neighbors = AlgorithmUtils.getNeighbors(table, node);
        neighbors.forEach((neighbor) => {
            if (ArrayUtils.contains(closed, neighbor)) {
                return;
            }
            let value = node.gCost + heuristic(node, neighbor);
            if (value < neighbor.gCost || !ArrayUtils.contains(open, neighbor)) {
                neighbor.gCost = value;
                neighbor.hCost = heuristic(neighbor, endNode);
                neighbor.parent = node;
                if (!ArrayUtils.contains(open, neighbor)) {
                    open.push(neighbor);
                    retraceUtils.paintNode(neighbor, TYPE.NOT_VISITED, false);
                }
            }
        });
    }
}
function F(dot) {
    return dot.gCost + dot.hCost;
}
function getLowestF(open) {
    let node = open[0];
    for (let i = 1; i < open.length; i++) {
        if (F(open[i]) < F(node) || F(open[i]) == F(node) && open[i].hCost < node.hCost) {
            node = open[i];
        }
    }
    return node;
}
function H(table) {
    let endNode = table[points.endX][points.endY];
    for (let x = 0; x < table.length; x++) {
        for (let y = 0; y < table[0].length; y++) {
            table[x][y].hCost = heuristic(table[x][y], endNode);
        }
    }
    return table;
}
