function sayHello() {
  document.querySelector("h3").textContent =
    "Hi " +
    document.querySelector("#name").value +
    ". Your age is " +
    document.querySelector("#age").value +
    ". Your email is  " +
    document.querySelector("#mail").value;
}

document.querySelector("button").addEventListener("click", sayHello);
