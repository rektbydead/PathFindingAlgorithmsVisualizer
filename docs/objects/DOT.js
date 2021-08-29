export var TYPE;
(function (TYPE) {
    TYPE[TYPE["START"] = 0] = "START";
    TYPE[TYPE["END"] = 1] = "END";
    TYPE[TYPE["NORMAL"] = 2] = "NORMAL";
    TYPE[TYPE["WALL"] = 3] = "WALL";
    TYPE[TYPE["TRACKED"] = 4] = "TRACKED";
    TYPE[TYPE["VISITED"] = 5] = "VISITED";
    TYPE[TYPE["NOT_VISITED"] = 6] = "NOT_VISITED";
    TYPE[TYPE["UNKNOWN"] = 7] = "UNKNOWN";
})(TYPE || (TYPE = {}));
export function getTypeColor(type) {
    switch (type) {
        case TYPE.START:
            return "blue";
        case TYPE.END:
            return "red";
        case TYPE.NORMAL:
            return "white";
        case TYPE.WALL:
            return "grey";
        case TYPE.TRACKED:
            return "darkgreen";
        case TYPE.VISITED:
            return "yellow";
        case TYPE.NOT_VISITED:
            return "orange";
        case TYPE.UNKNOWN:
            return "white";
    }
}
export function getColorType(color) {
    switch (color) {
        case "blue":
            return TYPE.START;
        case "red":
            return TYPE.END;
        case "white":
            return TYPE.NORMAL;
        case "grey":
            return TYPE.WALL;
        case "darkgreen":
            return TYPE.TRACKED;
        case "yellow":
            return TYPE.VISITED;
        case "orange":
            return TYPE.NOT_VISITED;
        default:
            return TYPE.UNKNOWN;
    }
}
export function getInverseType(type) {
    switch (type) {
        case TYPE.NORMAL:
            return TYPE.WALL;
        case TYPE.WALL:
            return TYPE.NORMAL;
        case TYPE.VISITED:
            return TYPE.WALL;
        case TYPE.NOT_VISITED:
            return TYPE.NORMAL;
        case TYPE.TRACKED:
            return TYPE.WALL;
        case TYPE.END:
            return TYPE.END;
        case TYPE.START:
            return TYPE.START;
        default:
            return TYPE.UNKNOWN;
    }
}
