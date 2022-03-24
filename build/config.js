module.exports = {
  fips: '37071', // 2 digits for state, 5 digits for county
  years: [2013, 2017, 2020],
  columns: [
    'B01001_001E', // population
    'B19013_001E', // median household income
    'B01002_001E', // median age
    'B09001_001E', // population under 18
    'B01001_002E', // males
    'B01001_026E', // females
    'B02001_002E', // white
    'B02001_003E', // black
    'B02001_004E', // American Indian and Alaska Native
    'B02001_005E', // asian
    'B02001_006E', // Native Hawaiian and Other Pacific Islander
    'B03002_001E', // hispanic
    'B22001_002E', // Household received Food Stamps/SNAP in the past 12 months
    'B19055_002E', // Households with social security income
    'B17001_001E', // POVERTY STATUS IN THE PAST 12 MONTHS BY SEX BY AGE
    'B08301_003E', // commuters driving alone
    'B08301_010E', // commuters using public transit
    'B08301_019E', // commute by walking
    'B08013_001E', // Aggregate travel time to work (in minutes)
    'B25064_001E', // median gross rent
    'B25077_001E', // median home value
    'B09020_001E'  // Age over 65
  ]
}
