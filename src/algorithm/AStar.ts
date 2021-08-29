import { DOT, getColorType, getTypeColor, TYPE} from "../objects/DOT.js";
import { points } from "../map/GenerateMap.js";
import { heuristic } from "../algorithm/Heuristic.js";
import * as ArrayUtils from "../utils/ArrayUtils.js";
import * as AlgorithmUtils from "../utils/AlgorithmUtils.js";
import * as retraceUtils  from "../utils/RetracePathUtils.js";

export function find(table : DOT[][]) {
    let open : Array<DOT> = [];
    let closed : Array<DOT> = []; 

    let node : DOT = table[points.startX][points.startY];
    let endNode : DOT = table[points.endX][points.endY]; 

    H(table);

    open.push(node);
    let i : number = 0;

    while (open.length > 0) {
        node = getLowestF(open);

        open = ArrayUtils.removeFromArray(open, node);
        
        closed.push(node);

        if (node.x == endNode.x && node.y == endNode.y) {
            retraceUtils.retrace(table, closed);
            return;
        }

        retraceUtils.paintNode(node, TYPE.VISITED, true);

        let neighbors : Array<DOT> = AlgorithmUtils.getNeighbors(table, node);
        neighbors.forEach((neighbor) => {
            if (neighbor.type == TYPE.WALL || ArrayUtils.contains(closed, neighbor)) {
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

function F(dot : DOT) : number {
    return dot.gCost + dot.hCost;
}

function getLowestF(open : DOT[]) : DOT {
    let node : DOT = open[0];

    for (let i : number = 1; i < open.length; i++) {
        if (F(open[i]) < F(node) || F(open[i]) == F(node) && open[i].hCost < node.hCost) {
            node = open[i];
        }
    }

    return node;
}


function H(table : DOT[][]) : DOT[][] {
    let endNode : DOT = table[points.endX][points.endY];

    for (let x : number = 0; x < table.length; x++) {
        for (let y : number = 0; y < table[0].length; y++) {
            table[x][y].hCost = heuristic(table[x][y], endNode);
        }
    }

    return table;
}