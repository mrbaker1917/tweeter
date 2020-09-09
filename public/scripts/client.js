/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // shows user's handle on mouseover tweet
$(document).ready(() => {
  $("article.tweet").mouseenter((event) => {
    $(".handle").addClass("handleShow");
  });
  $("article.tweet").mouseleave((event) => {
    $(".handle").removeClass("handleShow");
  });
});