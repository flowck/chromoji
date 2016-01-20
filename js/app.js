(function(emoji, Clipboard){

	// List emojis
	var contentElement = document.querySelector(".content-emojis");
	listEmoji(emoji, contentElement);
	
	// Function to list all emojis
	function listEmoji(list, element){

		var listLength = list.length;
		var content = "";

		for(var i = 0; i < listLength; i++){

			content += '<span class="emoji" data-clipboard-text="' + list[i].character + '">' + list[i].character + '</span>';

		}

		element.innerHTML = content;

		return 1;

	}

	// Search emoji by user given value
	function searchEmoji(name, list, element){

		// Create a new regular expression pattern using the search keyword
		var searchPattern = new RegExp(name);
		var content = "";

		// Iterate the emoji list
		for(var i = 0; i < list.length; i++){

			// 
			if(list[i].shortcode.search(searchPattern) > -1 || list[i].meaning.search(searchPattern) > -1){
				content += '<span class="emoji" data-clipboard-text="' + list[i].character + '">' + list[i].character + '</span>';
			}

		}

		// Update the DOM
		element.innerHTML = content;

	}

	/* Update emoji list by search value */
	var searchBar = document.querySelector(".searchBar");
	searchBar.addEventListener("keypress", function(){

		searchEmoji(searchBar.value, emoji, contentElement);	

	}, false);

	// Reset emoji list
	searchBar.addEventListener("blur", function(){
		
		if(searchBar.value == ""){

			listEmoji(emoji, contentElement);

		}

	});

	/* Clipboard */
	var copyByClick = (function(){

		console.log("OK");
		
		var allEmojis = document.querySelectorAll(".emoji");
		var clip = new Clipboard(allEmojis);

		clip.on("success", function(){
			console.log("Success");	
		});

		clip.on("error", function(){
			console.log("Error");	
		});

	}());

}(emoji, Clipboard))