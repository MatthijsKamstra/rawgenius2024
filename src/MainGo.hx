package;

import cc.lets.GoSVG;
import cc.lets.GoSVG;
import js.Browser.*;
import js.Syntax;
import js.html.svg.Element;
import js.html.svg.Rect;
import js.html.svg.SVGElement;
import model.constants.App;

/**
 * @author Matthijs Kamstra aka [mck]
 * MIT
 */
class MainGo {
	public function new() {
		document.addEventListener("DOMContentLoaded", function(event) {
			console.info('MainGo - ${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');

			console.info(GoSVG.version());

			// init0();

			// init1();
			// initRotationTest();
			// initMove();
		});
	}

	function initMove() {
		var randomY = (Math.random() * 200) - 10;
		var _obj = GoSVG.svg(cast document.getElementById('rect-2'));
		GoSVG.to(_obj.el, 5).x(randomY) //
			// .delay(1)
			.onComplete(function() {
				trace('onComplete Rect');
				initMove();
			});
	}

	function initRotationTest() {
		console.info('onComplete');
		// var svgObject = GoSVG.svg(cast document.getElementById('simple-example'));
		var randomOpacity = Math.random();
		var randomRotation = Math.random() * 360;

		// var _obj = GoSVG.svg(cast document.getElementById('rect-2'));
		// trace(_obj);
		// GoSVG.to(_obj.el, 5)
		// 	.rotation(100, _obj.centerX, _obj.centerY)
		// 	.delay(1)
		// 	.onComplete(function() {
		// 		trace('onComplete');
		// 	});

		// .onComplete(initRotationTest)
		// .onUpdate(function() {
		// 	trace('onUpdate');// .pos(svgObject.width * Math.random(), svgObject.height * Math.random())
		// .opacity(randomOpacity)
		// .scale(Math.random() * 10)// .yoyo()
		// .onUpdate(init2OnUpdateHandler)
		// });

		// var _obj = GoSVG.svg(cast document.getElementById('ellipse-2'));
		// GoSVG.to(_obj.el, 5)
		// 	.rotation(100, _obj.centerX, _obj.centerY)
		// 	.delay(2)
		// 	.onComplete(function() {
		// 		trace('onComplete');
		// 	});

		// var _obj = GoSVG.svg(cast document.getElementById('circle-2'));
		// GoSVG.to(_obj.el, 5)
		// 	.rotation(100, _obj.centerX, _obj.centerY)
		// 	.delay(3)
		// 	.onComplete(function() {
		// 		trace('onComplete');
		// 	});

		var _obj = GoSVG.svg(cast document.getElementById('line-2'));
		GoSVG.to(_obj.el, 5)
			.rotation(100, _obj.centerX, _obj.centerY)
			.delay(4)
			.onComplete(function() {
				trace('onComplete');
			});

		var _obj = GoSVG.svg(cast document.getElementById('text-3'));
		// trace(_obj);
		GoSVG.to(_obj.el, 5).rotation(180, _obj.centerX, _obj.centerY).onComplete(function() {
			trace('onComplete');
		});

		var _obj = GoSVG.svg(cast document.getElementById('polygon-2'));
		GoSVG.to(_obj.el, 5).rotation(180, _obj.centerX, _obj.centerY).onComplete(function() {
			trace('onComplete');
		});

		var _obj = GoSVG.svg(cast document.getElementById('polyline-2'));
		GoSVG.to(_obj.el, 5).rotation(180, _obj.centerX, _obj.centerY).onComplete(function() {
			trace('onComplete');
		});

		var _obj = GoSVG.svg(cast document.getElementById('path-2'));
		GoSVG.to(_obj.el, 5).rotation(180, _obj.centerX, _obj.centerY).onComplete(function() {
			trace('onComplete');
		});
	}

	function init2OnUpdateHandler(?time) {
		var text = document.getElementById('text-2');
		text.innerHTML = 'time: ${time}';
	}

	function init1() {
		var svgs = document.getElementsByTagName('svg');
		trace(svgs.length);

		var svg:SVGElement = cast document.getElementsByTagName('svg')[0];
		var children = (svg.children);
		for (i in children) {
			var child = i;
			// console.log(i.tagName);
		}

		var svgViewBox = svg.getAttribute('viewBox');
		trace('${svgViewBox}');

		var svgRect:Rect = (svg.viewBox.baseVal);
		trace(svgRect);

		// var svgViewBoxArray = svgViewBox.split(' ');
		// var svgX = svgViewBoxArray[0];
		// var svgY = svgViewBoxArray[1];
		// var svgWidth:Float = Std.parseFloat(svgViewBoxArray[2]);
		// var svgHeight:Float = Std.parseFloat(svgViewBoxArray[3]);

		// untyped again <line>
		Syntax.code('GoSVG.to({0}, {1}).x({2}).y({3})', document.getElementById('line-1'), 5, 500, 100);

		// get <polyline>
		var _svgPolyLine:Element = cast document.getElementById('polyline-1');
		// trace(_svgPolyLine);
		_svgPolyLine.setAttribute('transform', 'translate(333)');

		// use externs <polygon>
		// cc.lets.extern.GoSVG.to(cast document.getElementById('polygon-1'), 2).x(200).y(300);
		cc.lets.extern.GoSVG.to(cast document.getElementById('polygon-1'), 5).pos(300, 300);

		cc.lets.extern.GoSVG.to(cast document.getElementById('group-plus'), 5).pos(Math.random() * svgRect.width, Math.random() * svgRect.height);
		// cc.lets.extern.GoSVG.to(cast document.getElementById('group-plus'), 5).pos(400, 10);
	}

	function init0() {
		// search for element in svg
		var svgCircle:Element = cast document.getElementById('circle-1');
		// console.log('${svgCircle}');
		// set dat by hand
		svgCircle.setAttributeNS(null, 'cx', '111');
		svgCircle.setAttribute('cy', '111');

		// use untyped code <circle>
		Syntax.code('GoSVG.to({0}, {1}).x({2}).y({3})', svgCircle, 5, 500, 100);

		// get rect <rect>
		var svgRect:Element = cast document.getElementById('rect-1');
		// console.log('${svgRect}');
		// Syntax.code('GoSVG.test({0}, {1})', svgCircle, 2.4);
		Syntax.code('GoSVG.to({0}, {1}).x({2}).y({3})', svgRect, 10, 500, 555);

		// var _svgRect:js.html.svg.RectElement = cast document.getElementById('rect-1');
		// _svgRect.setAttributeNS(null, 'x', '100');
		// _svgRect.setAttribute('y', '100');

		// console.log('${_svgRect.x}');
		// trace(Reflect.field(_svgRect, 'y'));
	}

	static public function main() {
		var app = new MainGo();
	}
}
