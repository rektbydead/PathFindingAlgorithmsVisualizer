export function removeFromArray(list, node) {
    return list = list.filter((dot, index, array) => {
        return !(dot.x == node.x && dot.y == node.y);
    });
}
export function contains(list, node) {
    return list.some((dotN) => node.x == dotN.x && node.y == dotN.y);
}
export function containsType(list, value) {
    return list.some((number) => number == value);
}
