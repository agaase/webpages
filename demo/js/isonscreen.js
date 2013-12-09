	$.fn.isonscreen = function(context){
		debugger;
		var 
		//Subtract the offset of the parent container.
		//Will be 0 in case cont is undefined
		tominus=0,
		//Add the scrollTop position incase no cont is undefined.
		toadd=0;
		if(context){
			//Find if the div is itself visible
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