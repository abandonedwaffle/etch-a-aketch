const container = document.getElementById("container");
for (let i=0; i <256; i++) {
    const divSquare = document.createElement("div");
    divSquare.setAttribute('class', "square");
    container.appendChild(divSquare);
};

