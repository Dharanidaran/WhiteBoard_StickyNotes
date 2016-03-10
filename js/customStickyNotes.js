// customStickyNotes.js
( function($,window){


(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

////////Custom code ///////////
	counter=1000;
	// Create a function Object
	function StickyNote(element){

		if (element == undefined){
			return
		}
		this.el = document.querySelector (element);
		this.addNote = document.getElementById("addNote");
		this.init();

		
	}

	StickyNote.prototype ={
		init: function(){
			this.regEvents();
		},

		regEvents : function(){
			var self = this;

			self.addNote.addEventListener( "click",this._createNote,false);

			self.el.addEventListener("click",function(event){
				event.stopPropagation(); // Not really needed for now
				
				$(".stickynote").removeClass('active')
				var array=$(".stickynote");
				
			},false);

			// usage:
			$(window).smartresize(function(){
			  // code that takes it easy...
			  	$(".stickynote").draggable({
			  		containment:[ 75,75,window.innerWidth-75, window.innerHeight-75],
			  	})
			});


		},

		_createNote : function(e){

			e.stopPropagation();
			var self = this;
			counter++;
			//Create unique id here
			id ="element_"+counter;
			idControl = "control_"+counter;
			//Function to create a single note
			var div = document.createElement("div");
				div.setAttribute("id",id);
				//div.setAttribute("contenteditable", "true");
			var contentText = document.createTextNode("Click to edit");
				div.appendChild(contentText);
				classie.add(div,"stickynote");
			var control = document.createElement("div");
				control.setAttribute("id",idControl);
				control.setAttribute("class","control");
				div.appendChild(control);
			
			var cDelete = document.createElement('div');
				control.appendChild(cDelete);
				control.setAttribute("contenteditable", "false");

				classie.add(cDelete,"controlElement");
				classie.add(cDelete,"delete");

			var colorRose = document.createElement('div');
				control.appendChild(colorRose);
				colorRose.setAttribute("contenteditable", "false");
				colorRose.style.backgroundColor = "#FFA3CE";


				classie.add(colorRose,"controlElement");
				classie.add(colorRose,"colorElement");


			var colorOrange = document.createElement('div');
				control.appendChild(colorOrange);
				colorOrange.setAttribute("contenteditable", "false");
				colorOrange.style.backgroundColor = "#FF7767";

				classie.add(colorOrange,"controlElement");	
				classie.add(colorOrange,"colorElement");

			var colorGreen = document.createElement('div');
				control.appendChild(colorGreen);
				colorGreen.setAttribute("contenteditable", "false");
				colorGreen.style.backgroundColor = "#41AB65";

				classie.add(colorGreen,"colorElement");
				classie.add(colorGreen,"controlElement");


			// add it to the  whiteboard

			// This is attached to addNote element 
			//so get a handle to the whiteboard
				var whiteboard = this.parentNode;
				whiteboard.appendChild(div);

				// Bind the event after attaching
				// $(id).addClass('active');

				$(div).draggable({ 					
						distance: 10,
						cursorAt: { left: 0, top:0 },
						cursor: "crosshair",
						containment: [ 75,75,window.innerWidth-75, window.innerHeight-75],
					})
					.click(function(e) {
						e.stopPropagation();
						$(this).draggable( { disabled: false });
						$(this).addClass("active");
						$(this).attr("contenteditable", "true");


					});
					//.dblclick(function(e) {
						//e.stopPropagation();
						//$(this).draggable({ disabled: true });
						//$(this).addClass("Editing");
					//});
				
					$(".delete").click( function(e){
						e.stopPropagation();
						$(this).closest('.stickynote').remove();
					})

					$(".colorElement").click(function(e){
						e.stopPropagation();
						var colorClicked =$(this).css("backgroundColor");						
						$(this).closest('.stickynote').css('background-color', colorClicked);
					})


		
		},

		_bindNoteEvent : function(){
			// Function to attach the neccessary events to a single note
			console.log('Binding EVENTS ....');

			//attach drag event

		}
	}
	var stickynote = new StickyNote("#whiteboard");

})(jQuery,window);