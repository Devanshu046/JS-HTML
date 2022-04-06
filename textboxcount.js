let b1 = document.getElementById('b1');
b1.addEventListener('click', clearall);

function clearall() {
    let elements = document.getElementsByTagName('input');
    console.log(elements.length);
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}