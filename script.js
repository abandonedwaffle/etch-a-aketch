const container = document.getElementById("container");
for (let i=0; i<16; i++) {
    for(j=0; j<16; j++) {
        const divSquare = document.createElement("div");
        divSquare.setAttribute('class', "square");
        container.appendChild(divSquare);
        divSquare.addEventListener("mouseenter", (e)=> {
        divSquare.setAttribute("style", "background-color: red;");
    })
  }
};

