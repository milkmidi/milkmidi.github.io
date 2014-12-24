
(function (lib, img, cjs) {
var DEBUG = true;
var p; 
var Tween = cjs.Tween;
var gameMode;
// stage content:
(lib.Game = function() {
	this.initialize();

	var game = this;
	var gameTime = 0;
	var score = 0;
	

	gameMode = (function(){
		// const
		var EMPTY = -1;	
		var RAINBOW = 8;
		var LEFT_TOP_TO_RIGHT_BOTTOM = [0,6,12,18,24];		
		var RIGHT_TOP_TO_LEFT_BOTTOM = [4,8,12,16,20];	
		var TIME_LEVEL = [50,100,150];		
		var _states = [];		
		var _sheeps = [];
		var COLORS_ID = [];
		var sheelCount = 0;
		var level = 0;
		function onSheepHandler(e){
			grid.handler( e.type,e.target );
		}
		function onSheepDropHandler(e){
			sheelCount++;			
			if(sheelCount == 5){
				o.createNewFiveSheep();
				sheelCount = 0;
			}
		}
		function doBingo( row , col ){
			cjs.Sound.play("sound_bingo");
			cjs.Sound.play("sound_wolf_scream");			
		}
		function addZero( value, length ){
			if(value.length == length  ){
				return value;
			}
			length = length - value.length;
			var zero = "";
			for (var i = 0; i < length; i++) {
				zero +="0";
			};
			return zero + value;
		}
		var checkFinish = function() {	
			for (var i = 0; i < 25; i++) {
				_states[i] == EMPTY;
				return false;
			}	
			return true;
		}

		var clearStatesAndSheepsData = function( index ) {				
			setTimeout( function () {
				_states[ index ] = EMPTY;								
			},10);			
			var sheep = _sheeps[index];
			//if (sheep.state != Sheep.FLY) {
				
				sheep.setState("save");				
				game.addChild( sheep );
				_sheeps[index] = null;
			//}							
		}
		var rowColToIndex = function (row , col) {
			return row * 5 + col;
		};
		/**
		 * 得到Array裡 五個值那一個是正確的 id
		 * @param	datas
		 */
		var getArraysColorId = function( datas /*Array*/)/*int*/ {
			for (var i = 0; i < datas.length; i++) {
				if (datas[i] == RAINBOW) {
					continue;
				}
				return datas[i];
			}
			return datas[0];
		}
		var checkArrayData = function( datas/*Array*/)/*int*/ {
			var COLOR_ID = getArraysColorId( datas );						
			for (var i = 1; i < datas.length; i++) {
				var val = datas[i];
				if (val == EMPTY) {
					return EMPTY;
				}
				if (val == RAINBOW) {
					val = COLOR_ID;
				}
				if (val != COLOR_ID) {
					return EMPTY;
				}
			}			
			return COLOR_ID;
		}
		var checkBingoRow = function( row ) {			
			var index = row * 5;
			var datas = _states.concat().splice( index , 5);			
			
			var result = checkArrayData(datas);
			//console.log( "checkBingoRow",row,result == EMPTY);
			if ( result != EMPTY ) {					
				score += 50;
				for (var i = 0; i < 5; i++) {
					index = rowColToIndex( row , i );
					clearStatesAndSheepsData( index );			
				}
				return true;
			}
			return false;
		}
		var checkBingoCol = function( col ) {
			var datas = [];
			for (var i = 0; i < 5; i++) {
				datas[i] = _states[ rowColToIndex( i , col) ];
			}		
			var result = checkArrayData(datas);
			if (  result != EMPTY) {																
				score += 50;
				for (i = 0; i < 5; i++) {
					index = rowColToIndex( i , col);
					clearStatesAndSheepsData( index );
				}		
				return true;
			}
			
			return false;
		}
		var checkBingoX = function() {			
			var datas = [
				_states[0] , _states[6], _states[12], _states[18], _states[24]				
			];
			var index;			
			var resultBool = false;			
			var result = checkArrayData( datas);
			//console.log( result );
			if ( result != EMPTY ) {
				score += 50;				
				for (var i = 0; i < 5; i++) {
					index = LEFT_TOP_TO_RIGHT_BOTTOM[i];
					clearStatesAndSheepsData( index );
				}
				resultBool = true;
			}			
			datas = [
				_states[4] , _states[8], _states[12], _states[16], _states[20]
			];			
			result = checkArrayData( datas);
			if ( result != EMPTY) {
				score += 50;				
				for (i = 0; i < RIGHT_TOP_TO_LEFT_BOTTOM.length; i++) {
					index = RIGHT_TOP_TO_LEFT_BOTTOM[i];
					clearStatesAndSheepsData( index );
				}
				resultBool = true;
			}			
			return resultBool;
		}
		var o = {
			init:function(){
				_states = [];
				for (var i = 0; i < 25; i++) {
					_states[i] = EMPTY;
				}	
				COLORS_ID = [0,1,2,3,4];
				//COLORS_ID = [0,1,8];
				console.log("gameModel.init()");
			},			
			validate:function( row , col ){
				var val = _states[ rowColToIndex(row, col)];			
				if (val != EMPTY) {
					return false;
				}
				return true;
			},
			add:function( row , col, sheep ){
				var index = rowColToIndex(row, col);
				_states[ index] = sheep.colorId;
				_sheeps[ index] = sheep;
				

				var result = false;
				result = checkBingoRow( row );
				result = checkBingoCol( col ) || result;
				result = checkBingoX() || result;
				if (result) {
					doBingo( row , col );	

					if(checkFinish()){
						alert("Finish,不過我還沒寫完!");
					}
				}
			},
			createNewFiveSheep:function (){
				console.log("createNewFiveSheep");
				for (var i = 0; i < 5; i++) {					
					(function( index ){
						setTimeout( function(){
							var colorIndex = Math.floor( Math.random() * (COLORS_ID.length-1) + 0.5);
							var colorId = COLORS_ID[colorIndex];							
							var sheep = new lib.Sheep(index, colorId);				
							sheep.doWalk( 4- index);						
							sheep.addEventListener("onMove", onSheepHandler);
							sheep.addEventListener("onPick", onSheepHandler);
							sheep.addEventListener("onDrop", onSheepDropHandler);
							game.addChild( sheep );												
						},index*200);
					})(i);
				}
			},
			changeLevel:function(){
				cjs.Sound.play("sound_level");
				var levelMC = new lib.LevelMC( level+1 );
				levelMC.x = 418;
				levelMC.y = 300;
				game.addChild( levelMC );
				topLevel.gotoAndPlay("top_level"+(level+1));
			},
			start:function(){
				var interval = setInterval( function(){
					gameTime++;
					var min = addZero( Math.floor(gameTime/60)+"" , 2 );				
					var sec = addZero( (gameTime % 60)+"", 2 );
					timeTxt.text = "TIME/"+min+":"+sec+"\n";
					timeTxt.text += "SCORE/"+addZero( score +"" , 4);

					if( level >= 3){
						return;
					}
					for (var i = 0; i < TIME_LEVEL.length; i++) {						
						if( gameTime == TIME_LEVEL[i]){
							level++;
							if (level==1) {
								COLORS_ID.push(RAINBOW);
							};
							o.changeLevel();
							COLORS_ID.push(COLORS_ID.length-1);
							console.log( "COLORS_ID",COLORS_ID);
						}
					};

				} , 1000);	
				this.changeLevel();		
			}
		};
		return o;
	})();


	this.addChild( new cjs.Bitmap(img.game_bg));

	
	var wolf = new cjs.Bitmap(img.game_wolf);
	wolf.x = 689;
	wolf.y = 171;
	this.addChild( wolf );

	var replay = new cjs.Bitmap(img.game_replay);
	replay.x = 817;
	replay.y = 645;
	this.addChild( replay );
	replay.onClick = function () {		
	}
	

	var topLevel = new lib.TopLevel();
	topLevel.x = 713;
	topLevel.y = 21;
	this.addChild( topLevel );
	topLevel.gotoAndPlay("top_level1");

	

	var grid = new lib.GridMC();
	this.addChild( grid ); 		

	
	



	var timeTxt = new createjs.Text("Loading", "bold 24px Noto Sans", "#5c5028");
	timeTxt.x = 800;
	timeTxt.y = 88;
	timeTxt.text = "SheepFram";
	this.addChild( timeTxt );
	//this.addChild( new lib.SheepAni() );

	
	

	createjs.Sound.stop("sound_intro_bgm");

	var sound_game_bgm = cjs.Sound.play("sound_game_bgm", cjs.Sound.INTERRUPT_NONE, 0, 0, -1 );

	
	
	
	gameMode.init();
	gameMode.createNewFiveSheep();	
	gameMode.start();		

}).prototype = p = new cjs.Container();
//p.nominalBounds = new cjs.Rectangle(0,0,400,400);
//console.log( p.nominalBounds );
// Sheep
(lib.Sheep = function( i , pColorId ) {
	//console.log(i);
	this.initialize();
	

	//this.cursor = "pointer";
	//this.enableMouseOver = true;
	this.colorId = pColorId;
	console.log( "Sheep",i, "pColorId:"+pColorId );
	this.row = -1;
	this.col = -1;
	
	
	var sheepAni = new lib.SheepAni(pColorId);	
	//
	this.addChild( sheepAni );
	this.scaleX = 0.85;
	this.scaleY = 0.85;

	var top;
	if(this.colorId % 2 == 0)
	 	top = new cjs.Bitmap(img.game_sheep_top_plant);	
	else
		top = new cjs.Bitmap(img.game_sheep_top_flower);	
	this.addChild( top );
	top.x = -50;	
	top.regY = 68;
	
	
	/*var matrix = new createjs.ColorMatrix().adjustHue(0).adjustSaturation(100);
	this.filters = [
     		new createjs.ColorMatrixFilter(matrix)
	 	];
	 	this.cache(0,0,100,100);	*/
	var _target = this;
	var self = this;
	var _state = "";
	var _currentDisplayObject = null;
	var _originPosition = {};
	//var _isMouseMove = false;	
	var _isPosition = false;
	var _oldx = 0;
	var _newx = 0;
	var _speed = 0;

	this.addEventListener("click",function( evt ){	
		//_isMouseMove = !_isMouseMove;				
		if(_state == "walk"){
			self.setState("pick");	
			cjs.Sound.play("sound_pick");
			self.parent.addChild( self );
		}else if( _state == "pick"){			
			//this.setState("drop");
			self.dispatchEvent("onPick",self);
		}
	});
	
	this.addEventListener("tick",function () {
		switch(_state){
			case "pick":
				self.x = stage.mouseX;
				self.y = stage.mouseY;	
				_oldx = _newx;
				_newx = self.x;
				self.dispatchEvent("onMove",self);
			break;
		}
		

		if( _state == "drop" && Math.abs(_speed) <= 0.1){
			self.onTick = null			
			self.rotation = 0;
			//this.cache(-50,-50,100,100);
			//console.log("finish");			
			return;
		}
		self.rotation += (_newx- _oldx) * 0.9;
		_speed = (_speed * 0.8) + ((0 - self.rotation) / 10);		
		self.rotation += _speed;
		
	});


	this.setState = function( sValue ){
		_state = sValue;
		if(_currentDisplayObject != null){
			_target.removeChild( _currentDisplayObject );
			_currentDisplayObject = null;
		}
		switch(_state){
			case "walk":					
				sheepAni.gotoAndPlay('walk');
				break;
			case "pick":
				_oldx = this.x;
				_newx = this.x;				
				sheepAni.gotoAndPlay('pick');						
				break;
			case "drop":				
				sheepAni.gotoAndPlay('drop');	
				cjs.Sound.play("sound_drop");
				Tween.get(top).to({scaleY:0,alpha:0},300,cjs.Ease.circOut).call( function(){
					top.visible=false;
				});	
				this.dispatchEvent("onDrop",this);
				break;
			case "save":
				sheepAni.gotoAndPlay('save');					
				Tween.get(this).wait(500).to({y:_target.y-100,alpha:0},1000,cjs.Ease.circOut).call( function(){
					_target.parent.removeChild(_target);
				});	
				break;
		}
		sheepAni.x = -50;
		sheepAni.y = -25;	

	}
	this.doWalk = function(i){
		this.setState("walk");
		var x = 134*i + 25+65;
		this.x = -x;
		this.y = 620;
		_originPosition.x = x;
		_originPosition.y = this.y;
		Tween.get(this).to({x:x},1000,cjs.Ease.circOut).call( function(){
			//_target.setState("normal");
		});
	}

	// if(DEBUG){
	// 	var graphics = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, 20, 20);
 // 		var shape = new createjs.Shape(graphics); 		
 // 		this.addChild(shape);
	// }

}).prototype = p = new cjs.Container();


(lib.SheepAni = function( colorId ){
	//console.log("SheepAni",colorId);
	var ss = new cjs.SpriteSheet({		
		images: [img["Sheep_ani_"+colorId]], 
		frames: [[2,2,122,111,0,-0.2999999999999998,-0.3999999999999986],[126,2,122,111,0,-0.2999999999999998,-0.3999999999999986],[250,2,122,111,0,-0.2999999999999998,-1.3999999999999986],[374,2,123,111,0,-0.2999999999999998,-1.3999999999999986],[499,2,123,111,0,-0.2999999999999998,-2.3999999999999986],[624,2,124,110,0,-0.2999999999999998,-3.3999999999999986],[750,2,123,111,0,-0.2999999999999998,-2.3999999999999986],[875,2,123,111,0,-0.2999999999999998,-1.3999999999999986],[2,115,122,111,0,-0.2999999999999998,-1.3999999999999986],[126,115,122,111,0,-0.2999999999999998,-0.3999999999999986],[250,115,122,111,0,-0.2999999999999998,-0.3999999999999986],[374,115,122,111,0,-0.2999999999999998,-0.3999999999999986],[498,115,117,110,0,-0.2999999999999998,-0.3999999999999986],[617,115,117,110,0,-0.2999999999999998,-0.3999999999999986],[736,115,107,110,0,-0.2999999999999998,-0.3999999999999986],[845,115,108,111,0,2.7,2.6000000000000014],[2,228,108,116,0,2.7,3.6000000000000014],[112,228,108,121,0,2.7,4.600000000000001],[222,228,108,126,0,2.7,5.600000000000001],[332,228,108,128,0,2.7,5.600000000000001],[442,228,108,132,0,2.7,6.600000000000001],[552,228,109,133,0,3.7,6.600000000000001],[663,228,110,134,0,4.7,6.600000000000001],[775,228,110,134,0,4.7,6.600000000000001],[887,228,110,134,0,4.7,6.600000000000001],[2,364,108,133,0,2.7,7.600000000000001],[112,364,108,129,0,2.7,7.600000000000001],[222,364,108,124,0,2.7,7.600000000000001],[332,364,108,128,0,2.7,7.600000000000001],[442,364,108,131,0,2.7,7.600000000000001],[552,364,108,132,0,2.7,7.600000000000001],[662,364,108,133,0,2.7,7.600000000000001],[772,364,108,132,0,2.7,7.600000000000001],[882,364,108,131,0,2.7,7.600000000000001],[2,499,108,130,0,2.7,7.600000000000001],[112,499,108,130,0,2.7,3.6000000000000014],[222,499,108,119,0,2.7,-7.399999999999999],[332,499,108,110,0,2.7,-17.4],[442,499,108,102,0,2.7,-25.4],[552,499,108,95,0,2.7,-32.4],[662,499,108,91,0,2.7,-37.4],[772,499,108,87,0,2.7,-41.4],[882,499,108,85,0,2.7,-43.4],[2,631,108,84,0,2.7,-44.4],[112,631,108,99,0,2.7,-28.4],[222,631,108,110,0,2.7,-16.4],[332,631,108,116,0,2.7,-10.399999999999999],[442,631,108,119,0,2.7,-7.399999999999999],[552,631,108,111,0,2.7,-15.399999999999999],[662,631,108,107,0,2.7,-20.4],[772,631,108,104,0,2.7,-23.4],[882,631,108,103,0,2.7,-24.4],[2,752,108,108,0,2.7,-18.4],[112,752,108,111,0,2.7,-15.399999999999999],[222,752,108,112,0,2.7,-15.399999999999999],[332,752,108,113,0,1.7000000000000002,-15.399999999999999],[442,752,108,115,0,1.7000000000000002,-12.399999999999999],[552,752,108,117,0,1.7000000000000002,-9.399999999999999],[662,752,108,118,0,1.7000000000000002,-7.399999999999999],[772,752,108,119,0,1.7000000000000002,-5.399999999999999],[882,752,108,121,0,1.7000000000000002,-3.3999999999999986],[2,875,108,122,0,1.7000000000000002,-1.3999999999999986],[112,875,108,126,0,1.7000000000000002,2.6000000000000014],[222,875,108,131,0,1.7000000000000002,7.600000000000001],[332,875,108,136,0,1.7000000000000002,12.600000000000001],[442,875,108,138,0,1.7000000000000002,15.600000000000001],[552,875,108,141,0,1.7000000000000002,18.6],[662,875,108,143,0,1.7000000000000002,20.6],[772,875,108,145,0,1.7000000000000002,22.6],[882,875,108,145,0,1.7000000000000002,22.6]],
		animations:{
			walk:[0,11,"walk2",1],	
			walk2:[0,14,"stand",1],		
			pick:[14,34,false,1],
			drop:[35,54,false,1],
			save:[55,69,false,1],
			stand:14
		}
	});
	this.initialize(ss);

}).prototype = p = new cjs.BitmapAnimation();

(lib.TopLevel = function(){
	var ss = new cjs.SpriteSheet({		
		images: [img.game_top_level], 
		"frames": [
		    [260, 2, 84, 34], 
		    [174, 2, 84, 34], 
		    [88, 2, 84, 34], 
		    [2, 2, 84, 34]
		],
		"animations": {    
	        "top_level1":[0], 
	        "top_level2":[1], 
	        "top_level3":[2], 
	        "top_level4":[3]
		},
	});
	this.initialize(ss);	
}).prototype = p = new cjs.BitmapAnimation();

(lib.LevelMC = function( level ){
	this.initialize();	
	var _this = this;
	var levelSS = new cjs.SpriteSheet({		
		images: [img.game_level_mc], 
		frames: [[2,2,8,8,0,-59.25,-28.650000000000006],[12,2,62,62,0,-32.25,-1.6500000000000057],[76,2,105,106,0,-10.25,20.349999999999994],[183,2,279,226,0,94.75,35.349999999999994],[464,2,255,233,0,82.75,51.349999999999994],[721,2,233,230,0,71.75,57.349999999999994],[2,237,224,231,0,64.75,63.349999999999994],[228,237,224,233,0,58.75,70.35],[454,237,228,237,0,55.75,76.35],[684,237,226,235,0,54.75,75.35],[2,476,232,234,0,61.75,74.35],[236,476,223,246,0,54.75,73.35],[461,476,221,226,0,53.75,71.35]],
		animations:{
			start:[0,11,"stand"],				
			back:{
				frames:[11,10,9,8,7,6,5,4,3,2,1,0],
				next:"null"		
			},
			stand:12,
			"null":15
		}
	});
	var levelMC = new createjs.BitmapAnimation(levelSS);
 	levelMC.gotoAndPlay("start");
 	this.addChild( levelMC );

 	setTimeout( function(){
 		levelMC.gotoAndPlay("back");
 		Tween.get(centerLevelMC).to({x:20,alpha:0,scaleX:1.5,scaleY:1.5,y:-10},400,cjs.Ease.circOut).call( function(){
 			_this.parent.removeChild( _this ); 			
 		})
 	},1600);

 	var centerLevelSS = new cjs.SpriteSheet({		
		images: [img.game_center_level], 
		"frames": [
		    [584, 2, 192, 40], 
		    [390, 2, 192, 40], 
		    [196, 2, 192, 40], 
		    [2, 2, 192, 40]
		],
		"animations": {		    
	        "level1":[0], 
	        "level2":[1], 
	        "level3":[2], 
	        "level4":[3]
		},
	});
	var centerLevelMC = new createjs.BitmapAnimation(centerLevelSS);
	centerLevelMC.gotoAndPlay("level"+level);
	centerLevelMC.x = 20;
 	centerLevelMC.y = -10;
 	centerLevelMC.scaleX = 2;
 	centerLevelMC.scaleY = 2;
 	centerLevelMC.alpha = 10;
	this.addChild( centerLevelMC );
 	
 	
	Tween.get(centerLevelMC).wait(100).to({x:-5,alpha:1,scaleX:1,scaleY:1,y:10},400,cjs.Ease.circOut);
}).prototype = p = new cjs.Container();


(lib.GridMC = function(){
	this.initialize();	
	
 	var graphics = new createjs.Graphics().beginFill("#85ad5e").drawRect(0, 0, 88, 83);
 	var grid = new createjs.Shape(graphics); 
 	grid.visible=false;
 	grid.alpha = 0.8;
 	grid.cache(0,0,88,83);
 	this.addChild( grid );

 	var PADDING_LEFT = 46;
 	var PADDING_TOP = 80;	
 	var GAP_COL = 134;
 	var GAP_ROW = 95; 

 	this.handler = function( type, sheep ){ 	

 		var	row = Math.floor((sheep.y-PADDING_TOP) / 95);
 		var col = Math.floor((sheep.x-PADDING_LEFT) / 134) ;	

 		var isValide = false;
		if( row >= 0 && row < 5 && col >=0 && col <5 && gameMode.validate( row , col)){ 		
		 	isValide = true;
		}

 		switch( type ){
 			case "onMove":
	 			if( isValide ){ 		
		 			grid.visible = true;
		 			grid.x = col * GAP_COL + PADDING_LEFT;
		 			grid.y = row * GAP_ROW + PADDING_TOP;
		 		}else{
		 			grid.visible = false;
		 		} 	
 				break;
 			case "onPick":
 				if( isValide ){
 					sheep.setState("drop");
 					sheep.x = grid.x + 43;
		 			sheep.y = grid.y + 5;
		 			sheep.row = row;
		 			sheep.col = col;
		 			grid.visible = false;
		 			gameMode.add( row , col ,sheep);
 				}
 				break;
 		}		
 	}

 	//this.x = PADDING_LEFT;
 	//this.y = PADDING_TOP;

}).prototype = p = new cjs.Container();

/*
(lib.LevelMC = function(){
	this.initialize();	
}).prototype = p = new cjs.Container();
*/




})(lib = lib||{}, images = images||{}, createjs = createjs||{});


