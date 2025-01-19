// const selectElement = document.getElementById("mode");

// selectElement.addEventListener("change", function (event) {
//   const selectedValue = event.target.value;
// });

const themeSelector = document.getElementById("mode");
const logoImg = document.getElementById("logo");

function changeTheme() {
  if (themeSelector.value === "dark") {
    document.body.className = "dark";
    console.log("Body class set to 'dark'");
    logoImg.src = "logoDark.png";
  } else {
    document.body.className = "light";
    console.log("Body class set to 'light'");
    logoImg.src = "logo.png";
  }
}

themeSelector.addEventListener("change", changeTheme);
