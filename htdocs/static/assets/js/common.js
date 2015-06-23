$(function() {

	/**
	 * ページ内スクロール
	 * #の付いたリンクを自動的にスクロール化する
	 */
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").not(':animated').animate({scrollTop:position}, speed, "swing");
		return false;
	});

});
$(function(){
    $('a img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function(){
        if (!$(this).hasClass('currentPage')) {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
    });
});