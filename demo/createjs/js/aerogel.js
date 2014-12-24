function init(){
	var canvas = document.getElementById("canvas");
	var stage = new createjs.Stage(canvas);
	
	stage.update();
	createjs.Ticker.setFPS(30);	
	createjs.Ticker.addEventListener("tick", stage);	


	var LINE_LENGTH = 50;
	stage.addEventListener("stagemousemove",stagemousemove);
	function stagemousemove(e){
		//console.log(e);
		for( var i = 0 ; i<container.children.length ; i++){;
			var shape = container.children[i];
			shape.graphics.clear();
			var mouseX = stage.mouseX - shape.x;
			var mouseY = stage.mouseY - shape.y;
			var t = Math.atan2( mouseY , mouseX )- Math.PI;
			var d = Math.sqrt(mouseY*mouseY+mouseX*mouseX) / 10;
			//d = (mouseY*mouseY+mouseX*mouseX) / 500;
			var r = Math.floor(255/Math.max(1,d));		
			var g = 255-r;
			var b = Math.floor(128+r/2);
			var color = "#"+ (r<<16|g<<8|b).toString(16);
			if(i==0)
				console.log(1/d);
			var l = 8* r/255+1;
			var s = LINE_LENGTH + 10*r/255;
			shape.graphics
			//.setStrokeStyle(5,"round")
			.setStrokeStyle(l)
			.beginStroke( color)
			.moveTo(0,0)
			.lineTo( s*Math.cos(t),s*Math.sin(t))
			.endStroke()
			.closePath();			
		}
	}

	var container = new createjs.Container();	
	stage.addChild( container );
	for (var i = 0 ; i< 20 ; i++){
		for (var j = 0 ; j< 20 ; j++){
			//var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 10, 10);	
			var shape = new createjs.Shape();
			shape.x = i *20 +310;
			shape.y = j *20 +100;
			container.addChild( shape );
		}
	}

	stagemousemove();


}