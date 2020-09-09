/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  $("article.tweet").mouseenter((event) => {
    $("#handle").css("opacity", "1.0");
  });
  $("article.tweet").mouseleave((event) => {
    $("#handle").css("opacity", "0.1");
  });
});