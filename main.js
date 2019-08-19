// // 1. Select the section with an id of container without using querySelector.
let idNQS = document.getElementById("container");
console.log(idNQS);

// // 2. Select the section with an id of container using querySelector. 
let idQS = document.querySelector("#container");
console.log(idQS);

// // 3. Select all of the list items with a class of "second".
let listSecond = document.querySelectorAll(".second");
let listSecond2 = document.getElementsByClassName("second");

console.log(listSecond);
console.log(listSecond2);

// // 4. Select a list item with a class of third, but only the list item inside of the ol tag.
let olThird = document.querySelectorAll("ol .third");

console.log(olThird);



// // 5. Give the section with an id of container the text "Hello!".
idNQS.innerHTML = "Hello!" + idNQS.innerHTML;

// // 6. Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer);

// // 7. Remove the class main on the div with a class of footer. 
footer.classList.remove("main");
console.log(footer);

// // 8. Create a new li element.
let newLi = document.createElement('li');
console.log(newLi);

// // 9. Give the li the text "four".
newLi.textContent = "four";

// // 10. Append the li to the ul element. 
document.querySelector("ul").append(newLi)


// // 11. Loop over all of the lis inside the ol tag and give them a background color of "green". 
let olLi = document.querySelectorAll("ol li");
for (let i = 0; i < olLi.length; i++) {
    olLi[i].style.backgroundColor = "green";
}

// // 12. Remove the div with a class of footer.
// footer.remove();
console.log(footer);


let li = document.getElementsByTagName("li");
console.log(li);
let lis = document.querySelectorAll("li");
console.log(lis);

