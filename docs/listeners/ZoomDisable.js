export function zoomDisable() {
    document.keydown();
    document.keydown(function (event) {
        if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
            event.preventDefault();
        }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscore key
        // 61 Plus key  +/= key
    });
    document.window.bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    });
}
