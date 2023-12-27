document.getElementById("applyStyles").addEventListener("click", function () {
  const backgroundColor = document.getElementById("backgroundColor").value;
  const textColor = document.getElementById("textColor").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: applyStyles,
      args: [backgroundColor, textColor],
    });
  });
});

function applyStyles(backgroundColor, textColor) {
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
}
