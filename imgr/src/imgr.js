/*! imgr.js - v1.0.0 - 2014-01-26
 * https://github.com/agaase/
 * Copyright (c) 2014 agaase; Licensed MIT */
(function($) {

    /**
     * The event to be handled which will trigger the check if the element is on screen.
     */
    var evToBind = "touchmove.imgr mousewheel.imgr";
    /**
     * The class to denote that an element has to be included in the imgr process.
     * @type {String}
     */
    var imgrClass = "imgr";
    /**
     * The class to denote that image is loaded for the element.
     * @type {String}
     */
    var imgrrdClass = "imgrrd";
    /**
     * The class which denotes that process of checking is currently running for that element.
     * @type {String}
     */
    var imgrrClass = "imgrr";

    /**
     * error message to be printed on console.
     * @type {String}
     */
    var errorMessage = "imgr:error loading image";
    var elements = [];
    var scrollEl, evBinded = false,
        checkingForLoad = false;

    var context;

    /**
     * All the options parameters to be passed to the plugin.
     */
    var params = {};


    /**
     * Binds a touch/scroll event and keeps checking for all the images whether they are loaded or not.
     * @method checkAndLoad
     */
    var checkAndLoad = function() {
        var checking = false,
            timer = 0;
        $(window).bind(evToBind, function(ev) {
            if (timer) {
                clearTimeout(timer);
            }
            if (elements.length) {
                timer = setTimeout(function() {

                    var cnt = 0;
                    var inId = setInterval(function() {
                        if (cnt < 6) {
                            loadIfOnScreen();
                            cnt++;
                        } else {
                            clearInterval(inId);
                        }
                    }, 300);

                }, 100);
            } else {
                if (!elements.length) {
                    setTimeout(function() {
                        if (!$("." + imgrClass + ":not(." + imgrrdClass + "),." + imgrrClass + ":not(." + imgrrdClass + ")", context).length) {
                            $(window).unbind(evToBind);
                            evBinded = false;
                        }
                    }, 5000);
                }
            }
        });
    };
    /**
     * Checks if an element is on screen and loads it.
     * @method loadIfOnScreen
     */
    var loadIfOnScreen = function() {

        if (checkingForLoad) {
            return;
        }
        checkingForLoad = true;
        for (var i = 0; i < elements.length; i++) {
            var ele = $(elements[i]);
            if (params.atOnce || isOnScreen(ele)) {
                loadImg(ele);
                elements.splice(i, 1);
                i--;
            }
        }
        checkingForLoad = false;
    };

    /**
     * Checks whether the element is on screen or not.
     * @method isOnScreen
     * @param  {[type]}   elem [description]
     * @return {Boolean}
     */
    var isOnScreen = function(elem) {
        var viewport = {
            top: scrollEl.scrollTop(),
            left: scrollEl.scrollLeft()
        };
        viewport.right = viewport.left + scrollEl.width();
        viewport.bottom = viewport.top + scrollEl.height();
        var bounds = elem.offset();
        bounds.right = bounds.left + elem.outerWidth();
        bounds.bottom = bounds.top + elem.outerHeight();
        if (!(viewport.right < (bounds.left - params.margin) || viewport.left > (bounds.right + params.margin) || viewport.bottom < (bounds.top - params.margin) || viewport.top > (bounds.bottom + params.margin))) {
            return true;
        }
    };

    /**
     * When the image is loaded this sets the src attr and shows the image.
     * @method displayImg
     * @param  {[type]} type [description]
     * @param  {[type]} ele  [description]
     * @param  {[type]} src  [description]
     * @return {[type]}
     */
    var displayImg = function(type, ele, src) {

        if (ele.hasClass(imgrrdClass)) {
            return;
        }

        if (type === "div") {
            ele.css('background-image', 'url(' + src + ')');
        } else {
            ele.attr("src", src);
        }
        ele.removeClass(imgrrClass);
        ele.addClass(imgrrdClass);
        if (params.fadeIn) {
            ele.animate({
                opacity: 1
            }, 2000);
        } else {
            ele.css("opacity", 1);
        }
        setTimeout(function() {
            ele.css("background-color", "inherit");
        }, 300);
    };

    /**
     * This triggers the image load when the image is on screen.
     * @method loadImg
     * @param  {[type]}    ele [description]
     * @return {[type]}
     */
    var loadImg = function(ele) {
        var src = "" + ele.attr("data-src");
        if (src && src.length > 0) {
            var type = ele.attr("tagName");
            if (type === undefined) {
                type = ele.prop("tagName");
            }
            type = type.toLowerCase();
            $("<img/>")
                .load(function() {
                    displayImg(type, ele, src);
                })
                .ready(function() {
                    displayImg(type, ele, src);
                })
                .error(function() {
                    console.log(errorMessage);
                })
                .attr("src", src);
        }
    };

    var setParams = function(options) {
        options = options || {};
        params.atOnce = options.atOnce || false;
        params.margin = typeof(options.margin) !== "undefined" ? options.margin : 50;
        params.fadeIn = typeof(options.fadeIn) !== "undefined" ? options.fadeIn : true;
    };

    var setUpDom = function() {
        var newElements = $("." + imgrClass, context);
        var time = new Date().getTime();
        newElements.each(function(index) {
            var ele = $(this);
            ele.attr("id", "imgr_" + index + "_" + time)
                .addClass(imgrrClass)
                .css({
                    "opacity": "0.05",
                    "background-color": "grey",
                    "min-height": (ele.height() || 150) + "px",
                    "min-width": (ele.width() || 150) + "px",
                });

            if (!ele.width()) {
                ele.css("min-width", "100px");
            }
        });
        if (!elements.length) {
            elements = newElements;
        } else {
            elements = $.merge(elements, newElements);
        }
    };
    $.fn.imgr = function(options) {
        context = $(this).length ? $(this) : $("body");
        scrollEl = $(window);
        setParams(options);
        setUpDom();
        if (!evBinded && !params.atOnce) {
            checkAndLoad();
            evBinded = true;
        }
        loadIfOnScreen();
    };
})($);