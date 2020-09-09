/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// shows user's handle on mouseover tweet
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1599073370257
    },
    {
      "user": {
        "name": "Himka",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@jphimka"
      },
      "content": {
        "text": "Capitalism undermines the value of human activity."
      },
      "created_at": 1568142667304
    }
  ];
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
      $("#tweet-container").prepend(createTweetElement(tweet));
    }
  };
  renderTweets(data);

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
          $(console.log(serializedData));
        });
    });
  });
});


