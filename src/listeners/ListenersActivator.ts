//import * as buttonListener from "./Buttons.js"
import * as dragndropListener from "./DragNDrop.js"
import * as optionSelectorListener from "./OptionSelector.js"
import * as createWalls from "./CreateWalls.js"

export function activateListeners() {
    console.log("1");
    //buttonListener.activateButton();
    console.log("2");
    dragndropListener.activateDragPoints();
    console.log("3");
    optionSelectorListener.activateOptionSelector();
    console.log("4");
    createWalls.activateCreateWallsEvent();
    console.log("5");
}