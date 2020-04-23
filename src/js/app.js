const person__wrapper = document.querySelectorAll(".person__item");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      let el = entry.target.dataset.index;
      document.getElementById("index").innerHTML = el;
    } else {
    }
  });
});

person__wrapper.forEach((image) => {
  observer.observe(image);
});

window.onscroll = function(event) {
  var viewPortHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrolledAmount = document.documentElement.scrollTop;
  const scrollPercent =
    (100 * window.scrollY) / (documentHeight - viewPortHeight);

  const marginTop = ((window.innerHeight - 38) / 100) * scrollPercent;

  document.getElementById("index").style.marginTop = marginTop + "px";
};
