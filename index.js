const fs = require('fs')
const curseWordStrings = require('./curseWordStrings')
require('colors')

const srtFiles = fs.readdirSync('./').filter(fileName => fileName.includes('.srt'))
const matches = []
srtFiles.forEach((fileName) => {
  const contents = fs.readFileSync(fileName).toString()
  curseWordStrings.forEach(curseWord => {
    if (contents.toLowerCase().includes(curseWord)) {
      matches.push({
        fileName,
        curseWord,
      })
    }
  })
})
