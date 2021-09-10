import { DOT, TYPE, getTypeColor } from "../objects/DOT.js";
import { points } from "../map/GenerateMap.js";
import * as ArrayUtils from "../utils/ArrayUtils.js";
import * as AlgorithmUtils from "../utils/AlgorithmUtils.js";
import * as retraceUtils  from "../utils/RetracePathUtils.js";


//good for graphs with no weight like this one :D
export function find(table : DOT[][]) {
    let open : Array<DOT> = [];
    let closed : Array<DOT> = [];

    let startNode : DOT = table[points.startX][points.startY];
    let endNode : DOT = table[points.endX][points.endY]; 

    open.push(startNode);

    while(open.length > 0) {
        const node : DOT = open.shift() ?? endNode;

        closed.push(node);

        if (node?.x == endNode.x && node?.y == endNode.y) {
            retraceUtils.retrace(table, closed);
            return;
        }

        retraceUtils.paintNode(node, TYPE.VISITED, true);

        let neighbors : Array<DOT> = AlgorithmUtils.getNeighbors(table, node);

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