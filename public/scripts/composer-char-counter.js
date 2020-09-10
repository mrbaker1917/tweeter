$(document).ready(function() {
  $("#tweet-text").on("keyup", function(event) {
    const count = 140 - $(this).val().length;
    const target1 = $(this).parent().children().eq(3).children().eq(1);
    if (count >= 0) {
      target1.text(count).css("color", "black");
    } else {
      target1.text(count).css("color", "red");
    }
  });
});