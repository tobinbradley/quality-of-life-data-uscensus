const fs = require('fs')
const fetch = require('node-fetch')
const config = require('./config')

const state = config.fips.substring(0, 2)
const county = config.fips.length > 2 ? config.fips.substring(2, 5) : null
let url = ''

if (county) {
  url = `https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2017/${state}/block-group.json`
} else {
  url =
    'https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/5m/2017/county.json'
}

// get the block groups for the state
fetch(
  url
)
  .then(res => res.json())
  .then(res => {
    let output = cleanGeography(res)
    output = cleanAttributes(output)
    writeGeoJSON(output)
  })

// remove not needed geographies
function cleanGeography(geojson) {
  const filteredFeatures = county
    ? geojson.features.filter(el => el.properties.COUNTYFP === county)
    : geojson.features.filter(el => el.properties.STATEFP === state)
  geojson.features = filteredFeatures
  return geojson
}

// fix up attributes
function cleanAttributes(geojson) {
  const keys = Object.keys(geojson.features[0].properties)

  geojson.features.forEach(el => {
    el.properties.id = el.properties.GEOID
    keys.forEach(key => {
      delete el.properties[key]
    })
  })
  return geojson
}

// write out file
function writeGeoJSON(geojson) {
  fs.writeFile('./geojson/census.geojson.json', JSON.stringify(geojson), () =>
    console.log('...done writing geography file')
  )
}
