let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1,
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2,
  },
  {
    itemName: "Paratha",
    uniqueNo: 3,
  }
];

function onDelete(liUni){
    
    let liEleId = document.getElementById(liUni)
     ulElement.removeChild(liEleId);
}

let container = document.createElement("div")
container.classList.add("containerClass1")
document.body.appendChild(container)

let headElement = document.createElement("h1")
headElement.textContent="Your Order List"
container.appendChild(headElement)

let ulElement = document.createElement("ul")
ulElement.classList.add('ulclass')
container.appendChild(ulElement)


for (let each of itemList) {

    let liUni = "liId" + each.uniqueNo
    let btnUni ="btnId"+each.uniqueNo

    let liElement = document.createElement("li");
    liElement.classList.add("list-item"); 
    liElement.id=liUni
    ulElement.appendChild(liElement);

    let spanElement = document.createElement("span");
    spanElement.textContent = each.itemName;
    liElement.appendChild(spanElement); // text inside span

    let btnElement = document.createElement("button");
    btnElement.textContent = "Delete";
    // btnElement.id=btnUni
    liElement.appendChild(btnElement); // button inside li

    btnElement.onclick = function(){
        onDelete(liUni)
    }
}



console.log(container)