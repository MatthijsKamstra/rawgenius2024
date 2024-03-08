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
 * MIT
 */
class MainGoEl {
	var w:Int;
	var h:Int;
	var elementMap:Map<String, Dynamic> = new Map();

	var 	 = ['astronaut', 'rocket', 'saturnring', 'planet'];
	var containerArr = ['container-hero-html', 'container-hero-svg', 'container-hero-svg2'];

	public function new() {
		document.addEventListener("DOMContentLoaded", function(event) {
			console.info('MainGo - ${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');
			console.info(GoEl.version());

			convertSrcToSVG();

			setupListeners();
			setContainer();
			collectDefault();

			initRocket();
		});
	}

	function convertSrcToSVG() {
		// Get the container element
		var container:DivElement = cast document.getElementById("container-hero-svg2");
		// Get the image element inside the container
		var image:Image = cast container.querySelector("img");
		// Get the src attribute of the image
		// var src = image.getAttribute("src");
		// Define the URL of the SVG file
		// var url = "images/svg/fake.svg";
		var url = image.src;
		// Create a new Http instance
		var http = new Http(url);
		// Define a callback function to handle the response
		http.onData = function(data:String) {
			// use the svg into the element
			container.innerHTML = data;

			getDataSBG();
		};
		// Define a callback function to handle errors
		http.onError = function(error:String) {
			// Log an error message if the request failed
			trace("Failed to load SVG: " + error);
		};
		// Send the request
		http.request();
	}

	function getDataSBG() {
		var container:DivElement = cast document.getElementById("container-hero-svg2");
		var astronaut = container.querySelector("#astronaut");

		console.log(astronaut);
	}

	function initRocket() {
		var el:DivElement = cast document.getElementById('rocket');
		var obj:FooObj = this.elementMap.get('rocket');
		GoEl.to(el, 10).x(100).y(100).onComplete(foobar);
		// Go.orbit(_el, obj.)
	}

	function foobar() {
		console.log('x');
	}

	function collectDefault() {
		for (i in 0...	.length) {
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

	function setupListeners() {
		window.onresize = function() {
			// Your code to handle the resize event goes here
			console.log("Window resized!");
			setContainer();
		};
	}

	function setContainer() {
		var _container:DivElement = cast document.getElementById('container-hero-html');
		this.w = _container.clientWidth;
		this.h = _container.clientHeight;
		console.log(_container.clientWidth);
		console.log(_container.clientHeight);
	}

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
