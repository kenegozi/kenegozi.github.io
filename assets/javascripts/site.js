$(function() {
	var header = $(".navbar-top");
	var backToTopButton = $('.back-to-top');
	var sections = $("section").map(function(i, s) { return {sectionId:s.id, top:$(s).position().top}; });
	var menuItems = $('#main-nav li');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			header.removeClass('navbar-top').addClass("navbar-top-dark");
			backToTopButton.css('opacity', 0.4);
		} else {
			header.removeClass("navbar-top-dark").addClass('navbar-top');
			backToTopButton.css('opacity', 0);
		}
		if (location.pathname === '/') {
			var lastOne = sections[0];
			for (var i=0, len=sections.length; i<len; ++i) {
				var delta = scroll - sections[i].top;
				if (delta < -180) {
					break;
				}

				lastOne = sections[i];
			}

			if (lastOne) {
				menuItems.removeClass('active');
				var targetMenuItem = menuItems.find('a[href="/#'+lastOne.sectionId+'"]').parents('li');
				if (targetMenuItem.length === 0) {
					targetMenuItem = $(menuItems[0]);
				}
				targetMenuItem.addClass('active');
			}
		}	  
	});
	$.localScroll({hash:true});    
});