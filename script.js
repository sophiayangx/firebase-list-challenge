var input = $("#new-item-input")
var clearButton = $("#clear-button")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("sophiasList", valueToSave);
  }
})


clearButton.click(function() {	
  var value = delete.val();
  deleteValue("sophiasList");
})

onNewListItem("sophiasList", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 