map01 = `{
	"tileSize": 40,
	"mapCols": 23,
	"mapRows": 12,
	"startX": 0,
	"startY": 120,
	"tileSheetSrc": "./img/tilesetMap01.png",
	"nextMap": "map02",
	"prevMap": "",
	"items":[],
	"enemies": [{"posX": 200, "posY": 250, "life": 1, "power": 1, "speed": 50, "size": 40, "imgSrc": "./img/enemyDevil.png", "type": "devil"},
                 {"posX": 300, "posY": 340, "life": 1, "power": 1, "speed": 50, "size": 40, "imgSrc": "./img/enemyDevil.png", "type": "devil"},
                 {"posX": 450, "posY": 160, "life": 1, "power": 1, "speed": 50, "size": 40, "imgSrc": "./img/enemyDevil.png", "type": "devil"}],
	"heroe": {"life": 6, "startPosX": 800, "startPosY": 350, "backPosX": 160, "backPosY": 170, "imgSrc": "./img/hero.png"}, 			 
	"gameMap": [ 
     11, 11, 11, 11, 99, 11, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
     11,  9,  9,  9, 13, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
      9,  9,  9,  9, 13,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9, 10,  9,  9,
      9,  9,  9,  9, 13,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 10, 10,  9,  9,
      9,  9, 11,  9, 21,  9,  9,  9,  9,  9,  6,  7,  8,  9,  9,  9,  9,  9,  9,  9, 10,  9,  9,
      9,  9,  9,  9,  9,  2,  3,  3,  3,  4, 14, 43, 16,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
      9,  9,  9,  9,  9,  9, 11,  9,  9,  9, 22, 23, 24,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,
      9, 10,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,
      9,  9, 10,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9, 30, 31, 32,  9,  9,
      9,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 38, 39, 40,  9,  9,
      9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 46, 47, 48,  9,  9,
      9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9
   ],
	"tileTypes": {
								"1" : { "walkable": true,  "sprite":{"x":0,"y":0,"w":40,"h":40}}, 
								"2" : { "walkable": true,	"sprite":{"x":40,"y":0,"w":40,"h":40}},
								"3" : { "walkable": true,	"sprite":{"x":80,"y":0,"w":40,"h":40}},
								"4" : { "walkable": true,	"sprite":{"x":120,"y":0,"w":40,"h":40}},  
								"5" : { "walkable": true,	"sprite":{"x":160,"y":0,"w":40,"h":40}},  
								"6" : { "walkable": true,	"sprite":{"x":200,"y":0,"w":40,"h":40}},  
								"7" : { "walkable": true,	"sprite":{"x":240,"y":0,"w":40,"h":40}},   
								"8" : { "walkable": true,	"sprite":{"x":280,"y":0,"w":40,"h":40}},   
								"9" : { "walkable": true,	"sprite":{"x":0,"y":40,"w":40,"h":40}},   
								"10" : { "walkable": false,	"sprite":{"x":40,"y":40,"w":40,"h":40}},   
								"11" : { "walkable": false,	"sprite":{"x":80,"y":40,"w":40,"h":40}},   
								"12" : { "walkable": false,	"sprite":{"x":120,"y":40,"w":40,"h":40}},   
								"13" : { "walkable": true,	"sprite":{"x":160,"y":40,"w":40,"h":40}},   
								"14" : { "walkable": true,	"sprite":{"x":200,"y":40,"w":40,"h":40}},   
								"15" : { "walkable": true,	"sprite":{"x":240,"y":40,"w":40,"h":40}},   
								"16" : { "walkable": true,	"sprite":{"x":280,"y":40,"w":40,"h":40}},   
								"17" : { "walkable": true,	"sprite":{"x":0,"y":80,"w":40,"h":40}},
								"18" : { "walkable": true,	"sprite":{"x":40,"y":80,"w":40,"h":40}},
								"19" : { "walkable": true,	"sprite":{"x":80,"y":80,"w":40,"h":40}},
								"20" : { "walkable": false,	"sprite":{"x":120,"y":80,"w":40,"h":40}},
								"21" : { "walkable": true,	"sprite":{"x":160,"y":80,"w":40,"h":40}},
								"22" : { "walkable": true,	"sprite":{"x":200,"y":80,"w":40,"h":40}},
								"23" : { "walkable": true,	"sprite":{"x":240,"y":80,"w":40,"h":40}},
								"24" : { "walkable": true,	"sprite":{"x":280,"y":80,"w":40,"h":40}},
								"25" : { "walkable": true,	"sprite":{"x":0,"y":120,"w":40,"h":40}},
								"26" : { "walkable": true,	"sprite":{"x":40,"y":120,"w":40,"h":40}},
								"27" : { "walkable": true,	"sprite":{"x":80,"y":120,"w":40,"h":40}},
								"28" : { "walkable": false,	"sprite":{"x":120,"y":120,"w":40,"h":40}},
								"29" : { "walkable": false,	"sprite":{"x":160,"y":120,"w":40,"h":40}},
								"30" : { "walkable": false,	"sprite":{"x":200,"y":120,"w":40,"h":40}},
								"31" : { "walkable": false,	"sprite":{"x":240,"y":120,"w":40,"h":40}},
								"32" : { "walkable": false,	"sprite":{"x":280,"y":120,"w":40,"h":40}},
								"33" : { "walkable": true,	"sprite":{"x":0,"y":160,"w":40,"h":40}},
								"34" : { "walkable": true,	"sprite":{"x":40,"y":160,"w":40,"h":40}},
								"35" : { "walkable": false,	"sprite":{"x":80,"y":160,"w":40,"h":40}},
								"36" : { "walkable": false,	"sprite":{"x":120,"y":160,"w":40,"h":40}},
								"37" : { "walkable": false,	"sprite":{"x":160,"y":160,"w":40,"h":40}},
								"38" : { "walkable": false,	"sprite":{"x":200,"y":160,"w":40,"h":40}},
								"39" : { "walkable": false,	"sprite":{"x":240,"y":160,"w":40,"h":40}},
								"40" : { "walkable": false,	"sprite":{"x":280,"y":160,"w":40,"h":40}},
								"41" : { "walkable": true,	"sprite":{"x":0,"y":200,"w":40,"h":40}},
								"42" : { "walkable": true,	"sprite":{"x":40,"y":200,"w":40,"h":40}},
								"43" : { "walkable": false,	"sprite":{"x":80,"y":200,"w":40,"h":40}},
								"44" : { "walkable": false,	"sprite":{"x":120,"y":200,"w":40,"h":40}},
								"45" : { "walkable": false,	"sprite":{"x":160,"y":200,"w":40,"h":40}},
								"46" : { "walkable": false,	"sprite":{"x":200,"y":200,"w":40,"h":40}},
								"47" : { "walkable": false,	"sprite":{"x":240,"y":200,"w":40,"h":40}},
								"48" : { "walkable": false,	"sprite":{"x":280,"y":200,"w":40,"h":40}},
								"99" : { "walkable": true,  "sprite":{"x":160,"y":40,"w":40,"h":40}}						
							}
}`;