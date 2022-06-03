document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("submit");

  button.addEventListener("click", (e) => {
    exampleFunction2();
  });
});

function exampleFunction1() {
  chrome.tabs.executeScript({
    code: `alert('hi there')`,
  });
}

function exampleFunction2() {
  chrome.tabs.executeScript({ file: "content.js" });
}
