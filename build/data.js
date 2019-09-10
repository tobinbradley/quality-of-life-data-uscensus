const fs = require('fs')
const fetch = require('node-fetch')
const config = require('./config')

const state = config.fips.substring(0, 2)
const county = config.fips.length > 2 ? config.fips.substring(2, 5) : null

// make array of census API url's
const urls = []
config.years.forEach(year => {
  urls.push(createURL(year))
})

// get all the census goodies
Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
  jsons => {
    console.log(jsons[0][0])
    processReturn(jsons)
  }
)

// process the return files
function processReturn(jsons) {
  let metricJSON = {}

  // create metricsJSON
  // column->year->[{id, y_year}]
  config.columns.forEach((column, columnIdx) => {
    metricJSON[column] = {}
    jsons.forEach((json, jsonIdx) => {
      metricJSON[column][config.years[jsonIdx]] = []
      json.forEach((el, elIdx) => {
        if (elIdx > 0) {
          metricJSON[column][config.years[jsonIdx]].push({
            id: createGEOID(el),
            [`y_${config.years[jsonIdx]}`]:
              el[columnIdx] > -1 ? Number(el[columnIdx]) : null
          })
        }
      })
    })
  })

  // write out each metric as CSV
  config.columns.forEach((column, colIdx) => {
    let allMetrics = []
    let merged = []
    config.years.forEach(year => {
      allMetrics.push(metricJSON[column][year])
    })

    allMetrics.forEach(function(a) {
      a.forEach(function(b) {
        if (!this[b.id]) {
          this[b.id] = {}
          merged.push(this[b.id])
        }
        Object.keys(b).forEach(function(k) {
          this[b.id][k] = b[k]
        }, this)
      }, this)
    }, Object.create(null))

    // sort file
    merged.sort((a, b) => {
      a['id'].localeCompare(b['id'], 'en-US', {
        numeric: true,
        ignorePunctuation: true
      })
    })

    // create csv
    const keys = Object.keys(merged[0])
    const header = `${keys.join(',')}\n`
    let body = ''
    merged.forEach(rec => {
      const row = []
      keys.forEach(key => {
        row.push(rec[key])
      })
      body += `${row.join(',')}\n`
    })

    // write csv
    fs.writeFile(`./metric/r${colIdx + 1}.csv`, header + body, () =>
      console.log(`...done writing metric file m${colIdx + 1}`)
    )
  })
}

// create geoid from state->county->tract->blockgroup
function createGEOID(arr) {
  const idx = arr.length - 4
  return county
    ? `${arr[idx]}${arr[idx + 1]}${arr[idx + 2]}${arr[idx + 3]}`
    : `${arr[idx + 2]}${arr[idx + 3]}`
}

// create census API URL's
function createURL(year) {
  return county
    ? `https://api.census.gov/data/${year}/acs/acs5?get=${config.columns.join(
        ','
      )}&in=state:${state}%20county:${county}&for=block%20group:*`
    : `https://api.census.gov/data/${year}/acs/acs5?get=${config.columns.join(
        ','
      )}&in=state:${state}&for=county:*`
}
