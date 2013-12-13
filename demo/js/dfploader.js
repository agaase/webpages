var dfplog = function(msg){
    console.log((new Date().getTime())+":dfploader:"+msg);
};

var loadDFP = function (){
        var DFPLoaded;
        DFPLoaded = DFPLoaded || $('script[src*="googletagservices.com/tag/js/gpt.js"]').length;
        if(DFPLoaded){
            return;
		}
		window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        
        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        
        //check for ad blocker
        gads.onerror = function(){
        	dfplog("There is an ad blocker");
        };
        
        var useSSL = 'https:' === document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
        
        //another ad block check
        if(gads.style.display === 'none'){
        	dfplog("There is an ad blocker");
        }
    }

var triggerDfpAd = function(args){
            var element = args.element,
            adunit=args.adunit,
            sizes=args.sizes,
            dontRefresh=args.dontRefresh,
            delayRefresh = args.delayRefresh || 1500;
            googletag=args.googletag || googletag;
            
            dfplog("dfploader:Triggering ad-"+adunit);
            var slot;
            var domid = "Ad_"+(parseInt(Math.random()*100000));
            element.empty().attr("id",domid);
            googletag.cmd.push(function () {
        		googletag.pubads().collapseEmptyDivs(true);
    			googletag.enableServices();
            });
            googletag.cmd.push(function () {
                slot = googletag.defineSlot(adunit, sizes, domid).addService(googletag.pubads());
            });
            
            googletag.cmd.push(function () {
    			googletag.display(domid);
                if(!dontRefresh){
                    var count=0;
                    var timerId = setInterval(function(){
                        if($("#"+domid).find("iframe").length){
                            if(!checkIfAdLoaded(domid)){
                                dfplog("dfploader:calling refresh since no ad served; adunit - "+adunit);
                                googletag.pubads().refresh([slot]);
                            }else{
                                dfplog("dfploader:adunit served successfully for adunit - "+adunit);
                            }
                            clearInterval(timerId);
                        }else if(count>5){
                            clearInterval(timerId);
                        }
                        count++;
                    },delayRefresh);
                }
    		});
            
        };
        
        
        
var celtraAdhesionLoadedCheck = function(el){
     if($(".celtra-ad-v3",el).length){
            return true;
        }else{
            return false;
        }
};
var checkIfAdLoaded = function(domid){
    var adel = $("#"+domid);
    if(adel.hasClass("floaterAd")){
       return(celtraAdhesionLoadedCheck(adel));
    }else{
        if(adel.is(":visible")){
            return true;
        }
    }
    return false;
};
        
var timerToTrigger = function(adunits){
    var i=0;
    var timer = setInterval(function(){
                    var ad = adunits[i];
                    triggerDfpAd({
                        "element":ad[0],
                        "adunit":ad[1].id,
                        "sizes":ad[1].size,
                        "delayRefresh" : ad[1].delayRefresh,
                        "dontRefresh" : ad[1].dontRefresh
                    });
                    i++;
                    if(i>=adunits.length){
                        clearInterval(timer);
                    }
    },500);
}

/**
 * pass all the adunits here
 */ 
var triggerAds = function (adunits) {
    var timer,i=0,celtraCheckCount=0,couldbeCeltra=false;
    var checkInterstitialTimer = setInterval(function(){
        celtraCheckCount++;
        var intEl = $("body .interstitialAd");
        if(!intEl.length || intEl.hasClass("couldbeCeltra")){
            dfplog("dfploader:triggering ads now.")
            clearInterval(checkInterstitialTimer);
            timerToTrigger(adunits);
        }else if(!couldbeCeltra && !intEl.hasClass("vdopiaad") && celtraCheckCount>7){
            intEl.addClass("couldbeCeltra");
            intEl.hide();
            couldbeCeltra=true;
        }
    },500);
  
};
        
loadDFP();