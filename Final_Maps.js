var MurphyComplex = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'http://internetmapping.net:8080/geoserver/wms?',
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
	url: 'http://internetmapping.net:8080/geoserver/wms?',
	  params: {
		LAYERS: 'Post_Class_Change_Type',
		FORMAT: 'image/png',
		TRANSPARENT: true
	  }
	})
})

var Veg2006 = new ol.layer.Tile({
					source: new ol.source.TileWMS({
						url: 'http://internetmapping.net:8080/geoserver/wms?',
						params: {
							LAYERS: 'Class_Veg_2006',
							FORMAT: 'image/png',
							TRANSPARENT: true
						}
					})
})

var Veg2008 = new ol.layer.Tile({
					source: new ol.source.TileWMS({
						url: 'http://internetmapping.net:8080/geoserver/wms?',
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
            layers: [basemap, MurphyComplex,],
            view: new ol.View({
                center: ol.proj.fromLonLat([-115.368205, 42.206283]),
                zoom: 9
            })
        })

var VegMap = new ol.Map({
            target: 'map',
            layers: [Veg2006, Veg2008],
			controls: ol.control.defaults({
			attributionOptions:{
				collaspible: false
			}
			}),
            view: new ol.View({
                center: ol.proj.fromLonLat([-115.368205, 42.206283]),
                zoom: 8
            })
        });
var swipe = document.getElementById('swipe');

      Veg2006.on('precompose', function(event) {
        var ctx = event.context;
        var width = ctx.canvas.width * (swipe.value / 100);

        ctx.save();
        ctx.beginPath();
        ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
        ctx.clip();
      });

      Veg2006.on('postcompose', function(event) {
        var ctx = event.context;
        ctx.restore();
      });

      swipe.addEventListener('input', function() {
        map.render();
      }, false);
