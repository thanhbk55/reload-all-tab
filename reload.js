chrome.browserAction.onClicked.addListener((tab) => {
  chrome.windows.getAll({populate:true}, (windows) => {
    windows.forEach((window) => {
      window.tabs.forEach((tab) => {
        tab.active && chrome.tabs.reload(tab.id)
      })
    })
  })
})
