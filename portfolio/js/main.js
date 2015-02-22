window.onload = function(){
    $.when(loadPortfolio()).done(function(){
        $(".container,.message.top,.message.bottom").show();
        $(".message.middle").hide();
        $(".container").width(Object.keys(json).length*430);
        $.each(json,function(k,v){
            $(".container").append("<a href='"+window.location.href.replace("index.html","")+"project.html?k="+k+"' class='item'><div class='title'>"+v["title"]+"</div><div class='desc'>"+v["writeup"]+"</div></a>");
        });
    });
};

var loadPortfolio = function(){
        var def = $.Deferred(), isResolved = false;
        var images = [];
        $.each(json,function(k,v){
            if(v.images){
                $.merge(images,v.images);
            }
        });
        var ctLoaded = 0;
        var loaded = function(){

            ctLoaded++;
            console.log("loaded - "+ ctLoaded);
            $(".message .percent").html(parseInt((ctLoaded/images.length)*100));
            if(images.length == ctLoaded && !isResolved){
                def.resolve();
            }
        };

        $.each(images,function(i,v){
            $("<img/>")
            .load(function () {
                loaded();
            })
            .error(function () {
                loaded();
            })
            .attr("src", v);
        });
        setTimeout(function(){
            if(!isResolved){
                def.resolve();
            }
        },15000);
        return def.promise();
    };