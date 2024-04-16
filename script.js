const container = document.getElementById("container");
const inputButton = document.querySelector(".inputButton");
const resetButton = document.querySelector(".resetButton")

// Function to create a random color
function calculateRandomColor() {
   let colour = '#' + Math.random().toString(16).substr(-6);
   return colour;
}


// Function to create grids using Loops
function createGrid(gridNum) {
   for (let i=0; i<gridNum; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");

   for (let j=0; j<gridNum; j++) {
      const widthAndHeight = (800/gridNum);
      
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      gridBox.addEventListener("mouseover", ()=> {
         gridBox.style.backgroundColor = calculateRandomColor();
      })
      row.appendChild(gridBox);
     } 
     container.appendChild(row);
   }
}
createGrid(25);

// Code for User Input
inputButton.addEventListener("click", ()=> {
   let userInput = Number(prompt("Enter grid size:"));

   while (userInput>100) {
      userInput = Number(prompt("Error-Pick number smaller than 100 or else: </3"))
   }
   container.replaceChildren();
   createGrid(userInput);
});
// Reset button that defaults the grid value to 16x16 squares
resetButton.addEventListener("click", ()=> {
   container.replaceChildren();
   createGrid(16);
});
