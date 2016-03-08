// customStickyNote.js

(function($,window){

	function rand(){
		return 8;
	}

	function StickyNotes( element ){
		this.el = document.getElementById(element);
		this.init(); // Only method thats has straight access.
	
	}

	StickyNotes.prototype ={
		init: function() {
			this.addNotes = this.el.querySelectorAll(".sticky");

			this.regEvents();
		},

		regEvents: function() {

			var self = this;
			console.log(self.addNotes);
			self.addNotes[0].addEventListener("click", function(){ 
				// create a dom Element 

					  var note = document.createElement("div");
					  classie.add( note, 'note' );
					  var page = document.createElement("div");
					  classie.add( page, 'page');

					  var h1 = document.createElement("h1");
					  var content = document.createElement("div");
					  classie.add( content, 'content');

					  h1.innerHTML = "Heading";
					  content.innerHTML = " Edit your note here!";
					  page.appendChild(h1);
					  page.appendChild(content);
					  note.appendChild( page);
					  self.el.appendChild( note);			

			},false);
		}
	}

	var sticky = new StickyNotes("whiteboard")
	


})(jQuery,window);

