console.clear();
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

function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return [...elements];
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
  .map((item) => {
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

const prevBtn = document.querySelector(".slide__arrow-prev");
const nextBtn = document.querySelector(".slide__arrow-next");
const slide = document.querySelector(".slide");
const slideList = document.querySelector(".slide__list");
const slideItems = document.querySelectorAll(".slide__item");
const slideDesc = {
  items: 3,
  margin: 16,
  transitionDuration: "0.3",
};
const slideWidth = slide.offsetWidth;
const slideItemWidth =
  (slideWidth - slideDesc.margin * (slideDesc.items - 1)) / slideDesc.items;

slideItems.forEach((cur) => {
  cur.style.width = `${slideItemWidth}px`;
  cur.style.marginRight = `${slideDesc.margin}px`;
});

let distanceToTranslate = 0;

function translateSlide(str) {
  let distance = str === "prev" ? slideItemWidth + 16 : -slideItemWidth - 16;
  distanceToTranslate = distanceToTranslate + distance;
  slideList.style.transform = `translateX(${distanceToTranslate}px)`;
}

prevBtn.addEventListener("click", function() {
  translateSlide("prev");
});

nextBtn.addEventListener("click", function() {
  translateSlide("next");
});
