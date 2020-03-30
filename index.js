const itemsInList = document.getElementsByClassName("listItems");
const jsItemsInList = [...itemsInList];
console.log(jsItemsInList);
jsItemsInList.forEach(element => {
  element.onclick = event => {
    if (event.target.style.textDecoration.length === 0) {
      event.target.style.textDecoration = "line-through";
    } else {
      event.target.style.textDecoration = "";
    }
  };
});

const addItem = () => {
  let node = document.createElement("li");
  let newItem = document.getElementById("input").value;
  let text = document.createTextNode(newItem);
  node.appendChild(text);
  document.getElementById("myUl").appendChild(node);
  jsItemsInList.push(node);
  console.log(jsItemsInList);
  console.dir(node);
};
