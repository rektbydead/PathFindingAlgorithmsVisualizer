import * as generator from "./map/GenerateMap.js";
import * as listener from "./listeners/ListenersActivator.js";
import * as retraceUtils from "./utils/RetracePathUtils.js";
import * as picker from "./algorithm/AlgorithPicker.js";
export function findPoint() {
    retraceUtils.cancelAnimation();
    generator.clearInvalidColors();
    let table = generator.getNodeList();
    picker.pickAlgorithm(table);
}
generator.generateEmptyMap();
listener.activateListeners();
findPoint();
