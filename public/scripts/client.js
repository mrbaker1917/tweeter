/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// shows user's handle on mouseover tweet
$(document).ready(function() {

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
  // makes it so tweets reload on 'tweet' button click.
  const tweetButton = $("#tweet-btn");
  tweetButton.click(() => {
    loadTweets();
  });

  //function that takes in a tweet object and returns a tweet article element
  const createTweetElement = function(tweetObj) {
    const createdAt = tweetObj.created_at;
    const currentDate = Date.now();
    const daysSince = Math.round((currentDate - createdAt) / 1000 / 3600 / 24);
    // function esape disarms malicious code in tweetObj.
    const escape = function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    let $tweet = $(`
    <article class="tweet">
      <header>
        <div class="avatar">
          <img src=${escape(tweetObj.user.avatars)} />
          <span class="name">${escape(tweetObj.user.name)}</span>
        </div>
        <span class="handle">${escape(tweetObj.user.handle)}</span>
      </header>
      <p class="tweetText">${escape(tweetObj.content.text)}</p>
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
      const tweetText = $("#tweet-text").val();
      if (tweetText.length === 0) {
        alert("Please enter some text to tweet!");
        return;
      }
      if (tweetText.length > 140) {
        alert("Please include a maximum of 140 characters in your tweet!");
        return;
      }
      const serializedData = $(this).serialize();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: serializedData
      })
        .then(function() {
          $(".tweet-form")[0].reset();
        });
    });
  });
  // loadTweets();
});


