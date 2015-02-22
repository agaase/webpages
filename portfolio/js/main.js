window.onload = function(){
	$(".container").width(Object.keys(json).length*430);
	$.each(json,function(k,v){
		$(".container").append("<a href='"+window.location.href.replace("index.html","")+"project.html?k="+k+"' class='item'><div class='title'>"+v["title"]+"</div><div class='desc'>"+v["writeup"]+"</div></a>");
	});
};