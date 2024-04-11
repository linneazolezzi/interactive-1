let currentDuration = 119;
let currentDelay = 0;

for (i = 0; i < 60; i++) {
  console.log("[" + i + "]:" + currentDuration);
  
  let element = document.createElement("div");
  element.classList.add("bar");
  element.style.animationDuration = currentDuration + "s";
  element.style.animationDelay = currentDelay + "s";
  document.querySelector("body").prepend(element);
  
  currentDelay = currentDelay + currentDuration;
  currentDuration = currentDuration - 2;
}