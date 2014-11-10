// Mindwire Updates - Project 2038 - 13-JAN-2014
jQuery(function($){
		
	$.supersized({
	
		// Functionality
		slide_interval          :   30000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	1500,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Body Background Slideshow Images
		       					   	 		{image : '/site/skins/wettropics/images/body-bg-daintree-hinterland.jpg'},
		       					   	 		{image : '/site/skins/wettropics/images/body-bg-junction-creek.jpg'},
		       					   			{image : '/site/skins/wettropics/images/body-bg-licuala-palms.jpg'},
		       					 			{image : '/site/skins/wettropics/images/body-bg-mamu-canopy-walk.jpg'},
											{image : '/site/skins/wettropics/images/body-bg-mossmon-gorge.jpg'},
											{image : '/site/skins/wettropics/images/body-bg-the-boulders.jpg'},
											{image : '/site/skins/wettropics/images/body-bg-wetland-grasses.jpg'},
											{image : '/site/skins/wettropics/images/body-bg-wetlands.jpg'}
									]
		
	});
	$('.gallery-area .gallery').cycle({ /* Large promo images */
	    speed:    2000, 
	    timeout:  5000 
	});
	
	
	$('.promos-small_1').cycle({ /* Small promo images */
		speed:    2000, 
		timeout:  8000 
	});
	$('.promos-small_2').cycle({ /* Small promo images */
		speed:    2000, 
		timeout:  9000 
	});
	$('.promos-small_3').cycle({ /* Small promo images */
		speed:    2000, 
		timeout:  10000 
	});
	$('#newsbox').cycle({ /* Small promo images */
		//fx:		'scrollLeft',
		speed:    1500, 
		timeout:  2000,
                next:   '#newsbox_next', 
                prev:   '#newsbox_prev'
	});
	
	
	$(".small-gallery ul").simplecarousel({
        width:52,
        height:58,
        visible: 4,
        auto: 8000,
        next: $('.next'),
        prev: $('.prev')
    });
});

// Cycle Lite
;(function($){"use strict";var ver='Lite-1.6';$.fn.cycle=function(options){return this.each(function(){options=options||{};if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=0;this.cyclePause=0;var $cont=$(this);var $slides=options.slideExpr?$(options.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){if(window.console)console.log('terminating; too few slides: '+els.length);return}var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});var meta=$.isFunction($cont.data)?$cont.data(opts.metaAttr):null;if(meta)opts=$.extend(opts,meta);opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0});var cls=this.className;opts.width=parseInt((cls.match(/w:(\d+)/)||[])[1],10)||opts.width;opts.height=parseInt((cls.match(/h:(\d+)/)||[])[1],10)||opts.height;opts.timeout=parseInt((cls.match(/t:(\d+)/)||[])[1],10)||opts.timeout;if($cont.css('position')=='static')$cont.css('position','relative');if(opts.width)$cont.width(opts.width);if(opts.height&&opts.height!='auto')$cont.height(opts.height);var first=0;$slides.css({position:'absolute',top:0}).each(function(i){$(this).css('z-index',els.length-i)});$(els[first]).css('opacity',1).show();if($.browser.msie)els[first].style.removeAttribute('filter');if(opts.fit&&opts.width)$slides.width(opts.width);if(opts.fit&&opts.height&&opts.height!='auto')$slides.height(opts.height);if(opts.pause)$cont.hover(function(){this.cyclePause=1},function(){this.cyclePause=0});var txFn=$.fn.cycle.transitions[opts.fx];if(txFn)txFn($cont,$slides,opts);$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:$el.height();this.cycleW=(opts.fit&&opts.width)?opts.width:$el.width()});if(opts.cssFirst)$($slides[first]).css(opts.cssFirst);if(opts.timeout){if(opts.speed.constructor==String)opts.speed={slow:600,fast:200}[opts.speed]||400;if(!opts.sync)opts.speed=opts.speed/2;while((opts.timeout-opts.speed)<250)opts.timeout+=opts.speed}opts.speedIn=opts.speed;opts.speedOut=opts.speed;opts.slideCount=els.length;opts.currSlide=first;opts.nextSlide=1;var e0=$slides[first];if(opts.before.length)opts.before[0].apply(e0,[e0,e0,opts,true]);if(opts.after.length>1)opts.after[1].apply(e0,[e0,e0,opts,true]);if(opts.click&&!opts.next)opts.next=opts.click;if(opts.next)$(opts.next).unbind('click.cycle').bind('click.cycle',function(){return advance(els,opts,opts.rev?-1:1)});if(opts.prev)$(opts.prev).unbind('click.cycle').bind('click.cycle',function(){return advance(els,opts,opts.rev?1:-1)});if(opts.timeout)this.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev)},opts.timeout+(opts.delay||0))})};function go(els,opts,manual,fwd){if(opts.busy)return;var p=els[0].parentNode,curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleTimeout===0&&!manual)return;if(manual||!p.cyclePause){if(opts.before.length)$.each(opts.before,function(i,o){o.apply(next,[curr,next,opts,fwd])});var after=function(){if($.browser.msie)this.style.removeAttribute('filter');$.each(opts.after,function(i,o){o.apply(next,[curr,next,opts,fwd])});queueNext(opts)};if(opts.nextSlide!=opts.currSlide){opts.busy=1;$.fn.cycle.custom(curr,next,opts,after)}var roll=(opts.nextSlide+1)==els.length;opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1}else{queueNext(opts)}function queueNext(opts){if(opts.timeout)p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev)},opts.timeout)}}function advance(els,opts,val){var p=els[0].parentNode,timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0}opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){opts.nextSlide=els.length-1}else if(opts.nextSlide>=els.length){opts.nextSlide=0}go(els,opts,1,val>=0);return false}$.fn.cycle.custom=function(curr,next,opts,cb){var $l=$(curr),$n=$(next);$n.css(opts.cssBefore);var fn=function(){$n.animate(opts.animIn,opts.speedIn,opts.easeIn,cb)};$l.animate(opts.animOut,opts.speedOut,opts.easeOut,function(){$l.css(opts.cssAfter);if(!opts.sync)fn()});if(opts.sync)fn()};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(':eq(0)').hide();opts.cssBefore={opacity:0,display:'block'};opts.cssAfter={display:'none'};opts.animOut={opacity:0};opts.animIn={opacity:1}},fadeout:function($cont,$slides,opts){opts.before.push(function(curr,next,opts,fwd){$(curr).css('zIndex',opts.slideCount+(fwd===true?1:0));$(next).css('zIndex',opts.slideCount+(fwd===true?0:1))});$slides.not(':eq(0)').hide();opts.cssBefore={opacity:1,display:'block',zIndex:1};opts.cssAfter={display:'none',zIndex:0};opts.animOut={opacity:0};opts.animIn={opacity:1}}};$.fn.cycle.ver=function(){return ver};$.fn.cycle.defaults={animIn:{},animOut:{},fx:'fade',after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:'auto',metaAttr:'cycle',next:null,pause:false,prev:null,speed:1000,slideExpr:null,sync:true,timeout:4000}})(jQuery);




// Simple Carousel
/**
 * Simple Carousel
 * Copyright (c) 2010 Tobias Zeising, http://www.aditu.de
 * Licensed under the MIT license
 * 
 * http://code.google.com/p/simple-carousel/
 * Version 0.3
 */
(function($){
$.fn.simplecarousel = function( params ) {
    // set config
    var defaults = {
        width: 700,
        height: 500,
        next: false,
        prev: false,
        vertical: false,
        auto: false,
        fade: false,
        current: 0,
        items: 0,
        slidespeed: 600,
        visible: 1,
        pagination: false
    };
    var config = $.extend(defaults, params);
    
    // configure carousel ul and li
    var ul = $(this);
    var li = ul.children('li');
    
    config.items = li.length;
    
    var height = config.height;
    var width = config.width;
    if(config.visible>1) {
        if(config.vertical)
            height = height*config.visible;
        else
            width = width*config.visible;
    }
    
    ul.wrap('<div class="carousel-frame" style="width:'+width+'px;height:'+height+'px;overflow:hidden">');
    var container = ul.parent('.carousel-frame');
    if(!config.vertical) {
        ul.width(config.items*config.width);
        ul.height(config.height);
    } else {
        ul.width(config.width);
        ul.height(config.items*config.height);
    }
    ul.css('overflow','hidden');
    
    li.each(function(i,item) {
        $(item).width(config.width);
        $(item).height(config.height);
        if(!config.vertical)
            $(item).css('float','left');
    });
    
    // function for sliding the carousel
    var slide = function(dir, click) {
        if(typeof click == "undefined" & config.auto==false)
            return;
    
        if(dir=="next") {
            config.current += config.visible;
            if(config.current>=config.items)
                config.current = 0;
        } else if(dir=="prev") {
            config.current -= config.visible;
            if(config.current<0)
                config.current = (config.visible==1) ? config.items-1 : config.items-config.visible+(config.visible-(config.items%config.visible));
        } else {
            config.current = dir;
        }
        
        // set pagination
        if(config.pagination != false) {
            container.next('.carousel-pagination').find('li').removeClass('carousel-pagination-active')
            container.next('.carousel-pagination').find('li:nth-child('+(config.current+1)+')').addClass('carousel-pagination-active');
        }
        
        // fade
        if(config.fade!=false) {
            ul.fadeOut(config.fade, function() {
                ul.css({marginLeft: -1.0*config.current*config.width});
                ul.fadeIn(config.fade);
            });
            
        // slide
        } else {
            if(!config.vertical)
                ul.animate( {marginLeft: -1.0*config.current*config.width}, config.slidespeed );
            else
                ul.animate( {marginTop: -1.0*config.current*config.height}, config.slidespeed );
        }
        
        if(typeof click != "undefined")
            config.auto = false;
        
        if(config.auto!=false)
            setTimeout(function() {
                slide('next');
            }, config.auto);
    }
    
    // include pagination
    if(config.pagination != false) {
        container.after('<ul class="carousel-pagination"></ul>');
        var pagination = container.next('.carousel-pagination');
        for(var i=0;i<config.items;i++) {
            if(i==0)
                pagination.append('<li class="carousel-pagination-active"></li>');
            else
                pagination.append('<li></li>');
        }
        
        pagination.find('li').each(function(index, item) {
            $(this).click(function() {
                slide(index,true);
            });
        });
    }
        
    // set event handler for next and prev
    if(config.next!=false)
        config.next.click(function() {
            slide('next',true);
            return false;
        });
        
        
    if(config.prev!=false)
        config.prev.click(function() {
            slide('prev',true);
            return false;
        });
    
    // start auto sliding
    if(config.auto!=false)
        setTimeout(function() {
            slide('next');
        }, config.auto);
}
})(jQuery);

/* To be done later
$(document).ready(function() {	 	 
   $(".logo").mouseover(function() {
	   $(this).children('.drop').show(400);
   });
   $(".logo").mouseout(function() {
	   $(this).children('.drop').hide(400);
   });
});
*/
$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		opacity: 0.80, /* Value between 0 and 1 */
		show_title: true, /* true/false */
		allow_resize: false, /* Resize the photos bigger than viewport. true/false */
		default_width: 500,
		default_height: 344,

		theme: 'facebook', /* pp_default / light_rounded / dark_rounded / light_square / dark_square / facebook */
		custom_markup: '',
		social_tools: false
	});
    $(".clickable").click(function() {
    	$("#news_reveal").slideToggle();
    	$("#click-to-expand-a").fadeToggle();
    });
    
    hostname = new RegExp(location.host);
    //$(".subpage-content a, .twocolumns.corp a").each(function(){
    $(".subpage-content a, .twocolumns.corp a").not(".subpage-content a.gs-title, .twocolumns.corp a.gs-title").each(function(){

        // Store current link's url
        var url = $(this).attr("href");
        
        if (!(typeof url === 'undefined')) { //Make sure url is defined.
	        // Test if current host (domain) is in it
	        if(hostname.test(url)){
	           
	        }
	        else if (url.toLowerCase().indexOf(".pdf") >= 0 || url.toLowerCase().indexOf(".doc") >= 0 || url.toLowerCase().indexOf(".docx") >= 0){
	            // It's an anchor link
	        	$(this).attr("target","_blank"); 
	        }
	        else if(url.slice(0, 1) == "#" || url.slice(0, 1) == "?" || url.slice(0, 10) == "javascript"){
	            // It's an anchor link or a get param for  the current page (eg Pagination link)
	            //$(this).addClass('anchor'); 
	        }
	        else if(url.slice(0, 1) == "/"){
	            // It's an anchor link
	            //$(this).addClass('anchor'); 
	        }
	        else {
	           // a link that does not contain the current host
	           $(this).attr("target","_blank");                        
	        }
        }
    });
    $(".subpage-content img, .twocolumns.corp img").each(function(){
    	var theimage = $(this);
    	var thesrc = $(this).attr('data-orig-filename');
    	if (typeof thesrc === 'undefined') thesrc = $(this).attr('src');
    	var isfirefox;
    	if (theimage.attr('title') == undefined) { 
	    	($(":checkbox[myattr]").length)
	    	if ($.browser.mozilla) isfirefox = 'y'; else isfirefox = 'n';
	    	$.ajax({
	    		url: "/core/modules/content/set_image_titles_alts.php",
	    		cache: false,
	    		data: { filename: thesrc, firefox: isfirefox }
	    	}).done(function(html) {
	    		theimage.attr('title', html);
	    		theimage.attr('alt', html);
	    	});
    	}
    });
    
    var max_height = Math.max($(".column.blue .list").height(), $(".column.red .list").height(), $(".column.orange .list").height()) + 10;
    $(".column.red .list").height(max_height);
    $(".column.blue .list").height(max_height);
    $(".column.orange .list").height(max_height);
    
    $('.column .text-holder .menu li a').click(function() {
    	$(this).next("ul").slideToggle();
    });
    $('.column .text-holder .menucorp li a').click(function() {
    	$(this).next("ul").slideToggle();
    }); 
    $('.column .text-holder .menu li a.openit').next("ul").show();
    $('.column .text-holder .menucorp li a.openit').next("ul").show();
    
    
    //Prevent right clicking on images
    $('img').bind('contextmenu', function(e){ 
        return false;
    }); 
    
});