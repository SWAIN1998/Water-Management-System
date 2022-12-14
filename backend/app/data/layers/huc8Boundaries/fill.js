module.exports = {
  id: 'huc-8-boundaries-fill',
  name: 'HUC 8 Boundaries',
  type: 'fill',
  source: 'huc-8-boundaries',
  'source-layer': 'WBDHU08_UpperSnake-6vc1aa',
  paint: {
    'fill-color': '#60BAF0',
    'fill-opacity': 0,
  },
  layout: {
    visibility: 'none',
  },
  lreProperties: {
    layerGroup: 'huc-8-boundaries',
    popup: {
      titleField: 'Name',
      excludeFields: [
        'GNIS_ID',
        'LoadDate',
        'Shape_Area',
        'Shape_Leng',
        'TNMID',
        'OBJECTID',
      ],
    },
  },
  drawOrder: 99,
};
