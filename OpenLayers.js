//Based on examples from OpenLayers and code from Stamen
    
var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.Stamen({
                        layer: 'terrain'
                    })
                }),

            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([-115.368205, 42.206283]),
                zoom: 10
            })
        })