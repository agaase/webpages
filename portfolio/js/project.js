
var project = (function(){

	var loadImage = function(el,img){
		var imge = new Image();
		if(el){
			el.fadeOut(10);
			this.loader.show();
			imge.onload = function(){
				el.attr("src",img);
				this.loader.hide();
				el.fadeIn();
			}.bind(this);
		}
		imge.src = img;
	};
	var loadHTML = function(el,html){
		el.fadeOut(10);
		el.html(html);
		el.fadeIn();
	};
	var preloadImages = function(imgs){
		$.each(imgs,function(i,v){
			var imge = new Image();
			imge.src = v;
		});
	};



	var obj = function(){
		
		this.loader = $(".loader");
		
		this.rightArrow = $(".right.arrow");
		this.leftArrow = $(".left.arrow");
		this.counter = 0;
		var params = window.location.href.split("?k=");
		var project = params.length >1 ? params[1] : "";
		if(json[project]["images"]){
			this.images = project ? json[project]["images"]  : ["https://dl.dropbox.com/s/66heb8ed25ptsu7/MAGAZINE%20PAGE.png?dl=0","https://dl.dropbox.com/s/ee577mkztl3azqr/PROFILE%202.png?dl=0","https://dl.dropbox.com/s/sh6qliedd8917yq/PROFILE.png?dl=0","https://dl.dropbox.com/s/o1hetmfn22tovcr/HOME%20PAGE%202.png?dl=0"];
			this.mainCont = $(".mainImage");
			$(".mainContainer").hide();
			this.totalPages = this.images.length;
		}else{
			this.htmls = project ? json[project]["htmls"]  : "";
			this.mainCont = $(".mainContainer");
			$(".mainImage").hide();
			this.totalPages = this.htmls.length;
		}
		$(".pageNo .total").html(this.totalPages);
		$(".pageNo .pagePos").html(1);
		this.mainCont.css({"max-height":(window.innerHeight*0.95)+"px", "margin-top":(window.innerHeight*0.02)+"px"});
	};

	obj.prototype.swipe = function(dir){
		
		if(dir == "left"){
			this.counter--;
			if(this.counter < 0){
				this.counter++;
				return;
			} 
		}else{
			this.counter++;
			if(this.counter >= this.totalPages){
				this.counter--;
				return;
			} 
		}

		if(this.counter>0){
			$(".left.arrow").show();
		}
		if(this.counter === 0){
			$(".left.arrow").hide();	
		}
		if(this.counter === (this.totalPages-1)){
			$(".right.arrow").hide();
		}
		if(this.counter < (this.totalPages-1) && this.totalPages>1){
			$(".right.arrow").show();	
		} 
		if(this.images){
			loadImage.call(this,this.mainCont,this.images[this.counter]);
		}else if(this.htmls){
			loadHTML.call(this,this.mainCont,this.htmls[this.counter]);
		}
		if(dir =="right" && this.images){
			loadImage(null,this.images[this.counter+1]);
		}
			
		$(".pageNo .pagePos").html(this.counter+1);

	};

	obj.prototype.assignEvent = function(){
		$(".arrow").on("click",function(ev){
			this.swipe($(ev.target).hasClass("left") ? "left" : "right");
		}.bind(this));
		$(document).on("keydown",function(ev){
			if(ev.keyCode==37){
				this.swipe("left");
			}
			else if(ev.keyCode==39){
				this.swipe("right");
			}
		}.bind(this));
	};

	obj.prototype.init = function(){
		if(this.images){
			loadImage.call(this,this.mainCont,this.images[0]);
			if(this.images.length>1 ){
				this.rightArrow.show();
			}
		}else if(this.htmls){
			loadHTML.call(this,this.mainCont,this.htmls[0]);
			if(this.htmls.length>1){
				this.rightArrow.show();
			}
		}
		
		this.assignEvent();
	};
	return obj;
})();

window.onload = function(){
	var proj = new project();
	proj.init();
};
