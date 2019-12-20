## Story
**Legend of Ironhack** is an epic old-style rpg triple A game (Absurd, Abominable & Awful).

The storyline of this state-of-the-art masterpiece is deep and complex, reflecting the moral decay of postmodern capitalist societies.

There is a girl (we may call her Lucy) that travels through the dangerous lands of _Strawberry Fields_, where nothing is real... except the stupidity of the enemies' AI.
Lucy kills those little bastards throwing fireballs with her hands -or vomiting them through her mouth, since the sprite is pretty awful.

![gifreadme](https://user-images.githubusercontent.com/23436377/71298056-67a9ea00-2386-11ea-9daa-7460135c4dad.gif)

## Controls
You can play this monstruoisity with the keypad or your imagination _(Note: imagination not supported on current version)_.

![controls](https://user-images.githubusercontent.com/23436377/71297565-4c3ddf80-2384-11ea-9a83-9a238bde6577.png)

Use arrow buttons for direction and Space for fire

You also may press **"R"** but it's up to you.

## The Characters

![Captura de pantalla 2019-12-20 23 29 38](https://user-images.githubusercontent.com/23436377/71296838-527e8c80-2381-11ea-8ab2-eb3f4f043e7e.png)

This is Cindy... I mean, Lucy

![Captura de pantalla 2019-12-20 23 37 05](https://user-images.githubusercontent.com/23436377/71296922-a7ba9e00-2381-11ea-9378-7a18b13105bf.png)

These are the retarded enemies

![Captura de pantalla 2019-12-20 23 38 06](https://user-images.githubusercontent.com/23436377/71296959-cae54d80-2381-11ea-8b48-12dae0f4713d.png)

This is the final boss (half retarded)

![catmeme](https://user-images.githubusercontent.com/23436377/71297004-f5370b00-2381-11ea-8194-43365e3f94ef.jpg)

This is a random picture of a cat

## Fireballs
There are 3 types of fireballs. From worst to best:

![orangeRect](https://user-images.githubusercontent.com/23436377/71297063-33342f00-2382-11ea-9369-e37506be70f5.png)

Orange fireball

![blueRect](https://user-images.githubusercontent.com/23436377/71297093-5959cf00-2382-11ea-865d-eab9175cd019.png)

Blue fireball

![purpleRect](https://user-images.githubusercontent.com/23436377/71297109-6a0a4500-2382-11ea-884f-205ed32285d2.png)

Purple fireball

And for God sake, never press "R" during the game.

## Items

People are stupid and lose many things during picnics. Check the ground for useful items:

![purplePotion](https://user-images.githubusercontent.com/23436377/71297221-e00eac00-2382-11ea-9f1c-b69f37978a13.png)

Potions - Give Lucy the ability of throwing fireballs of the same color (lovely)

![cup](https://user-images.githubusercontent.com/23436377/71297155-a0e05b00-2382-11ea-9fd1-1436d7d6932e.png)

Cup - Increases life and risk of having liver cirrhosis 

### Minimum requirements:
A quantum computer.

### Recommended requirements:
Two quantum computers.

This is the last time I told you, don't press "R" or your soul and hips will be lost.

### Acknowledgement
I wish to express my gratitude and my sincere affection to everybody involved in this project, specially to myself. Without me this would not have been possible. Thank me!


## Map template
This is a generic map template:

```json
{
	"tileSize": 40,
	"mapCols": 23,
	"mapRows": 12,
	"startX": 0,
	"startY": 120,
	"tileSheetSrc": "./img/tilesetMap02.png",
	"nextMap": "map03",
	"prevMap": "map01",
	"items":[{"posX":450, "posY":500, "name":"bluePotion"}],
	"enemies": [{"posX": 500, "posY": 180, "life": 1, "power": 1, "speed": 50, "size": 40, "imgSrc": "./img/enemyDevil.png", "type": "devil"},
								 {"posX": 100, "posY": 440, "life": 1, "power": 1, "speed": 50, "size": 40, "imgSrc": "./img/enemyDevil.png", "type": "devil"}
							],
	"heroe": {"life": 6, "startPosX": 160, "startPosY": 520, "imgSrc": "./img/hero.png"}, 			 
	"gameMap": [ 
		9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
		9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 10,  9,  9,  9,  9, 10,  9,  9,  9,  9,  9, 10,  9,
		9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9, 10, 	9,  9,  9,  9,  9,  9, 11,  9,  9,  9,  9,
		9,  9, 11,  9,  9,  9,  9, 11, 13, 14, 15, 16, 10,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,
		9,  9,  9, 11,  9,  9, 11, 11, 21, 22, 23, 24, 11,  9,  9,  9,  9,  9,  9, 11,  11,  9,  9,
		9, 11,  9,  9, 	9,  9,  9,  9, 29, 30, 31, 32,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,
		9,  9,  9,  9,  9,  9,  9,  9, 37, 38, 39, 40,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,
	 11,  9,  9,  9,  9,  9,  9,  9, 45, 99, 47, 48, 11,  9,  9,  9,  9,  9,  9,  9, 10,  9,  9,
	 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
		9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,  9,
		9,  9,  9,  9, 17,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,  9,  9,
	 11, 11, 11, 11,  0, 11, 11,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9
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
								"13" : { "walkable": false,	"sprite":{"x":160,"y":40,"w":40,"h":40}},   
								"14" : { "walkable": false,	"sprite":{"x":200,"y":40,"w":40,"h":40}},   
								"15" : { "walkable": false,	"sprite":{"x":240,"y":40,"w":40,"h":40}},   
								"16" : { "walkable": false,	"sprite":{"x":280,"y":40,"w":40,"h":40}},   
								"17" : { "walkable": true,	"sprite":{"x":0,"y":80,"w":40,"h":40}},
								"18" : { "walkable": true,	"sprite":{"x":40,"y":80,"w":40,"h":40}},
								"19" : { "walkable": true,	"sprite":{"x":80,"y":80,"w":40,"h":40}},
								"20" : { "walkable": false,	"sprite":{"x":120,"y":80,"w":40,"h":40}},
								"21" : { "walkable": false,	"sprite":{"x":160,"y":80,"w":40,"h":40}},
								"22" : { "walkable": false,	"sprite":{"x":200,"y":80,"w":40,"h":40}},
								"23" : { "walkable": false,	"sprite":{"x":240,"y":80,"w":40,"h":40}},
								"24" : { "walkable": false,	"sprite":{"x":280,"y":80,"w":40,"h":40}},
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
								"47" : { "walkable": true,	"sprite":{"x":240,"y":200,"w":40,"h":40}},
								"48" : { "walkable": false,	"sprite":{"x":280,"y":200,"w":40,"h":40}},
								"99" : { "walkable": true,  "sprite":{"x":200,"y":200,"w":40,"h":40}},
								 "0" : { "walkable": true,  "sprite":{"x":0,"y":120,"w":40,"h":40}}						
							}
}
```