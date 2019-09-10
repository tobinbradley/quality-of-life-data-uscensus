const fs = require('fs')
const dataConfig = require('../data')

// create folders if they don't exist
if (!fs.existsSync('meta')) {
  fs.mkdirSync('meta')
}

// write meta
dataConfig.forEach((rec, idx) => {
  let metaOut = `## ${rec.title}\n\n`
  if (rec.subtitle) metaOut += `${rec.subtitle}\n\n`
  metaOut += `### Source\n\n`
  metaOut += `U.S. Census Bureau, American Community Survey 5-Year Estimates`

  fs.writeFile(`./meta/m${idx + 1}.md`, metaOut, () =>
    console.log(`...done writing meta file m${idx + 1}`)
  )
})
