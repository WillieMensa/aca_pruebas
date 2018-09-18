var offset,
	canvas;

  function init() {
	canvas = document.getElementById("mycanvas"),
	context = canvas.getContext("2d");
	offset  = getOffset(canvas);
	if(window.PointerEvent) {
	  canvas.addEventListener("pointerdown", draw, false);
	}
	else {
	  //Provide fallback for user agents that do not support Pointer Events
	  canvas.addEventListener("mousedown", draw, false);
	}
  }
  
  // Event handler called for each pointerdown event:
  function draw(event) {
	canvas = document.getElementById("mycanvas"),
	context = canvas.getContext("2d");
	context.fillRect(event.pageX-offset, event.pageY-offset, 5, 5);
  }

  //Helper function to get correct page offset for the Pointer coords
  function getOffset(obj) {
	  var offsetLeft = 0;
	  var offsetTop = 0;
	  do {
		if (!isNaN(obj.offsetLeft)) {
			offsetLeft += obj.offsetLeft;
		}
		if (!isNaN(obj.offsetTop)) {
			offsetTop += obj.offsetTop;
		}   
	  } while(obj = obj.offsetParent );
	  return {left: offsetLeft, top: offsetTop};
  } 

