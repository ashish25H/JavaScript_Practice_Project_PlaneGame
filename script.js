const body = document.querySelector("body");
const plane = document.querySelector("#plane");

let valLeftRight = 0;
let valTopDown = 0;

body.addEventListener("keydown", (event) => {
  console.log(event.key);
  let keyBtn = event.key;

  switch (keyBtn) {
    case "ArrowRight":
      valLeftRight += 20;
      plane.style.left = valLeftRight + "px";
      break;
    case "ArrowLeft":
      valLeftRight -= 20;
      plane.style.left = valLeftRight + "px";
      break;
    case "ArrowUp":
      valTopDown += 20;
      plane.style.bottom = valTopDown + "px";
      break;
    case "ArrowDown":
      valTopDown -= 20;
      plane.style.bottom = valTopDown + "px";
      break;
    default:
      console.log(`enter a valid key`);
      break;
  }
});

