//Based on examples from OpenLayers and code from Stamen
var fire_perim_color = [50,45,46,.1]
var fire_fill_color = [181,52,60,1]
var poly_fill = [0,0,0,0]
var BFO_perim = [254,254,46,1]
var JFO_perim = [2,61,253,1]
var SFO_perim = [254,1,1,1]
var Grouse_Hab = [49,196,83,1]
var grouse_fill = [12,107,34,.25]

var fire_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: fire_fill_color
	}),
	stroke: new ol.style.Stroke({
	  color: fire_perim_color,
	  width: 2
	}),
});

var grouse_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: grouse_fill
	}),
	stroke: new ol.style.Stroke({
	  color: Grouse_Hab,
	  width: 2
	}),
});

var BFO_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: poly_fill
	}),
	stroke: new ol.style.Stroke({
	  color: BFO_perim,
	  width: 3
	}),
});

var JFO_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: poly_fill
	}),
	stroke: new ol.style.Stroke({
	  color: JFO_perim,
	  width: 3
	}),
});

var SFO_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: poly_fill
	}),
	stroke: new ol.style.Stroke({
	  color: SFO_perim,
	  width: 3
	}),
});

var TFD_BFO = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/BFO.kml',
		format: new ol.format.KML({
				extractStyles:false
		})
	}),
	style: BFO_style
})	

var TFD_JFO = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/JFO.kml',
		format: new ol.format.KML({
				extractStyles:false
		})
	}),
	style: JFO_style
})	

var TFD_SFO = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/SFO.kml',
		format: new ol.format.KML({
				extractStyles:false
		})
	}),
	style: SFO_style
})	

var Sage_Grouse = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/SageGrouse.kml',
		format: new ol.format.KML({
				extractStyles:false
		})
	}),
	style: grouse_style
})	

var MurphyComplex = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/MurphyComplex.kml',
		format: new ol.format.KML({
				extractStyles:false
		})
	}),
	style: fire_style
})

var Antelope = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'http://maurice-perfecto.github.io/portfolio/AntelopeFire.kml',
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
            layers: [basemap, TFD_BFO, TFD_JFO, TFD_SFO, Sage_Grouse, Antelope, MurphyComplex
					],
            view: new ol.View({
                center: ol.proj.fromLonLat([-114.397558, 42.961290]),
                zoom: 8
            })
        })
