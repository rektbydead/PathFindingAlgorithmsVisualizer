import * as buttonListener from "../listeners/Buttons.js"
import * as dragndropListener from "../listeners/DragNDrop.js"
import * as optionSelectorListener from "../listeners/OptionSelector.js"
import * as createWalls from "../listeners/CreateWalls.js"

export function activateListeners() {
    buttonListener.activateButton();
    dragndropListener.activateDragPoints();
    optionSelectorListener.activateOptionSelector();
    createWalls.activateCreateWallsEvent();
}