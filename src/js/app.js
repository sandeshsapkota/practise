//-------------------------------------------------------
// variables
//-------------------------------------------------------

const cursorFollower = document.querySelector(".cursorfollower");
const btnProject = document.querySelector(".project__btn");
const textOfBtnProject = document.querySelector(".project__btn-text");
const textOfBtnProjectValue = textOfBtnProject.textContent;

//-------------------------------------------------------
// helper functions
//-------------------------------------------------------

function findUpParentNode(el, parentClassName) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName === undefined) return; // while looping through parentNode, html parentNode document's tagName is undefined
    if (el.classList.contains(parentClassName)) return true;
  }
  return false;
}

//-------------------------------------------------------

//-------------------------------------------------------
// event handler
//-------------------------------------------------------

// cursor follower
window.addEventListener("mousemove", function(e) {
  cursorFollower.style.top = `${e.y}px`;
  cursorFollower.style.left = `${e.x}px`;
  const isClickable =
    e.target.classList.contains("clickable") ||
    findUpParentNode(e.target, "clickable");

  cursorFollower.classList[isClickable ? "add" : "remove"](
    "cursorfollower--large"
  );
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
