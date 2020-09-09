/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// shows user's handle on mouseover tweet
$(document).ready(function() {

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
  // renders the tweet from the database, prepending them to the top of tweet-container
  const renderTweets = function(data) {
    for (const tweet of data) {
      $("#tweet-container").prepend(createTweetElement(tweet));
    }
  };
// sends a post request to the server on submit
  $(function() {
    const $tweetForm = $(".tweet-form");
    $tweetForm.submit(function(event) {
      event.preventDefault();
      const serializedData = $(this).serialize();
      console.log(serializedData);
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: serializedData
      })
        .done(function() {
        });
    });
  });

  // function to get tweets from database
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'JSON',
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };
  loadTweets();
});


