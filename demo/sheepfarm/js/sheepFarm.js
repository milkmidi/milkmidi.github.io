(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.SheepFarm = function() {
	this.initialize();

	// scene1_layer
	this.instance = new lib.Scene1();
	this.instance.setTransform(480,360,1,1,0,0,0,480,360);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,295,960,974.2);


// symbols:
(lib.bandaid = function() {
	this.initialize(img.bandaid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,146);


(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,243);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,348);


(lib.CREDITS = function() {
	this.initialize(img.CREDITS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,53);


(lib.first = function() {
	this.initialize(img.first);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,379);


(lib.floor = function() {
	this.initialize(img.floor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,425);


(lib.HELP = function() {
	this.initialize(img.HELP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,53);


(lib.land = function() {
	this.initialize(img.land);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,546);


(lib.LEFTsheep = function() {
	this.initialize(img.LEFTsheep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,161);


(lib.mountain = function() {
	this.initialize(img.mountain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,252);


(lib.MUSIC = function() {
	this.initialize(img.MUSIC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,53);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,177);


(lib.road = function() {
	this.initialize(img.road);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,383);


(lib.second = function() {
	this.initialize(img.second);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,306);


(lib.sky = function() {
	this.initialize(img.sky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,491);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,76);


(lib.strawman = function() {
	this.initialize(img.strawman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,228);


(lib.topword = function() {
	this.initialize(img.topword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,621,208);


(lib.wolf = function() {
	this.initialize(img.wolf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,505);


(lib.yellow = function() {
	this.initialize(img.yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,164);


(lib.wolf_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.wolf();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287,505);


(lib.topLeft = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.LEFTsheep();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,161);


(lib.top_word = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.topword();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,621,208);


(lib.strawMan = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.strawman();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,228);


(lib.start_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163,76);


(lib.sheep5 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.second();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,242,306);


(lib.sheep4 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.blue();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192,243);


(lib.sheep3 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.first();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265,379);


(lib.sheep2 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.yellow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,164);


(lib.sheep1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,177);


(lib.road_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.road();
	this.instance.setTransform(0,42);

	this.instance_1 = new lib.floor();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,425);


(lib.music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.onClick = function(){
			//alert(123);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// 圖層 1
	this.instance = new lib.MUSIC();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,53);


(lib.mountain_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.mountain();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,252);


(lib.land_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.land();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,546);


(lib.help = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.HELP();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163,53);


(lib.credits = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.CREDITS();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163,53);


(lib.clouds_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.clouds();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,348);


(lib.bottomRight = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.bandaid();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,146);


(lib.scene1_top_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.topLeft("synched",0);
	this.instance.setTransform(17.5,22.5,1,1,0,0,0,75.5,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:75.5,y:80.5},18).wait(18).to({startPosition:0},0).to({x:17.5,y:22.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-58,151,161);


(lib.scene1_bottom_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bottomRight("synched",0);
	this.instance.setTransform(187.1,175.1,1,1,0,0,0,85,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:85,y:73},19).wait(13).to({startPosition:0},0).to({x:187.1,y:175.1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.1,102.1,170,146);


(lib.Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	var _this = this;
	// timeline functions:
	this.frame_58 = function() {
		this.stop();
		this.music_mc.addEventListener("click",function(event){			
			startGame();
		});		
		this.help_mc.addEventListener("click", function(){
			var help = new lib.Help();
			_this.addChild( help );
		});		
		this.start_mc.addEventListener("click",function(event){			
			startGame();
		});	
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58));

	// band-aid
	this.instance = new lib.scene1_bottom_right();
	this.instance.setTransform(875,647,1,1,0,0,0,85,73);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(14));

	// LEFT sheep
	this.instance_1 = new lib.scene1_top_left();
	this.instance_1.setTransform(75.5,80.5,1,1,0,0,0,75.5,80.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(14));

	// start_mc
	this.start_mc = new lib.start_1();
	this.start_mc.setTransform(1059.6,306,1,1,0,0,0,81.5,38);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(41).to({_off:false},0).to({x:864.5},13,cjs.Ease.get(1)).to({x:878.5},4).wait(1));

	// music_mc
	this.music_mc = new lib.music();
	this.music_mc.setTransform(1082.6,47.5,1,1,0,0,0,81.5,26.5);
	this.music_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.music_mc).wait(43).to({_off:false},0).to({x:868.5},11,cjs.Ease.get(1)).to({x:877.5},4).wait(1));

	// help_mc
	this.help_mc = new lib.help();
	this.help_mc.setTransform(1084.6,101.5,1,1,0,0,0,81.5,26.5);
	this.help_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(43).to({_off:false},0).to({x:856.5},11,cjs.Ease.get(1)).to({x:877.5},4).wait(1));

	// credits_mc
	this.credits_mc = new lib.credits();
	this.credits_mc.setTransform(1053.6,154.5,1,1,0,0,0,81.5,26.5);
	this.credits_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.credits_mc).wait(45).to({_off:false},0).to({x:868.5},9,cjs.Ease.get(1)).to({x:877.5},4).wait(1));

	// top word
	this.instance_2 = new lib.top_word();
	this.instance_2.setTransform(439.5,108,0.269,0.269,0,0,0,310.5,104);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({regX:310.6,scaleX:1.1,scaleY:1.1,x:439.6},10,cjs.Ease.get(1)).to({regX:310.5,scaleX:1,scaleY:1,x:439.5},5,cjs.Ease.get(-0.99)).wait(13));

	// wolf
	this.instance_3 = new lib.wolf_1();
	this.instance_3.setTransform(200.5,993.6,1,1,0,0,0,143.5,252.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:436.5},13,cjs.Ease.get(1)).to({y:467.5},4).wait(20));

	// first
	this.instance_4 = new lib.sheep3("synched",0);
	this.instance_4.setTransform(601.5,530.5,0.086,0.086,0,0,0,132.5,189.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({startPosition:0,_off:false},0).to({scaleX:1.07,scaleY:1.07},16,cjs.Ease.get(1)).to({regY:189.5,scaleX:1,scaleY:1},6).wait(6));

	// second
	this.instance_5 = new lib.sheep5("synched",0);
	this.instance_5.setTransform(805,521,0.091,0.091,0,0,0,121,152.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({startPosition:0,_off:false},0).to({regY:152.8,scaleX:1.07,scaleY:1.07,y:520.9},16,cjs.Ease.get(1)).to({regY:153,scaleX:1,scaleY:1,y:521},5).wait(4));

	// blue
	this.instance_6 = new lib.sheep4("synched",0);
	this.instance_6.setTransform(680,397.5,0.124,0.124,0,0,0,96,121.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({startPosition:0,_off:false},0).to({scaleX:1.1,scaleY:1.1,x:680.1},13,cjs.Ease.get(1)).to({regY:121.5,scaleX:1,scaleY:1,x:680},7).wait(2));

	// red 
	this.instance_7 = new lib.sheep1("synched",0);
	this.instance_7.setTransform(446,377.5,0.13,0.13,0,0,0,63.9,88.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({startPosition:0,_off:false},0).to({scaleX:1.08,scaleY:1.08,x:446.1},11,cjs.Ease.get(1)).to({regX:64,scaleX:1,scaleY:1,x:446},6).wait(3));

	// yellow
	this.instance_8 = new lib.sheep2("synched",0);
	this.instance_8.setTransform(531.5,321,0.085,0.085,0,0,0,53.7,82);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({startPosition:0,_off:false},0).to({regX:53.6,scaleX:1.03,scaleY:1.03},9,cjs.Ease.get(1)).to({regX:53.5,scaleX:1,scaleY:1},7).wait(1));

	// straw man
	this.instance_9 = new lib.strawMan("synched",0);
	this.instance_9.setTransform(961,524.1,1,1,41.2,0,0,105,212.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({startPosition:0,_off:false},0).to({regY:212,rotation:0,y:524},10).wait(36));

	// land
	this.instance_10 = new lib.land_1("synched",0);
	this.instance_10.setTransform(480,996.2,1,1,0,0,0,480,273);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:440},14,cjs.Ease.get(1)).wait(45));

	// road
	this.instance_11 = new lib.road_1("synched",0);
	this.instance_11.setTransform(480,507.5,1,1,0,0,0,480,212.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(59));

	// mountain
	this.instance_12 = new lib.mountain_1("synched",0);
	this.instance_12.setTransform(480,384,1,1,0,0,0,480,126);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({startPosition:0,_off:false},0).to({y:299},12,cjs.Ease.get(1)).to({y:311},4).wait(39));

	// clouds
	this.instance_13 = new lib.clouds_1("synched",0);
	this.instance_13.setTransform(523,440.1,1,1,0,0,0,327,174);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({startPosition:0,_off:false},0).to({y:183},14,cjs.Ease.get(1)).to({y:200},7,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,295,960,974.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;