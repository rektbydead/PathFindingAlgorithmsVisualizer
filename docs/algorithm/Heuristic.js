export function heuristic(dot1, dot2) {
    const element = document === null || document === void 0 ? void 0 : document.getElementById("heuristicSelector");
    const type = element.options[element.selectedIndex].value;
    switch (type.toUpperCase()) {
        case "CHEBYSHEV":
            return chebyshev(dot1, dot2);
        case "EUCLIDEAN":
            return euclidean(dot1, dot2);
        case "MANHATTAN":
            return manhattan(dot1, dot2);
        default:
            return -1;
    }
}
function manhattan(dot1, dot2) {
    let distX = Math.abs(dot2.x - dot1.x);
    let distY = Math.abs(dot2.y - dot1.y);
    return distX + distY;
}
function euclidean(dot1, dot2) {
    let distX = Math.pow(Math.abs(dot2.x - dot1.x), 2);
    let distY = Math.pow(Math.abs(dot2.y - dot1.y), 2);
    return Math.sqrt(distX + distY);
}
function chebyshev(dot1, dot2) {
    let distX = dot2.x - dot1.x;
    let distY = dot2.y - dot1.y;
    return Math.max(distX, distY);
}
