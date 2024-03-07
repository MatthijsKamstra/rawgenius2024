// Generated by Haxe 4.3.2
(function ($hx_exports, $global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.has = function(it,elt) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(x1 == elt) {
			return true;
		}
	}
	return false;
};
var MainGo = function() {
	window.document.addEventListener("DOMContentLoaded",function(event) {
	});
};
MainGo.__name__ = true;
MainGo.main = function() {
	var app = new MainGo();
};
MainGo.prototype = {
	__class__: MainGo
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var cc_lets_Easing = function() { };
cc_lets_Easing.__name__ = true;
cc_lets_Easing.linear = function(v) {
	return v;
};
cc_lets_Easing.quad = function(v) {
	return v * v;
};
cc_lets_Easing.cubic = function(v) {
	return v * v * v;
};
cc_lets_Easing.quart = function(v) {
	return v * v * v;
};
cc_lets_Easing.quint = function(v) {
	return v * v * v;
};
cc_lets_Easing.sine = function(v) {
	return 1 - Math.cos(v * Math.PI / 2);
};
cc_lets_Easing.circ = function(v) {
	return 1 - Math.sqrt(1 - v * v);
};
cc_lets_Easing.expo = function(v) {
	if(v == 0) {
		return 0;
	} else {
		return Math.pow(2,10 * (v - 1));
	}
};
cc_lets_Easing.back = function(v) {
	var s = 1.70158;
	return v * v * ((s + 1) * v - s);
};
cc_lets_Easing.bounce = function(v) {
	v = 1 - v;
	return 1 - (v < 0.363636363636363646 ? 7.5625 * v * v : v < 0.727272727272727293 ? 7.5625 * (v -= 0.545454545454545414) * v + .75 : v < 0.909090909090909061 ? 7.5625 * (v -= 0.818181818181818232) * v + .9375 : 7.5625 * (v -= 0.954545454545454586) * v + .984375);
};
cc_lets_Easing.elastic = function(v) {
	if(v == 0) {
		return 0;
	}
	if(v == 1) {
		return 1;
	}
	var p = .3;
	var s = p / 4;
	return -(Math.pow(2,10 * --v) * Math.sin((v - 0.075) * (2 * Math.PI) / 0.3));
};
cc_lets_Easing.reverse = function(f) {
	return function(v) {
		return 1 - f(1 - v);
	};
};
cc_lets_Easing.reflect = function(f) {
	return function(v) {
		if(v < 0.5) {
			return f(v * 2) / 2;
		} else {
			return 1 - f(2 - v * 2) / 2;
		}
	};
};
var GoSVG = $hx_exports["GoSVG"] = function(target,duration) {
	this.TRANSFORM = "transform";
	this.DEBUG = false;
	this.FRAME_RATE = 60;
	this._seconds = 0;
	this._delay = 0;
	this._initTime = 0;
	this._isDelayDone = false;
	this._isWiggle = false;
	this._isCenter = false;
	this._isYoyo = false;
	this._isFrom = false;
	this._props = new haxe_ds_StringMap();
	this._options = { };
	this._easing = cc_lets_easing_Quad.get_easeOut();
	GoSVG._counter++;
	this._id = "[lets.GoSVG]" + GoSVG.VERSION + "." + new Date().getTime();
	this._seconds = duration;
	this._target = target;
	this._duration = this.getDuration(duration);
	this._initTime = this._duration;
	this._transform = { };
	GoSVG._tweens.push(this);
	if(this.DEBUG) {
		$global.console.log("New GoSVG - _id: \"" + this._id + "\" / _duration: " + this._duration + " / _initTime: " + this._initTime + " / _tweens.length: " + GoSVG._tweens.length);
	}
	haxe_Timer.delay($bind(this,this.init),1);
};
GoSVG.__name__ = true;
GoSVG.test = function(target,duration) {
	if(duration == null) {
		duration = 1.2;
	}
	$global.console.log("GoSVG.Test(" + Std.string(target) + ", " + duration + ")");
	var _go = new GoSVG(target,duration);
	return _go;
};
GoSVG.svg = function(element) {
	if(element == null) {
		$global.console.warn("Make sure you have an element selected: this is NO element");
		return null;
	}
	var svg = element;
	var _id = "";
	var _x = 0;
	var _y = 0;
	var _cx = 0;
	var _cy = 0;
	var _width = 0;
	var _height = 0;
	var tagName = element.tagName;
	_id = tagName;
	switch(tagName) {
	case "circle":
		var circle = js_Boot.__cast(svg , SVGCircleElement);
		_x = circle.cx.baseVal.value - circle.r.baseVal.value / 2;
		_y = circle.cy.baseVal.value - circle.r.baseVal.value / 2;
		_width = circle.r.baseVal.value;
		_height = circle.r.baseVal.value;
		_cx = circle.cx.baseVal.value;
		_cy = circle.cy.baseVal.value;
		break;
	case "ellipse":
		var ellipse = js_Boot.__cast(svg , SVGEllipseElement);
		_x = ellipse.cx.baseVal.value - ellipse.rx.baseVal.value / 2;
		_y = ellipse.cy.baseVal.value - ellipse.ry.baseVal.value / 2;
		_width = ellipse.rx.baseVal.value;
		_height = ellipse.ry.baseVal.value;
		_cx = ellipse.cx.baseVal.value;
		_cy = ellipse.cy.baseVal.value;
		break;
	case "line":
		var circle = js_Boot.__cast(svg , SVGLineElement);
		_x = Math.min(circle.x1.baseVal.value,circle.x2.baseVal.value);
		_y = Math.min(circle.y1.baseVal.value,circle.y2.baseVal.value);
		_width = Math.max(circle.x1.baseVal.value,circle.x2.baseVal.value) - Math.min(circle.x1.baseVal.value,circle.x2.baseVal.value);
		_height = Math.max(circle.y1.baseVal.value,circle.y2.baseVal.value) - Math.min(circle.y1.baseVal.value,circle.y2.baseVal.value);
		_cx = _x + _width / 2;
		_cy = _y + _height / 2;
		break;
	case "rect":
		var rect = js_Boot.__cast(svg , SVGRectElement);
		_x = rect.x.baseVal.value;
		_y = rect.y.baseVal.value;
		_width = rect.width.baseVal.value;
		_height = rect.height.baseVal.value;
		_cx = rect.x.baseVal.value + rect.width.baseVal.value / 2;
		_cy = rect.y.baseVal.value + rect.height.baseVal.value / 2;
		break;
	case "text":
		var text = js_Boot.__cast(svg , SVGTextElement);
		_x = text.getBBox().x;
		_y = text.getBBox().y;
		_width = text.getBBox().width;
		_height = text.getBBox().height;
		_cx = _x + _width / 2;
		_cy = _y + _height / 2;
		break;
	default:
		var graphic = js_Boot.__cast(svg , SVGGraphicsElement);
		console.log("cc/lets/GoSVG.hx:164:","case \"" + _id + "\": trace(\"" + _id + "\");");
		_x = graphic.getBBox().x;
		_y = graphic.getBBox().y;
		_width = graphic.getBBox().width;
		_height = graphic.getBBox().height;
		_cx = _x + _width / 2;
		_cy = _y + _height / 2;
	}
	if(element.hasAttribute("viewBox")) {
		var svgViewBox = element.getAttribute("viewBox");
		var svgRect = element.viewBox.baseVal;
		_width = svgRect.width;
		_height = svgRect.height;
		_x = svgRect.x;
		_y = svgRect.y;
	}
	return { _id : _id, el : element, x : _x, y : _y, width : _width, height : _height, centerX : _cx, centerY : _cy};
};
GoSVG.to = function(target,duration) {
	var _go = new GoSVG(target,duration);
	_go._isFrom = false;
	return _go;
};
GoSVG.from = function(target,duration) {
	var _go = new GoSVG(target,duration);
	_go._isFrom = true;
	_go.updateProperties(0);
	return _go;
};
GoSVG.timer = function(duration) {
	var _go = new GoSVG(null,duration);
	return _go;
};
GoSVG.frames = function(frames) {
	var _go = new GoSVG(null,frames * 60);
	return _go;
};
GoSVG.wiggle = function(target,x,y,wiggleRoom) {
	if(wiggleRoom == null) {
		wiggleRoom = 10;
	}
	var _go = new GoSVG(target,1 + Math.random());
	_go._isWiggle = true;
	var max = wiggleRoom;
	var min = -wiggleRoom;
	var value = x + Math.random() * (max - min) + min;
	var objValue = 0.0;
	if(_go._target.hasAttribute("x")) {
		objValue = parseFloat(_go._target.getAttribute("x"));
	}
	var _range = { key : "x", from : _go._isFrom ? value : objValue, to : !_go._isFrom ? value : objValue};
	_go._props.h["x"] = _range;
	if(_go._isFrom) {
		_go.updateProperties(0);
	}
	var value = y + Math.random() * (max - min) + min;
	var objValue = 0.0;
	if(_go._target.hasAttribute("y")) {
		objValue = parseFloat(_go._target.getAttribute("y"));
	}
	var _range = { key : "y", from : _go._isFrom ? value : objValue, to : !_go._isFrom ? value : objValue};
	_go._props.h["y"] = _range;
	if(_go._isFrom) {
		_go.updateProperties(0);
	}
	_go._easing = cc_lets_easing_Sine.get_easeInOut();
	_go._options.onComplete = function() {
		GoSVG.wiggle(target,x,y,wiggleRoom);
	};
	_go._options.onCompleteParams = null;
	return _go;
};
GoSVG.wiggleProp = function(target,prop,value,wiggleRoom) {
	if(wiggleRoom == null) {
		wiggleRoom = 10;
	}
	var _go = new GoSVG(target,1 + Math.random());
	_go._isWiggle = true;
	var max = wiggleRoom;
	var min = -wiggleRoom;
	var value1 = value + Math.random() * (max - min) + min;
	var objValue = 0.0;
	if(_go._target.hasAttribute(prop)) {
		objValue = parseFloat(_go._target.getAttribute(prop));
	}
	var _range = { key : prop, from : _go._isFrom ? value1 : objValue, to : !_go._isFrom ? value1 : objValue};
	_go._props.h[prop] = _range;
	if(_go._isFrom) {
		_go.updateProperties(0);
	}
	_go._easing = cc_lets_easing_Sine.get_easeInOut();
	_go._options.onComplete = function() {
		GoSVG.wiggleProp(target,prop,value,wiggleRoom);
	};
	_go._options.onCompleteParams = null;
	return _go;
};
GoSVG.version = function() {
	return GoSVG.VERSION;
};
GoSVG.prototype = {
	width: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("width")) {
			objValue = parseFloat(this._target.getAttribute("width"));
		}
		var _range = { key : "width", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["width"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		return this;
	}
	,height: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("height")) {
			objValue = parseFloat(this._target.getAttribute("height"));
		}
		var _range = { key : "height", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["height"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		return this;
	}
	,x: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("transform-x")) {
			objValue = parseFloat(this._target.getAttribute("transform-x"));
		}
		var _range = { key : "transform-x", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["transform-x"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		if(this._transform.translate == null) {
			this._transform.translate = { x : 0};
		}
		this._transform.translate.x = value;
		return this;
	}
	,y: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("transform-y")) {
			objValue = parseFloat(this._target.getAttribute("transform-y"));
		}
		var _range = { key : "transform-y", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["transform-y"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		if(this._transform.translate == null) {
			this._transform.translate = { x : 0};
		}
		this._transform.translate.y = value;
		return this;
	}
	,z: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("z")) {
			objValue = parseFloat(this._target.getAttribute("z"));
		}
		var _range = { key : "z", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["z"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		return this;
	}
	,pos: function(x,y,z) {
		var objValue = 0.0;
		if(this._target.hasAttribute("transform-x")) {
			objValue = parseFloat(this._target.getAttribute("transform-x"));
		}
		var _range = { key : "transform-x", from : this._isFrom ? x : objValue, to : !this._isFrom ? x : objValue};
		this._props.h["transform-x"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		if(this._transform.translate == null) {
			this._transform.translate = { x : 0};
		}
		this._transform.translate.x = x;
		var objValue = 0.0;
		if(this._target.hasAttribute("transform-y")) {
			objValue = parseFloat(this._target.getAttribute("transform-y"));
		}
		var _range = { key : "transform-y", from : this._isFrom ? y : objValue, to : !this._isFrom ? y : objValue};
		this._props.h["transform-y"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		if(this._transform.translate == null) {
			this._transform.translate = { x : 0};
		}
		this._transform.translate.y = y;
		this._transform.translate.x = x;
		this._transform.translate.y = y;
		if(z != null) {
			var objValue = 0.0;
			if(this._target.hasAttribute("z")) {
				objValue = parseFloat(this._target.getAttribute("z"));
			}
			var _range = { key : "z", from : this._isFrom ? z : objValue, to : !this._isFrom ? z : objValue};
			this._props.h["z"] = _range;
			if(this._isFrom) {
				this.updateProperties(0);
			}
		}
		return this;
	}
	,rotation: function(degree,x,y) {
		var objValue = 0.0;
		if(this._target.hasAttribute("rotation")) {
			objValue = parseFloat(this._target.getAttribute("rotation"));
		}
		var _range = { key : "rotation", from : this._isFrom ? degree : objValue, to : !this._isFrom ? degree : objValue};
		this._props.h["rotation"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		if(this._transform.rotate == null) {
			this._transform.rotate = { degree : 0};
		}
		this._transform.rotate.degree = degree;
		if(x != null) {
			this._transform.rotate.x = x;
		}
		if(y != null) {
			this._transform.rotate.y = y;
		}
		return this;
	}
	,degree: function(degree) {
		var objValue = 0.0;
		if(this._target.hasAttribute("rotation")) {
			objValue = parseFloat(this._target.getAttribute("rotation"));
		}
		var _range = { key : "rotation", from : this._isFrom ? degree : objValue, to : !this._isFrom ? degree : objValue};
		this._props.h["rotation"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		this._transform.rotate.degree = degree;
		return this;
	}
	,radians: function(degree) {
		var value = degree * Math.PI / 180;
		var objValue = 0.0;
		if(this._target.hasAttribute("rotation")) {
			objValue = parseFloat(this._target.getAttribute("rotation"));
		}
		var _range = { key : "rotation", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["rotation"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		this._transform.rotate.degree = degree * Math.PI / 180;
		return this;
	}
	,alpha: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("opacity")) {
			objValue = parseFloat(this._target.getAttribute("opacity"));
		}
		var _range = { key : "opacity", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["opacity"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		return this;
	}
	,opacity: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("opacity")) {
			objValue = parseFloat(this._target.getAttribute("opacity"));
		}
		var _range = { key : "opacity", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["opacity"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		return this;
	}
	,scale: function(value) {
		var objValue = 0.0;
		if(this._target.hasAttribute("scale")) {
			objValue = parseFloat(this._target.getAttribute("scale"));
		}
		var _range = { key : "scale", from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h["scale"] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		if(this._transform.scale == null) {
			this._transform.scale = { x : 0, y : 0};
		}
		this._transform.scale.x = value;
		this._transform.scale.y = value;
		return this;
	}
	,yoyo: function() {
		this._isYoyo = true;
		return this;
	}
	,useCenter: function() {
		this._isCenter = true;
		return this;
	}
	,delay: function(duration) {
		this._delay = this.getDuration(duration);
		return this;
	}
	,prop: function(key,value) {
		var objValue = 0.0;
		if(this._target.hasAttribute(key)) {
			objValue = parseFloat(this._target.getAttribute(key));
		}
		var _range = { key : key, from : this._isFrom ? value : objValue, to : !this._isFrom ? value : objValue};
		this._props.h[key] = _range;
		if(this._isFrom) {
			this.updateProperties(0);
		}
		return this;
	}
	,onComplete: function(func,arr) {
		this._options.onComplete = func;
		this._options.onCompleteParams = arr;
		return this;
	}
	,onAnimationStart: function(func,arr) {
		this._options.onAnimationStart = func;
		this._options.onAnimationStartParams = arr;
		return this;
	}
	,onUpdate: function(func,arr) {
		this._options.onUpdate = func;
		this._options.onUpdateParams = arr;
		return this;
	}
	,ease: function(easing) {
		this._easing = easing;
		return this;
	}
	,stop: function() {
		this.destroy();
	}
	,init: function() {
		if(GoSVG._requestId == null) {
			GoSVG._requestId = window.requestAnimationFrame($bind(this,this.onEnterFrameHandler));
			$global.console.info("GoSVG (" + GoSVG.VERSION + ") Start frame animation (_requestId: " + GoSVG._requestId + ")");
		}
	}
	,onEnterFrameHandler: function(time) {
		if(GoSVG._tweens.length <= 0) {
			$global.console.info("GoSVG (" + GoSVG.VERSION + ") Kill _requestId: " + GoSVG._requestId);
			window.cancelAnimationFrame(GoSVG._requestId);
			GoSVG._requestId = null;
			return;
		} else {
			var _g = 0;
			var _g1 = GoSVG._tweens.length;
			while(_g < _g1) {
				var i = _g++;
				if(GoSVG._tweens[i] != null) {
					GoSVG._tweens[i].update();
				}
			}
			GoSVG._requestId = window.requestAnimationFrame($bind(this,this.onEnterFrameHandler));
		}
	}
	,update: function() {
		if(this._delay > 0) {
			this._delay--;
			return;
		}
		if(!this._isDelayDone) {
			if(this.DEBUG) {
				$global.console.warn("GoSVG (" + GoSVG.VERSION + ") Should trigger only once: " + this._id + " / " + GoSVG._requestId + " / " + GoSVG._counter);
			}
			if(Reflect.isFunction(this._options.onAnimationStart)) {
				var func = this._options.onAnimationStart;
				var arr = this._options.onAnimationStartParams != null ? this._options.onAnimationStartParams : [];
				func.apply(func,[arr]);
			}
		}
		this._isDelayDone = true;
		this._initTime--;
		var progressed = this._duration - this._initTime;
		if(progressed >= this._duration) {
			this.updateProperties(this._duration);
			this.complete();
		} else {
			this.updateProperties(progressed);
		}
	}
	,updateProperties: function(time) {
		if(Reflect.isFunction(this._options.onUpdate)) {
			var func = this._options.onUpdate;
			var arr = this._options.onUpdateParams != null ? this._options.onUpdateParams : [time];
			func.apply(func,[arr]);
		}
		if(this._props == null) {
			return;
		}
		var h = this._props.h;
		var n_h = h;
		var n_keys = Object.keys(h);
		var n_length = n_keys.length;
		var n_current = 0;
		while(n_current < n_length) {
			var n = n_keys[n_current++];
			var range = this._props.h[n];
			var value = this._easing.ease(time,range.from,range.to - range.from,this._duration);
			switch(n) {
			case "rotation":
				this._transform.rotate.degree = value;
				this._target.setAttribute(this.TRANSFORM,this.getTransform());
				break;
			case "scale":
				this._transform.scale.x = value;
				this._transform.scale.y = value;
				this._target.setAttribute(this.TRANSFORM,this.getTransform());
				break;
			case "transform-x":
				this._transform.translate.x = value;
				this._target.setAttribute(this.TRANSFORM,this.getTransform());
				break;
			case "transform-y":
				this._transform.translate.y = value;
				this._target.setAttribute(this.TRANSFORM,this.getTransform());
				break;
			default:
				this._target.setAttribute(n,"" + value);
			}
		}
	}
	,getTransform: function() {
		var str = "";
		if(this._transform.translate != null) {
			if(this._transform.translate.y == null) {
				str += "translate(" + this._transform.translate.x + ") ";
			} else if(this._transform.translate.x == null) {
				str += "translate(0 " + this._transform.translate.y + ") ";
			} else {
				str += "translate(" + this._transform.translate.x + ", " + this._transform.translate.y + ") ";
			}
		}
		if(this._transform.rotate != null) {
			if(this._transform.rotate.x == null) {
				str += "rotate(" + this._transform.rotate.degree + ") ";
			} else {
				str += "rotate(" + this._transform.rotate.degree + ", " + this._transform.rotate.x + ", " + this._transform.rotate.y + ") ";
			}
		}
		if(this._transform.scale != null) {
			if(this._transform.scale.y == null) {
				str += "scale(" + this._transform.scale.x + " ";
			} else {
				str += "scale(" + this._transform.scale.x + "," + this._transform.scale.y + ") ";
			}
		}
		if(this._transform.skewX != null) {
			str += "skexX(" + this._transform.skewX.degree + ") ";
		}
		if(this._transform.skewY != null) {
			str += "skexX(" + this._transform.skewY.degree + ") ";
		}
		return str;
	}
	,complete: function() {
		if(this.DEBUG) {
			$global.console.info("complete :: \"" + this._id + "\", _duration: " + this._duration + ", _seconds: " + this._seconds + ", _initTime: " + this._initTime + " / _tweens.length: " + GoSVG._tweens.length);
		}
		if(this._isYoyo) {
			var h = this._props.h;
			var n_h = h;
			var n_keys = Object.keys(h);
			var n_length = n_keys.length;
			var n_current = 0;
			while(n_current < n_length) {
				var n = n_keys[n_current++];
				var range = this._props.h[n];
				var _rangeReverse = { key : n, from : range.to, to : range.from};
				this._props.h[n] = _rangeReverse;
			}
			this._initTime = this._duration;
			this._isYoyo = false;
			return;
		}
		var func = this._options.onComplete;
		var arr = this._options.onCompleteParams != null ? this._options.onCompleteParams : [];
		this.destroy();
		if(Reflect.isFunction(func)) {
			func.apply(func,[arr]);
		}
	}
	,getDuration: function(duration) {
		var d = 0;
		if(duration <= 0) {
			duration = 0.1;
		}
		d = duration * this.FRAME_RATE | 0;
		return d;
	}
	,destroy: function() {
		if(Lambda.has(GoSVG._tweens,this)) {
			HxOverrides.remove(GoSVG._tweens,this);
		}
		if(this._options) {
			this._easing = cc_lets_easing_Quad.get_easeOut();
			this._options = { };
			this._target = null;
			this._props = null;
			this._duration = 0;
			this._initTime = 0;
			this._delay = 0;
		}
	}
	,__class__: GoSVG
};
var cc_lets_easing_IEasing = function() { };
cc_lets_easing_IEasing.__name__ = true;
cc_lets_easing_IEasing.__isInterface__ = true;
cc_lets_easing_IEasing.prototype = {
	__class__: cc_lets_easing_IEasing
};
var cc_lets_easing_Quad = function() { };
cc_lets_easing_Quad.__name__ = true;
cc_lets_easing_Quad.get_easeIn = function() {
	return new cc_lets_easing_QuadEaseIn();
};
cc_lets_easing_Quad.get_easeInOut = function() {
	return new cc_lets_easing_QuadEaseInOut();
};
cc_lets_easing_Quad.get_easeOut = function() {
	return new cc_lets_easing_QuadEaseOut();
};
var cc_lets_easing_QuadEaseIn = function() {
};
cc_lets_easing_QuadEaseIn.__name__ = true;
cc_lets_easing_QuadEaseIn.__interfaces__ = [cc_lets_easing_IEasing];
cc_lets_easing_QuadEaseIn.prototype = {
	calculate: function(k) {
		return k * k;
	}
	,ease: function(t,b,c,d) {
		return c * (t /= d) * t + b;
	}
	,__class__: cc_lets_easing_QuadEaseIn
};
var cc_lets_easing_QuadEaseInOut = function() {
};
cc_lets_easing_QuadEaseInOut.__name__ = true;
cc_lets_easing_QuadEaseInOut.__interfaces__ = [cc_lets_easing_IEasing];
cc_lets_easing_QuadEaseInOut.prototype = {
	calculate: function(k) {
		if((k *= 2) < 1) {
			return 0.5 * k * k;
		}
		return -0.5 * ((k - 1) * (k - 3) - 1);
	}
	,ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) {
			return c / 2 * t * t + b;
		}
		return -c / 2 * ((t - 1) * (t - 3) - 1) + b;
	}
	,__class__: cc_lets_easing_QuadEaseInOut
};
var cc_lets_easing_QuadEaseOut = function() {
};
cc_lets_easing_QuadEaseOut.__name__ = true;
cc_lets_easing_QuadEaseOut.__interfaces__ = [cc_lets_easing_IEasing];
cc_lets_easing_QuadEaseOut.prototype = {
	calculate: function(k) {
		return -k * (k - 2);
	}
	,ease: function(t,b,c,d) {
		return -c * (t /= d) * (t - 2) + b;
	}
	,__class__: cc_lets_easing_QuadEaseOut
};
var cc_lets_easing_Sine = function() { };
cc_lets_easing_Sine.__name__ = true;
cc_lets_easing_Sine.get_easeIn = function() {
	return new cc_lets_easing_SineEaseIn();
};
cc_lets_easing_Sine.get_easeInOut = function() {
	return new cc_lets_easing_SineEaseInOut();
};
cc_lets_easing_Sine.get_easeOut = function() {
	return new cc_lets_easing_SineEaseOut();
};
var cc_lets_easing_SineEaseIn = function() {
};
cc_lets_easing_SineEaseIn.__name__ = true;
cc_lets_easing_SineEaseIn.__interfaces__ = [cc_lets_easing_IEasing];
cc_lets_easing_SineEaseIn.prototype = {
	calculate: function(k) {
		return 1 - Math.cos(k * (Math.PI / 2));
	}
	,ease: function(t,b,c,d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	}
	,__class__: cc_lets_easing_SineEaseIn
};
var cc_lets_easing_SineEaseInOut = function() {
};
cc_lets_easing_SineEaseInOut.__name__ = true;
cc_lets_easing_SineEaseInOut.__interfaces__ = [cc_lets_easing_IEasing];
cc_lets_easing_SineEaseInOut.prototype = {
	calculate: function(k) {
		return -(Math.cos(Math.PI * k) - 1) / 2;
	}
	,ease: function(t,b,c,d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	}
	,__class__: cc_lets_easing_SineEaseInOut
};
var cc_lets_easing_SineEaseOut = function() {
};
cc_lets_easing_SineEaseOut.__name__ = true;
cc_lets_easing_SineEaseOut.__interfaces__ = [cc_lets_easing_IEasing];
cc_lets_easing_SineEaseOut.prototype = {
	calculate: function(k) {
		return Math.sin(k * (Math.PI / 2));
	}
	,ease: function(t,b,c,d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	}
	,__class__: cc_lets_easing_SineEaseOut
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	__class__: haxe_ValueException
});
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var model_constants_App = function() { };
model_constants_App.__name__ = true;
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
Object.defineProperty(String.prototype,"__class__",{ value : String, enumerable : false, writable : true});
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
js_Boot.__toStr = ({ }).toString;
GoSVG.VERSION = "2.0.1";
GoSVG._tweens = [];
GoSVG._counter = 0;
model_constants_App.NAME = "[RawGenius2024]";
MainGo.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
