export function changeBox() {
    const element = document.getElementById('algorithmSelector') as HTMLSelectElement;
    const type : string = element.options[element.selectedIndex].value;

    element?.addEventListener('change', () => {
        console.log(element.value);
    });
}