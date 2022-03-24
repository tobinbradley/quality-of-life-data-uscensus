# Quality of Life Data - US Census

> data for the [quality of life explorer](https://github.com/tobinbradley/quality-of-life-explorer) automatically generated from US Census API

## Install

To get started, first install the [quality of life explorer](https://github.com/tobinbradley/quality-of-life-explorer) and confirm that it's working correctly. 

Next, rename or remove the default `data` folder from the explorer home directory. Then from that directory you should create a new data folder from this repo:

```bash
git clone https://github.com/tobinbradley/quality-of-life-data-uscensus.git data
cd data
npm install
```

## Building Data

This repo contains build scripts that will download data and geography from the US Census API. The `FIPS` County code can be changed in `build/config.js`. You can build the data via `npm run build` from this repository's root folder. This will build the CSV and markdown (simple template) files required by the Explorer and download the Census geography.

Next, move the `geojson/geography.geojson.json` file to Explorer's `public/data/geography/` and `gl-style.json` to the Explorer's `src/assets/`, replacing the files that are currently there.

From the Explorer's root folder, run `npm run prebuild` to process the data. Now you're ready to run the Explorer with your new Census data.
