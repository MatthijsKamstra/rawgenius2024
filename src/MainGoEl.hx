package;

import cc.lets.GoEl;
import haxe.Http;
import haxe.Log;
import js.Browser.*;
import js.Syntax;
import js.html.DivElement;
import js.html.Image;
import js.html.svg.Element;
import js.html.svg.Rect;
import js.html.svg.SVGElement;
import model.constants.App;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class MainGoEl {
	var w:Int;
	var h:Int;
	var elementMap:Map<String, Dynamic> = new Map();

	var containerID = 'container-hero-html';
	var idArr = ['astronaut', 'rocket', 'saturnring', 'planet'];

	// var containerArr = ['container-hero-html', 'container-hero-svg', 'container-hero-svg2'];

	public function new() {
		document.addEventListener("DOMContentLoaded", function(event) {
			console.info('MainGo - ${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');
			console.info(GoEl.version());

			setupListeners();
			setContainer();
			collectDefault();

			initRocket();
		});
	}

	function setupListeners() {
		window.onresize = function() {
			// Your code to handle the resize event goes here
			console.log("Window resized!");
			setContainer();
		};
	}

	function setContainer() {
		var _container:DivElement = cast document.getElementById(containerID);
		this.w = _container.clientWidth;
		this.h = _container.clientHeight;
		console.log(_container.clientWidth);
		console.log(_container.clientHeight);
	}

	// ____________________________________ rocket ____________________________________

	function initRocket() {
		var el:DivElement = cast document.getElementById('rocket');
		var obj:FooObj = this.elementMap.get('rocket');
		GoEl.to(el, 10).x(100).y(100).onComplete(onRocketComplete);
		// Go.orbit(_el, obj.)
	}

	function onRocketComplete() {
		console.log('onRocketComplete');
	}

	// ____________________________________ collect start data ____________________________________

	function collectDefault() {
		for (i in 0...idArr.length) {
			var _idArr = idArr[i];
			var _el:DivElement = cast document.getElementById(_idArr);
			this.collectDefaultState(_el);
		}
		trace(elementMap);
	}

	function collectDefaultState(el:DivElement, id:String = '') {
		var _id = el.id;
		if (id != '')
			_id = id;
		var clazz = el.classList;
		var w = el.clientWidth;
		var h = el.clientHeight;

		// Get the computed style of the element
		var computedStyle = window.getComputedStyle(el);
		var ct = computedStyle.top;
		var cl = computedStyle.left;
		var cw = computedStyle.width;
		var ch = computedStyle.height;

		var obj:FooObj = {
			id: _id,
			classList: '${clazz}',
			w: w,
			h: h,
			ct: ct,
			cl: cl,
			cw: cw,
			ch: ch
		}

		this.elementMap.set(_id, obj);
	}

	// ____________________________________ main ____________________________________

	static public function main() {
		var app = new MainGoEl();
	}
}

typedef FooObj = {
	@:optional var _id:String;
	var id:String;
	var classList:String;
	var w:Int; // calculated w
	var h:Int; // calculated h
	var ct:String;
	var cl:String;
	var cw:String;
	var ch:String;
}
