function assignchildren()
{
	if(sessionStorage.option==1)
	{
		resetbackground()
		var myNode = document.getElementById('Source6');
  		while (myNode.firstChild) {
    		myNode.removeChild(myNode.firstChild);
  		}
  		var img = $(document.createElement('img'))
  		img.id="Image"+6;
  		img.attr('src','svg/downarrow.svg');
  		img.css('width', 50);
  		img.css('height',50);
  		img.appendTo('#Source6');
  		for(var i=0;i<6;i++)
  		{
  			  var idstring="#Source"+i;
			  var ids='Source'+i
			  var myNode = document.getElementById(ids);
			  while (myNode.firstChild) {
			    myNode.removeChild(myNode.firstChild);
			  }
			  var img = $(document.createElement('img'))
			  var dmimg=new Image();
			  img.id="Image"+i;
			  dmimg.src=imagesources1[i]
			  img.src=imagesources1[i]
			  img.attr('src',img.src)
			  img.src=dmimg.src;
			  img.attr('src',dmimg.src)
			  img.css('width', 50);
			  img.css('height',50);
			  img.appendTo(idstring);
  		}
	}
	if(sessionStorage.option==2)
	{
		resetbackground()
		for(i=1;i<7;i++){
			  var idstring1="#Source"+i;
			  var ids1='Source'+i
			  var myNode1 = document.getElementById(ids1);
			  while (myNode1.firstChild) {
			    myNode1.removeChild(myNode1.firstChild);
			  }
			  var img1 = $(document.createElement('img'))
			  img1.id="Save"+i;
			  img1.attr('src', imagesources[i]);
			  img1.css('width', 50);
			  img1.css('height',50);
			  img1.appendTo(idstring1);
		}
	}
	if(sessionStorage.option==3)
	{
		 generatebuttoncolors()
		for(i=1;i<7;i++){
			  var idstring1="#Source"+i;
			  var ids1='Source'+i
			  var myNode1 = document.getElementById(ids1);
			  while (myNode1.firstChild) {
			    myNode1.removeChild(myNode1.firstChild);
			  }
			  var img1 = $(document.createElement('div'))
			  img1.id="Bcolor"+i;
			  img1.attr('src', 'adsize.jpg');
			  img1.css('width', 50);
			  img1.css('height',50);
			  img1.appendTo(idstring1);
		}
  	}
 
	
	if(sessionStorage.option==4)
	{
		resetbackground()
  		for(i=1;i<7;i++){
  		var idstring1="#Source"+i;
  		var ids1='Source'+i
  		var myNode1 = document.getElementById(ids1);
  		while (myNode1.firstChild) {
    			myNode1.removeChild(myNode1.firstChild);
  		}
  		var img1 = $(document.createElement('div'))
  		img1.id="Tcolor"+i;
  		img1.css('width', 50);
  		img1.css('height',50);
  		img1.appendTo(idstring1);
  		}
   		
	}
	if(sessionStorage.option==5)
	{
		resetbackground()
  		downloadcanvas()
	}
	if(sessionStorage.option==6)
	{
		resetbackground()
  		var myNode = document.getElementById('Source6');
  		while (myNode.firstChild) {
    		myNode.removeChild(myNode.firstChild);
  		}
  		var img = $(document.createElement('img'))
	    img.id="Image"+6;
	    img.attr('src','svg/downarrow.svg');
	    img.css('width', 50);
	    img.css('height',50);
	    img.appendTo('#Source6');
	    for(i=1;i<6;i++){
	  		var idstring1="#Source"+i;
	  		var ids1='Source'+i
	  		var myNode1 = document.getElementById(ids1);
	  		while (myNode1.firstChild) {
	    		myNode1.removeChild(myNode1.firstChild);
	  		}
	  		var img1 = $(document.createElement('button'))
	  		img1.id="Layout"+i;
	  		img1.css('width', 50);
	  		img1.css('height',50);
	  		img1.appendTo(idstring1);
	}
}





//If Find Images is selected
 //#source6 Should have a down arrow 
  if(sessionStorage.option==1){
  	resetbackground()
  	var myNode = document.getElementById('Source6');
  	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  	}
  	var img = $(document.createElement('img'))
  img.id="Image"+6;
  img.attr('src','svg/downarrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source6');
  for(i=1;i<6;i++){
  var idstring="#Source"+i;
  var ids='Source'+i
  var myNode = document.getElementById(ids);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var img = $(document.createElement('img'))
  var dmimg=new Image();
  img.id="Image"+i;
  dmimg.src=imagesources1[i]
  img.src=imagesources1[i]
  img.attr('src',img.src)
  img.src=dmimg.src;
   img.attr('src',dmimg.src)
  img.css('width', 50);
  img.css('height',50);
  img.appendTo(idstring);
  }
  }
  //End of populating the Find Images section
  
  
  //Begin populating Save images - Leave blank 
  if(sessionStorage.option==2){
  resetbackground()
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('img'))
  img1.id="Save"+i;
  img1.attr('src', imagesources[i]);
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
  }
  if(sessionStorage.option==3){
  
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('div'))
  img1.id="Bcolor"+i;
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
  generatebuttoncolors()
  }
  if(sessionStorage.option==4){
  resetbackground()
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('div'))
  img1.id="Tcolor"+i;
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
   generatebuttoncolors()
  }
  if(sessionStorage.option==5){
  resetbackground()
  downloadcanvas()
  }
  if(sessionStorage.option==6){
  resetbackground()
  	var myNode = document.getElementById('Source6');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  	var img = $(document.createElement('img'))
  img.id="Image"+6;
  img.attr('src','svg/downarrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source6');
  for(i=1;i<6;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('button'))
  img1.id="Layout"+i;
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
  }