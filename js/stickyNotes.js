
var width = 300,
	height =200;
var data = [1,2,3,4];
var inside

var clickCount = 1000;
asdfas

function click(){
	//if (d3.event.defaultPrevented ) return;

	// Extract the click Location 
	clickCount++;

	var point = d3.mouse( this ),
		p ={ x: point[0], y: point[1] };

		id ="dragMe_"+clickCount;

	var note= section.append("div")
		.attr("id",id)
		.style("top","200px")
		.style("left","200px")
		.attr("width",200)
		.attr("height",200)
		.attr("class", "note");
			var page = note.append("div")
			.attr("class","page")
			.attr("contenteditable","true");
		bindMe(id);
		

}
var section = d3.select("#whiteboard");
var sticky = d3.select("#sticky").on("click", click);


// Define drag beavior
var drag = d3.behavior.drag()
    .on("drag", dragmove);

function dragmove(d) {
  var x = d3.event.x;
  var y = d3.event.y;

  // Check for coditions here!
  d3.select(this).style("top", y+"px").style("left", x+"px");
  // attr("transform", "translate(" + x + "," + y + ")");
}

function handle(){
	console.log('clicked');
	
}

function bindMe(id){

		console.log(" asdkjfa");
		var selector ="#"+id;
		$(selector).draggable({
				distance: 10,
				cursorAt: { left: 0, top:0 },
				cursor: "crosshair",
				containment: [ 50, 50, 900, 600 ],
			})
			.click(function() {
			$(this).draggable( {disabled: false});
			})//.dblclick(function() {
			//$(this).draggable({ disabled: true });

		});
}




// <!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>jQuery UI Draggable - Default functionality</title>
//   <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
//   <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
//   <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
//   <link rel="stylesheet" href="style.css">
//   <style>
//   #draggable { width: 150px; height: 150px; padding: 0.5em; }
//   </style>

// </head>
// <body>
 
// <div contenteditable="true" id="d" class='d'>

// <span>Text to edit</span>
// </div>

// <div contenteditable="true" id="d" class='d'>

// <span>Text to edit</span>
// </div>
// <div contenteditable="true" id="d" class='d'>

// <span>Text to edit</span>
// </div>

// <div id="draggable" class="ui-widget-content">
//   <p>Drag me around</p>
// </div>
//    <script>
// $(".d").draggable()
//   .click(function() {
//     $(this).draggable( {disabled: false});
// }).dblclick(function() {
//     $(this).draggable({ disabled: true });
// });
//   </script>
 
// </body>
// </html>