'use strict';

module.exports = class LazyLoad {
	constructor(options = {
		addClass: "loaded",
		data: "img-src"
	}) {
		this.options = options;
	},
	listenForLoad() {
		window.addEventListener("scroll", () => {
			let els = document.querySelectorAll(`[data-${this.options.data}]:not("${this.options.addClass}")`);
			els.forEach(el => {
				consolelog(el);
			});
		});
	}
}