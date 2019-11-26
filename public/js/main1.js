$(function(){
	var scroll = $(document).scrollTop()
	var scrollHeight = $('.backtotop').outerHeight();

	$(window).scroll(function(){
		var scrolled = $(document).scrollTop()

		if(scrolled>scrollHeight){
			$('.backtotop').addClass('animate');

		}else{
			$('.backtotop').removeClass('animate');
		}
		if(scrolled>scroll){
			$('.backtotop').removeClass('sticky');
		}else{
			$('.backtotop').addClass('sticky');
		}
		scroll = $(document).scrollTop();
	})
});


(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
				// var zero = 0;
				// $(document).ready(function(){
				// 	$(window).on('scroll',function(){
				// 		$('.js-cd-top').toggleClass('hide',$(window).scrollTop()>zero);
				// 		zero = $(window).scrollTop();
				// 	})
				// })
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();