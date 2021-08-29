export interface DOT {
    child : HTMLTableCellElement;
    gCost: number; // path cost
    hCost: number; // distance from node to end
    x :number;
    y : number;
    parent?: DOT;
    type: TYPE;
}

export enum TYPE {
    START,
    END,
    NORMAL,
    WALL,
    TRACKED,
    VISITED,
    NOT_VISITED,
    UNKNOWN
}

export function getTypeColor(type : TYPE): string {
    switch(type) {
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

export function getColorType(color : string): TYPE {
    switch(color) {
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

export function getInverseType(type: TYPE): TYPE {
    switch(type) {
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