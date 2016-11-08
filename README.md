#@status_withheld

**_NOTE:_** _This Twitter bot is not active due to the `status_withheld` event [not being updated to support tweets with longer IDs](https://twittercommunity.com/t/status-withheld/76757). This repo serves as an archive until the event is properly supported._

A [Twitter bot](https://twitter.com/status_withheld) that monitors `statuses/sample` on Twitter for the `status_withheld` event.

From the [Twitter API documentation](https://dev.twitter.com/streaming/overview/messages-types#withheld-content-notices-status-withheld-user-withheld):

> `status_withheld`
>
> These events contain an `id` field indicating the status ID, a `user_id` indicating the user, and a collection of `withheld_in_countries` uppercase two-letter country codes.
