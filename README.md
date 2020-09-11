# Tweeter Project

Tweeter is a simple, single-page Twitter clone. It has a button to open the form to compose a tweet.
It checks to see that the tweet is 140 characters or less, but not empty. When the user clicks the 'tweet',
button, the tweet posts immediately below with the user's avatar, handle, and username; it also shows how long
ago the tweet was made, which updates with each new tweet.

The app also is responsive to different screen sizes, particularly at 1024px wide or larger. The button to 
compose a tweet slides down and up the form to compose a tweet.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Chance
- Body-Parser

## Screenshots

!["Screenshot of wide-screen image"](https://github.com/mrbaker1917/tweeter/blob/master/docs/tweeter-big-screen.png)
!["Screenshot of medium-screen image"](https://github.com/mrbaker1917/tweeter/blob/master/docs/tweeter-med-screen.png)
!["Screenshot of over 140 message"](https://github.com/mrbaker1917/tweeter/blob/master/docs/tweeter-over-140.png)
!["Screenshot of small-screen image"](https://github.com/mrbaker1917/tweeter/blob/master/docs/tweeter-small-screen.png)
