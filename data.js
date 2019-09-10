module.exports = [
  {
    metric: '1',
    tags: ['character', 'demographics'],
    label: 'People',
    title: 'Population',
    type: 'sum'
  },
  {
    metric: '2',
    tags: ['character', 'economics'],
    title: 'Median Household Income',
    type: 'mean',
    prefix: '$'
  },
  {
    metric: '3',
    tags: ['character', 'demographics'],
    title: 'Median Age',
    label: 'Years',
    type: 'mean'
  },
  {
    metric: '4',
    tags: ['character', 'demographics'],
    title: 'Population Under 18',
    label: 'Years',
    type: 'mean'
  },
  {
    metric: '5',
    tags: ['character', 'demographics'],
    title: 'Males',
    type: 'mean'
  },
  {
    metric: '6',
    tags: ['character', 'demographics'],
    title: 'Females',
    type: 'mean'
  },
  {
    metric: '7',
    tags: ['character', 'demographics'],
    title: 'White or Caucasian',
    suffix: '%',
    type: 'mean'
  },
  {
    metric: '8',
    tags: ['character', 'demographics'],
    title: 'Black or African American',
    suffix: '%',
    type: 'mean'
  },
  {
    metric: '9',
    tags: ['character', 'demographics'],
    title: 'American Indian and Alaska Native',
    suffix: '%',
    type: 'mean'
  },
  {
    metric: '10',
    tags: ['character', 'demographics'],
    title: 'Asian',
    suffix: '%',
    type: 'mean'
  },
  {
    metric: '11',
    tags: ['character', 'demographics'],
    title: 'Native Hawaiian and Other Pacific Islander',
    suffix: '%',
    type: 'mean'
  },
  {
    metric: '12',
    tags: ['character', 'demographics'],
    title: 'Hispanic or Latino',
    suffix: '%',
    type: 'mean'
  },
  {
    metric: '13',
    tags: ['character', 'economics'],
    title: 'Food Stamps/SNAP',
    label: 'Households',
    subtitle: 'Household received Food Stamps/SNAP in the past 12 months',
    type: 'sum'
  },
  {
    metric: '14',
    tags: ['character', 'economics'],
    title: 'Social Security',
    subtitle: 'Households with Social Security income',
    label: 'Households',
    type: 'sum'
  },
  {
    metric: '15',
    tags: ['character', 'economics'],
    title: 'Poverty',
    subtitle: 'Poverty status in the past 12 months',
    type: 'mean'
  },
  {
    metric: '16',
    tags: ['transportation', 'economics'],
    title: 'Commuters Driving Alone',
    label: 'Commuters',
    type: 'sum'
  },
  {
    metric: '17',
    tags: ['transportation', 'economics'],
    title: 'Commuters Using Public Transit',
    label: 'Commuters',
    type: 'sum'
  },
  {
    metric: '18',
    tags: ['transportation', 'economics'],
    title: 'Commute by Walking',
    label: 'Commuters',
    type: 'sum'
  },
  {
    metric: '19',
    tags: ['transportation', 'economics'],
    title: 'Travel Time to Work',
    label: 'Minutes',
    type: 'mean'
  },
  {
    metric: '20',
    tags: ['economics'],
    title: 'Median Gross Rend',
    prefix: '$',
    type: 'mean'
  },
  {
    metric: '21',
    tags: ['character', 'economics'],
    title: 'Median Home Value',
    prefix: '$',
    type: 'mean'
  },
  {
    metric: '22',
    tags: ['character', 'demographics'],
    title: 'Population 65 or Older',
    type: 'sum',
    label: 'years'
  }
]
