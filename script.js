"use strict"

// FUNCTIONS
const createDiv = () => {
    const grid = document.querySelector(".container");
    const div = document.createElement("div");
    grid.appendChild(div);
}

const addEventListeners = () => {
    const gridItems = document.querySelectorAll(".container div");
    gridItems.forEach(element => element.addEventListener("mouseenter", colorDiv));
}

const randomRGB = () => {
    return Math.floor(Math.random() * (255 + 1));
}

const getAlpha = (rgba) => {
    const lastComma = rgba.lastIndexOf(",");
    const lastCloseBracket = rgba.lastIndexOf(")");
    const result = Number(rgba.slice(lastComma + 1, lastCloseBracket));
    if (result > 1) {
        // For rgb values (without alpha), alpha is 1
        return 1;
    } else {
        return result;
    }
}

const changeAlpha = (rgba, alpha) => {
    const lastComma = rgba.lastIndexOf(",");
    const lastCloseBracket = rgba.lastIndexOf(")");
    return rgba.slice(0, lastComma + 1) + alpha + rgba.slice(lastCloseBracket);
}

const colorDiv = event => {
    const target = event.target;
    const alpha = getAlpha(target.style.backgroundColor);
    if (target.style.backgroundColor === "") {
        const redValue = randomRGB();
        const greenValue = randomRGB();
        const blueValue = randomRGB();
        target.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue}, 0.1)`;
    } else if (alpha < 1) {
        target.style.backgroundColor = changeAlpha(target.style.backgroundColor, alpha + 0.1)
    }
}

const createGrid = () => {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        createDiv();
    }
    addEventListeners();
}

const removeGrid = () => {
    const gridItems = document.querySelectorAll(".container div");
    gridItems.forEach(element => element.remove());
}

const getUserChoice = () => {
    const message = "How many squares per side would you like?\n(Max: 100)";
    const standard = 16;
    let result = prompt(message, standard);
    while (result > 100) {
        result = prompt(message + "\nPlease respect the max!", standard);
    }
    return result;
}

const replaceGrid = () => {
    squaresPerSide = getUserChoice();
    if (squaresPerSide > 0) {
        root.style.setProperty("--squares-per-side", squaresPerSide);
        alert(squaresPerSide);
        removeGrid();
        createGrid(squaresPerSide);
    } else {
        alert("Please enter a proper number.")
    }
}

// MAIN
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
let squaresPerSide = rootStyle.getPropertyValue("--squares-per-side");

createGrid(squaresPerSide);

const button = document.querySelector("button");
button.textContent = "New Grid";
button.addEventListener("click", replaceGrid);
