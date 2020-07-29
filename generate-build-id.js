var fs = require('fs')
const buildId = new Date().getTime()
fs.writeFile(
  './src/_buildId.json',
  `{ "lastedVersion": ${buildId} }`,
  (err) => {
    if (err) throw err
    console.log(
      'success buildId: ',
      buildId
    )
  }
)
fs.writeFile(
  './public/_buildId.json',
  `{ "lastedVersion": ${buildId} }`,
  (err) => {
    if (err) throw err
    console.log(
      'success public buildId: ',
      buildId
    )
  }
)
