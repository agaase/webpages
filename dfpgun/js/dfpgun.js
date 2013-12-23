(function(){

var adslotmap = {};

var loadDFP = function (){
        var DFPLoaded;
        DFPLoaded = DFPLoaded || $('script[src*="gpt.js"]').length;
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
            console.log("There is an ad blocker");
        };
        
        var useSSL = 'https:' === document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
        
        //another ad block check
        if(gads.style.display === 'none'){
            console.log("There is an ad blocker");
        }
    };

var loadedCallback = function(level,message,service,slot,reference){
    if(message.getMessageId()=="6"){
        debugger;
        console.log(message.getMessageArgs());
        var callback = adslotmap[message.getMessageArgs()]["callback"];
        if(callback){
            callback(adslotmap[message.getMessageArgs()]["slot"]);
        }
    }
};


$.fn.dfpgun = function(args){
            loadDFP();
            var element = $(this),
            adunit=args.adunit,
            sizes=args.sizes;
            googletag=args.googletag || googletag;

            adslotmap[adunit] = {};
            adslotmap[adunit]["callback"] = args.callback || undefined;
            adslotmap[adunit]["element"] = element;

            console.log("dfploader:Triggering ad-"+adunit);
            var slot;
            var domid = "Ad_"+(parseInt(Math.random()*100000));
            element.empty().attr("id",domid);
            
            googletag.cmd.push(function () {
                googletag.debug_log.log = loadedCallback;
                googletag.pubads().collapseEmptyDivs(true);
                googletag.enableServices();
            });
            googletag.cmd.push(function () {
                slot = googletag.defineSlot(adunit, sizes, domid).addService(googletag.pubads());
                adslotmap[adunit]["slot"] = slot;
            });
            googletag.cmd.push(function () {
                googletag.display(domid);
            });
            
        };
})($);
    