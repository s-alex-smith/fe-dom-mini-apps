console.log("hello there");

// list of items
// when clicked will strike through & add checkmark
// when clicked again will unstrike & uncheck

const itemsInList = document.getElementsByClassName("listItems");
const jsItemsInList = [...itemsInList];
// // console.dir(jsItemsInList);

jsItemsInList[0].onclick = clickEvent => {
  jsItemsInList[0] = clickEvent.target.style.textDecoration = "line-through";
};

jsItemsInList[1].onclick = clickEvent => {
  jsItemsInList[1] = clickEvent.target.style.textDecoration = "line-through";
};

jsItemsInList[2].onclick = clickEvent => {
  jsItemsInList[2] = clickEvent.target.style.textDecoration = "line-through";
};
