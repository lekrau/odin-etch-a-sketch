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

const colorDiv = event => {
    const target = event.target;
    target.classList.add("colored")
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