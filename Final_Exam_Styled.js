//WMS tiles from "Clipped" directory


var Shape_1 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: 'mc35106-A5_CONT',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Shape_2 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: 'mc_35106-A6_CONT',
			FORMAT: 'image/png',
			TRANSPARENT: true
		}
	})
})

var Shape_3 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/ws_mcruz03/ows?service=wms&version=1.3.0&request=GetCapabilities',
		params: {
			LAYERS: 'mc_tgr2006se_bern_lka',
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
	layers: [Tiff_1, Tiff_2, Shape_1, Shape_2, Shape_3,
					],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.6, 35.08]),
		zoom: 13
	})
})
