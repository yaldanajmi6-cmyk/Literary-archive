const titleElement = document.getElementById("letter-title");
const contentElement = document.getElementById("letter-content");

titleElement.textContent = letter.title;

const paragraph = document.createElement("p");
paragraph.textContent = letter.content;
paragraph.style.whiteSpace = "pre-wrap";

contentElement.appendChild(paragraph);