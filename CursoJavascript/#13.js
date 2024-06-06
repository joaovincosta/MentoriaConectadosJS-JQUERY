const items = document.querySelector(".items");
const button = document.querySelector(".btn")


items.firstElementChild.remove();
items.LastElementChild.remove();

items.children[0].textContent = "Item Um";
items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";

button.computedStyleMap.background = "red";