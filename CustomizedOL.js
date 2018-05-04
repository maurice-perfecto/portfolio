//Based on examples from OpenLayers and code from Stamen
var fire_perim_color = [50,45,46,.25]
var fire_fill_color = [181,52,60,1]

var fire_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: fire_fill_color
	}),
	stroke: new ol.style.Stroke({
	  color: fire_perim_color,
	  width: 2
	}),
});

var MurphyComplex = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/MurphyComplex.html',
		format: new ol.format.KML({
				extractStyles:false
		})
	}),
	style: fire_style
})


var basemap = new ol.layer.Tile({
                    source: new ol.source.Stamen({
                        layer: 'terrain'
                    })
                })



var map = new ol.Map({
            target: 'map',
            layers: [basemap, MurphyComplex,

            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([-115.368205, 42.206283]),
                zoom: 9
            })
        })
