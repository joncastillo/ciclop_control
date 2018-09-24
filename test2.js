/*
var UVCControl = require('uvc-control');

var camera = new UVCControl(1133, 2085);
camera.range('absoluteFocus', function(error, range) {
    if (error) return console.log(error);
    console.log(range); // [ 0, 250 ]
});

camera.set('saturation', 100, function(error) {
    if (error) return console.log(error);
    console.log('Saturation set!');
});
camera.close();
*/
const cv = require('opencv4nodejs');
const devicePort = 0;
const capture = new cv.VideoCapture(devicePort);

capture.set(cv.CAP_PROP_FRAME_WIDTH, 1280);
capture.set(cv.CAP_PROP_FRAME_HEIGHT, 720);

console.log(capture.get(cv.CAP_PROP_BRIGHTNESS));
capture.set(cv.CAP_PROP_BRIGHTNESS, 1);
console.log(capture.get(cv.CAP_PROP_BRIGHTNESS));
capture.set(cv.CAP_PROP_CONTRAST, 32);
capture.set(cv.CAP_PROP_SATURATION, 1);
capture.set(cv.CAP_PROP_GAIN, 1)
capture.set(cv.CAP_PROP_EXPOSURE, 0);
capture.set(cv.CAP_PROP_EXPOSURE, 2);

var mat = capture.read();
cv.imwrite("jon.jpg", mat);
cv.destroyAllWindows();
capture.release();
//cv.release();