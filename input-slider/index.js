const input = document.querySelector("#range");
const value = document.querySelector("#value");

value.textContent = input.value;

input.addEventListener("input", (event) => {
  // console.log(event.target.value);
  value.textContent = event.target.value;
});



/*
https://dev.to/rashidshamloo/styling-input-range-sliders-nge
https://codesandbox.io/p/sandbox/input-range-slider-6mt6nz?file=%2Fstyles%2Fstyle.css%3A41%2C1-42%2C1&from-embed
*/