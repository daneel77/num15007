var size = 0;
var placement = 'point';

var style_Numeracion_Valdovio_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var valueNUM = feature.get("END_N1_00");
    var valueLETRA = feature.get("END_L1_00");
    var valueECONS = feature.get("ECONS");
    var valueEHAB = feature.get("EHAB");
    if (valueLETRA == null) { 
       valueLETRA = ""; 
    }
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var circleFill = "#00ff00";
    var bufferColor = "#ffffff";
    if (valueEHAB === "DESHABITADA") {
      labelFill = "#ffffff";
      bufferColor = "#ff0000";
    }
    var bufferWidth = 5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String(valueNUM + valueLETRA);
    }
    if (valueECONS === "REGULAR") {
      circleFill = "#ffff00";
    }
    if (valueECONS === "MALO") {
      circleFill = "#ffa500";
    }
    if (valueECONS === "RUINA") {
      circleFill = "#4b0082";
    }
    
    var style = [ 
        new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            displacement: [10, -3],
            stroke: new ol.style.Stroke({
            color: circleFill,
            width: 1.5
        })
        })
    }),
    new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
