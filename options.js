export default {
  defaultgeojson: 'census.geojson.json',
  geojson: [
    {
      layer: 'census.geojson.json',
      name: 'Block Group',
      description: 'US Census block groups.',
      compareGroups: [
        {
          name: 'Gaston'
        }
      ],
      searchPaths: []
    }
  ],
  searchPaths: [],
  style: 'positron-mecklenburg.json',
  fillLayerBefore: 'building',
  lineLayerBefore: 'place_other',
  colors: {
    default: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac']
  },
  defaultMetrics: [['1', '2', '3']],
  whatsnew: [
    '4',
    '5',
    '6'
  ]
}
