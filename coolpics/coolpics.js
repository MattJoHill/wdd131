const menuButton = document.querySelector(".menuButton");
function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hide");
  console.log("MenuToggled");
}

function handleResize() {
  const menu = document.querySelector("#menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
      <button class="closeViewer">X</button>
      <img src="${pic}" alt="${alt}" class="fullImg" />
    </div>`;
}

function viewHandler(event) {
  const clickedElement = event.target;
  const src = clickedElement.src;
}

handleResize();
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", toggleMenu);
