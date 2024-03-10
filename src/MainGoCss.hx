package;

import cc.lets.Easing;
import cc.lets.GoCss;
import cc.lets.easing.Quad.QuadEaseInOut;
import cc.lets.easing.Quad;
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
class MainGoCss {
	var w:Int;
	var h:Int;
	var elementMap:Map<String, Dynamic> = new Map();

	var containerID = 'container-hero-svg2';
	var idArr = ['astronaut', 'rocket', 'saturnring', 'planet'];

	// var containerArr = ['container-hero-html', 'container-hero-svg', 'container-hero-svg2'];

	public function new() {
		document.addEventListener("DOMContentLoaded", function(event) {
			console.info('MainGoCss - ${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');

			var _go = new GoCss({}, 0);
			console.log('toString(): ' + _go.toString());
			console.log('getVersion(): ' + _go.getVersion());

			setupListeners();

			setContainer();
			init();
			convertSrcToSVG();
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

	function init() {}

	function convertSrcToSVG() {
		// Get the container element
		var container:DivElement = cast document.getElementById(containerID);
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
		var container:DivElement = cast document.getElementById(containerID);
		var astronaut:SVGElement = cast container.querySelector("#astronaut");
		var rocket:SVGElement = cast container.querySelector("#rocket");

		console.log(astronaut);
		// console.log(Type.typeof(astronaut));

		// console.log(astronaut.getTransformToElement);
		// console.log(astronaut.transform);
		// console.log(astronaut.currentTranslate);

		// astronaut.setAttribute('transform', 'rotate(-10 50 100) translate(-36 45.5) skewX(40) skewY(10) scale(1 0.5)');
		// console.log(astronaut.getAttribute('transform'));

		// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
		/**
			transform="rotate(-10 50 100)
			translate(-36 45.5)
			skewX(40)
			scale(1 0.5)"
		 */

		// astronaut.setAttribute('transform', 'rotate(0) translate(550 300)');
		// astronaut.setAttribute('transform', 'rotate(0)');
		GoCss.to(astronaut, 2);
		// GoCss.to(astronaut, 2).x(100).onComplete(() -> console.log(astronaut));
		// GoCss.to(astronaut, 2).y(100).onComplete(() -> console.log(astronaut));
		// GoCss.to(astronaut, 2).y(-100).onComplete(() -> console.log(astronaut));
		// GoCss.to(astronaut, 2).x(100).y(-100).onComplete(() -> console.log(astronaut));
		// GoCss.to(astronaut, 2).rotation(10).onComplete(() -> console.log(astronaut));
		// GoCss.to(astronaut, 2)
		// 	.x(100)
		// 	.y(-100)
		// 	.yoyo()
		// 	.ease(Quad.easeInOut)
		// 	.rotation(10)
		// 	.onComplete(() -> console.log(astronaut));

		// GoCss.to(rocket, 4)
		// 	.y(-100)
		// 	.yoyo()
		// 	.ease(Quad.easeInOut) // .rotation(10)
		// 	.onComplete(() -> console.log(rocket));
	}

	// ____________________________________ main ____________________________________

	static public function main() {
		var app = new MainGoCss();
	}
}
