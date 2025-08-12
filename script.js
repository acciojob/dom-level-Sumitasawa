
let element = document.getElementById("level");
let levelCount = 0;
while (element) {
    levelCount++;
    element = element.parentElement;
}

alert("The level of the element is: " + levelCount);
