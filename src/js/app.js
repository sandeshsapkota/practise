// --------------------------------------------
// variables
// --------------------------------------------

const html = document.documentElement,
  body = document.body,
  countryList = document.querySelector(".country__list");
scrollNavigated = document.querySelector(".scroll__navigated");
let windowHeight;

// --------------------------------------------
// function
// --------------------------------------------

async function prepareListOfCountries() {
  let list = await fetch("https://restcountries.eu/rest/v2/all");
  list = Array.from(await list.json());
  let markup = list
    .map((country, index) => {
      return `<li class="country__item card">
              <span class="country__name">${country.name}</span
              ><span class="country__capital">${country.capital}</span>
              <a href="javascript:;" class="country__flag">
               <img src= '${country.flag}'> </a>
             
        </li>`;
    })
    .slice(0, 30)
    .join(" ");
  countryList.innerHTML = markup;
  initialize();
}
function initialize() {
  windowHeight = Math.max(
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
    body.scrollHeight,
    body.offsetHeight
  );
}

function updateScrolledStatus(e) {
  const scrolledPercent = Math.floor((this.scrollY / windowHeight) * 100);
  scrollNavigated.style.width = scrolledPercent + "%";
}

prepareListOfCountries();

// --------------------------------------------
// event-handler
// --------------------------------------------

window.addEventListener("scroll", updateScrolledStatus);
