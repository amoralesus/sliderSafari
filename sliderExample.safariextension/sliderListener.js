var newElement = document.createElement("div");
newElement.id = "myPageSlider"
newElement.style.display = "none";
document.body.insertBefore(newElement, document.body.firstChild);

$(document).ready( function () {
  function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var messageData = msgEvent.message;
    if (messageName === "showSlider") {
      showSlider();
    }
  };

  function showSlider() {
    $('#myPageSlider').append('<p>test</p>');
    $.pageslide({ direction: 'right', modal:true, href: "#myPageSlider", iframe:false});
    $('.r').zIndex(9999999);
    $('.r').draggable({revert:true});
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

