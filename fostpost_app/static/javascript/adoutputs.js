// Copyright @ CraftCloud
var imageObj=new Image();
imageObj.src=sessionStorage.source;
var hey=0;
var w=imageObj.width;
var h=imageObj.height;
var cw=0;
var ch=0;
var cw1=0;
var ch1=0;
var ch2=0;
var width728x90=0;
var cw3=0;
var ch3=0;
var ch4=0;
var cw4=0;
			         window.onload=function() {
			         var w=$(window).width();
	var h=$(window).height();
	
	var canvash=parseInt(0.65*h);
	var canvash1=parseInt(0.15*h);
	var w=$(window).width();
	var width728x90=parseInt(0.75*w);
		cw=(1200/628)*canvash;
		ch=canvash;
		$('#Canvas1').css('width',cw);
		$('#Canvas1').css('height',ch);
		$('#Canvas1Layer2').css('width',cw);
		$('#Canvas1Layer2').css('height',ch);
		cw1=(300/250)*canvash;
		ch1=canvash;
		$('#Canvas2').css('width',cw1);
		$('#Canvas2').css('height',ch1);
		cw2=0.75*w;
		ch2=(90/728)*cw2;
		$('#Canvas3').css('width',cw2);
		$('#Canvas3').css('height',ch2);
		cw3=canvash;
		ch3=canvash;
		$('#Canvas4').css('width',cw3);
		$('#Canvas4').css('height',ch3);
		ch4=canvash;
		
			var cw4=(120/600)*canvash;
			$('#Canvas5').css('width',cw4);
			$('#Canvas5').css('height',ch4);
	init(w,h);
			         }        
// Constructor for Shape objects to hold data for all drawn objects.
// For now they will just be defined as rectangles.
function Shape(x, y, w, h, fill) {
  // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
  // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
  // But we aren't checking anything else! We could put "Lalala" for the value of x 
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.fill = fill || '#AAAAAA';
}

// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {
  ctx.fillStyle = this.fill;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.drawImage(imageObj,this.x,this.y,this.w,this.h);
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}
var cw=100;
var ch=100;
function CanvasState(canvas,ccw,cch) {
  // **** First some setup! ****
  
  this.canvas = canvas;
  canvas.width=ccw;
  canvas.height=cch;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = canvas.getContext('2d');
  // This complicates things a little but but fixes mouse co-ordinate problems
  // when there's a border or padding. See getMouse for more detail
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
  // They will mess up mouse coordinates and this fixes that
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  // **** Keep track of state! ****
  
  this.valid = false; // when set to false, the canvas will redraw everything
  this.shapes = [];  // the collection of things to be drawn
  this.dragging = false; // Keep track of when we are dragging
  // the current selected object. In the future we could turn this into an array for multiple selection
  this.selection = null;
  this.dragoffx = 0; // See mousedown and mousemove events for explanation
  this.dragoffy = 0;
  
  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
  // Up, down, and move are for dragging
  canvas.addEventListener('mousedown', function(e) {
  
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var shapes = myState.shapes;
    var l = shapes.length;
    for (var i = l-1; i >= 0; i--) {
      if (shapes[i].contains(mx, my)) {
        var mySel = shapes[i];
        // Keep track of where in the object we clicked
        // so we can move it smoothly (see mousemove)
        myState.dragoffx = mx - mySel.x;
        myState.dragoffy = my - mySel.y;
        myState.dragging = true;
        myState.selection = mySel;
        
        
        myState.valid = false;
        return;
      }
    }
    // havent returned means we have failed to select anything.
    // If there was an object selected, we deselect it
    if (myState.selection) {
      myState.selection = null;
      myState.valid = false; // Need to clear the old selection border
    }
  }, true);
  canvas.addEventListener('mousewheel', function(e) {
  	e.preventDefault();
  	   var delta = e.wheelDelta/120;//n or -n;
  	 if(delta>0)
  	 {
  	   myState.selection.w=  myState.selection.w*1.1;
  	   myState.selection.h=myState.selection.h*1.1;
  	   var message ="w: "  + parseInt(myState.selection.w)+"h :"+ parseInt(myState.selection.h);
     // writeMessage(pancanvas, message);
      sessionStorage.w=myState.selection.w;
      sessionStorage.h=myState.selection.h;
  	   myState.valid=false;
  	  
  	   }
  	   
  	    if(delta<0)
  	 {
  	   myState.selection.w=  myState.selection.w/1.1;
  	   myState.selection.h=myState.selection.h/1.1;
  	  var message ="w: "  + parseInt(myState.selection.w)+"h :"+ parseInt(myState.selection.h);
  	  sessionStorage.w=myState.selection.w;
      sessionStorage.h=myState.selection.h;
    //  writeMessage(pancanvas, message);
  	    myState.valid=false;
  	    
  	   }
  	 
  	   
  	},true);
  canvas.addEventListener('mousemove', function(e) {
    if (myState.dragging){
      var mouse = myState.getMouse(e);
      // We don't want to drag the object by its top-left corner, we want to drag it
      // from where we clicked. Thats why we saved the offset and use it here
      myState.selection.x = mouse.x - myState.dragoffx;
      myState.selection.y = mouse.y - myState.dragoffy;
      var message ="x: "  + myState.selection.x+"y :"+ myState.selection.y;
      sessionStorage.x=myState.selection.x;
      sessionStorage.y=myState.selection.y;
     // writeMessage(zoomcanvas, message);
      myState.valid = false; // Something's dragging so we must redraw
    }
  }, true);
  canvas.addEventListener('mouseup', function(e) {
    myState.dragging = false;
  }, true);
  // double click for making new shapes
  
  
  // **** Options! ****
  
  this.selectionColor = 'grey';
  this.selectionWidth = 2;  
  this.interval = 30;
  setInterval(function() { myState.draw(); }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  this.valid = false;
}
CanvasState.prototype.removeShape=function()
{
	this.clear();
}

CanvasState.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function() {
  // if our state is invalid, redraw and validate!
  if (!this.valid) {
    var ctx = this.ctx;
    var shapes = this.shapes;
    this.clear();
    
    // ** Add stuff you want drawn in the background all the time here **
    
    // draw all shapes
    var l = shapes.length;
    for (var i = 0; i < l; i++) {
      var shape = shapes[i];
      // We can skip the drawing of elements that have moved off the screen:
      if (shape.x > this.width || shape.y > this.height ||
          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
      shapes[i].draw(ctx);
    }
    
    // draw selection
    // right now this is just a stroke along the edge of the selected Shape
    if (this.selection != null) {
      ctx.strokeStyle = this.selectionColor;
      ctx.lineWidth = this.selectionWidth;
      var mySel = this.selection;
      ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
    }
    
    // ** Add stuff you want drawn on top all the time here **
    
    this.valid = true;
  }
}


// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
}

// If you dont want to use <body onLoad='init()'>
// You could uncomment this init() reference and place the script reference inside the body tag
//init();
function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }
function init(w,h) {
  
   var s1 = new CanvasState(document.getElementById('Canvas1'),cw,ch);
  
  s1.addShape(new Shape(0,0,w,h, 'rgba(127, 255, 212, 0)'));
   var s2 = new CanvasState(document.getElementById('Canvas2'),cw1,ch1);
  
  s2.addShape(new Shape(0,0,w,h, 'rgba(127, 255, 212, 0)'));
  var s3 = new CanvasState(document.getElementById('Canvas3'),cw2,ch2);
  
  s3.addShape(new Shape(0,0,w,h, 'rgba(127, 255, 212, 0)'));
   var s4 = new CanvasState(document.getElementById('Canvas4'),cw3,ch3);
  
  s4.addShape(new Shape(0,0,w,h, 'rgba(127, 255, 212, 0)'));
  var weirdc5=cw4;
   var s5 = new CanvasState(document.getElementById('Canvas5'),100,ch4);
  
  s5.addShape(new Shape(0,0,w,h, 'rgba(127, 255, 212, 0)'));
  
}
