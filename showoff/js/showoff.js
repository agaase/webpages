var portfolio = (function(){

	var initDisqus = function(title,disqusConfig){
		var disqus_shortname = disqusConfig.disqus_shortname; // required: replace example with your forum shortname
		var disqus_identifier = title;
		var disqus_url  = (disqusConfig.disqus_url || window.location.host)+title;
		var disqus_title = title;
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
	};

	/**
	 * Sets the parameters from the url.
	 * @method setParams
	 */
	var getParams = function(url){
		var params = {};
		var urlParamString = url || window.location.href.split("?")[1];
		if(urlParamString){
			var urlParams = urlParamString.split("&");
			$.each(urlParams,function(i,v){
				var info = v.split('=');
				params[info[0]] = info[1].replace("_n_","_&_").replace(/_/g," ");
			}.bind(this));
		}
		return params;
	};

	return {


		init : function(){
			$.getJSON( "data/data.json", function( data ) {
				if(window.matchMedia("(min-width: 600px)").matches){
					$("#section").height(window.innerHeight);
				}
				this.data = data;
				this.rootEl  = $("#contentArea");
				this.params = getParams();
				this.renderUrl();
				window.onpopstate = function(){
					this.setParams();
					this.renderUrl();
				}.bind(this);
			}.bind(this));
			
		},

		/**
		 * This is the first launhc where it tries to render directly from url.
		 * @method renderUrl
		 */
		renderUrl : function(){
			var k1 = this.params["k1"];
			var k2 = this.params["k2"];
			this.showSections(k1);
			if(k1){
				if(k2){
					this.manageStack(k1);
					$.each(this.data.section,function(i,v){
						if(v.title.toLowerCase() == k1.toLowerCase()){
							if(v.itemList){
								this.showItem(k2,v.itemList);
							}
						}
					}.bind(this));
				}else{
					this.renderSectionLink(k1);
				}
			}else{
				this.showHome();
			}
		},

		/**
		 * Changes the url in browser as per what is shown.
		 * @method manageStack
		 * @param  {[type]}    title   The name to show in the url.
		 * @param  {[type]}    toReset Whether to start fresh.
		 */
		manageStack : function(title,toReset){
			this.keyStack = toReset ? [] : (this.keyStack || []);
			document.title = "Aseem Agarwal | "+title;
			title = title.toLowerCase().replace(' & '," n ").replace(/\s/g,"_");
			this.keyStack.push("k"+(this.keyStack.length+1) + "="+title);
			history.pushState({},title,"?"+this.keyStack.join("&"));

		},

		/**
		 * Renders the section menu.
		 * @method showSections
		 * @param  {[type]}     title The current item which is shown.
		 */
		showSections : function(title){
			var html ="<div class='masthead'>"+this.data.masthead+"</div>";
			$.each(this.data.section,function(i,v){
				if((title && v.title.toLowerCase() == title.toLowerCase()) || (v.isHome && !title)){
					html += "<br class='linebreak'><div class='link active'>"+v.title+"</div>";
				}else{
					html += "<br class='linebreak'><div class='link'>"+v.title+"</div>";
				}
			});
			$("#section").empty().html(html);
			$("#section .link").on("click",function(e){
				this.renderSectionLink($(e.target).html());
				$(".link").removeClass("active");
				$(e.target).addClass("active");
			}.bind(this));
		},

		/**This resets the scroll if set on root element from previous page
		**/
		resetScroll : function(){
			this.rootEl.scrollTop(0);
		},

		/**
		 * Shows the actual showcase item.
		 * @method showItem
		 * @param  {[type]} title        The title of the item in the list.
		 * @param  {[type]} list        The total list of items.
		 * @return {[type]}
		 */
		showItem : function(title,list){
			this.manageStack(title);
			this.resetScroll();
			var html = ""; 
			$.each(list,function(i,v){
				if(v["title"].toString().toLowerCase() == title.toString().toLowerCase()){
					if(v._showcaseList){
						$.each(v._showcaseList,function(ind,val){
							html += "<div class='showcaseItem "+(v.itemClasses || "")+"'>";
							if(val.writeup){
								html += "<div>"+val.writeup+"</div>";
							}
							if(val.img){
								html += "<img src='"+val.img+"'/>";
							}
							html+="</div>";
						});
					}
					html  += "<div id='disqus_thread'></div>";
					this.rootEl.removeClass().addClass("fullItem").html(html);
				}
			}.bind(this));
			initDisqus(title.toLowerCase().replace(/\s/g,"_"),this.data.config.disqus);
		},


		/**
		 * Finds and shows the home item.
		 * @method showHome
		 */
		showHome  : function(){
			$.each(this.data.section,function(i,v){
				if(v.isHome){
					this.renderSectionLink(v.title);
				}
			}.bind(this));
		},

		/**
		 * Shows the section item.
		 * @method renderSectionLink
		 * @param  {[type]}          linkTitle [description]
		 * @return {[type]}
		 */
		renderSectionLink : function(linkTitle){
			this.manageStack(linkTitle,true);
			this.resetScroll();
			$.each(this.data.section,function(i,v){
				if(v.title.toLowerCase()==linkTitle.toLowerCase()){
					if(v.itemBody){
						this.rootEl.removeClass().html("<div class='text'>"+v.itemBody+"</div>");
					}else if(v.itemList){
						var html="";
						$.each(v.itemList,function(ii,vv){
							html+="<div data-id='"+vv["title"]+"' class='item'>";
							html+="<div class='thumbnail' style='background-image:url(\""+vv.thumbnail+"\");'></div>";
							html+="<div class='content'>";
							html+="<div class='title'>"+vv.title+"</div>";
							html+="<div class='summary'>"+vv.summary+"</div>";
							html+="</div>";
							html+="</div>";
						});
						this.rootEl.html(html).removeClass().addClass(v.listItemClass || "");
						$('.item',this.rootEl).on("click",function(e){
							this.showItem($(e.currentTarget).attr("data-id"),v.itemList);
						}.bind(this));
					}
				}
			}.bind(this));
		}
	};

})();
$(function(){
	portfolio.init();
});