jQuery(document).ready(function () {
	var headerwrap = jQuery(".header-wrap");
	jQuery(window).on("load scroll ready", function () {
		if (jQuery(this).scrollTop() > 0) {
			headerwrap.addClass("sticky");
		} else {
			headerwrap.removeClass("sticky");
		}
	});

	jQuery(".menu").on("click", function () {
		jQuery(".header-wrap .links").toggleClass("open");
		jQuery("body").toggleClass("pause");
		jQuery(this).toggleClass("open");
		jQuery(".megamenu").removeClass("open");
		jQuery(".dropdown").removeClass("open");
	});

	var headerheight = headerwrap.height();
	console.log(headerheight);
	jQuery("a[href*=\\#]:not([href=\\#])").on("click", function () {
		var target = jQuery(this.hash);
		target = target.length
			? target
			: jQuery("[name=" + this.hash.substr(1) + "]");
		if (target.length) {
			jQuery("html,body").animate(
				{
					scrollTop: target.offset().top - (headerheight + 20),
				},
				1500
			);
			return false;
		}
	});


	var headerheight = headerwrap.height();
	// Scroll Offset
	jQuery(".offset-top").on("click", function (e) {
		e.preventDefault();
		var target = jQuery(this).attr("href");
		jQuery("html, body")
			.stop()
			.animate(
				{
					scrollTop: jQuery(target).offset().top - 75,
				},
				2000,
				"swing",
				function () { }
			);
	});

	// SVG Create
	jQuery(function () {
		jQuery("img.svg").each(function () {
			var $img = jQuery(this);
			var imgID = $img.attr("id");
			var imgClass = $img.attr("class");
			var imgURL = $img.attr("src");
			jQuery.get(
				imgURL,
				function (data) {
					var $svg = jQuery(data).find("svg");
					if (typeof imgID !== "undefined") {
						$svg = $svg.attr("id", imgID);
					}
					if (typeof imgClass !== "undefined") {
						$svg = $svg.attr("class", imgClass + " replaced-svg");
					}
					$svg = $svg.removeAttr("xmlns:a");
					if (
						!$svg.attr("viewBox") &&
						$svg.attr("height") &&
						$svg.attr("width")
					) {
						$svg.attr(
							"viewBox",
							"0 0 " +
							$svg.attr("height") +
							" " +
							$svg.attr("width")
						);
					}
					$img.replaceWith($svg);
				},
				"xml"
			);
		});
	});

	//Submenu
	jQuery(
		"<span class='nav-link-toggle'><svg width='12' height='7' viewBox='0 0 12 7' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M0.329154 0.32976C0.43363 0.225217 0.557681 0.142286 0.694219 0.0857045C0.830758 0.0291228 0.977107 0 1.1249 0C1.2727 0 1.41905 0.0291228 1.55559 0.0857045C1.69213 0.142286 1.81618 0.225217 1.92066 0.32976L5.36016 3.76851C5.43048 3.83881 5.52584 3.8783 5.62528 3.8783C5.72472 3.8783 5.82008 3.83881 5.8904 3.76851L9.32915 0.32976C9.5401 0.118714 9.82625 0.000109663 10.1246 3.93391e-05C10.423 -3.09849e-05 10.7092 0.118438 10.9203 0.329385C11.1313 0.540331 11.2499 0.826476 11.25 1.12487C11.2501 1.42326 11.1316 1.70946 10.9207 1.92051L7.48116 5.36001C7.2374 5.60379 6.94801 5.79717 6.62951 5.92911C6.31101 6.06104 5.96965 6.12895 5.6249 6.12895C5.28016 6.12895 4.9388 6.06104 4.6203 5.92911C4.3018 5.79717 4.01241 5.60379 3.76865 5.36001L0.329154 1.92051C0.118249 1.70954 -0.000229597 1.42344 -0.000229597 1.12513C-0.000229597 0.826825 0.118249 0.540728 0.329154 0.32976Z' fill='currentColor'/></svg></span>"
	).insertAfter(jQuery(".dropdown a")),
		jQuery(".dropdown a, .nav-link-toggle").on("click", function () {
			jQuery(".dropdown").toggleClass("open");
			jQuery(this).toggleClass("open");
			jQuery(".megamenu").toggleClass("open");
			// jQuery(this).parents("li").find(".dropdown").slideToggle();
			// jQuery(this)
			// 	.parents("li")
			// 	.siblings("li")
			// 	.find(".dropdown")
			// 	.slideUp();
			// jQuery(this)
			// 	.parents("li")
			// 	.siblings("li")
			// 	.find(".nav-link-toggle")
			// 	.removeClass("open");
		});

	//Sliders
	const partners_slider = new Swiper(".partners-slider", {
		speed: 9000,
		spaceBetween: 32,
		slidesPerView: "auto",
		loop: true,
		simulateTouch: false,
		autoplay: {
			delay: 0.1,
			disableOnInteraction: false,
		},
	});

	const partners_slider_rev = new Swiper(".slider-rev", {
		speed: 9000,
		spaceBetween: 20,
		slidesPerView: "auto",
		loop: true,
		simulateTouch: false,
		autoplay: {
			delay: 0.1,
			disableOnInteraction: false,
		},
	});

	const testimonial_slider = new Swiper(".testimonial-slider", {
		speed: 9000,
		spaceBetween: 30,
		slidesPerView: "auto",
		loop: true,
		simulateTouch: false,
		autoplay: {
			delay: 0.1,
			disableOnInteraction: false,
		},
	});

	const team_slider = new Swiper(".team-slider", {
		speed: 1000,
		spaceBetween: 30,
		slidesPerView: 4,
		loop: true,
		simulateTouch: true,
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},

		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			769: {
				slidesPerView: 3,
			},
			426: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			}
		},
	});


	//Check if an element was in a screen
});

var scrollToTopBtn = document.querySelector(".scroll-to-top");
var rootElement = document.documentElement;

function handleScroll() {
	// Do something on scroll
	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
	if (rootElement.scrollTop / scrollTotal > 0.1) {
		// Show button
		scrollToTopBtn.classList.add("showBtn");
	} else {
		// Hide button
		scrollToTopBtn.classList.remove("showBtn");
	}
}

function scrollToTop() {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


//aos animation
AOS.init({ once: true });

//smooth scrolling
const lenis = new Lenis()
function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

jQuery(document).ready(function ($) {
	//Check if an element was in a screen
	function isScrolledIntoView(elem) {
		var docViewTop = jQuery(window).scrollTop();
		var docViewBottom = docViewTop + jQuery(window).height();
		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();
		return ((elemBottom <= docViewBottom));
	}
	//Count up code
	function countUp() {
		jQuery('.counter').each(function () {
			var ct = jQuery(this), // <- Don't touch this variable. It's pure magic.
				countTo = ct.attr('data-count');
			ended = ct.attr('ended');

			if (ended != "true" && isScrolledIntoView(ct)) {
				jQuery({ countNum: ct.text() }).animate({
					countNum: countTo
				},
					{
						duration: 10000, //duration of counting
						easing: 'swing',
						step: function () {
							ct.text(Math.floor(this.countNum));
						},
						complete: function () {
							ct.text(this.countNum);
						}
					});
				ct.attr('ended', 'true');
			}
		});
	}
	//Start animation on page-load
	if (isScrolledIntoView(".counter")) {
		countUp();
	}
	//Start animation on screen
	jQuery(document).scroll(function () {
		if (isScrolledIntoView(".counter")) {
			countUp();
		}
	});
});

