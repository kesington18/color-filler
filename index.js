const btn = document.getElementById("btn");
function randomNum() {
    return Math.floor(Math.random() * 256);
};
function changeColor() {
    let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
};
btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor); 