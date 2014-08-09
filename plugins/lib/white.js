exports = module.exports = {

//	Commandes communes (agissant sur le dernier groupe commander par ON/OFF/FULL_BRIGHTNESS)
    BRIGHTNESS_UP: 			0x3C,
    BRIGHTNESS_DOWN: 		0x34,
    WARM_WHITE_INCREASE: 	0x3E,
    COOL_WHITE_INCREASE: 	0x3F,
//  Toutes les zones
	ALL_OFF: 				0x39,
    ALL_ON: 				0x35,
	ALL_NIGHT_MODE: 		0xB9,
	ALL_FULL_BRIGHTNESS: 	0xB5,
	//ALL_NIGHT_MODE_HOLD: 	0xBB,
//	ZONE 1
    ZONE_1_ON: 				0x38,
    ZONE_1_OFF: 			0x3B,
	ZONE_1_NIGHT_MODE: 		0xBB,
	ZONE_1_FULL_BRIGHTNESS: 0xB8,
//	ZONE 2
    ZONE_2_ON: 				0x3D,
    ZONE_2_OFF: 			0x33,
	ZONE_2_NIGHT_MODE: 		0xB3,
	ZONE_2_FULL_BRIGHTNESS: 0xBD,
//	ZONE 3
    ZONE_3_ON: 				0x37,
    ZONE_3_OFF: 			0x3A,
	ZONE_3_NIGHT_MODE: 		0xBA,
	ZONE_3_FULL_BRIGHTNESS: 0xB7,
//	ZONE 4
    ZONE_4_ON: 				0x32,
    ZONE_4_OFF: 			0x36,
	ZONE_4_NIGHT_MODE: 		0xB6,
	ZONE_4_FULL_BRIGHTNESS: 0xB2
}
