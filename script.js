"use strict"

const createDiv = () => {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    container.appendChild(div);
}

const gridItems = 16 * 16;

for (let i = 0; i < gridItems; i++) {
    createDiv();
}