const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname, './')

let files = fs.readdirSync(dir)
let count = files.filter(f => /^\d+\..+\.js$/.test(f)).length
console.log(`一共刷了${count}道题`)

