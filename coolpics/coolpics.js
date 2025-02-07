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
  const source = clickedElement.src;
  const splitSource = source.split("-");
  const newSource = splitSource[0] + "-full.jpeg";
  const htmlToInsert = viewerTemplate(newSource, "Full image view");
  document.body.insertAdjacentHTML("afterbegin", htmlToInsert);
  const closeButton = document.querySelector(".closeViewer");
  closeButton.addEventListener("click", function () {
    const viewer = closeButton.closest(".viewer");
    if (viewer) {
      viewer.remove();
    }
  });
}

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", viewHandler);
});

handleResize();
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", toggleMenu);
