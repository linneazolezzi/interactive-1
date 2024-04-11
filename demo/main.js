
console.log('hello world');

for (j = 0; j < 20; j++){
  console.log("A new J begins" + j);

  for (i = 0; i < 10; i++) {
    console.log("i:" + i);

    // 1. create a new html element, div
    let element = document.createElement("div");

    // 2. assign the class name "rect" to the element
    element.classList.add("rect");

    if (i == 5) {
      element.style.borderRadius = "20px";
    }

    if (i > 6) {
      element.style.backgroundColor = "blue";
    }

    else {
      element.style.backgroundColor = "hsl(" + i * 10 + ", 100%, 50%)";
    }

    // 3. append the element to the parent element "container"
    document.querySelector(".container").appendChild(element)
  }

  let breaker = document.createElement("div");
  breaker.classList.add("clear");
  document.querySelector(".container").appendChild(breaker);

}