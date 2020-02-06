const cursorFollower = document.querySelector('.cursorfollower');

// cursor follower
// window.addEventListener('mousemove', function(e) {
//   cursorFollower.style.top = `${e.y}px`
//   cursorFollower.style.left = `${e.x}px`
//   e.target.classList.contains('link') ? cursorFollower.classList.add('cursorfollower--large')
//       : cursorFollower.classList.remove('cursorfollower--large');
// })
//
//
// const link = document.querySelector('.link');
// const linkValue = link.textContent;
//
// const markup = linkValue.split(" ")
//     .map(item => {
//       const eachLetterMarkUp =
//           item.split('')
//               .map(((item,index) => `<span class="${index === 0 ? "spacing" : ''}"> ${item} </span> `)).join('');
//
//       return eachLetterMarkUp;
//
//     }).join('')
//
// link.innerHTML = markup;