import { TYPE } from "../objects/DOT.js";
import { points } from "../map/GenerateMap.js";
import * as ArrayUtils from "../utils/ArrayUtils.js";
import * as AlgorithmUtils from "../utils/AlgorithmUtils.js";
import * as retraceUtils from "../utils/RetracePathUtils.js";
//good for graphs with no weight like this one :D
export function find(table) {
    var _a;
    let open = [];
    let closed = [];
    let startNode = table[points.startX][points.startY];
    let endNode = table[points.endX][points.endY];
    open.push(startNode);
    while (open.length > 0) {
        const node = (_a = open.shift()) !== null && _a !== void 0 ? _a : endNode;
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
