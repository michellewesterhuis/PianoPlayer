var PianoPlayer = function () {
     //Declares default setting of selector.
     var defaultSettings = {
        selector: '.loader',
    };

    // Declare variables to be used.
    var keyId;
	var array = [];
	var arraynumber = 0;
	var list; 
	var count = 0;
	var myVar;


	//function to play a sound when the right key is pressed
    document.onkeydown = function(e) 
	{ 
		//Give de keyCode a name
		var keyId = e.keyCode;

		for(i = 0; i<=219; i++) {
				//Check if de i is the same as de keycode
				if(i==keyId) {
					//audio elements create en play
					var X = document.createElement("AUDIO"); 
					X.setAttribute("src", "./piano/" + keyId + ".wav");
					X.play(); 

					//ajaxcall 
					loadXMLDoc(keyId); 
				}
			}		
	}
};



