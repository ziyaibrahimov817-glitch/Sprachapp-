JavaScript
let colorNumber = 0;

function changeLamp() {
  const lamp = document.getElementById("lamp");

  colorNumber++;

  if (colorNumber > 3) {
    colorNumber = 0;
  }

  if (colorNumber === 1) {
    lamp.style.background = "green";
    lamp.style.boxShadow = "0 0 40px green";
  } else if (colorNumber === 2) {
    lamp.style.background = "yellow";
    lamp.style.boxShadow = "0 0 40px yellow";
  } else if (colorNumber === 3) {
    lamp.style.background = "blue";
    lamp.style.boxShadow = "0 0 40px blue";
  } else {
    lamp.style.background = "gray";
    lamp.style.boxShadow = "0 0 30px gray";
  }
}
