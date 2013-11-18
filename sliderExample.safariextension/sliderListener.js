
$(document).ready( function () {
  function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var messageData = msgEvent.message;
    if (messageName === "showSlider") {
      showSlider();
    }
  };

  function showSlider() {
    var url = safari.extension.baseURI + 'sliderPanel.html';
    $.pageslide({ direction: 'left', modal:true, href: url });
    closeSlider();
  };

  function closeSlider() {
    $.pageslide.close();
  }


  safari.self.addEventListener("message", handleMessage, false);

});

