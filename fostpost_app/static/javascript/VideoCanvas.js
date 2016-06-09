var paused=0
var doprocessing=0

var adCanvas=document.getElementById('VideoCanvas')

var playButton=document.getElementById('PauseButton')
var vid=document.getElementById('vid')
adctx=adCanvas.getContext('2d')

vid.addEventListener('ended', vidEnd, false);
vid.addEventListener('play', setAnimate, false);
var videoProcessing=new Processing(adCanvas,sketchVideo);
var backingCanvas=document.createElement('canvas')
var processingEffect=new Processing(backingCanvas,processVideo);
function playVideo() {
            if (playButton.value == "Play") {
                vid.play();
                play.value = "Pause";
            }
            else {
                vid.pause();
                playButton.value = "Play";
            }
        }
vid.onpause = function() {
    paused=1;
};
function vidEnd() {
            playButton.value = "Play";
            clearTimeout(vidTimer);
        }
function setAnimate()
{
	videoProcessing=new Processing(adCanvas,sketchVideo);
}
var currentFrame = $('#currentFrame');
var frameData=0
function sketchVideo(processing)
{
	
	$('#can').css('width',vid.videoWidth)
	$('#can').css('height',vid.videoHeight)
	processing.background(0,0)
	processing.draw=function()
	{   
		processing.size(vid.videoWidth,vid.videoHeight)
		processing.textFont("Arial",45)
		processing.text("Hello",40,40)
		$('#currentFrame').html(((vid.currentTime * 29.97).toPrecision(6)))
		if(paused==1)
		{ 
			backingCanvas.drawImage
			doprocessing=1
		}
	}
}

function processVideo(processing)
{
	backingCanvas.width=vid.videoWidth;
	backingCanvas.height=vid.videoHeight
	processing.setup=function()
	{
		
	}
	processing.draw=function()
	{
		
	}
}