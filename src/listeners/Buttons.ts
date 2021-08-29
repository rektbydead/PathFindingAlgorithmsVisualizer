
//import * as app from "../app.js";
//import * as generator from "../map/GenerateMap.js";

export function activateButton () {
    //document?.querySelector("#findPoint")?.addEventListener("click", () => { app.findPoint() });
    document?.querySelector("#randomWalls")?.addEventListener("click", () => { 
        //generator.generateRandomWalls();
        //app.findPoint();
    });

    document?.querySelector("#clearWall")?.addEventListener("click", () => { 
        //generator.clearWalls();
        //app.findPoint();
    });
}
