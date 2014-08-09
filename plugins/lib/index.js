var limitless = require('./limitless').LimitlessLED;

exports.RGB = require('./rgb');
exports.RGBW = require('./rgbw');
exports.WHITE = require('./white');
exports.CMD = require('./cmd');

exports.createSocket = function (opts, type, callback) {
 	var params = {
        host: opts.host || "192.168.1.101",
        port: opts.port || 8899, 			//8899 (defaut)
        type: (type || 'udp'),
        callback: callback
    };

    return new limitless(params);
}