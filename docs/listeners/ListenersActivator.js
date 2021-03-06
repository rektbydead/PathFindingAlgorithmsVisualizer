import * as buttonListener from "./Buttons.js";
import * as dragndropListener from "./DragNDrop.js";
import * as optionSelectorListener from "./OptionSelector.js";
import * as createWalls from "./CreateWalls.js";
import * as changeBox from "./ChangeBox.js";
export function activateListeners() {
    buttonListener.activateButton();
    dragndropListener.activateDragPoints();
    optionSelectorListener.activateOptionSelector();
    createWalls.activateCreateWallsEvent();
    changeBox.changeBox();
    changeBox.checkBox();
}
