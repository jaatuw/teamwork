let trueclick = false;
let currentmode = "color";


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("myRange");
  const sliderValue = document.getElementById("sliderValue");
  sliderValue.textContent = slider.value;
  slider.oninput = () => {
    sliderValue.textContent = slider.value;
    createDivs(parseInt(slider.value));
  }
  createDivs(parseInt(slider.value));
});


function createDivs(quantity) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  for (let i = 0; i < quantity * quantity; i++) {
    const div = document.createElement("div");
    div.className = "box";
    let size = 480/(quantity)
    div.style.width = size + "px";
    div.style.height = size + "px";
    grid.appendChild(div);

    div.addEventListener("mousedown", () => {
      trueclick = true;
    });
    div.addEventListener("mouseup", () => {
      trueclick = false;
    });

    div.addEventListener("mouseover", () => {
      if (trueclick == true) {
        if (currentmode === "color") {
          div.style.backgroundColor = document.getElementById("colorpick").value;
        }
        else if (currentmode === "eraser") {
          div.style.backgroundColor = "white";
        }
        else if (currentmode === "rainbow") {
          div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
      }
    });
  }
}

function clearGrid() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.style.backgroundColor = "white"; 
  });
}

function erase() {
  currentmode = "eraser"
}

function color() {
  currentmode = "color"
}
function rainbow() {
  currentmode = "rainbow"
}
const grid = document.querySelector(".grid");