package;

import cc.lets.GoSVG;
import js.Browser.*;
import model.constants.App;

/**
 * @author Matthijs Kamstra aka [mck]
 * MIT
 */
class MainGo {
	public function new() {
		document.addEventListener("DOMContentLoaded", function(event) {
			// console.info('Main - ${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');
			// console.info(GoSVG.version());
		});
	}

	static public function main() {
		var app = new MainGo();
	}
}
