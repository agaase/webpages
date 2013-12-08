$.fn.isonscreen = function(cont){
debugger;
var context = cont || $(window);
var tominus =0;
var toadd = 0;
if(cont){
	if(!cont.isonscreen()){
		return false;
	};
	tominus = cont.offset().top;
}else{
	toadd = $(window).scrollTop();
}

if($(this).offset().top - tominus <= (toadd + context.height())){
	return true;
};
return false;
}