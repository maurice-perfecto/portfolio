//Based on examples from OpenLayers and code from Stamen

var MurphyComplex = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/MurphyComplex.html',
		format: new ol.format.KML()
	})
})

var TFDsfo = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/SFO.html',
		format: new ol.format.KML()
	})
})


var basemap = new ol.layer.Tile({
                    source: new ol.source.Stamen({
                        layer: 'terrain'
                    })
                })



var map = new ol.Map({
            target: 'map',
            layers: [basemap, MurphyComplex, TFDsfo,

            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([-115.368205, 42.206283]),
                zoom: 9
            })
        })
