$(document).ready(function(){

	$('#find_hero').submit(function(){
			var name = $(this).find('input[name="find_hero"]').val(); 
			alert(name); 
			getHero(name); 
		}); 

function getHero(name){
	var request = {name: name, 
					apikey: "61b63d6bb359dd5e02413e1dbae4b1f6" };

	var result = $.ajax({
			url: "http://gateway.marvel.com:80/v1/public/characters?name=
			#" + name + "&apikey=61b63d6bb359dd5e02413e1dbae4b1f6", 
			//url: "http://gateway.marvel.com:80/v1/public/characters?name=#wolverine&apikey=61b63d6bb359dd5e02413e1dbae4b1f6",
			data: request,
			dataType: "jsonp",
			type: "GET",			
		});  
	}; 










}); 