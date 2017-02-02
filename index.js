$(document).ready(function(){
	$.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2017&genres=Action&sort_by=popularity.desc', function(data, status){
		//console.log(data);
		$.each(data['results'], function(key, value){
		$('#basic').append('<div class="movie" id="'+key+'"><img href="#" src="https://image.tmdb.org/t/p/w640'+value['poster_path']+'"></div>');
	});
});

	$.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2017&genres=Action&sort_by=ratings.desc', function(data, status){
		//console.log(data);
		$.each(data['results'], function(key, value){
		$('#sort').append('<div class="movie" id="'+key+'"><img href="#" src="https://image.tmdb.org/t/p/w640'+value['poster_path']+'"></div>');
		console.log("sort populated");
	});
});


$("button").click(function(){
	var id = $(this).attr('id');
	$("button").css({ "background-color":"red" })
	$(this).css({ "background-color":"blue" })

	$("#basic").hide(function(){
			$("#sort").empty()
	$("#sort").append('<div class="movie" id="nhlaka"><img src="img/Nhlakanipho_Mqadi.png"></img></div> ');
	$.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2017&genres=Action&sort_by='+id+'.desc', function(data, status){
	//console.log(data);
	$.each(data['results'], function(key, value){
	$('#sort').append('<div class="movie" id="'+key+'"><img href="#" src="https://image.tmdb.org/t/p/w640'+value['poster_path']+'"></div>');
	console.log("sort populated " + id);
});

	$("#sort").show();
});	
	});	
});



$(".movie").click(function(){
		var id =$(this).attr('id');
		console.log(id);
		var selected;

		$.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2017&genres=Action&sort_by=popularity.desc', function(data, status){
		//console.log(data);
		$.each(data['results'], function(key, value){
			if(id==key)
			{
				selected = value;
				return;
			}

			$("div#dev").hide(function(){
			$("div#media").show(function(){
				(this).append('<img src="https://image.tmdb.org/t/p/w640'+selected['poster_path']+'">');
			});
		});
		console.log("code running x");

		});		
	});
 });
});
