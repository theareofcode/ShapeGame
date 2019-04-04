         dragElement(document.getElementById("c"));
         dragElement(document.getElementById("t"));
         dragElement(document.getElementById("s"));
         var score = 0;
         function dragElement(elmnt) {
           var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
         
             elmnt.onmousedown = dragMouseDown;
         	
         
           function dragMouseDown(e) {
             e = e || window.event;
             e.preventDefault();
             pos3 = e.clientX;
             pos4 = e.clientY;
             document.onmouseup = closeDragElement;
             document.onmousemove = elementDrag;
           }
         
           function elementDrag(e) {
             e = e || window.event;
             e.preventDefault();
             pos1 = pos3 - e.clientX;
             pos2 = pos4 - e.clientY;
             pos3 = e.clientX;
             pos4 = e.clientY;
             elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
             elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
         	window.x = (elmnt.offsetTop - pos2);
         	window.y = (elmnt.offsetLeft - pos1);
         	window.e = elmnt;
         	
         
         
           
           
           
           }
         
           function closeDragElement() {
         
         	while (window.x >= -44 && window.x <=119 && window.y <= 539 && window.y >=325){
         	if (window.e == document.getElementById("c")){ 
         	score = score + 1; 
         	document.getElementById("right").innerHTML = "Score: "+ score ;
         	var element = document.getElementById("c");
             element.parentNode.removeChild(element);
         	document.getElementById("x1").style.display = "none";
         	break;
         	}
         	if (window.e == document.getElementById("t")){
         	document.getElementById("x1").style.display = "unset";
         	document.getElementById("t").style.top = "270px";
         	document.getElementById("t").style.left = "110px";
         	break;
         	}
         	if (window.e == document.getElementById("s")){
         	document.getElementById("x1").style.display = "unset";
         	document.getElementById("s").style.top = "20px";
         	document.getElementById("s").style.left = "100px";
         	break;
         	}
         	}
         	
         	while(window.x >= 200 && window.x <=361 && window.y <= 539 && window.y >=325){
         	if (window.e == document.getElementById("t")  ){ 
         	score = score + 1; 
         	document.getElementById("right").innerHTML = "Score: "+ score;
         	var element = document.getElementById("t");
             element.parentNode.removeChild(element);
         	document.getElementById("x2").style.display = "none";
         	break;
         	}
         	if (window.e == document.getElementById("c")){ 
         		document.getElementById("x2").style.display = "unset";
         	document.getElementById("c").style.top = "520px";
         	document.getElementById("c").style.left = "100px";
         	break;
         	}
         	if (window.e == document.getElementById("s")){
         	document.getElementById("x2").style.display = "unset";
         	document.getElementById("s").style.top = "20px";
         	document.getElementById("s").style.left = "100px";
         	break;
         	}
         	
         	
         	}
         	
         
         	while( window.x >= 432 && window.x <=603 && window.y <= 539 && window.y >=325 ){
         	if (window.e == document.getElementById("s") 
         	){ score = score + 1; 
         	document.getElementById("right").innerHTML = "Score: "+ score;
         	var element = document.getElementById("s");
             element.parentNode.removeChild(element);
         	document.getElementById("x3").style.display = "none";
         	break;
         	}
         	if (window.e == document.getElementById("t")){
         	document.getElementById("x3").style.display = "unset";
         	document.getElementById("t").style.top = "270px";
         	document.getElementById("t").style.left = "110px";
         	break;
         	}
         	if (window.e == document.getElementById("c")){ 
         	document.getElementById("x3").style.display = "unset";
         	document.getElementById("c").style.top = "520px";
         	document.getElementById("c").style.left = "100px";
         	break;
         	}
         	
         	}
         	
         	
         	
         	if (score == 3){
         
         	
         	var style = document.createElement('style');
         style.type = 'text/css';
         var keyFrames = '\
         @keyframes win {\
             0% {\
                 background-color:  #ebfaeb;;\
             }\
             100% {\
                 background-color:  #248f24;;\
             }\
         }';
         style.innerHTML = keyFrames
         document.getElementsByTagName('head')[0].appendChild(style);
         
         	
         	
         	}
         	
         	
         	
         
             document.onmouseup = null;
             document.onmousemove = null;
         
         
           }
           
         
         
         }