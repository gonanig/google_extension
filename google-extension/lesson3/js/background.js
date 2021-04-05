chrome.runtime.onMessage.addListener(function (message, sender) {
  executeFunction(message.context, { message, sender });
});

var extensionValue = "Test value";

async function getBackgroundInfo({ message, sender }) {
  //For popup response
  chrome.extension.sendMessage(
    new ExtensionMessage(message.context, { extensionValue })
  );

  //for Content script response
  sendPageMessage(
    new ExtensionMessage(message.context, { extensionValue }),
    sender.tab.id
  );
}

chrome.runtime.onInstalled.addListener((details) => {
  let loadingTime = {
    seconds: 1,
  };
  let interval = () => {
    setInterval(() => {
      loadingTime.seconds++;
    }, 1000);
    return loadingTime.seconds;
  };

  chrome.tabs.create(
    { url: "https://developer.chrome.com?installed=true" },
    interval
  );

  chrome.runtime.setUninstallURL(
    `http://developer.chrome.com?uninstalled=true?seconds=${loadingTime.seconds}`,
    () => {
      clearInterval(interval);
    }
  );
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo);
  console.log(tab);
});
