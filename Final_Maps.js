var MurphyComplex = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows',
		params: {
			LAYERS: 'Murphy_TFD_2007',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var basemap = new ol.layer.Tile({
	source: new ol.source.Stamen({
		layer: 'terrain'
	})
})

var PostClassChange = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows',
		params: {
			LAYERS: 'No_Change_Veg_Type',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Veg2006 = new ol.layer.Image({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows',
		params: {
			LAYERS: 'Class_Veg_2006',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Veg2008 = new ol.layer.Image({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows',
		params: {
			LAYERS: 'Class_Veg_2008',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var map = new ol.Map({
	target: 'map',
	layers: [basemap, MurphyComplex, PostClassChange],
	view: new ol.View({
		center: ol.proj.fromLonLat([-115.368205, 42.206283]),
		zoom: 9
	})
})

var VegMap = new ol.Map({
	target: 'VegMap',
	layers: [Veg2006],
	view: new ol.View({
		center: ol.proj.fromLonLat([-115.64209, 42.55280]),
		zoom: 5
	})
});
