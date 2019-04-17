$( document ).ready(function() {
	$.getJSON( "data/data.json", function( data ) {
		var userId = data.user;
		$(".user-id").html(userId);
	  	$.each( data.movies[0], function( key, val ) {
	  		console.log(data.movies[0]);
	  		var movietext = "";
	  	 	$.each( val, function( moviekey, movieval ) {
	    		var text = "<div class='card clearfix'><div class='left-wrap' style='background-image:url("+movieval.images+") ''></div><div class='right-wrap'><div class='title'>"+movieval.title+"</div><div class='rating'> Rating : <span class='rating-value'>"+movieval.rating+" / 5</span></div><div class='genre'> Genre : "+movieval.genre+"</div></div></div>";
	    		movietext = movietext + text;
	    	});
	    	var maintext = "<div class='row-wrap'><div class='row-name'>"+key+"</div><div class='cards-wrap clearfix'>"+movietext+"</div></div>";
	    	$(".row-conatainer").append(maintext);
	   });
	});
});