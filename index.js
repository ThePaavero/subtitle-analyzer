const fs = require('fs')
const curseWordStrings = require('./curseWordStrings')
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
})

srtFiles.forEach(fileName => {
  const myCurseWords = matches.filter(m => m.fileName === fileName)
  // console.log(myCurseWords)
})
