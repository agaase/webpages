
var project = (function(){

	var loadImage = function(el,img){
		el.fadeOut(10);
		this.loader.show();
		var imge = new Image();
		imge.onload = function(){
			el.attr("src",img);
			this.loader.hide();
			el.fadeIn();
		}.bind(this);
		imge.src = img;
	};
	var preloadImages = function(imgs){
		$.each(imgs,function(i,v){
			var imge = new Image();
			imge.src = v;
		});
	};

	var obj = function(){
		this.mainImage = $(".mainImage");
		this.loader = $(".loader");
		this.mainImage.css({"max-height":window.innerHeight*.95+"px", "margin-top":(window.innerHeight*0.02)+"px"});
		this.rightArrow = $(".right.arrow");
		this.leftArrow = $(".left.arrow");
		this.counter = 0;
		var params = window.location.href.split("?k=");
		var project = params.length >1 ? params[1] : "";
		this.images = project ? json[project]["images"]  : ["https://dl.dropbox.com/s/66heb8ed25ptsu7/MAGAZINE%20PAGE.png?dl=0","https://dl.dropbox.com/s/ee577mkztl3azqr/PROFILE%202.png?dl=0","https://dl.dropbox.com/s/sh6qliedd8917yq/PROFILE.png?dl=0","https://dl.dropbox.com/s/o1hetmfn22tovcr/HOME%20PAGE%202.png?dl=0"];
		this.totalImages = this.images.length;
		//preloadImages(this.images);
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
			if(this.counter >= this.totalImages){
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
		if(this.counter === (this.totalImages-1)){
			$(".right.arrow").hide();
		}
		if(this.counter < (this.totalImages-1) && this.totalImages>1){
			$(".right.arrow").show();	
		} 

		loadImage.call(this,this.mainImage,this.images[this.counter]);
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
		loadImage.call(this,this.mainImage,this.images[0]);
		if(this.images.length>1){
			this.rightArrow.show();
		}
		this.assignEvent();
	};
	return obj;
})();

window.onload = function(){
	var proj = new project();
	proj.init();
};
