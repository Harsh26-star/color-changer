const colorText = document.getElementById("colorCode");
const button = document.getElementById("changeColorBtn");
const header = document.getElementById("header");

function getRandomColor(){
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return '#' + hex.padStart(6, "0");
}

button.addEventListener("click", ()=>{
    const newColor = getRandomColor();
    const reversedColor =  '#' + newColor.slice(1).split("").reverse().join("");
    document.body.style.backgroundColor = newColor;
    header.style.color = reversedColor;
    colorText.innerText = newColor;
})