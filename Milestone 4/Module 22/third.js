console.log("Third")

//get the parent
const thirdList =document.getElementById('third-list');

// Create the child
const li= document.createElement('li');
li.innerText="New List created by JS";

// Append
thirdList.appendChild(li);