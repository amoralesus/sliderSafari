
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
    $.pageslide({ direction: 'right', modal:true, href: url });
    $('.r').draggable();
    setDroppable();
    closeSlider();
  };

  function closeSlider() {
    $.pageslide.close();
  };

  function setDroppable() {
    $('#drop_container').droppable( {
      hoverClass: "hoverDroppable",
      accept: ".r",
      drop: function (event, ui) {
        var li = $("<li></li>").html(ui.draggable.html());
        $('#savedLinksList').append(li);
      }});
  };


  safari.self.addEventListener("message", handleMessage, false);

});

