# Find out the amount of profanity via subtitle files (.srt)

![](screenshot.png)

## Installing
* Clone the repository
* `npm i`

## Using
* Add your `.srt` files to the `subtitles` directory.
* `node index.js`

### Notes
* I've censored and added the `.srt` files to `.gitignore` because apparently there can be some copyright related issues or something.
* The list of "bad words" used is a list copied from https://www.purgomalum.com/profanitylist.html with some modifications. It's not a very good list for this purpose, there will be lots of "false positives."
