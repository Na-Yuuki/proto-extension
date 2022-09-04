function showAlert() {
  alert("css-viewer");
}
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showAlert,
  });
});
