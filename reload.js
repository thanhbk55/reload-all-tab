function reload(){
  chrome.windows.getAll({populate:true}, (windows) => {
    windows.forEach((window) => {
      window.tabs.forEach((tab) => {
        tab.active && chrome.tabs.reload(tab.id)
      })
    })
  })
}

chrome.browserAction.onClicked.addListener(() => {
  reload()
})

chrome.commands.onCommand.addListener((command) => {
  if(command === "reload-command"){
    reload()
  }
})
