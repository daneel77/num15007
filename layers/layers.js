ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25829").setExtent([574489.201719, 4831529.025548, 574579.903918, 4831576.959938]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.653000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortoimagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma?",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            popuplayertitle: 'Ortoimagen',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_1, 0]);
var lyr_Catastro_2 = new ol.layer.Image({
                            source: new ol.source.ImageWMS(({
                              url: "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Catastro',
                            popuplayertitle: 'Catastro',
                            type: '',
                            opacity: 1.000000,
                          });
              wms_layers.push([lyr_Catastro_2, 0]);
var format_Numeracion_Valdovio_3 = new ol.format.GeoJSON();
var features_Numeracion_Valdovio_3 = format_Numeracion_Valdovio_3.readFeatures(json_Numeracion_Valdovio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25829'});
var jsonSource_Numeracion_Valdovio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numeracion_Valdovio_3.addFeatures(features_Numeracion_Valdovio_3);
var lyr_Numeracion_Valdovio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Numeracion_Valdovio_3, 
                style: style_Numeracion_Valdovio_3,
                popuplayertitle: 'Numeracion_Valdoviño',
                interactive: true,
                title: 'Numeracion_Valdoviño'
            });
var group_Varios = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Ortoimagen_1,lyr_Catastro_2,],
                                fold: 'open',
                                title: 'Varios'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Ortoimagen_1.setVisible(false);lyr_Catastro_2.setVisible(true);lyr_Numeracion_Valdovio_3.setVisible(true);
var layersList = [group_Varios,lyr_Numeracion_Valdovio_3];
lyr_Numeracion_Valdovio_3.set('fieldAliases', {'fid': 'fid', 'REFCAT': 'REFCAT', 'END_CV_00': 'END_CV_00', 'END_N1_00': 'END_N1_00', 'END_L1_00': 'END_L1_00', 'EN1_TIPO': 'EN1_TIPO', 'EibCcl_Cal': 'EibCcl_Cal', 'EibCcl_C_1': 'EibCcl_C_1', 'EibCcl_C_2': 'EibCcl_C_2', 'EibCcl_C_3': 'EibCcl_C_3', 'DIRECCION': 'DIRECCION', });
lyr_Numeracion_Valdovio_3.set('fieldImages', {'fid': 'TextEdit', 'REFCAT': 'TextEdit', 'END_CV_00': 'TextEdit', 'END_N1_00': 'TextEdit', 'END_L1_00': 'TextEdit', 'EN1_TIPO': 'TextEdit', 'EibCcl_Cal': 'TextEdit', 'EibCcl_C_1': '', 'EibCcl_C_2': '', 'EibCcl_C_3': '', 'DIRECCION': 'TextEdit', });
lyr_Numeracion_Valdovio_3.set('fieldLabels', {'fid': 'hidden field', 'REFCAT': 'inline label - always visible', 'END_CV_00': 'inline label - always visible', 'END_N1_00': 'inline label - always visible', 'END_L1_00': 'inline label - always visible', 'EN1_TIPO': 'inline label - always visible', 'EibCcl_Cal': 'inline label - always visible', 'EibCcl_C_1': 'inline label - always visible', 'EibCcl_C_2': 'inline label - visible with data', 'EibCcl_C_3': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', });
lyr_Numeracion_Valdovio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});