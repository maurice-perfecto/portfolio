//WMS tiles from "Clipped" directory


var Styled_Shape_1 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: 'contour_1',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Styled_Shape_2 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: 'contour_2',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Styled_Shape_3 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: 'tiger',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})


var Tiff_1 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: '35106-A5',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Tiff_2 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: '35106-A6',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})




var map = new ol.Map({
	target: 'map',
	layers: [Tiff_1, Tiff_2, Styled_Shape_1, Styled_Shape_2, Styled_Shape_3
					],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.6, 35.08]),
		zoom: 13
	})
})
