chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": "click", 
        "title": "Quick Save!",
        "contexts": ["image", "video", "audio"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "click") {
        chrome.downloads.download({ url: info.srcUrl });
      }
});