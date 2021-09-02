const textElement = ["Web Developer, App Mobile Android & iOS, IT Support."];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";
(function lead() {
  if (count == textElement.length) {
    count = 0;
  }
  currentTxt = textElement[count];
  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".lead").textContent = words;

  setTimeout(lead, 500);
});
