function createDivs(quantity) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < quantity*quantity; i++) {
      const div = document.createElement("div");
      div.className = "box";
      grid.appendChild(div);
    }
  }
  