//-------------------------------------------------------
// variables
//-------------------------------------------------------

const cursorFollower = document.querySelector(".cursorfollower"),
  btnProject = document.querySelector(".project__btn"),
  textOfBtnProject = document.querySelector(".project__btn-text"),
  textOfBtnProjectValue = textOfBtnProject.textContent,
  burgerIcon = document.querySelector(".burger");

//-------------------------------------------------------
// helper functions
//-------------------------------------------------------

function findUpParentNode(el, parentClassName) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName === undefined) return; // while looping through parentNode, html parentNode document's tagName is undefined
    if (el.classList.contains(parentClassName)) return el;
  }
  return false;
}

//-------------------------------------------------------

//-------------------------------------------------------
// event handler
//-------------------------------------------------------

// cursor follower
window.addEventListener("mousemove", function(e) {
  const isBurgerIcon = findUpParentNode(e.target, "burger");

  const isClickable =
    e.target.classList.contains("clickable") ||
    findUpParentNode(e.target, "clickable");
  cursorFollower.classList[isClickable ? "add" : "remove"](
    "cursorfollower--large"
  );

  if (isBurgerIcon) {
    cursorFollower.style.top = `${burgerIcon.offsetTop}px`;
    cursorFollower.style.left = `${burgerIcon.offsetLeft}px`;
    cursorFollower.style.transform = "none";
  } else {
    cursorFollower.style.top = `${e.y}px`;
    cursorFollower.style.left = `${e.x}px`;
  }
});

const markup = textOfBtnProjectValue
  .split(" ")
  .map(item => {
    const eachLetterMarkUp = item
      .split("")
      .map(
        (item, index) =>
          `<span class="${index === 0 ? "spacing" : ""}"> ${item} </span> `
      )
      .join("");
    return eachLetterMarkUp;
  })
  .join("");

textOfBtnProject.innerHTML = markup;

//-------------------------------------------------------