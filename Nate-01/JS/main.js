var map,view,AlumniLayer;
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapToggle"
  ], function(Map, MapView, FeatureLayer, BasemapToggle) {

  map = new Map({
    basemap: "topo-vector"
  });

  view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-102.107876, 35.077213], // longitude, latitude
    zoom: 5
  });
  var toggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid"
  })
  view.ui.add(toggle, "top-right");

    // AllumniLayer (points)
  AlumniLayer = new FeatureLayer({
    url:"https://geosrv.redlands.edu/ags/rest/services/Alumni/Geocolleague_obscure/FeatureServer/0",
    definitionExpression:"PrimaryAffiliationDesc = 'Alumni'"
  });
  
  map.add(AlumniLayer);
  
});