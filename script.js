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

const colorDiv = event => {
    const target = event.target;
    if (target.style.backgroundColor === "") {
        const redValue = randomRGB();
        const greenValue = randomRGB();
        const blueValue = randomRGB();
        target.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
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

// TODO
// Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
// 2. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
// Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.
// You can choose to do either one or both of these challenges, it’s up to you.
