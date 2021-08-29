import * as app from "../app.js";

export function activateOptionSelector() {
    const element : HTMLSelectElement = document?.getElementById("heuristicSelector") as HTMLSelectElement;
    element?.addEventListener("change", (event) => {
        app?.findPoint();
    });

    const select : HTMLSelectElement = document?.getElementById("algorithmSelector") as HTMLSelectElement;
    select?.addEventListener("change", (event) => {
        app?.findPoint();
    });
}