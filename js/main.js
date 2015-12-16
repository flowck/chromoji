/*
* Chromoji v1.0.0
* https://github.com/flowck/chromoji
*
* Licensed MIT @ Flowck II
*/

(function(Clipboard){

	// Query all
	var emoji = document.querySelectorAll(".emoji"),
		success = document.querySelector(".success");

	var Clipboard = new Clipboard(emoji);
	
	// When successful copied
	Clipboard.on("success", function(e){
		
		// Show the success message
		success.innerHTML = "Emoji copied: " + e.text;
		success.style.display = "block";

		// Hide the success message after 1 second
		this.setTimeout(function(){
			success.style.display = "none";
		}, 1000);

	});


	Clipboard.on("error", function(e){
		console.log(e);
	});

}(Clipboard))