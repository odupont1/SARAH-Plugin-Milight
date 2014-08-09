var dgram = require('dgram'),
    net = require('net');

var VALIDATION_BYTE = 0x00,
	RGBW_COLOR_BYTE = 0x40,
	RGB_COLOR_BYTE = 0x20,
	BRIGHTNESS_BYTE = 0x4E,
    CLOSE_BYTE = 0x55,
    TYPE_UDP = 'udp',
    TYPE_TCP = 'tcp';


function LimitlessLED(params) {
    this.addr = params.host;
    this.port = params.port;
    this.type = params.type;

    callback = (typeof(params.callback) === "function") ? params.callback : function () {};

    switch (this.type) {
        case TYPE_UDP:
            this.client = dgram.createSocket('udp4');
            break;
        case TYPE_TCP:
            this.client = net.connect(params, params.callback);
            break;
        default:
            throw new Error('Invalid type');
    }
}

LimitlessLED.prototype = Object.create({}, {
    send: {
        value: function (stringcmd,cmd) {
			var buffer = new Buffer([cmd, VALIDATION_BYTE, CLOSE_BYTE], 'hex');
            //console.log('sending: ', buffer);

            switch (this.type) {
                case TYPE_UDP:
                    this.sendUtp(stringcmd,buffer);
                    break;
                case TYPE_TCP:
                    this.sendTcp(buffer);
                    break;
            }
        },
        enumerable: true
    },
    sendcolorRGBW: {
        value: function (stringcmd,color) {
			//console.log(color);
            var buffer = new Buffer([RGBW_COLOR_BYTE, color, CLOSE_BYTE], 'hex');
            //console.log('sending: ', buffer);

            switch (this.type) {
                case TYPE_UDP:
                    this.sendUtp(stringcmd,buffer);
                    break;
                case TYPE_TCP:
                    this.sendTcp(buffer);
                    break;
            }
        },
        enumerable: true
    }, 
    sendcolorRGB: {
        value: function (stringcmd,color) {
			//console.log(color);
            var buffer = new Buffer([RGB_COLOR_BYTE, color, CLOSE_BYTE], 'hex');
            //console.log('sending: ', buffer);

            switch (this.type) {
                case TYPE_UDP:
                    this.sendUtp(stringcmd,buffer);
                    break;
                case TYPE_TCP:
                    this.sendTcp(buffer);
                    break;
            }
        },
        enumerable: true
    }, 
    sendbrightness: {
        value: function (stringcmd,brightness) {
			//console.log(brightness);
            var buffer = new Buffer([BRIGHTNESS_BYTE, brightness, CLOSE_BYTE], 'hex');
            //console.log('sending: ', buffer);

            switch (this.type) {
                case TYPE_UDP:
                    this.sendUtp(stringcmd,buffer);
                    break;
                case TYPE_TCP:
                    this.sendTcp(buffer);
                    break;
            }
        },
        enumerable: true
    },
	sendUtp: {
        value: function (stringcmd,buffer, cb) {
            var self = this;

            cb = (typeof(cb) === "function") ? cb : function (err, bytes) {
                if (err) {
                  console.log("udp error:" + err);
                    throw new Error(err);
                } else {
					if (stringcmd!="") 
						console.log("MiLight "+stringcmd+' send: ', buffer, 'to: ', self.addr + ':' + self.port);
                }
            }

            this.client.send(
                buffer,
                0,
                buffer.length,
                self.port,
                self.addr,
                cb
            );
        }
    },
    sendTcp: {
        value: function (buffer, cb) {
            this.client.write(buffer);
        }
    }
});

exports.LimitlessLED = LimitlessLED;