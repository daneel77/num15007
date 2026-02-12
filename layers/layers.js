ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25829").setExtent([550055.910108, 4777781.472502, 550149.188651, 4777829.432836]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.653000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_Catastro_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Catastro',
                            popuplayertitle: 'Catastro',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_1, 0]);
var format_EibCcl_Numeracion_Catastro_2 = new ol.format.GeoJSON();
var features_EibCcl_Numeracion_Catastro_2 = format_EibCcl_Numeracion_Catastro_2.readFeatures(json_EibCcl_Numeracion_Catastro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25829'});
var jsonSource_EibCcl_Numeracion_Catastro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EibCcl_Numeracion_Catastro_2.addFeatures(features_EibCcl_Numeracion_Catastro_2);
var lyr_EibCcl_Numeracion_Catastro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EibCcl_Numeracion_Catastro_2, 
                style: style_EibCcl_Numeracion_Catastro_2,
                popuplayertitle: 'EibCcl_Numeracion_Catastro',
                interactive: true,
                title: 'EibCcl_Numeracion_Catastro'
            });
var group_15060_PXOM_URBANIZABLE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '15060_PXOM_URBANIZABLE'});
var group_Eib_Numeracion_Eibisa = new ol.layer.Group({
                                layers: [lyr_EibCcl_Numeracion_Catastro_2,],
                                fold: 'open',
                                title: 'Eib_Numeracion_Eibisa'});
var group_Varios = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Catastro_1,],
                                fold: 'open',
                                title: 'Varios'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Catastro_1.setVisible(true);lyr_EibCcl_Numeracion_Catastro_2.setVisible(true);
var layersList = [group_Varios,group_Eib_Numeracion_Eibisa];
lyr_EibCcl_Numeracion_Catastro_2.set('fieldAliases', {'fid': 'fid', 'REFCAT': 'REFCAT', 'ENH_CV_00': 'ENH_CV_00', 'ENH_N1_00': 'ENH_N1_00', 'ENH_L1_00': 'ENH_L1_00', 'ENH_MARCA': 'ENH_MARCA', 'ENC_CV_00': 'ENC_CV_00', 'ENC_N1_00': 'ENC_N1_00', 'ENC_L1_00': 'ENC_L1_00', 'ENC_MARCA': 'ENC_MARCA', 'ENA_CV_00': 'ENA_CV_00', 'ENA_N1_00': 'ENA_N1_00', 'ENA_L1_00': 'ENA_L1_00', 'ENA_MARCA': 'ENA_MARCA', 'ENP_CV_00': 'ENP_CV_00', 'ENP_N1_00': 'ENP_N1_00', 'ENP_L1_00': 'ENP_L1_00', 'ENP_MARCA': 'ENP_MARCA', 'END_CV_00': 'END_CV_00', 'END_N1_00': 'END_N1_00', 'END_L1_00': 'END_L1_00', 'END_MARCA': 'END_MARCA', 'EN1_TIPO': 'EN1_TIPO', 'EN1_NOMVIA': 'EN1_NOMVIA', 'EN1_PRQ': 'EN1_PRQ', 'EN1_SGVIA': 'EN1_SGVIA', 'Copia_5': 'Copia_5', 'Copia_6': 'Copia_6', 'Copia_7': 'Copia_7', 'Copia_8': 'Copia_8', 'CV_NUM': 'CV_NUM', });
lyr_EibCcl_Numeracion_Catastro_2.set('fieldImages', {'fid': 'TextEdit', 'REFCAT': 'TextEdit', 'ENH_CV_00': 'Range', 'ENH_N1_00': 'Range', 'ENH_L1_00': 'TextEdit', 'ENH_MARCA': 'TextEdit', 'ENC_CV_00': 'Range', 'ENC_N1_00': 'Range', 'ENC_L1_00': 'TextEdit', 'ENC_MARCA': 'TextEdit', 'ENA_CV_00': 'Range', 'ENA_N1_00': 'Range', 'ENA_L1_00': 'TextEdit', 'ENA_MARCA': 'TextEdit', 'ENP_CV_00': 'Range', 'ENP_N1_00': 'Range', 'ENP_L1_00': 'TextEdit', 'ENP_MARCA': 'TextEdit', 'END_CV_00': 'Range', 'END_N1_00': 'Range', 'END_L1_00': 'TextEdit', 'END_MARCA': 'TextEdit', 'EN1_TIPO': 'TextEdit', 'EN1_NOMVIA': 'TextEdit', 'EN1_PRQ': 'TextEdit', 'EN1_SGVIA': 'TextEdit', 'Copia_5': 'TextEdit', 'Copia_6': 'TextEdit', 'Copia_7': 'TextEdit', 'Copia_8': 'TextEdit', 'CV_NUM': 'TextEdit', });
lyr_EibCcl_Numeracion_Catastro_2.set('fieldLabels', {'fid': 'no label', 'REFCAT': 'no label', 'ENH_CV_00': 'no label', 'ENH_N1_00': 'no label', 'ENH_L1_00': 'no label', 'ENH_MARCA': 'no label', 'ENC_CV_00': 'no label', 'ENC_N1_00': 'no label', 'ENC_L1_00': 'no label', 'ENC_MARCA': 'no label', 'ENA_CV_00': 'no label', 'ENA_N1_00': 'no label', 'ENA_L1_00': 'no label', 'ENA_MARCA': 'no label', 'ENP_CV_00': 'no label', 'ENP_N1_00': 'no label', 'ENP_L1_00': 'no label', 'ENP_MARCA': 'no label', 'END_CV_00': 'no label', 'END_N1_00': 'no label', 'END_L1_00': 'no label', 'END_MARCA': 'no label', 'EN1_TIPO': 'no label', 'EN1_NOMVIA': 'no label', 'EN1_PRQ': 'no label', 'EN1_SGVIA': 'no label', 'Copia_5': 'no label', 'Copia_6': 'no label', 'Copia_7': 'no label', 'Copia_8': 'no label', 'CV_NUM': 'no label', });
lyr_EibCcl_Numeracion_Catastro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});