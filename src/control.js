const navbar = document.getElementById("navbar");
const leftMenu = document.getElementById("left-menu");
const content = document.getElementById("content");

let navbarElements = navbar.getElementsByTagName("a");
//   console.log(navbar.querySelectorAll());

console.log(navbarElements);

let menuSelected = false;

console.log(navbar.querySelector(".selected"));
//

document.addEventListener("keydown", (e) => {
  console.log(`Key "${e.key}" pressed [event: keydown]`);

  let lastIndex = navbarElements.length - 1;

  switch (e.key) {
    case "Escape":
      closeMenu();
      for (element of navbarElements) {
        element.classList.remove("selected");
      }
      leftMenu.classList.remove("inactive");
      leftMenu.classList.add("active");
      break;

    case "ArrowRight":
      currentElement = navbar.querySelector(".selected");
      if (!currentElement) {
        navbarElements[0].classList.add("selected");
      } else {
        currentElement.classList.remove("selected");
        if (navbarElements[lastIndex].text == currentElement.text) {
          navbarElements[0].classList.add("selected");
        } else {
          currentElement.nextElementSibling.classList.add("selected");
        }
      }
      break;

    case "ArrowLeft":
      currentElement = navbar.querySelector(".selected");
      if (!currentElement) {
        navbarElements[lastIndex].classList.add("selected");
      } else {
        currentElement.classList.remove("selected");
        if (navbarElements[0].text == currentElement.text) {
          navbarElements[lastIndex].classList.add("selected");
        } else {
          currentElement.previousElementSibling.classList.add("selected");
        }
      }
      break;

    case "Enter":
      currentElement = navbar.querySelector(".selected");
      if (currentElement && !menuSelected) {
        menuSelected = true;
        leftMenu.classList.remove("active");
        leftMenu.classList.add("inactive");

        if (currentElement.innerHTML == "Weather") {
          weatherContent(content);
        }
      }
      break;
  }
});

closeMenu = () => {
  content.innerHTML = null;
  menuSelected = false;
};
