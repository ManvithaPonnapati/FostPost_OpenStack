function noise() {
    return Math.random() * 0.5 + 0.5;
};

function clamp(component) {
    return Math.max(Math.min(255, component), 0);
}

function colorDistance(scale, dest, src) {
    return clamp(scale * dest + (1 - scale) * src);
};

var processBW = function (binaryData, l) {
    for (var i = 0; i < l; i += 4) {
        var r = binaryData[i];
        var g = binaryData[i + 1];
        var b = binaryData[i + 2];
        var luminance = r * 0.21 + g * 0.71 + b * 0.07;
        binaryData[i] = luminance;
        binaryData[i + 1] = luminance;
        binaryData[i + 2] = luminance;
    }
};