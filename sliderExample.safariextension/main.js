var performCommand, validateCommand;

performCommand = function(event) {
  if (event.command === 'showSlider') {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("showSlider", "_no_payload_in_this_message_");
  }
}

validateCommand = function(event) {
  if (event.command === 'showSlider') {
    event.target.disabled = !event.target.browserWindow.activeTab.url;
  }
}


function receiveMessage(theMessageEvent) {
  if(theMessageEvent.name === "sliderShown") {
  }
}

safari.application.addEventListener("command", performCommand, true);

safari.application.addEventListener("validate", validateCommand, true);

safari.application.addEventListener("message",receiveMessage,false);
