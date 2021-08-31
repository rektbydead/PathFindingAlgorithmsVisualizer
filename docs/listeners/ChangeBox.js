export function changeBox() {
    const element = document.getElementById('algorithmSelector');
    const type = element.options[element.selectedIndex].value;
    element === null || element === void 0 ? void 0 : element.addEventListener('change', () => {
        console.log(element.value);
    });
}
