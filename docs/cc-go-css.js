// Generated by Haxe 4.3.2
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = "EReg";
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = "HxOverrides";
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
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
Lambda.__name__ = "Lambda";
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
Lambda.exists = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			return true;
		}
	}
	return false;
};
var MainGoCss = function() {
	this.idArr = ["astronaut","rocket","saturnring","planet"];
	this.containerID = "container-hero-svg2";
	this.elementMap = new haxe_ds_StringMap();
	var _gthis = this;
	window.document.addEventListener("DOMContentLoaded",function(event) {
		$global.console.info("MainGoCss - " + model_constants_App.NAME + " Dom ready :: build: " + "2024-03-11 10:40:39" + " ");
		var _go = new cc_lets_GoCss({ },0);
		$global.console.log("toString(): " + _go.toString());
		$global.console.log("getVersion(): " + _go.getVersion());
		_gthis.setupListeners();
		_gthis.setContainer();
		_gthis.init();
		_gthis.convertSrcToSVG();
	});
};
MainGoCss.__name__ = "MainGoCss";
MainGoCss.main = function() {
	var app = new MainGoCss();
};
MainGoCss.prototype = {
	setupListeners: function() {
		var _gthis = this;
		window.onresize = function() {
			$global.console.log("Window resized!");
			_gthis.setContainer();
		};
	}
	,setContainer: function() {
		var _container = window.document.getElementById(this.containerID);
		this.w = _container.clientWidth;
		this.h = _container.clientHeight;
		$global.console.log(_container.clientWidth);
		$global.console.log(_container.clientHeight);
	}
	,init: function() {
	}
	,convertSrcToSVG: function() {
		var _gthis = this;
		var container = window.document.getElementById(this.containerID);
		var image = container.querySelector("img");
		var url = image.src;
		var http = new haxe_http_HttpJs(url);
		http.onData = function(data) {
			container.innerHTML = data;
			_gthis.getDataSBG();
		};
		http.onError = function(error) {
			console.log("src/MainGoCss.hx:88:","Failed to load SVG: " + error);
		};
		http.request();
	}
	,getDataSBG: function() {
		var container = window.document.getElementById(this.containerID);
		var astronaut = container.querySelector("#astronaut");
		var rocket = container.querySelector("#rocket");
		var ring = container.querySelector("#ring");
		var planet = container.querySelector("#planet");
		$global.console.log(planet);
		planet.classList.add("--raw-planet");
		cc_lets_GoCss.to(astronaut,10).x(100).onComplete(function() {
			$global.console.log(astronaut);
		});
	}
	,__class__: MainGoCss
};
Math.__name__ = "Math";
var Reflect = function() { };
Reflect.__name__ = "Reflect";
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
var Std = function() { };
Std.__name__ = "Std";
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = "StringTools";
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
var cc_lets_Easing = function() { };
cc_lets_Easing.__name__ = "cc.lets.Easing";
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
var cc_lets_GoBase = function(target,duration) {
	this._arc = 0;
	this._seconds = 0;
	this._delay = 0;
	this._initTime = 0;
	this._isDelayDone = false;
	this._isOrbit = false;
	this._isWiggle = false;
	this._isCenter = false;
	this._isYoyo = false;
	this._isFrom = false;
	this._props = new haxe_ds_StringMap();
	this._options = { };
	this._easing = cc_lets_easing_Quad.get_easeOut();
	this.DEBUG = true;
	this.FRAME_RATE = 60;
	this._VERSION = "2.1.0";
	this._id = "[" + this.toString() + "]-" + this._VERSION + "-" + new Date().getTime();
	this._seconds = duration;
	this._target = target;
	this._duration = this.getDuration(duration);
	this._initTime = this._duration;
	this._transform = this.getDefaultTransform();
	this._startTransform = this.getDefaultTransform();
	this._startTransform = this.getStartTransform();
	cc_lets_GoBase._tweens.push(this);
	if(this.DEBUG) {
		$global.console.log("New " + this.toString() + " - _id: \"" + this._id + "\" / _duration: " + this._duration + " / _initTime: " + this._initTime + " / _tweens.length: " + cc_lets_GoBase._tweens.length);
	}
	if(duration == -1) {
		this.init();
	} else {
		haxe_Timer.delay($bind(this,this.init),1);
	}
};
cc_lets_GoBase.__name__ = "cc.lets.GoBase";
cc_lets_GoBase.to = function(target,duration) {
	var _go = new cc_lets_GoBase(target,duration);
	_go._isFrom = false;
	return _go;
};
cc_lets_GoBase.from = function(target,duration) {
	var _go = new cc_lets_GoBase(target,duration);
	_go._isFrom = true;
	_go.updateProperties(0);
	return _go;
};
cc_lets_GoBase.timer = function(duration) {
	var _go = new cc_lets_GoBase({ },duration);
	return _go;
};
cc_lets_GoBase.frames = function(frames) {
	var _go = new cc_lets_GoBase({ },frames * 60);
	return _go;
};
cc_lets_GoBase.wiggle = function(target,x,y,wiggleRoom) {
	if(wiggleRoom == null) {
		wiggleRoom = 10;
	}
	var _go = new cc_lets_GoBase(target,1 + Math.random());
	_go._isWiggle = true;
	var max = wiggleRoom;
	var min = -wiggleRoom;
	_go.prop("x",x + Math.random() * (max - min) + min);
	_go.prop("y",y + Math.random() * (max - min) + min);
	_go.ease(cc_lets_easing_Sine.get_easeInOut());
	_go.onComplete(function() {
		cc_lets_GoBase.wiggle(target,x,y,wiggleRoom);
	});
	return _go;
};
cc_lets_GoBase.wiggleProp = function(target,prop,value,wiggleRoom) {
	if(wiggleRoom == null) {
		wiggleRoom = 10;
	}
	var _go = new cc_lets_GoBase(target,1 + Math.random());
	_go._isWiggle = true;
	var max = wiggleRoom;
	var min = -wiggleRoom;
	_go.prop(prop,value + Math.random() * (max - min) + min);
	_go.ease(cc_lets_easing_Sine.get_easeInOut());
	_go.onComplete(function() {
		cc_lets_GoBase.wiggleProp(target,prop,value,wiggleRoom);
	});
	return _go;
};
cc_lets_GoBase.orbit = function(target,x,y,radius,speed) {
	var _go = new cc_lets_GoBase(target,1 + Math.random());
	_go._isOrbit = true;
	_go.prop("x",x);
	_go.prop("y",y);
	_go.prop("cx",x);
	_go.prop("cy",y);
	_go.prop("radius",radius);
	_go.prop("speed",speed);
	_go.prop("angle",speed);
	target["cx"] = x;
	target["cy"] = y;
	target["angle"] = 0;
	target["speed"] = speed;
	target["radius"] = radius;
	return _go;
};
cc_lets_GoBase.prototype = {
	_to: function(target,duration) {
		var _go = new cc_lets_GoBase(target,duration);
		_go._isFrom = false;
		return _go;
	}
	,width: function(value) {
		this.prop("width",value);
		return this;
	}
	,height: function(value) {
		this.prop("height",value);
		return this;
	}
	,x: function(value) {
		this.prop("x",value);
		return this;
	}
	,y: function(value) {
		this.prop("y",value);
		return this;
	}
	,z: function(value) {
		this.prop("z",value);
		return this;
	}
	,pos: function(x,y,z) {
		this.prop("x",x);
		this.prop("y",y);
		if(z != null) {
			this.prop("z",z);
		}
		return this;
	}
	,rotation: function(degree) {
		this.prop("rotation",degree);
		return this;
	}
	,degree: function(degree) {
		this.prop("rotation",degree);
		return this;
	}
	,radians: function(degree) {
		this.prop("rotation",degree * Math.PI / 180);
		return this;
	}
	,alpha: function(value) {
		this.prop("alpha",value);
		return this;
	}
	,scale: function(value) {
		this.prop("scaleX",value);
		this.prop("scaleY",value);
		this.prop("scale",value);
		return this;
	}
	,yoyo: function() {
		this._isYoyo = true;
		return this;
	}
	,arc: function(dir) {
		this._arc = 0;
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
		if(Object.prototype.hasOwnProperty.call(this._target,key)) {
			objValue = Reflect.getProperty(this._target,key);
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
		if(cc_lets_GoBase._requestId == null) {
			cc_lets_GoBase._requestId = window.requestAnimationFrame($bind(this,this.onEnterFrameHandler));
			$global.console.info("[" + this.toString() + "]-" + this._VERSION + "- Start frame animation (_requestId: " + cc_lets_GoBase._requestId + ")");
		}
	}
	,onEnterFrameHandler: function(time) {
		if(cc_lets_GoBase._tweens.length <= 0) {
			$global.console.info("[" + this.toString() + "]-" + this._VERSION + "- Kill _requestId: " + cc_lets_GoBase._requestId);
			window.cancelAnimationFrame(cc_lets_GoBase._requestId);
			cc_lets_GoBase._requestId = null;
			return;
		} else {
			var _g = 0;
			var _g1 = cc_lets_GoBase._tweens.length;
			while(_g < _g1) {
				var i = _g++;
				if(cc_lets_GoBase._tweens[i] != null) {
					cc_lets_GoBase._tweens[i].update();
				}
			}
			cc_lets_GoBase._requestId = window.requestAnimationFrame($bind(this,this.onEnterFrameHandler));
		}
	}
	,update: function() {
		if(this._delay > 0) {
			this._delay--;
			return;
		}
		if(!this._isDelayDone) {
			if(this.DEBUG) {
				$global.console.warn("[" + this.toString() + "]-" + this._VERSION + "-Should trigger only once: " + this._id + " / " + cc_lets_GoBase._requestId + " / " + cc_lets_GoBase._counter);
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
	,complete: function() {
		if(this.DEBUG) {
			$global.console.info("[" + this.toString() + "]-" + this._VERSION + "- Complete :: \"" + this._id + "\", _duration: " + this._duration + ", _seconds: " + this._seconds + ", _initTime: " + this._initTime + " / _tweens.length: " + cc_lets_GoBase._tweens.length);
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
	,getTimer: function() {
		return new Date().getTime() | 0;
	}
	,updateProperties: function(time) {
		if(Reflect.isFunction(this._options.onUpdate)) {
			var func = this._options.onUpdate;
			var arr = this._options.onUpdateParams != null ? this._options.onUpdateParams : [];
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
			case "rotate":
				this._transform.degree = value;
				break;
			case "scale":
				this._transform.scale = value;
				break;
			case "x":
				this._transform.x = value;
				break;
			case "y":
				this._transform.y = value;
				break;
			default:
			}
			this.setProperties(n,value);
		}
	}
	,setProperties: function(dir,value) {
		this._target.setAttribute(dir,value);
		switch(dir) {
		case "rotate":
			$global.console.info("rotate, " + value);
			break;
		case "scale":
			$global.console.info("scale, " + value);
			break;
		case "x":
			$global.console.info("x, " + value);
			break;
		case "y":
			$global.console.info("y, " + value);
			break;
		default:
			console.log("cc/lets/GoBase.hx:687:","case '" + dir + "': trace ('" + dir + "');");
		}
	}
	,getStartTransform: function() {
		var _transform = this.getDefaultTransform();
		var el = this._target;
		_transform.x = el.clientLeft;
		_transform.y = el.clientTop;
		_transform.w = el.clientWidth;
		_transform.h = el.clientHeight;
		_transform.cx = el.clientLeft + el.clientWidth / 2;
		_transform.cy = el.clientTop + el.clientHeight / 2;
		return _transform;
	}
	,getDefaultTransform: function() {
		return { x : 0, y : 0, w : 0, h : 0, cx : 0, cy : 0, degree : 0, scale : 0};
	}
	,getVersion: function() {
		return this._VERSION;
	}
	,toString: function() {
		var c = js_Boot.getClass(this);
		return c.__name__;
	}
	,destroy: function() {
		if(Lambda.has(cc_lets_GoBase._tweens,this)) {
			HxOverrides.remove(cc_lets_GoBase._tweens,this);
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
	,__class__: cc_lets_GoBase
};
var cc_lets_GoCss = function(target,duration) {
	this.VERSION = "2.1.1";
	cc_lets_GoBase.call(this,target,-1);
	this.__duration = duration;
};
cc_lets_GoCss.__name__ = "cc.lets.GoCss";
cc_lets_GoCss.to = function(target,duration) {
	var _go = new cc_lets_GoCss(target,duration);
	_go._isFrom = false;
	return _go;
};
cc_lets_GoCss.__super__ = cc_lets_GoBase;
cc_lets_GoCss.prototype = $extend(cc_lets_GoBase.prototype,{
	setProperties: function(dir,value) {
		this._target.setAttribute(dir,value);
		switch(dir) {
		case "rotate":
			$global.console.warn("rotate, " + value);
			break;
		case "scale":
			$global.console.warn("scale, " + value);
			break;
		case "x":
			this._target.classList.add("x-class");
			break;
		case "y":
			$global.console.warn("y, " + value);
			break;
		default:
			console.log("cc/lets/GoCss.hx:63:","case '" + dir + "': trace ('" + dir + "');");
		}
	}
	,getVersion: function() {
		return this.VERSION;
	}
	,__class__: cc_lets_GoCss
});
var cc_lets_easing_Quad = function() { };
cc_lets_easing_Quad.__name__ = "cc.lets.easing.Quad";
cc_lets_easing_Quad.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"};
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
cc_lets_easing_QuadEaseIn.__name__ = "cc.lets.easing.QuadEaseIn";
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
cc_lets_easing_QuadEaseInOut.__name__ = "cc.lets.easing.QuadEaseInOut";
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
cc_lets_easing_QuadEaseOut.__name__ = "cc.lets.easing.QuadEaseOut";
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
cc_lets_easing_Sine.__name__ = "cc.lets.easing.Sine";
cc_lets_easing_Sine.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"};
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
cc_lets_easing_SineEaseIn.__name__ = "cc.lets.easing.SineEaseIn";
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
cc_lets_easing_SineEaseInOut.__name__ = "cc.lets.easing.SineEaseInOut";
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
cc_lets_easing_SineEaseOut.__name__ = "cc.lets.easing.SineEaseOut";
cc_lets_easing_SineEaseOut.prototype = {
	calculate: function(k) {
		return Math.sin(k * (Math.PI / 2));
	}
	,ease: function(t,b,c,d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	}
	,__class__: cc_lets_easing_SineEaseOut
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = "haxe.Exception";
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
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
	unwrap: function() {
		return this.__nativeException;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
	,__properties__: {get_native:"get_native"}
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = "haxe.Timer";
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
haxe_ValueException.__name__ = "haxe.ValueException";
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = "haxe.ds.StringMap";
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var haxe_http_HttpBase = function(url) {
	this.url = url;
	this.headers = [];
	this.params = [];
	this.emptyOnData = $bind(this,this.onData);
};
haxe_http_HttpBase.__name__ = "haxe.http.HttpBase";
haxe_http_HttpBase.prototype = {
	onData: function(data) {
	}
	,onBytes: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,hasOnData: function() {
		return $bind(this,this.onData) != this.emptyOnData;
	}
	,success: function(data) {
		this.responseBytes = data;
		this.responseAsString = null;
		if(this.hasOnData()) {
			this.onData(this.get_responseData());
		}
		this.onBytes(this.responseBytes);
	}
	,get_responseData: function() {
		if(this.responseAsString == null && this.responseBytes != null) {
			this.responseAsString = this.responseBytes.getString(0,this.responseBytes.length,haxe_io_Encoding.UTF8);
		}
		return this.responseAsString;
	}
	,__class__: haxe_http_HttpBase
	,__properties__: {get_responseData:"get_responseData"}
};
var haxe_http_HttpJs = function(url) {
	this.async = true;
	this.withCredentials = false;
	haxe_http_HttpBase.call(this,url);
};
haxe_http_HttpJs.__name__ = "haxe.http.HttpJs";
haxe_http_HttpJs.__super__ = haxe_http_HttpBase;
haxe_http_HttpJs.prototype = $extend(haxe_http_HttpBase.prototype,{
	request: function(post) {
		var _gthis = this;
		this.responseAsString = null;
		this.responseBytes = null;
		this.responseHeaders = null;
		var r = this.req = js_Browser.createXMLHttpRequest();
		var onreadystatechange = function(_) {
			if(r.readyState != 4) {
				return;
			}
			var s;
			try {
				s = r.status;
			} catch( _g ) {
				s = null;
			}
			if(s == 0 && js_Browser.get_supported() && $global.location != null) {
				var protocol = $global.location.protocol.toLowerCase();
				var rlocalProtocol = new EReg("^(?:about|app|app-storage|.+-extension|file|res|widget):$","");
				var isLocal = rlocalProtocol.match(protocol);
				if(isLocal) {
					s = r.response != null ? 200 : 404;
				}
			}
			if(s == undefined) {
				s = null;
			}
			if(s != null) {
				_gthis.onStatus(s);
			}
			if(s != null && s >= 200 && s < 400) {
				_gthis.req = null;
				var headers = r.getAllResponseHeaders().split("\r\n");
				var _g = [];
				var _g1 = 0;
				var _g2 = headers;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v != "") {
						_g.push(v);
					}
				}
				headers = _g;
				var onreadystatechange = new haxe_ds_StringMap();
				_gthis.responseHeaders = onreadystatechange;
				var _g = 0;
				while(_g < headers.length) {
					var hline = headers[_g];
					++_g;
					var a = hline.split(": ");
					var hname = a.shift();
					var hval = a.length == 1 ? a[0] : a.join(": ");
					hval = StringTools.ltrim(StringTools.rtrim(hval));
					_gthis.responseHeaders.h[hname] = hval;
				}
				_gthis.success(haxe_io_Bytes.ofData(r.response));
			} else if(s == null || s == 0 && r.response == null) {
				_gthis.req = null;
				_gthis.onError("Failed to connect or resolve host");
			} else if(s == null) {
				_gthis.req = null;
				var onreadystatechange = r.response != null ? haxe_io_Bytes.ofData(r.response) : null;
				_gthis.responseBytes = onreadystatechange;
				_gthis.onError("Http Error #" + r.status);
			} else {
				switch(s) {
				case 12007:
					_gthis.req = null;
					_gthis.onError("Unknown host");
					break;
				case 12029:
					_gthis.req = null;
					_gthis.onError("Failed to connect to host");
					break;
				default:
					_gthis.req = null;
					var onreadystatechange = r.response != null ? haxe_io_Bytes.ofData(r.response) : null;
					_gthis.responseBytes = onreadystatechange;
					_gthis.onError("Http Error #" + r.status);
				}
			}
		};
		if(this.async) {
			r.onreadystatechange = onreadystatechange;
		}
		var uri;
		var _g = this.postData;
		var _g1 = this.postBytes;
		if(_g == null) {
			if(_g1 == null) {
				uri = null;
			} else {
				var bytes = _g1;
				uri = new Blob([bytes.b.bufferValue]);
			}
		} else if(_g1 == null) {
			var str = _g;
			uri = str;
		} else {
			uri = null;
		}
		if(uri != null) {
			post = true;
		} else {
			var _g = 0;
			var _g1 = this.params;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri == null) {
					uri = "";
				} else {
					uri = (uri == null ? "null" : Std.string(uri)) + "&";
				}
				var s = p.name;
				var uri1 = (uri == null ? "null" : Std.string(uri)) + encodeURIComponent(s) + "=";
				var s1 = p.value;
				uri = uri1 + encodeURIComponent(s1);
			}
		}
		try {
			if(post) {
				r.open("POST",this.url,this.async);
			} else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question ? "?" : "&") + (uri == null ? "null" : Std.string(uri)),this.async);
				uri = null;
			} else {
				r.open("GET",this.url,this.async);
			}
			r.responseType = "arraybuffer";
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			this.req = null;
			this.onError(e.toString());
			return;
		}
		r.withCredentials = this.withCredentials;
		if(!Lambda.exists(this.headers,function(h) {
			return h.name == "Content-Type";
		}) && post && this.postData == null) {
			r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		}
		var _g = 0;
		var _g1 = this.headers;
		while(_g < _g1.length) {
			var h = _g1[_g];
			++_g;
			r.setRequestHeader(h.name,h.value);
		}
		r.send(uri);
		if(!this.async) {
			onreadystatechange(null);
		}
	}
	,__class__: haxe_http_HttpJs
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = "haxe.io.Bytes";
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = "haxe.iterators.ArrayIterator";
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
js_Boot.__name__ = "js.Boot";
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
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
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
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_Browser = function() { };
js_Browser.__name__ = "js.Browser";
js_Browser.__properties__ = {get_supported:"get_supported"};
js_Browser.get_supported = function() {
	if(typeof(window) != "undefined" && typeof(window.location) != "undefined") {
		return typeof(window.location.protocol) == "string";
	} else {
		return false;
	}
};
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") {
		return new XMLHttpRequest();
	}
	if(typeof ActiveXObject != "undefined") {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	throw haxe_Exception.thrown("Unable to create XMLHttpRequest object.");
};
var model_constants_App = function() { };
model_constants_App.__name__ = "model.constants.App";
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
Object.defineProperty(String.prototype,"__class__",{ value : String, enumerable : false, writable : true});
String.__name__ = "String";
Array.__name__ = "Array";
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
js_Boot.__toStr = ({ }).toString;
cc_lets_GoBase._tweens = [];
cc_lets_GoBase._counter = 0;
model_constants_App.NAME = "[RawGenius2024]";
MainGoCss.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
