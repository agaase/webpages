$.fn.isonscreen = function(cont){
	debugger;
	var context,tominus=0,toadd=0;
	if(cont){
		context = cont;
		if(!context.isonscreen()){
			return false;
		};
		tominus = context.offset().top;
	}else{
		context = $(window);
		toadd = context.scrollTop();
	}

	if($(this).offset().top - tominus <= (toadd + context.height())){
		return true;
	};
	return false;
}