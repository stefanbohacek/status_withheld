var path = require('path'),
    config = require(path.join(__dirname, 'config.js')),
    Twit = require('twit'),
    T = new Twit(config.twitter),
    stream = T.stream('statuses/sample');

stream.on('status_withheld', function (tweet) {
  console.log('status_withheld');
  console.log(tweet);

  twitter.post('statuses/retweet/:id',
  {
    id: tweet.status_withheld.id
  }, function(err, data, response) {
    if (err){
      console('ERROR!');
      console.log(err);
    }
  });
});


/* Could be also interesting. */
// stream.on('user_withheld', function (withheldMsg) {
//   console.log('user_withheld');
//   console.log(withheldMsg);
// });
