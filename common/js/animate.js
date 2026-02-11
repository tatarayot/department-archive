$(document).ready(function() {
	$("a.zoom").fancybox({
		'type'     : 'image',
		'titlePosition'  : 'inside',
		'padding'  : 10 
	});
});


$(document).ready(function() {
	$("a.zoom2").fancybox({
		'width'   : 940 ,
		'height'   : '95%',
		'autoScale'   : false,
		'titleShow'   : false,
		'centerOnScroll'   : true,
		'type'     : 'iframe',
		'padding'  : 10
	});
});


$(document).ready(function() {
	$("a[rel=hogehoge]").fancybox({
		'padding'  : 10 ,
		'type'     : 'image',
		'titlePosition'     : 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">Photo ' +  (currentIndex + 1) + ' / ' + currentArray.length + '</span>';
		}
	});
});


$(function(){
	$("a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({
			scrollTop: HashOffset
		}, 500);
		return false;
	});
});


$(function(){
	var targetImgs = $('img');
	targetImgs.each(function(){
		if(this.src.match('_off')){
			this.rollOverImg = new Image();
			this.rollOverImg.src = this.getAttribute("src").replace("_off", "_on");
			$(this.rollOverImg).css({position: 'absolute', opacity: 0});
			$(this).before(this.rollOverImg);

			//ここいらないのなら削除してください
			$(this.rollOverImg).mousedown(function(){
				$(this).stop().animate({opacity: 0}, {duration: 0, queue: false});
			});

			$(this.rollOverImg).hover(function(){
				$(this).animate({opacity: 1}, {duration: 320, queue: false});
			},
			function(){
				 $(this).animate({opacity: 0}, {duration: 320, queue: false});
			});
		 }
	});
});


