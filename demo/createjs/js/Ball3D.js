(function(window) {

// milkmidi
function Ball3D() {
  this.initialize();
}
	var p = Ball3D.prototype = new Container();
	Ball3D.CIRCLE_RADIUS = 15; 
	// public prperties
	p.xpos;
	p.ypos;
	p.zpos;
	p.centerX = 0;
	p.centerY = 0;
	p.enabledScale = true;
	p.ball/*Shape*/;
	p.label/*Text*/;
	p.stageWidth;
	p.stageheight;
	// constructor:
	p.initContainer = p.initialize;	//unique to avoid overiding base class
	p.initialize = function() {
		this.initContainer();
		this.ball = new Shape();	
		this.addChild(this.ball);
		this.label = new Text("Test","Arial","#ffffff");
		this.label.x = -10;
		this.label.y = 5;
		this.addChild(this.label);		
		this.makeShape();
		var circleRadius = Ball3D.CIRCLE_RADIUS;
		//this.cache(-circleRadius, -circleRadius, circleRadius*2, circleRadius*2);
	}
	// public methods:
	p.makeShape = function() {
		var g = this.ball.graphics;
		g.clear();		
		g.setStrokeStyle(3); 
		g.beginStroke("#cccccc"); 
		g.beginFill("#aeaeae");
		g.drawCircle(0,0, Ball3D.CIRCLE_RADIUS);
 	}
	p.setText = function(pText/*String*/){
		this.label.text = pText;
	}
	p.setEnabledScale = function(pEnabled/*Boolean*/){
		this.enabledScale = pEnabled;
	}
	p.setStageSize = function(pWidth/*int*/,pHeight/*int*/){
		this.stageWidth = pWidth;
		this.stageHeight = pHeight;
	}
	
	p.onTick = function(pAngleY/*Number*/ , pFocalLength/*Number*/) {
		var cosY = Math.cos(pAngleY);
		var sinY = Math.sin(pAngleY);
		var x1 = this.xpos * cosY - this.zpos * sinY;
		var z1 = this.zpos * cosY + this.xpos * sinY;
		this.xpos = x1;
		this.zpos = z1;
		//this.label.text = Math.floor(this.zpos)+":"+pFocalLength;		
		
		
		
		
		
		if (this.zpos > -pFocalLength) {
			var _scaleRatio = pFocalLength / (pFocalLength + this.zpos);
			
			if(this.enabledScale)
				this.scaleX = this.scaleY = _scaleRatio;
			else
				this.scaleX = this.scaleY = 1;
			this.x = this.centerX + this.xpos * _scaleRatio;
			this.y = this.centerY + this.ypos * _scaleRatio;
			this.visible = true;
		} else {
			this.visible = false;
		}
		
		if( this.x < 0 || this.x > this.stageWidth ){
			this.visible =false;
		}else if( this.y <0 || this.y > this.stageHeight){
			this.visible = false;
		}
		
	}
window.Ball3D = Ball3D;
}(window));