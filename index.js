'use strict';

module.exports = class LazyLoad {

	constructor(options = {
		addClass: "loaded",
	}) {
		this.options = options;
		this.listenForLoad();
	}

	listenForLoad() {
		this.loadAndAddClass();

		window.addEventListener("scroll", () => {
			this.loadAndAddClass();
		});
	}

	loadAndAddClass() { 
		// var t0 = performance.now();

		var els = document.querySelectorAll("[data-img-src]");
		var loadedClass = this.options.addClass;

		els.forEach(el => {

			if (!el.classList.contains(loadedClass) && el.offsetTop - window.innerHeight <= window.pageYOffset) {

				el.src = el.dataset.imgSrc;

				el.onload = function() {
					this.classList.add(loadedClass);
					this.removeAttribute("data-img-src");
				}

			}

		});

		// console.log(performance.now() - t0);

	}

}
