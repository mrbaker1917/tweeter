/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // shows user's handle on mouseover tweet
$(() => {
  $("article.tweet").mouseenter(function(event) {
    $(".handle").addClass("handleShow");
  });
  $("article.tweet").mouseleave(function(event) {
    $(".handle").removeClass("handleShow");
  });

  //function that takes in a tweet object and returns a tweet article element
  const createTweetElement = function(tweetObj) {
    const createdAt = tweetObj.created_at;
    const currentDate = Date.now();
    const daysSince = Math.round((currentDate - createdAt) / 1000 / 3600 / 24);
    let $tweet = $(`
    <article class="tweet">
    <header>
      <div class="avatar">
        <img src=${tweetObj.user.avatars} />
        <span class="name">${tweetObj.user.name}</span>
      </div>
      <span class="handle">${tweetObj.user.handle}</span>
    </header>
    <p class="tweetText">${tweetObj.content.text}</p>
    <footer>
      <span class="daysSince">${daysSince} days ago</span>
      <div id="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
    `);
    return $tweet;
  };
  const renderTweets = function(data) {
    for (const tweet of data) {
      createTweetElement(tweet);
    }
  };
});


