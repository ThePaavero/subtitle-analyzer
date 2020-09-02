const fs = require('fs')
const curseWordStrings = require('./curseWordStrings') // Courtesy of https://www.purgomalum.com/profanitylist.html
require('colors')

const srtFiles = fs.readdirSync('./subtitles').filter(fileName => fileName.includes('.srt'))
const matches = []
srtFiles.forEach(fileName => {
  console.log(`Analyzing "${fileName}"`)
  const contents = fs.readFileSync(`./subtitles/${fileName}`).toString()
  curseWordStrings.forEach(curseWord => {
    if (contents.toLowerCase().includes(curseWord)) {
      matches.push({
        fileName,
        curseWord,
      })
    }
  })
  const myMatches = matches.filter(m => m.fileName === fileName)
  console.log(`Results for ${fileName} (${myMatches.length} curse words):`.bgGreen.white)
  console.log(myMatches.map(m => m.curseWord).join(', '))
})
