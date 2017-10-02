/*[slim-loader-config]*/
(function(global) {
	global.steal = global.steal || {};

	global.steal.map = {};
	global.steal.paths = {
		"139": "test/basics-optimized/dist/bundles/test/basics-optimized/index.js"
	};
	global.steal.bundles = {
		"4": 139,
		"5": 139,
		"6": 139,
		"7": 139,
		"8": 139,
		"12": 139,
		"13": 139,
		"14": 139,
		"15": 139,
		"16": 139,
		"17": 139,
		"18": 139,
		"19": 139,
		"20": 139,
		"21": 139,
		"22": 139,
		"23": 139,
		"24": 139,
		"25": 139,
		"26": 139,
		"27": 139,
		"28": 139,
		"29": 139,
		"30": 139,
		"31": 139,
		"32": 139,
		"33": 139,
		"34": 139,
		"35": 139,
		"36": 139,
		"37": 139,
		"38": 139,
		"39": 139,
		"40": 139,
		"41": 139,
		"42": 139,
		"43": 139,
		"44": 139,
		"45": 139,
		"46": 139,
		"47": 139,
		"48": 139,
		"49": 139,
		"50": 139,
		"51": 139,
		"52": 139,
		"53": 139,
		"54": 139,
		"55": 139,
		"56": 139,
		"57": 139,
		"58": 139,
		"59": 139,
		"60": 139,
		"61": 139,
		"62": 139,
		"63": 139,
		"64": 139,
		"65": 139,
		"66": 139,
		"67": 139,
		"68": 139,
		"69": 139,
		"70": 139,
		"71": 139,
		"72": 139,
		"73": 139,
		"74": 139,
		"75": 139,
		"76": 139,
		"77": 139,
		"78": 139,
		"79": 139,
		"80": 139,
		"81": 139,
		"82": 139,
		"83": 139,
		"84": 139,
		"85": 139,
		"86": 139,
		"87": 139,
		"88": 139,
		"89": 139,
		"90": 139,
		"91": 139,
		"92": 139,
		"93": 139,
		"94": 139,
		"95": 139,
		"96": 139,
		"97": 139,
		"98": 139,
		"99": 139,
		"100": 139,
		"101": 139,
		"102": 139,
		"103": 139,
		"104": 139,
		"105": 139,
		"106": 139,
		"107": 139,
		"108": 139,
		"109": 139,
		"110": 139,
		"111": 139,
		"112": 139,
		"113": 139,
		"114": 139,
		"115": 139,
		"116": 139,
		"117": 139,
		"118": 139,
		"119": 139,
		"120": 139,
		"121": 139,
		"122": 139,
		"123": 139,
		"124": 139,
		"125": 139,
		"126": 139,
		"127": 139,
		"128": 139,
		"129": 139,
		"130": 139,
		"131": 139,
		"132": 139,
		"133": 139,
		"134": 139,
		"135": 139,
		"136": 139,
		"137": 139,
		"138": 139
	};
	global.steal.plugins = {};
})(window);

/*[slim-loader-shim]*/
(function(modules) {
	var modulesMap = {};
	var loadedModules = {};

	function addModules(mods) {
		mods.forEach(function(m) {
			modulesMap[m[0]] = m[1];
		});
	}
	addModules(modules);

	function stealRequire(moduleId) {
		if (loadedModules[moduleId]) {
			return loadedModules[moduleId].exports;
		}

		var stealModule = (loadedModules[moduleId] = {
			exports: {}
		});

		modulesMap[moduleId].call(
			stealModule.exports,
			stealRequire,
			stealModule.exports,
			stealModule
		);

		return stealModule.exports;
	}

	stealRequire(114);
})([
	[
		138,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = {
				main: "test/basics-optimized/index.stache!done-autorender",
				logLevel: 3,
				meta: {
					"chai/chai": {
						format: "global",
						exports: "chai.assert"
					}
				},
				npmAlgorithm: "flat",
				npmDependencies: {
					"steal-mocha": true,
					mocha: true,
					chai: true
				},
				map: { "can-zone@0.6.12#assert": "chai/chai" },
				plugins: ["steal-less", "steal-stache"],
				npmIgnore: {
					documentjs: true,
					testee: true,
					"generator-donejs": true,
					"donejs-cli": true,
					"steal-tools": true
				}
			};
		}
	],
	[
		137,
		function(stealRequire, stealExports, stealModule) {
			var atLoader = stealRequire(138);
			var steal = {};
			steal.loader = atLoader;
			steal.done = function() {
				return Promise.resolve();
			};
			stealModule.exports = steal;
		}
	],
	[
		102,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = function(d, s) {
				for (var prop in s) {
					d[prop] = s[prop];
				}
				return d;
			};
		}
	],
	[
		57,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = stealRequire(102);
		}
	],
	[
		19,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = {};
		}
	],
	[
		55,
		function(stealRequire, stealExports, stealModule) {
			var namespace = stealRequire(19);
			var _cid = 0;
			var domExpando = "can" + new Date();
			var cid = function(object, name) {
				var propertyName = object.nodeName ? domExpando : "_cid";
				if (!object[propertyName]) {
					_cid++;
					object[propertyName] = (name || "") + _cid;
				}
				return object[propertyName];
			};
			cid.domExpando = domExpando;
			cid.get = function(object) {
				var propertyName = object.nodeName ? domExpando : "_cid";
				return object[propertyName];
			};
			if (namespace.cid) {
				throw new Error(
					"You can't have two versions of can-cid, check your dependencies"
				);
			} else {
				stealModule.exports = namespace.cid = cid;
			}
		}
	],
	[
		104,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var namespace = stealRequire(19);
			var CID = stealRequire(55);
			var data = {};
			var isEmptyObject = function(obj) {
				for (var prop in obj) {
					return false;
				}
				return true;
			};
			var setData = function(name, value) {
				var id = CID(this),
					store = data[id],
					newStore = false;
				if (!data[id]) {
					newStore = true;
					store = data[id] = {};
				}
				if (name !== undefined) {
					store[name] = value;
				}
				return newStore;
			};
			var deleteNode = function() {
				var id = CID.get(this);
				var nodeDeleted = false;
				if (id && data[id]) {
					nodeDeleted = true;
					delete data[id];
				}
				return nodeDeleted;
			};
			var domDataState = {
				_data: data,
				getCid: function() {
					return CID.get(this);
				},
				cid: function() {
					return CID(this);
				},
				expando: CID.domExpando,
				get: function(key) {
					var id = CID.get(this),
						store = id && data[id];
					return key === undefined
						? store || setData(this)
						: store && store[key];
				},
				set: setData,
				clean: function(prop) {
					var id = CID.get(this);
					var itemData = data[id];
					if (itemData && itemData[prop]) {
						delete itemData[prop];
					}
					if (isEmptyObject(itemData)) {
						deleteNode.call(this);
					}
				},
				delete: deleteNode
			};
			if (namespace.domDataState) {
				throw new Error(
					"You can't have two versions of can-dom-data-state, check your dependencies"
				);
			} else {
				stealModule.exports = namespace.domDataState = domDataState;
			}
		}
	],
	[
		16,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var namespace = stealRequire(19);
				var CanSymbol;
				if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
					CanSymbol = Symbol;
				} else {
					var symbolNum = 0;
					CanSymbol = function CanSymbolPolyfill(description) {
						var symbolValue = "@@symbol" + symbolNum++ + description;
						var symbol = {};
						Object.defineProperties(symbol, {
							toString: {
								value: function() {
									return symbolValue;
								}
							}
						});
						return symbol;
					};
					var descriptionToSymbol = {};
					var symbolToDescription = {};
					CanSymbol.for = function(description) {
						var symbol = descriptionToSymbol[description];
						if (!symbol) {
							symbol = descriptionToSymbol[description] = CanSymbol(
								description
							);
							symbolToDescription[symbol] = description;
						}
						return symbol;
					};
					CanSymbol.keyFor = function(symbol) {
						return symbolToDescription[symbol];
					};
					[
						"hasInstance",
						"isConcatSpreadable",
						"iterator",
						"match",
						"prototype",
						"replace",
						"search",
						"species",
						"split",
						"toPrimitive",
						"toStringTag",
						"unscopables"
					].forEach(function(name) {
						CanSymbol[name] = CanSymbol.for(name);
					});
				}
				[
					"isMapLike",
					"isListLike",
					"isValueLike",
					"isFunctionLike",
					"getOwnKeys",
					"getOwnKeyDescriptor",
					"proto",
					"getOwnEnumerableKeys",
					"hasOwnKey",
					"size",
					"assignDeep",
					"updateDeep",
					"getValue",
					"setValue",
					"getKeyValue",
					"setKeyValue",
					"updateValues",
					"addValue",
					"removeValues",
					"apply",
					"new",
					"onValue",
					"offValue",
					"onKeyValue",
					"offKeyValue",
					"getKeyDependencies",
					"getValueDependencies",
					"keyHasDependencies",
					"valueHasDependencies",
					"onKeys",
					"onKeysAdded",
					"onKeysRemoved"
				].forEach(function(name) {
					CanSymbol.for("can." + name);
				});
				stealModule.exports = namespace.Symbol = CanSymbol;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		79,
		function(stealRequire, stealExports, stealModule) {
			var canSymbol = stealRequire(16);
			stealModule.exports = {
				makeGetFirstSymbolValue: function(symbolNames) {
					var symbols = symbolNames.map(function(name) {
						return canSymbol.for(name);
					});
					var length = symbols.length;
					return function getFirstSymbol(obj) {
						var index = -1;
						while (++index < length) {
							if (obj[symbols[index]] !== undefined) {
								return obj[symbols[index]];
							}
						}
					};
				},
				hasLength: function(list) {
					var type = typeof list;
					var length =
						list &&
						type !== "boolean" &&
						typeof list !== "number" &&
						"length" in list &&
						list.length;
					return (
						typeof list !== "function" &&
						(length === 0 ||
							(typeof length === "number" && length > 0 && length - 1 in list))
					);
				}
			};
		}
	],
	[
		44,
		function(stealRequire, stealExports, stealModule) {
			var canSymbol = stealRequire(16);
			var helpers = stealRequire(79);
			var plainFunctionPrototypePropertyNames = Object.getOwnPropertyNames(
				function() {}.prototype
			);
			var plainFunctionPrototypeProto = Object.getPrototypeOf(
				function() {}.prototype
			);
			function isConstructorLike(func) {
				var value = func[canSymbol.for("can.new")];
				if (value !== undefined) {
					return value;
				}
				if (typeof func !== "function") {
					return false;
				}
				var prototype = func.prototype;
				if (!prototype) {
					return false;
				}
				if (plainFunctionPrototypeProto !== Object.getPrototypeOf(prototype)) {
					return true;
				}
				var propertyNames = Object.getOwnPropertyNames(prototype);
				if (
					propertyNames.length === plainFunctionPrototypePropertyNames.length
				) {
					for (var i = 0, len = propertyNames.length; i < len; i++) {
						if (propertyNames[i] !== plainFunctionPrototypePropertyNames[i]) {
							return true;
						}
					}
					return false;
				} else {
					return true;
				}
			}
			var getNewOrApply = helpers.makeGetFirstSymbolValue([
				"can.new",
				"can.apply"
			]);
			function isFunctionLike(obj) {
				var result,
					symbolValue = obj[canSymbol.for("can.isFunctionLike")];
				if (symbolValue !== undefined) {
					return symbolValue;
				}
				result = getNewOrApply(obj);
				if (result !== undefined) {
					return !!result;
				}
				return typeof obj === "function";
			}
			function isPrimitive(obj) {
				var type = typeof obj;
				if (obj == null || (type !== "function" && type !== "object")) {
					return true;
				} else {
					return false;
				}
			}
			function isBuiltIn(obj) {
				if (
					isPrimitive(obj) ||
					Array.isArray(obj) ||
					isPlainObject(obj) ||
					(Object.prototype.toString.call(obj) !== "[object Object]" &&
						Object.prototype.toString.call(obj).indexOf("[object ") !== -1)
				) {
					return true;
				} else {
					return false;
				}
			}
			function isValueLike(obj) {
				var symbolValue;
				if (isPrimitive(obj)) {
					return true;
				}
				symbolValue = obj[canSymbol.for("can.isValueLike")];
				if (typeof symbolValue !== "undefined") {
					return symbolValue;
				}
				var value = obj[canSymbol.for("can.getValue")];
				if (value !== undefined) {
					return !!value;
				}
			}
			function isMapLike(obj) {
				if (isPrimitive(obj)) {
					return false;
				}
				var isMapLike = obj[canSymbol.for("can.isMapLike")];
				if (typeof isMapLike !== "undefined") {
					return !!isMapLike;
				}
				var value = obj[canSymbol.for("can.getKeyValue")];
				if (value !== undefined) {
					return !!value;
				}
				return true;
			}
			var getObservableLikeSymbol = helpers.makeGetFirstSymbolValue([
				"can.onValue",
				"can.onKeyValue",
				"can.onKeys",
				"can.onKeysAdded"
			]);
			function isObservableLike(obj) {
				if (isPrimitive(obj)) {
					return false;
				}
				var result = getObservableLikeSymbol(obj);
				if (result !== undefined) {
					return !!result;
				}
			}
			function isListLike(list) {
				var symbolValue,
					type = typeof list;
				if (type === "string") {
					return true;
				}
				if (isPrimitive(list)) {
					return false;
				}
				symbolValue = list[canSymbol.for("can.isListLike")];
				if (typeof symbolValue !== "undefined") {
					return symbolValue;
				}
				var value = list[canSymbol.iterator];
				if (value !== undefined) {
					return !!value;
				}
				if (Array.isArray(list)) {
					return true;
				}
				return helpers.hasLength(list);
			}
			var supportsSymbols =
				typeof Symbol !== "undefined" && typeof Symbol.for === "function";
			var isSymbolLike;
			if (supportsSymbols) {
				isSymbolLike = function(symbol) {
					return typeof symbol === "symbol";
				};
			} else {
				var symbolStart = "@@symbol";
				isSymbolLike = function(symbol) {
					if (typeof symbol === "object" && !Array.isArray(symbol)) {
						return (
							symbol.toString().substr(0, symbolStart.length) === symbolStart
						);
					} else {
						return false;
					}
				};
			}
			var coreHasOwn = Object.prototype.hasOwnProperty;
			var funcToString = Function.prototype.toString;
			var objectCtorString = funcToString.call(Object);
			function isPlainObject(obj) {
				if (!obj || typeof obj !== "object") {
					return false;
				}
				var proto = Object.getPrototypeOf(obj);
				if (proto === Object.prototype || proto === null) {
					return true;
				}
				var Constructor =
					coreHasOwn.call(proto, "constructor") && proto.constructor;
				return (
					typeof Constructor === "function" &&
					Constructor instanceof Constructor &&
					funcToString.call(Constructor) === objectCtorString
				);
			}
			stealModule.exports = {
				isConstructorLike: isConstructorLike,
				isFunctionLike: isFunctionLike,
				isListLike: isListLike,
				isMapLike: isMapLike,
				isObservableLike: isObservableLike,
				isPrimitive: isPrimitive,
				isBuiltIn: isBuiltIn,
				isValueLike: isValueLike,
				isSymbolLike: isSymbolLike,
				isMoreListLikeThanMapLike: function(obj) {
					if (Array.isArray(obj)) {
						return true;
					}
					var value = obj[canSymbol.for("can.isMoreListLikeThanMapLike")];
					if (value !== undefined) {
						return value;
					}
					var isListLike = this.isListLike(obj),
						isMapLike = this.isMapLike(obj);
					if (isListLike && !isMapLike) {
						return true;
					} else if (!isListLike && isMapLike) {
						return false;
					}
				},
				isIteratorLike: function(obj) {
					return (
						obj &&
						typeof obj === "object" &&
						typeof obj.next === "function" &&
						obj.next.length === 0
					);
				},
				isPromise: function(obj) {
					return (
						obj instanceof Promise ||
						Object.prototype.toString.call(obj) === "[object Promise]"
					);
				},
				isPlainObject: isPlainObject
			};
		}
	],
	[
		40,
		function(stealRequire, stealExports, stealModule) {
			var canSymbol = stealRequire(16);
			var typeReflections = stealRequire(44);
			stealModule.exports = {
				call: function(func, context) {
					var args = [].slice.call(arguments, 2);
					var apply = func[canSymbol.for("can.apply")];
					if (apply) {
						return apply.call(func, context, args);
					} else {
						return func.apply(context, args);
					}
				},
				apply: function(func, context, args) {
					var apply = func[canSymbol.for("can.apply")];
					if (apply) {
						return apply.call(func, context, args);
					} else {
						return func.apply(context, args);
					}
				},
				new: function(func) {
					var args = [].slice.call(arguments, 1);
					var makeNew = func[canSymbol.for("can.new")];
					if (makeNew) {
						return makeNew.apply(func, args);
					} else {
						var context = Object.create(func.prototype);
						var ret = func.apply(context, args);
						if (typeReflections.isPrimitive(ret)) {
							return context;
						} else {
							return ret;
						}
					}
				}
			};
		}
	],
	[
		41,
		function(stealRequire, stealExports, stealModule) {
			var canSymbol = stealRequire(16);
			var typeReflections = stealRequire(44);
			var setKeyValueSymbol = canSymbol.for("can.setKeyValue"),
				getKeyValueSymbol = canSymbol.for("can.getKeyValue"),
				getValueSymbol = canSymbol.for("can.getValue"),
				setValueSymbol = canSymbol.for("can.setValue");
			var reflections = {
				setKeyValue: function(obj, key, value) {
					if (typeReflections.isSymbolLike(key)) {
						if (typeof key === "symbol") {
							obj[key] = value;
						} else {
							Object.defineProperty(obj, key, {
								enumerable: false,
								configurable: true,
								value: value,
								writable: true
							});
						}
						return;
					}
					var setKeyValue = obj[setKeyValueSymbol];
					if (setKeyValue !== undefined) {
						return setKeyValue.call(obj, key, value);
					} else {
						obj[key] = value;
					}
				},
				getKeyValue: function(obj, key) {
					var getKeyValue = obj[getKeyValueSymbol];
					if (getKeyValue) {
						return getKeyValue.call(obj, key);
					}
					return obj[key];
				},
				deleteKeyValue: function(obj, key) {
					var deleteKeyValue = obj[canSymbol.for("can.deleteKeyValue")];
					if (deleteKeyValue) {
						return deleteKeyValue.call(obj, key);
					}
					delete obj[key];
				},
				getValue: function(value) {
					if (typeReflections.isPrimitive(value)) {
						return value;
					}
					var getValue = value[getValueSymbol];
					if (getValue) {
						return getValue.call(value);
					}
					return value;
				},
				setValue: function(item, value) {
					var setValue = item && item[setValueSymbol];
					if (setValue) {
						return setValue.call(item, value);
					} else {
						throw new Error("can-reflect.setValue - Can not set value.");
					}
				},
				splice: function(obj, index, removing, adding) {
					var howMany;
					if (typeof removing !== "number") {
						var updateValues = obj[canSymbol.for("can.updateValues")];
						if (updateValues) {
							return updateValues.call(obj, index, removing, adding);
						}
						howMany = removing.length;
					} else {
						howMany = removing;
					}
					var splice = obj[canSymbol.for("can.splice")];
					if (splice) {
						return splice.call(obj, index, howMany, adding);
					}
					return [].splice.apply(obj, [index, howMany].concat(adding));
				},
				addValues: function(obj, adding, index) {
					var add = obj[canSymbol.for("can.addValues")];
					if (add) {
						return add.call(obj, adding, index);
					}
					if (Array.isArray(obj) && index === undefined) {
						return obj.push.apply(obj, adding);
					}
					return reflections.splice(obj, index, [], adding);
				},
				removeValues: function(obj, removing, index) {
					var removeValues = obj[canSymbol.for("can.removeValues")];
					if (removeValues) {
						return removeValues.call(obj, removing, index);
					}
					if (Array.isArray(obj) && index === undefined) {
						removing.forEach(function(item) {
							var index = obj.indexOf(item);
							if (index >= 0) {
								obj.splice(index, 1);
							}
						});
						return;
					}
					return reflections.splice(obj, index, removing, []);
				}
			};
			reflections.get = reflections.getKeyValue;
			reflections.set = reflections.setKeyValue;
			reflections["delete"] = reflections.deleteKeyValue;
			stealModule.exports = reflections;
		}
	],
	[
		42,
		function(stealRequire, stealExports, stealModule) {
			var canSymbol = stealRequire(16);
			var slice = [].slice;
			function makeFallback(symbolName, fallbackName) {
				return function(obj, event, handler) {
					var method = obj[canSymbol.for(symbolName)];
					if (method !== undefined) {
						return method.call(obj, event, handler);
					}
					return this[fallbackName].apply(this, arguments);
				};
			}
			function makeErrorIfMissing(symbolName, errorMessage) {
				return function(obj, arg1, arg2) {
					var method = obj[canSymbol.for(symbolName)];
					if (method !== undefined) {
						return method.call(obj, arg1, arg2);
					}
					throw new Error(errorMessage);
				};
			}
			stealModule.exports = {
				onKeyValue: makeFallback("can.onKeyValue", "onEvent"),
				offKeyValue: makeFallback("can.offKeyValue", "offEvent"),
				onKeys: makeErrorIfMissing(
					"can.onKeys",
					"can-reflect: can not observe an onKeys event"
				),
				onKeysAdded: makeErrorIfMissing(
					"can.onKeysAdded",
					"can-reflect: can not observe an onKeysAdded event"
				),
				onKeysRemoved: makeErrorIfMissing(
					"can.onKeysRemoved",
					"can-reflect: can not unobserve an onKeysRemoved event"
				),
				getKeyDependencies: makeErrorIfMissing(
					"can.getKeyDependencies",
					"can-reflect: can not determine dependencies"
				),
				keyHasDependencies: makeErrorIfMissing(
					"can.keyHasDependencies",
					"can-reflect: can not determine if this has key dependencies"
				),
				onValue: makeErrorIfMissing(
					"can.onValue",
					"can-reflect: can not observe value change"
				),
				offValue: makeErrorIfMissing(
					"can.offValue",
					"can-reflect: can not unobserve value change"
				),
				getValueDependencies: makeErrorIfMissing(
					"can.getValueDependencies",
					"can-reflect: can not determine dependencies"
				),
				valueHasDependencies: makeErrorIfMissing(
					"can.valueHasDependencies",
					"can-reflect: can not determine if value has dependencies"
				),
				onEvent: function(obj, eventName, callback) {
					if (obj) {
						var onEvent = obj[canSymbol.for("can.onEvent")];
						if (onEvent !== undefined) {
							return onEvent.call(obj, eventName, callback);
						} else if (obj.addEventListener) {
							obj.addEventListener(eventName, callback);
						}
					}
				},
				offEvent: function(obj, eventName, callback) {
					if (obj) {
						var offEvent = obj[canSymbol.for("can.offEvent")];
						if (offEvent !== undefined) {
							return offEvent.call(obj, eventName, callback);
						} else if (obj.removeEventListener) {
							obj.removeEventListener(eventName, callback);
						}
					}
				}
			};
		}
	],
	[
		43,
		function(stealRequire, stealExports, stealModule) {
			var canSymbol = stealRequire(16);
			var getSetReflections = stealRequire(41);
			var typeReflections = stealRequire(44);
			var helpers = stealRequire(79);
			var shapeReflections;
			var shiftFirstArgumentToThis = function(func) {
				return function() {
					var args = [this];
					args.push.apply(args, arguments);
					return func.apply(null, args);
				};
			};
			var getKeyValueSymbol = canSymbol.for("can.getKeyValue");
			var shiftedGetKeyValue = shiftFirstArgumentToThis(
				getSetReflections.getKeyValue
			);
			var setKeyValueSymbol = canSymbol.for("can.setKeyValue");
			var shiftedSetKeyValue = shiftFirstArgumentToThis(
				getSetReflections.setKeyValue
			);
			var sizeSymbol = canSymbol.for("can.size");
			var serializeMap = null;
			var hasUpdateSymbol = helpers.makeGetFirstSymbolValue([
				"can.updateDeep",
				"can.assignDeep",
				"can.setKeyValue"
			]);
			var shouldUpdateOrAssign = function(obj) {
				return (
					typeReflections.isPlainObject(obj) ||
					Array.isArray(obj) ||
					!!hasUpdateSymbol(obj)
				);
			};
			function isSerializable(obj) {
				if (typeReflections.isPrimitive(obj)) {
					return true;
				}
				if (hasUpdateSymbol(obj)) {
					return false;
				}
				return (
					typeReflections.isBuiltIn(obj) && !typeReflections.isPlainObject(obj)
				);
			}
			var Object_Keys;
			try {
				Object.keys(1);
				Object_Keys = Object.keys;
			} catch (e) {
				Object_Keys = function(obj) {
					if (typeReflections.isPrimitive(obj)) {
						return [];
					} else {
						return Object.keys(obj);
					}
				};
			}
			function makeSerializer(methodName, symbolsToCheck) {
				return function serializer(value, MapType) {
					if (isSerializable(value)) {
						return value;
					}
					var firstSerialize;
					if (MapType && !serializeMap) {
						serializeMap = {
							unwrap: new MapType(),
							serialize: new MapType()
						};
						firstSerialize = true;
					}
					var serialized;
					if (typeReflections.isValueLike(value)) {
						serialized = this[methodName](getSetReflections.getValue(value));
					} else {
						var isListLike =
							typeReflections.isIteratorLike(value) ||
							typeReflections.isMoreListLikeThanMapLike(value);
						serialized = isListLike ? [] : {};
						if (serializeMap) {
							if (serializeMap[methodName].has(value)) {
								return serializeMap[methodName].get(value);
							} else {
								serializeMap[methodName].set(value, serialized);
							}
						}
						for (var i = 0, len = symbolsToCheck.length; i < len; i++) {
							var serializer = value[symbolsToCheck[i]];
							if (serializer) {
								var result = serializer.call(value, serialized);
								if (firstSerialize) {
									serializeMap = null;
								}
								return result;
							}
						}
						if (typeof obj === "function") {
							if (serializeMap) {
								serializeMap[methodName].set(value, value);
							}
							serialized = value;
						} else if (isListLike) {
							this.eachIndex(
								value,
								function(childValue, index) {
									serialized[index] = this[methodName](childValue);
								},
								this
							);
						} else {
							this.eachKey(
								value,
								function(childValue, prop) {
									serialized[prop] = this[methodName](childValue);
								},
								this
							);
						}
					}
					if (firstSerialize) {
						serializeMap = null;
					}
					return serialized;
				};
			}
			var makeMap;
			if (typeof Map !== "undefined") {
				makeMap = function(keys) {
					var map = new Map();
					shapeReflections.eachIndex(keys, function(key) {
						map.set(key, true);
					});
					return map;
				};
			} else {
				makeMap = function(keys) {
					var map = {};
					keys.forEach(function(key) {
						map[key] = true;
					});
					return {
						get: function(key) {
							return map[key];
						},
						set: function(key, value) {
							map[key] = value;
						},
						keys: function() {
							return keys;
						}
					};
				};
			}
			var fastHasOwnKey = function(obj) {
				var hasOwnKey = obj[canSymbol.for("can.hasOwnKey")];
				if (hasOwnKey) {
					return hasOwnKey.bind(obj);
				} else {
					var map = makeMap(shapeReflections.getOwnEnumerableKeys(obj));
					return function(key) {
						return map.get(key);
					};
				}
			};
			function addPatch(patches, patch) {
				var lastPatch = patches[patches.length - 1];
				if (lastPatch) {
					if (
						lastPatch.deleteCount === lastPatch.insert.length &&
						patch.index - lastPatch.index === lastPatch.deleteCount
					) {
						lastPatch.insert.push.apply(lastPatch.insert, patch.insert);
						lastPatch.deleteCount += patch.deleteCount;
						return;
					}
				}
				patches.push(patch);
			}
			function updateDeepList(target, source, isAssign) {
				var sourceArray = this.toArray(source);
				var patches = [],
					lastIndex = -1;
				this.eachIndex(
					target,
					function(curVal, index) {
						lastIndex = index;
						if (index >= sourceArray.length) {
							if (!isAssign) {
								addPatch(patches, {
									index: index,
									deleteCount: sourceArray.length - index + 1,
									insert: []
								});
							}
							return false;
						}
						var newVal = sourceArray[index];
						if (
							typeReflections.isPrimitive(curVal) ||
							typeReflections.isPrimitive(newVal) ||
							shouldUpdateOrAssign(curVal) === false
						) {
							addPatch(patches, {
								index: index,
								deleteCount: 1,
								insert: [newVal]
							});
						} else {
							this.updateDeep(curVal, newVal);
						}
					},
					this
				);
				if (sourceArray.length > lastIndex) {
					addPatch(patches, {
						index: lastIndex + 1,
						deleteCount: 0,
						insert: sourceArray.slice(lastIndex + 1)
					});
				}
				for (var i = 0, patchLen = patches.length; i < patchLen; i++) {
					var patch = patches[i];
					getSetReflections.splice(
						target,
						patch.index,
						patch.deleteCount,
						patch.insert
					);
				}
				return target;
			}
			shapeReflections = {
				each: function(obj, callback, context) {
					if (
						typeReflections.isIteratorLike(obj) ||
						typeReflections.isMoreListLikeThanMapLike(obj)
					) {
						return this.eachIndex(obj, callback, context);
					} else {
						return this.eachKey(obj, callback, context);
					}
				},
				eachIndex: function(list, callback, context) {
					if (Array.isArray(list)) {
						return this.eachListLike(list, callback, context);
					} else {
						var iter,
							iterator = list[canSymbol.iterator];
						if (typeReflections.isIteratorLike(list)) {
							iter = list;
						} else if (iterator) {
							iter = iterator.call(list);
						}
						if (iter) {
							var res,
								index = 0;
							while (!(res = iter.next()).done) {
								if (
									callback.call(context || list, res.value, index++, list) ===
									false
								) {
									break;
								}
							}
						} else {
							this.eachListLike(list, callback, context);
						}
					}
					return list;
				},
				eachListLike: function(list, callback, context) {
					var index = -1;
					var length = list.length;
					if (length === undefined) {
						var size = list[sizeSymbol];
						if (size) {
							length = size.call(list);
						} else {
							throw new Error("can-reflect: unable to iterate.");
						}
					}
					while (++index < length) {
						var item = list[index];
						if (callback.call(context || item, item, index, list) === false) {
							break;
						}
					}
					return list;
				},
				toArray: function(obj) {
					var arr = [];
					this.each(obj, function(value) {
						arr.push(value);
					});
					return arr;
				},
				eachKey: function(obj, callback, context) {
					if (obj) {
						var enumerableKeys = this.getOwnEnumerableKeys(obj);
						var getKeyValue = obj[getKeyValueSymbol] || shiftedGetKeyValue;
						return this.eachIndex(enumerableKeys, function(key) {
							var value = getKeyValue.call(obj, key);
							return callback.call(context || obj, value, key, obj);
						});
					}
					return obj;
				},
				hasOwnKey: function(obj, key) {
					var hasOwnKey = obj[canSymbol.for("can.hasOwnKey")];
					if (hasOwnKey) {
						return hasOwnKey.call(obj, key);
					}
					var getOwnKeys = obj[canSymbol.for("can.getOwnKeys")];
					if (getOwnKeys) {
						var found = false;
						this.eachIndex(getOwnKeys.call(obj), function(objKey) {
							if (objKey === key) {
								found = true;
								return false;
							}
						});
						return found;
					}
					return obj.hasOwnProperty(key);
				},
				getOwnEnumerableKeys: function(obj) {
					var getOwnEnumerableKeys =
						obj[canSymbol.for("can.getOwnEnumerableKeys")];
					if (getOwnEnumerableKeys) {
						return getOwnEnumerableKeys.call(obj);
					}
					if (
						obj[canSymbol.for("can.getOwnKeys")] &&
						obj[canSymbol.for("can.getOwnKeyDescriptor")]
					) {
						var keys = [];
						this.eachIndex(
							this.getOwnKeys(obj),
							function(key) {
								var descriptor = this.getOwnKeyDescriptor(obj, key);
								if (descriptor.enumerable) {
									keys.push(key);
								}
							},
							this
						);
						return keys;
					} else {
						return Object_Keys(obj);
					}
				},
				getOwnKeys: function(obj) {
					var getOwnKeys = obj[canSymbol.for("can.getOwnKeys")];
					if (getOwnKeys) {
						return getOwnKeys.call(obj);
					} else {
						return Object.getOwnPropertyNames(obj);
					}
				},
				getOwnKeyDescriptor: function(obj, key) {
					var getOwnKeyDescriptor =
						obj[canSymbol.for("can.getOwnKeyDescriptor")];
					if (getOwnKeyDescriptor) {
						return getOwnKeyDescriptor.call(obj, key);
					} else {
						return Object.getOwnPropertyDescriptor(obj, key);
					}
				},
				unwrap: makeSerializer("unwrap", [canSymbol.for("can.unwrap")]),
				serialize: makeSerializer("serialize", [
					canSymbol.for("can.serialize"),
					canSymbol.for("can.unwrap")
				]),
				assignMap: function(target, source) {
					var hasOwnKey = fastHasOwnKey(target);
					var getKeyValue = target[getKeyValueSymbol] || shiftedGetKeyValue;
					var setKeyValue = target[setKeyValueSymbol] || shiftedSetKeyValue;
					this.eachKey(source, function(value, key) {
						if (!hasOwnKey(key) || getKeyValue.call(target, key) !== value) {
							setKeyValue.call(target, key, value);
						}
					});
					return target;
				},
				assignList: function(target, source) {
					var inserting = this.toArray(source);
					getSetReflections.splice(target, 0, inserting, inserting);
					return target;
				},
				assign: function(target, source) {
					if (
						typeReflections.isIteratorLike(source) ||
						typeReflections.isMoreListLikeThanMapLike(source)
					) {
						this.assignList(target, source);
					} else {
						this.assignMap(target, source);
					}
					return target;
				},
				assignDeepMap: function(target, source) {
					var hasOwnKey = fastHasOwnKey(target);
					var getKeyValue = target[getKeyValueSymbol] || shiftedGetKeyValue;
					var setKeyValue = target[setKeyValueSymbol] || shiftedSetKeyValue;
					this.eachKey(
						source,
						function(newVal, key) {
							if (!hasOwnKey(key)) {
								getSetReflections.setKeyValue(target, key, newVal);
							} else {
								var curVal = getKeyValue.call(target, key);
								if (newVal === curVal) {
								} else if (
									typeReflections.isPrimitive(curVal) ||
									typeReflections.isPrimitive(newVal) ||
									shouldUpdateOrAssign(curVal) === false
								) {
									setKeyValue.call(target, key, newVal);
								} else {
									this.assignDeep(curVal, newVal);
								}
							}
						},
						this
					);
					return target;
				},
				assignDeepList: function(target, source) {
					return updateDeepList.call(this, target, source, true);
				},
				assignDeep: function(target, source) {
					var assignDeep = target[canSymbol.for("can.assignDeep")];
					if (assignDeep) {
						assignDeep.call(target, source);
					} else if (typeReflections.isMoreListLikeThanMapLike(source)) {
						this.assignDeepList(target, source);
					} else {
						this.assignDeepMap(target, source);
					}
					return target;
				},
				updateMap: function(target, source) {
					var sourceKeyMap = makeMap(this.getOwnEnumerableKeys(source));
					var sourceGetKeyValue =
						source[getKeyValueSymbol] || shiftedGetKeyValue;
					var targetSetKeyValue =
						target[setKeyValueSymbol] || shiftedSetKeyValue;
					this.eachKey(
						target,
						function(curVal, key) {
							if (!sourceKeyMap.get(key)) {
								getSetReflections.deleteKeyValue(target, key);
								return;
							}
							sourceKeyMap.set(key, false);
							var newVal = sourceGetKeyValue.call(source, key);
							if (newVal !== curVal) {
								targetSetKeyValue.call(target, key, newVal);
							}
						},
						this
					);
					this.eachIndex(sourceKeyMap.keys(), function(key) {
						if (sourceKeyMap.get(key)) {
							targetSetKeyValue.call(
								target,
								key,
								sourceGetKeyValue.call(source, key)
							);
						}
					});
					return target;
				},
				updateList: function(target, source) {
					var inserting = this.toArray(source);
					getSetReflections.splice(target, 0, target, inserting);
					return target;
				},
				update: function(target, source) {
					if (
						typeReflections.isIteratorLike(source) ||
						typeReflections.isMoreListLikeThanMapLike(source)
					) {
						this.updateList(target, source);
					} else {
						this.updateMap(target, source);
					}
					return target;
				},
				updateDeepMap: function(target, source) {
					var sourceKeyMap = makeMap(this.getOwnEnumerableKeys(source));
					var sourceGetKeyValue =
						source[getKeyValueSymbol] || shiftedGetKeyValue;
					var targetSetKeyValue =
						target[setKeyValueSymbol] || shiftedSetKeyValue;
					this.eachKey(
						target,
						function(curVal, key) {
							if (!sourceKeyMap.get(key)) {
								getSetReflections.deleteKeyValue(target, key);
								return;
							}
							sourceKeyMap.set(key, false);
							var newVal = sourceGetKeyValue.call(source, key);
							if (
								typeReflections.isPrimitive(curVal) ||
								typeReflections.isPrimitive(newVal) ||
								shouldUpdateOrAssign(curVal) === false
							) {
								targetSetKeyValue.call(target, key, newVal);
							} else {
								this.updateDeep(curVal, newVal);
							}
						},
						this
					);
					this.eachIndex(sourceKeyMap.keys(), function(key) {
						if (sourceKeyMap.get(key)) {
							targetSetKeyValue.call(
								target,
								key,
								sourceGetKeyValue.call(source, key)
							);
						}
					});
					return target;
				},
				updateDeepList: function(target, source) {
					return updateDeepList.call(this, target, source);
				},
				updateDeep: function(target, source) {
					var updateDeep = target[canSymbol.for("can.updateDeep")];
					if (updateDeep) {
						updateDeep.call(target, source);
					} else if (typeReflections.isMoreListLikeThanMapLike(source)) {
						this.updateDeepList(target, source);
					} else {
						this.updateDeepMap(target, source);
					}
					return target;
				},
				in: function() {},
				getAllEnumerableKeys: function() {},
				getAllKeys: function() {},
				assignSymbols: function(target, source) {
					this.eachKey(source, function(value, key) {
						getSetReflections.setKeyValue(target, canSymbol.for(key), value);
					});
					return target;
				},
				isSerializable: isSerializable,
				size: function(obj) {
					var size = obj[sizeSymbol];
					var count = 0;
					if (size) {
						return size.call(obj);
					} else if (helpers.hasLength(obj)) {
						return obj.length;
					} else if (typeReflections.isListLike(obj)) {
						this.each(obj, function() {
							count++;
						});
						return count;
					} else if (obj) {
						for (var prop in obj) {
							if (obj.hasOwnProperty(prop)) {
								count++;
							}
						}
						return count;
					} else {
						return undefined;
					}
				}
			};
			shapeReflections.keys = shapeReflections.getOwnEnumerableKeys;
			stealModule.exports = shapeReflections;
		}
	],
	[
		45,
		function(stealRequire, stealExports, stealModule) {
			var shape = stealRequire(43);
			var CanSymbol = stealRequire(16);
			function keysPolyfill() {
				var keys = [];
				var currentIndex = 0;
				this.forEach(function(val, key) {
					keys.push(key);
				});
				return {
					next: function() {
						return {
							value: keys[currentIndex],
							done: currentIndex++ === keys.length
						};
					}
				};
			}
			if (typeof Map !== "undefined") {
				shape.assignSymbols(Map.prototype, {
					"can.getOwnEnumerableKeys": Map.prototype.keys,
					"can.setKeyValue": Map.prototype.set,
					"can.getKeyValue": Map.prototype.get,
					"can.deleteKeyValue": Map.prototype["delete"],
					"can.hasOwnKey": Map.prototype.has
				});
				if (typeof Map.prototype.keys !== "function") {
					Map.prototype.keys = Map.prototype[
						CanSymbol.for("can.getOwnEnumerableKeys")
					] = keysPolyfill;
				}
			}
			if (typeof WeakMap !== "undefined") {
				shape.assignSymbols(WeakMap.prototype, {
					"can.getOwnEnumerableKeys": function() {
						throw new Error(
							"can-reflect: WeakMaps do not have enumerable keys."
						);
					},
					"can.setKeyValue": WeakMap.prototype.set,
					"can.getKeyValue": WeakMap.prototype.get,
					"can.deleteKeyValue": WeakMap.prototype["delete"],
					"can.hasOwnKey": WeakMap.prototype.has
				});
			}
		}
	],
	[
		46,
		function(stealRequire, stealExports, stealModule) {
			var shape = stealRequire(43);
			var CanSymbol = stealRequire(16);
			if (typeof Set !== "undefined") {
				shape.assignSymbols(Set.prototype, {
					"can.isMoreListLikeThanMapLike": true,
					"can.updateValues": function(index, removing, adding) {
						if (removing !== adding) {
							shape.each(
								removing,
								function(value) {
									this.delete(value);
								},
								this
							);
						}
						shape.each(
							adding,
							function(value) {
								this.add(value);
							},
							this
						);
					},
					"can.size": function() {
						return this.size;
					}
				});
				if (typeof Set.prototype[CanSymbol.iterator] !== "function") {
					Set.prototype[CanSymbol.iterator] = function() {
						var arr = [];
						var currentIndex = 0;
						this.forEach(function(val) {
							arr.push(val);
						});
						return {
							next: function() {
								return {
									value: arr[currentIndex],
									done: currentIndex++ === arr.length
								};
							}
						};
					};
				}
			}
			if (typeof WeakSet !== "undefined") {
				shape.assignSymbols(WeakSet.prototype, {
					"can.isListLike": true,
					"can.isMoreListLikeThanMapLike": true,
					"can.updateValues": function(index, removing, adding) {
						if (removing !== adding) {
							shape.each(
								removing,
								function(value) {
									this.delete(value);
								},
								this
							);
						}
						shape.each(
							adding,
							function(value) {
								this.add(value);
							},
							this
						);
					},
					"can.size": function() {
						throw new Error(
							"can-reflect: WeakSets do not have enumerable keys."
						);
					}
				});
			}
		}
	],
	[
		28,
		function(stealRequire, stealExports, stealModule) {
			var functionReflections = stealRequire(40);
			var getSet = stealRequire(41);
			var observe = stealRequire(42);
			var shape = stealRequire(43);
			var type = stealRequire(44);
			var namespace = stealRequire(19);
			var reflect = {};
			[functionReflections, getSet, observe, shape, type].forEach(function(
				reflections
			) {
				for (var prop in reflections) {
					reflect[prop] = reflections[prop];
				}
			});
			stealRequire(45);
			stealRequire(46);
			stealModule.exports = namespace.Reflect = reflect;
		}
	],
	[
		103,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var canReflect = stealRequire(28);
				function dispatch(key, value) {
					var handlers = this.eventHandlers[key];
					if (handlers) {
						var handlersCopy = handlers.slice();
						for (var i = 0; i < handlersCopy.length; i++) {
							handlersCopy[i](value);
						}
					}
				}
				function Globals() {
					this.eventHandlers = {};
					this.properties = {};
				}
				Globals.prototype.define = function(key, value, enableCache) {
					if (enableCache === undefined) {
						enableCache = true;
					}
					if (!this.properties[key]) {
						this.properties[key] = {
							default: value,
							value: value,
							enableCache: enableCache
						};
					}
					return this;
				};
				Globals.prototype.getKeyValue = function(key) {
					var property = this.properties[key];
					if (property) {
						if (typeof property.value === "function") {
							if (property.cachedValue) {
								return property.cachedValue;
							}
							if (property.enableCache) {
								property.cachedValue = property.value();
								return property.cachedValue;
							} else {
								return property.value();
							}
						}
						return property.value;
					}
				};
				Globals.prototype.makeExport = function(key) {
					return function(value) {
						if (arguments.length === 0) {
							return this.getKeyValue(key);
						}
						if (typeof value === "undefined" || value === null) {
							this.deleteKeyValue(key);
						} else {
							if (typeof value === "function") {
								this.setKeyValue(key, function() {
									return value;
								});
							} else {
								this.setKeyValue(key, value);
							}
							return value;
						}
					}.bind(this);
				};
				Globals.prototype.offKeyValue = function(key, handler) {
					if (this.properties[key]) {
						var handlers = this.eventHandlers[key];
						if (handlers) {
							var i = handlers.indexOf(handler);
							handlers.splice(i, 1);
						}
					}
					return this;
				};
				Globals.prototype.onKeyValue = function(key, handler) {
					if (this.properties[key]) {
						if (!this.eventHandlers[key]) {
							this.eventHandlers[key] = [];
						}
						this.eventHandlers[key].push(handler);
					}
					return this;
				};
				Globals.prototype.deleteKeyValue = function(key) {
					var property = this.properties[key];
					if (property !== undefined) {
						property.value = property.default;
						property.cachedValue = undefined;
						dispatch.call(this, key, property.value);
					}
					return this;
				};
				Globals.prototype.setKeyValue = function(key, value) {
					if (!this.properties[key]) {
						return this.define(key, value);
					}
					var property = this.properties[key];
					property.value = value;
					property.cachedValue = undefined;
					dispatch.call(this, key, value);
					return this;
				};
				Globals.prototype.reset = function() {
					for (var key in this.properties) {
						if (this.properties.hasOwnProperty(key)) {
							this.properties[key].cachedValue = undefined;
							dispatch.call(this, key, this.getKeyValue(key));
						}
					}
					return this;
				};
				canReflect.assignSymbols(Globals.prototype, {
					"can.getKeyValue": Globals.prototype.getKeyValue,
					"can.setKeyValue": Globals.prototype.setKeyValue,
					"can.deleteKeyValue": Globals.prototype.deleteKeyValue,
					"can.onKeyValue": Globals.prototype.onKeyValue,
					"can.offKeyValue": Globals.prototype.offKeyValue
				});
				stealModule.exports = Globals;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		90,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var namespace = stealRequire(19);
				var Globals = stealRequire(103);
				var globals = new Globals();
				if (namespace.globals) {
					throw new Error(
						"You can't have two versions of can-globals, check your dependencies"
					);
				} else {
					stealModule.exports = namespace.globals = globals;
				}
				stealModule.exports = globals;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		74,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var globals = stealRequire(90);
				globals.define("global", function() {
					return typeof WorkerGlobalScope !== "undefined" &&
						self instanceof WorkerGlobalScope
						? self
						: typeof process === "object" &&
							{}.toString.call(process) === "[object process]"
							? global
							: window;
				});
				stealModule.exports = globals.makeExport("global");
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		63,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				stealRequire(74);
				var globals = stealRequire(90);
				globals.define("document", function() {
					return globals.getKeyValue("global").document;
				});
				stealModule.exports = globals.makeExport("document");
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		66,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				stealRequire(74);
				var globals = stealRequire(90);
				globals.define("MutationObserver", function() {
					var GLOBAL = globals.getKeyValue("global");
					return (
						GLOBAL.MutationObserver ||
						GLOBAL.WebKitMutationObserver ||
						GLOBAL.MozMutationObserver
					);
				});
				stealModule.exports = globals.makeExport("MutationObserver");
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		14,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			function isArrayLike(obj) {
				var type = typeof obj;
				if (type === "string") {
					return true;
				} else if (type === "number") {
					return false;
				}
				var length =
					obj &&
					type !== "boolean" &&
					typeof obj !== "number" &&
					"length" in obj &&
					obj.length;
				return (
					typeof obj !== "function" &&
					(length === 0 ||
						(typeof length === "number" && length > 0 && length - 1 in obj))
				);
			}
			stealModule.exports = isArrayLike;
		}
	],
	[
		15,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var canSymbol = stealRequire(16);
			stealModule.exports = function(obj) {
				return obj && !!obj[canSymbol.iterator || canSymbol.for("iterator")];
			};
		}
	],
	[
		12,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var isArrayLike = stealRequire(14);
			var has = Object.prototype.hasOwnProperty;
			var isIterable = stealRequire(15);
			var canSymbol = stealRequire(16);
			function each(elements, callback, context) {
				var i = 0,
					key,
					len,
					item;
				if (elements) {
					if (isArrayLike(elements)) {
						for (len = elements.length; i < len; i++) {
							item = elements[i];
							if (callback.call(context || item, item, i, elements) === false) {
								break;
							}
						}
					} else if (isIterable(elements)) {
						var iter = elements[
							canSymbol.iterator || canSymbol.for("iterator")
						]();
						var res, value;
						while (!(res = iter.next()).done) {
							value = res.value;
							callback.call(
								context || elements,
								Array.isArray(value) ? value[1] : value,
								value[0]
							);
						}
					} else if (typeof elements === "object") {
						for (key in elements) {
							if (
								has.call(elements, key) &&
								callback.call(
									context || elements[key],
									elements[key],
									key,
									elements
								) === false
							) {
								break;
							}
						}
					}
				}
				return elements;
			}
			stealModule.exports = each;
		}
	],
	[
		84,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = {
				each: function(obj, cb, context) {
					for (var prop in obj) {
						cb.call(context, obj[prop], prop);
					}
					return obj;
				}
			};
		}
	],
	[
		89,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var getCID = stealRequire(55);
			var each = stealRequire(84);
			var CIDSet;
			if (typeof Set !== "undefined") {
				CIDSet = Set;
			} else {
				var CIDSet = function() {
					this.values = {};
				};
				CIDSet.prototype.add = function(value) {
					this.values[getCID(value)] = value;
				};
				CIDSet.prototype["delete"] = function(key) {
					var has = getCID(key) in this.values;
					if (has) {
						delete this.values[getCID(key)];
					}
					return has;
				};
				CIDSet.prototype.forEach = function(cb, thisArg) {
					each(this.values, cb, thisArg);
				};
				CIDSet.prototype.has = function(value) {
					return getCID(value) in this.values;
				};
				CIDSet.prototype.clear = function() {
					return (this.values = {});
				};
				Object.defineProperty(CIDSet.prototype, "size", {
					get: function() {
						var size = 0;
						each(this.values, function() {
							size++;
						});
						return size;
					}
				});
			}
			stealModule.exports = CIDSet;
		}
	],
	[
		38,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var each = stealRequire(12);
			var isArrayLike = stealRequire(14);
			function makeArray(element) {
				var ret = [];
				if (isArrayLike(element)) {
					each(element, function(a, i) {
						ret[i] = a;
					});
				} else if (element === 0 || element) {
					ret.push(element);
				}
				return ret;
			}
			stealModule.exports = makeArray;
		}
	],
	[
		101,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = function(current) {
				return /^f|^o/.test(typeof current);
			};
		}
	],
	[
		87,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var isContainer = stealRequire(101);
			function get(obj, name) {
				var parts =
						typeof name !== "undefined"
							? (name + "")
									.replace(/\[/g, ".")
									.replace(/]/g, "")
									.split(".")
							: [],
					length = parts.length,
					current,
					i,
					container;
				if (!length) {
					return obj;
				}
				current = obj;
				for (i = 0; i < length && isContainer(current); i++) {
					container = current;
					current = container[parts[i]];
				}
				return current;
			}
			stealModule.exports = get;
		}
	],
	[
		47,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealExports.warnTimeout = 5000;
			stealExports.logLevel = 0;
			stealExports.warn = function(out) {
				var ll = this.logLevel;
				if (ll < 2) {
					Array.prototype.unshift.call(arguments, "WARN:");
					if (typeof console !== "undefined" && console.warn) {
						this._logger("warn", Array.prototype.slice.call(arguments));
					} else if (typeof console !== "undefined" && console.log) {
						this._logger("log", Array.prototype.slice.call(arguments));
					} else if (window && window.opera && window.opera.postError) {
						window.opera.postError("CanJS WARNING: " + out);
					}
				}
			};
			stealExports.log = function(out) {
				var ll = this.logLevel;
				if (ll < 1) {
					if (typeof console !== "undefined" && console.log) {
						Array.prototype.unshift.call(arguments, "INFO:");
						this._logger("log", Array.prototype.slice.call(arguments));
					} else if (window && window.opera && window.opera.postError) {
						window.opera.postError("CanJS INFO: " + out);
					}
				}
			};
			stealExports.error = function(out) {
				var ll = this.logLevel;
				if (ll < 1) {
					if (typeof console !== "undefined" && console.error) {
						Array.prototype.unshift.call(arguments, "ERROR:");
						this._logger("error", Array.prototype.slice.call(arguments));
					} else if (window && window.opera && window.opera.postError) {
						window.opera.postError("ERROR: " + out);
					}
				}
			};
			stealExports._logger = function(type, arr) {
				try {
					console[type].apply(console, arr);
				} catch (e) {
					console[type](arr);
				}
			};
		}
	],
	[
		29,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var canLog = stealRequire(47);
			stealModule.exports = {
				warnTimeout: 5000,
				logLevel: 0,
				stringify: function(value) {
					var flagUndefined = function flagUndefined(key, value) {
						return value === undefined ? "/* void(undefined) */" : value;
					};
					return JSON.stringify(value, flagUndefined, "  ").replace(
						/"\/\* void\(undefined\) \*\/"/g,
						"undefined"
					);
				},
				warn: function() {},
				log: function() {},
				error: function() {},
				_logger: canLog._logger
			};
		}
	],
	[
		108,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var dev = stealRequire(29);
			var hasWarned = false;
			stealModule.exports = function(arr) {
				return Array.isArray(arr);
			};
		}
	],
	[
		97,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var get = stealRequire(87);
			var isContainer = stealRequire(101);
			var canDev = stealRequire(29);
			var isArray = stealRequire(108);
			var strUndHash = /_|-/,
				strColons = /\=\=/,
				strWords = /([A-Z]+)([A-Z][a-z])/g,
				strLowUp = /([a-z\d])([A-Z])/g,
				strDash = /([a-z\d])([A-Z])/g,
				strReplacer = /\{([^\}]+)\}/g,
				strQuote = /"/g,
				strSingleQuote = /'/g,
				strHyphenMatch = /-+(.)?/g,
				strCamelMatch = /[a-z][A-Z]/g,
				convertBadValues = function(content) {
					var isInvalid =
						content === null ||
						content === undefined ||
						(isNaN(content) && "" + content === "NaN");
					return "" + (isInvalid ? "" : content);
				},
				deleteAtPath = function(data, path) {
					var parts = path
						? path
								.replace(/\[/g, ".")
								.replace(/]/g, "")
								.split(".")
						: [];
					var current = data;
					for (var i = 0; i < parts.length - 1; i++) {
						if (current) {
							current = current[parts[i]];
						}
					}
					if (current) {
						delete current[parts[parts.length - 1]];
					}
				};
			var string = {
				esc: function(content) {
					return convertBadValues(content)
						.replace(/&/g, "&amp;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;")
						.replace(strQuote, "&#34;")
						.replace(strSingleQuote, "&#39;");
				},
				getObject: function(name, roots) {
					roots = isArray(roots) ? roots : [roots || window];
					var result,
						l = roots.length;
					for (var i = 0; i < l; i++) {
						result = get(roots[i], name);
						if (result) {
							return result;
						}
					}
				},
				capitalize: function(s, cache) {
					return s.charAt(0).toUpperCase() + s.slice(1);
				},
				camelize: function(str) {
					return convertBadValues(str).replace(strHyphenMatch, function(
						match,
						chr
					) {
						return chr ? chr.toUpperCase() : "";
					});
				},
				hyphenate: function(str) {
					return convertBadValues(str).replace(strCamelMatch, function(
						str,
						offset
					) {
						return str.charAt(0) + "-" + str.charAt(1).toLowerCase();
					});
				},
				underscore: function(s) {
					return s
						.replace(strColons, "/")
						.replace(strWords, "$1_$2")
						.replace(strLowUp, "$1_$2")
						.replace(strDash, "_")
						.toLowerCase();
				},
				sub: function(str, data, remove) {
					var obs = [];
					str = str || "";
					obs.push(
						str.replace(strReplacer, function(whole, inside) {
							var ob = get(data, inside);
							if (remove === true) {
								deleteAtPath(data, inside);
							}
							if (ob === undefined || ob === null) {
								obs = null;
								return "";
							}
							if (isContainer(ob) && obs) {
								obs.push(ob);
								return "";
							}
							return "" + ob;
						})
					);
					return obs === null ? obs : obs.length <= 1 ? obs[0] : obs;
				},
				replacer: strReplacer,
				undHash: strUndHash
			};
			stealModule.exports = string;
		}
	],
	[
		96,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var getDocument = stealRequire(63);
				var domDataState = stealRequire(104);
				var getMutationObserver = stealRequire(66);
				var each = stealRequire(12);
				var CIDStore = stealRequire(89);
				var makeArray = stealRequire(38);
				var string = stealRequire(97);
				var dispatchIfListening = function(mutatedNode, nodes, dispatched) {
					if (dispatched.has(mutatedNode)) {
						return true;
					}
					dispatched.add(mutatedNode);
					if (nodes.name === "removedNodes") {
						var documentElement = getDocument().documentElement;
						if (documentElement.contains(mutatedNode)) {
							return;
						}
					}
					nodes.handlers.forEach(function(handler) {
						handler(mutatedNode);
					});
					nodes.afterHandlers.forEach(function(handler) {
						handler(mutatedNode);
					});
				};
				var mutationObserverDocument = {
					add: function(handler) {
						var MO = getMutationObserver();
						if (MO) {
							var documentElement = getDocument().documentElement;
							var globalObserverData = domDataState.get.call(
								documentElement,
								"globalObserverData"
							);
							if (!globalObserverData) {
								var observer = new MO(function(mutations) {
									globalObserverData.handlers.forEach(function(handler) {
										handler(mutations);
									});
								});
								observer.observe(documentElement, {
									childList: true,
									subtree: true
								});
								globalObserverData = {
									observer: observer,
									handlers: []
								};
								domDataState.set.call(
									documentElement,
									"globalObserverData",
									globalObserverData
								);
							}
							globalObserverData.handlers.push(handler);
						}
					},
					remove: function(handler) {
						var documentElement = getDocument().documentElement;
						var globalObserverData = domDataState.get.call(
							documentElement,
							"globalObserverData"
						);
						if (globalObserverData) {
							var index = globalObserverData.handlers.indexOf(handler);
							if (index >= 0) {
								globalObserverData.handlers.splice(index, 1);
							}
							if (globalObserverData.handlers.length === 0) {
								globalObserverData.observer.disconnect();
								domDataState.clean.call(documentElement, "globalObserverData");
							}
						}
					}
				};
				var makeMutationMethods = function(name) {
					var mutationName = name.toLowerCase() + "Nodes";
					var getMutationData = function() {
						var documentElement = getDocument().documentElement;
						var mutationData = domDataState.get.call(
							documentElement,
							mutationName + "MutationData"
						);
						if (!mutationData) {
							mutationData = {
								name: mutationName,
								handlers: [],
								afterHandlers: [],
								hander: null
							};
							if (getMutationObserver()) {
								domDataState.set.call(
									documentElement,
									mutationName + "MutationData",
									mutationData
								);
							}
						}
						return mutationData;
					};
					var setup = function() {
						var mutationData = getMutationData();
						if (
							mutationData.handlers.length === 0 ||
							mutationData.afterHandlers.length === 0
						) {
							mutationData.handler = function(mutations) {
								var dispatched = new CIDStore();
								mutations.forEach(function(mutation) {
									each(mutation[mutationName], function(mutatedNode) {
										var children =
											mutatedNode.getElementsByTagName &&
											makeArray(mutatedNode.getElementsByTagName("*"));
										var alreadyChecked = dispatchIfListening(
											mutatedNode,
											mutationData,
											dispatched
										);
										if (children && !alreadyChecked) {
											for (
												var j = 0, child;
												(child = children[j]) !== undefined;
												j++
											) {
												dispatchIfListening(child, mutationData, dispatched);
											}
										}
									});
								});
							};
							this.add(mutationData.handler);
						}
						return mutationData;
					};
					var teardown = function() {
						var documentElement = getDocument().documentElement;
						var mutationData = getMutationData();
						if (
							mutationData.handlers.length === 0 &&
							mutationData.afterHandlers.length === 0
						) {
							this.remove(mutationData.handler);
							domDataState.clean.call(
								documentElement,
								mutationName + "MutationData"
							);
						}
					};
					var createOnOffHandlers = function(name, handlerList) {
						mutationObserverDocument["on" + name] = function(handler) {
							var mutationData = setup.call(this);
							mutationData[handlerList].push(handler);
						};
						mutationObserverDocument["off" + name] = function(handler) {
							var mutationData = getMutationData();
							var index = mutationData[handlerList].indexOf(handler);
							if (index >= 0) {
								mutationData[handlerList].splice(index, 1);
							}
							teardown.call(this);
						};
					};
					var createHandlers = function(name) {
						createOnOffHandlers(name, "handlers");
						createOnOffHandlers("After" + name, "afterHandlers");
					};
					createHandlers(string.capitalize(mutationName));
				};
				makeMutationMethods("added");
				makeMutationMethods("removed");
				stealModule.exports = mutationObserverDocument;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		69,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var domDataState = stealRequire(104);
			var mutationDocument = stealRequire(96);
			var deleteNode = function() {
				return domDataState.delete.call(this);
			};
			var elementSetCount = 0;
			var cleanupDomData = function(node) {
				elementSetCount -= deleteNode.call(node) ? 1 : 0;
				if (elementSetCount === 0) {
					mutationDocument.offAfterRemovedNodes(cleanupDomData);
				}
			};
			stealModule.exports = {
				getCid: domDataState.getCid,
				cid: domDataState.cid,
				expando: domDataState.expando,
				clean: domDataState.clean,
				get: domDataState.get,
				set: function(name, value) {
					if (elementSetCount === 0) {
						mutationDocument.onAfterRemovedNodes(cleanupDomData);
					}
					elementSetCount += domDataState.set.call(this, name, value) ? 1 : 0;
				},
				delete: deleteNode
			};
		}
	],
	[
		123,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				stealModule.exports = stealRequire(63);
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		49,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			function childNodes(node) {
				var childNodes = node.childNodes;
				if ("length" in childNodes) {
					return childNodes;
				} else {
					var cur = node.firstChild;
					var nodes = [];
					while (cur) {
						nodes.push(cur);
						cur = cur.nextSibling;
					}
					return nodes;
				}
			}
			stealModule.exports = childNodes;
		}
	],
	[
		60,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var isFunction = (function() {
				if (
					typeof document !== "undefined" &&
					typeof document.getElementsByTagName("body") === "function"
				) {
					return function(value) {
						return (
							Object.prototype.toString.call(value) === "[object Function]"
						);
					};
				}
				return function(value) {
					return typeof value === "function";
				};
			})();
			stealModule.exports = isFunction;
		}
	],
	[
		124,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var isFunction = stealRequire(60);
				var global = stealRequire(74)();
				stealModule.exports = function(moduleName, parentName) {
					return new Promise(function(resolve, reject) {
						try {
							if (
								typeof global.System === "object" &&
								isFunction(global.System["import"])
							) {
								global.System
									["import"](moduleName, { name: parentName })
									.then(resolve, reject);
							} else if (global.define && global.define.amd) {
								global.require([moduleName], function(value) {
									resolve(value);
								});
							} else if (global.require) {
								resolve(global.require(moduleName));
							} else {
								resolve();
							}
						} catch (err) {
							reject(err);
						}
					});
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		65,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var global = stealRequire(74)();
				stealModule.exports =
					global.setImmediate ||
					function(cb) {
						return setTimeout(cb, 0);
					};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		67,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = function(child) {
				return this.contains(child);
			};
		}
	],
	[
		80,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				stealModule.exports = function() {
					return (
						typeof window !== "undefined" &&
						typeof document !== "undefined" &&
						typeof SimpleDOM === "undefined"
					);
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		81,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var core_hasOwn = Object.prototype.hasOwnProperty;
			function isWindow(obj) {
				return obj !== null && obj == obj.window;
			}
			function isPlainObject(obj) {
				if (
					!obj ||
					typeof obj !== "object" ||
					obj.nodeType ||
					isWindow(obj) ||
					(obj.constructor && obj.constructor.shortName)
				) {
					return false;
				}
				try {
					if (
						obj.constructor &&
						!core_hasOwn.call(obj, "constructor") &&
						!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")
					) {
						return false;
					}
				} catch (e) {
					return false;
				}
				var key;
				for (key in obj) {
				}
				return key === undefined || core_hasOwn.call(obj, key);
			}
			stealModule.exports = isPlainObject;
		}
	],
	[
		48,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var getDocument = stealRequire(63);
				var isBrowserWindow = stealRequire(80);
				var isPlainObject = stealRequire(81);
				var fixSyntheticEventsOnDisabled = false;
				var dev = stealRequire(29);
				function isDispatchingOnDisabled(element, ev) {
					var isInsertedOrRemoved = isPlainObject(ev)
						? ev.type === "inserted" || ev.type === "removed"
						: ev === "inserted" || ev === "removed";
					var isDisabled = !!element.disabled;
					return isInsertedOrRemoved && isDisabled;
				}
				stealModule.exports = {
					addEventListener: function() {
						this.addEventListener.apply(this, arguments);
					},
					removeEventListener: function() {
						this.removeEventListener.apply(this, arguments);
					},
					canAddEventListener: function() {
						return (
							(this.nodeName && (this.nodeType === 1 || this.nodeType === 9)) ||
							this === window
						);
					},
					dispatch: function(event, args, bubbles) {
						var ret;
						var dispatchingOnDisabled =
							fixSyntheticEventsOnDisabled &&
							isDispatchingOnDisabled(this, event);
						var doc = this.ownerDocument || getDocument();
						var ev = doc.createEvent("HTMLEvents");
						var isString = typeof event === "string";
						ev.initEvent(
							isString ? event : event.type,
							bubbles === undefined ? true : bubbles,
							false
						);
						if (!isString) {
							for (var prop in event) {
								if (ev[prop] === undefined) {
									ev[prop] = event[prop];
								}
							}
						}
						if (
							this.disabled === true &&
							ev.type !== "fix_synthetic_events_on_disabled_test"
						) {
						}
						ev.args = args;
						if (dispatchingOnDisabled) {
							this.disabled = false;
						}
						ret = this.dispatchEvent(ev);
						if (dispatchingOnDisabled) {
							this.disabled = true;
						}
						return ret;
					}
				};
				(function() {
					if (!isBrowserWindow()) {
						return;
					}
					var testEventName = "fix_synthetic_events_on_disabled_test";
					var input = document.createElement("input");
					input.disabled = true;
					var timer = setTimeout(function() {
						fixSyntheticEventsOnDisabled = true;
					}, 50);
					var onTest = function onTest() {
						clearTimeout(timer);
						stealModule.exports.removeEventListener.call(
							input,
							testEventName,
							onTest
						);
					};
					stealModule.exports.addEventListener.call(
						input,
						testEventName,
						onTest
					);
					try {
						stealModule.exports.dispatch.call(input, testEventName, [], false);
					} catch (e) {
						onTest();
						fixSyntheticEventsOnDisabled = true;
					}
				})();
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		68,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var domEvents = stealRequire(48);
			stealModule.exports = function() {
				return domEvents.dispatch.apply(this, arguments);
			};
		}
	],
	[
		37,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var makeArray = stealRequire(38);
				var setImmediate = stealRequire(65);
				var CID = stealRequire(55);
				var getMutationObserver = stealRequire(66);
				var childNodes = stealRequire(49);
				var domContains = stealRequire(67);
				var domDispatch = stealRequire(68);
				var getDocument = stealRequire(63);
				var domData = stealRequire(69);
				var mutatedElements;
				var checks = {
					inserted: function(root, elem) {
						return domContains.call(root, elem);
					},
					removed: function(root, elem) {
						return !domContains.call(root, elem);
					}
				};
				var fireOn = function(elems, root, check, event, dispatched) {
					if (!elems.length) {
						return;
					}
					var children, cid;
					for (var i = 0, elem; (elem = elems[i]) !== undefined; i++) {
						cid = CID(elem);
						if (
							elem.getElementsByTagName &&
							check(root, elem) &&
							!dispatched[cid]
						) {
							dispatched[cid] = true;
							children = makeArray(elem.getElementsByTagName("*"));
							domDispatch.call(elem, event, [], false);
							if (event === "removed") {
								domData.delete.call(elem);
							}
							for (var j = 0, child; (child = children[j]) !== undefined; j++) {
								cid = CID(child);
								if (!dispatched[cid]) {
									domDispatch.call(child, event, [], false);
									if (event === "removed") {
										domData.delete.call(child);
									}
									dispatched[cid] = true;
								}
							}
						}
					}
				};
				var fireMutations = function() {
					var mutations = mutatedElements;
					mutatedElements = null;
					var firstElement = mutations[0][1][0];
					var doc = getDocument() || firstElement.ownerDocument || firstElement;
					var root = doc.contains ? doc : doc.documentElement;
					var dispatched = {
						inserted: {},
						removed: {}
					};
					mutations.forEach(function(mutation) {
						fireOn(
							mutation[1],
							root,
							checks[mutation[0]],
							mutation[0],
							dispatched[mutation[0]]
						);
					});
				};
				var mutated = function(elements, type) {
					if (!getMutationObserver() && elements.length) {
						var firstElement = elements[0];
						var doc =
							getDocument() || firstElement.ownerDocument || firstElement;
						var root = doc.contains ? doc : doc.documentElement;
						if (checks.inserted(root, firstElement)) {
							if (!mutatedElements) {
								mutatedElements = [];
								setImmediate(fireMutations);
							}
							mutatedElements.push([type, elements]);
						}
					}
				};
				stealModule.exports = {
					appendChild: function(child) {
						if (getMutationObserver()) {
							this.appendChild(child);
						} else {
							var children;
							if (child.nodeType === 11) {
								children = makeArray(childNodes(child));
							} else {
								children = [child];
							}
							this.appendChild(child);
							mutated(children, "inserted");
						}
					},
					insertBefore: function(child, ref, document) {
						if (getMutationObserver()) {
							this.insertBefore(child, ref);
						} else {
							var children;
							if (child.nodeType === 11) {
								children = makeArray(childNodes(child));
							} else {
								children = [child];
							}
							this.insertBefore(child, ref);
							mutated(children, "inserted");
						}
					},
					removeChild: function(child) {
						if (getMutationObserver()) {
							this.removeChild(child);
						} else {
							mutated([child], "removed");
							this.removeChild(child);
						}
					},
					replaceChild: function(newChild, oldChild) {
						if (getMutationObserver()) {
							this.replaceChild(newChild, oldChild);
						} else {
							var children;
							if (newChild.nodeType === 11) {
								children = makeArray(childNodes(newChild));
							} else {
								children = [newChild];
							}
							mutated([oldChild], "removed");
							this.replaceChild(newChild, oldChild);
							mutated(children, "inserted");
						}
					},
					inserted: function(elements) {
						mutated(elements, "inserted");
					},
					removed: function(elements) {
						mutated(elements, "removed");
					}
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		51,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var getCID = stealRequire(55);
			var each = stealRequire(84);
			var CIDMap;
			if (typeof Map !== "undefined") {
				CIDMap = Map;
			} else {
				var CIDMap = function() {
					this.values = {};
				};
				CIDMap.prototype.set = function(key, value) {
					this.values[getCID(key)] = {
						key: key,
						value: value
					};
				};
				CIDMap.prototype["delete"] = function(key) {
					var has = getCID(key) in this.values;
					if (has) {
						delete this.values[getCID(key)];
					}
					return has;
				};
				CIDMap.prototype.forEach = function(cb, thisArg) {
					each(
						this.values,
						function(pair) {
							return cb.call(thisArg || this, pair.value, pair.key, this);
						},
						this
					);
				};
				CIDMap.prototype.has = function(key) {
					return getCID(key) in this.values;
				};
				CIDMap.prototype.get = function(key) {
					var obj = this.values[getCID(key)];
					return obj && obj.value;
				};
				CIDMap.prototype.clear = function() {
					return (this.values = {});
				};
				Object.defineProperty(CIDMap.prototype, "size", {
					get: function() {
						var size = 0;
						each(this.values, function() {
							size++;
						});
						return size;
					}
				});
			}
			stealModule.exports = CIDMap;
		}
	],
	[
		39,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = stealRequire(51);
		}
	],
	[
		21,
		function(stealRequire, stealExports, stealModule) {
			var makeArray = stealRequire(38);
			var each = stealRequire(12);
			var namespace = stealRequire(19);
			var domMutate = stealRequire(37);
			var CIDMap = stealRequire(39);
			var nodeMap = new CIDMap(),
				splice = [].splice,
				push = [].push,
				itemsInChildListTree = function(list) {
					var count = 0;
					for (var i = 0, len = list.length; i < len; i++) {
						var item = list[i];
						if (item.nodeType) {
							count++;
						} else {
							count += itemsInChildListTree(item);
						}
					}
					return count;
				},
				replacementMap = function(replacements) {
					var map = new CIDMap();
					for (var i = 0, len = replacements.length; i < len; i++) {
						var node = nodeLists.first(replacements[i]);
						map.set(node, replacements[i]);
					}
					return map;
				},
				addUnfoundAsDeepChildren = function(list, rMap) {
					rMap.forEach(function(replacement) {
						list.newDeepChildren.push(replacement);
					});
				};
			var nodeLists = {
				update: function(nodeList, newNodes) {
					var oldNodes = nodeLists.unregisterChildren(nodeList);
					newNodes = makeArray(newNodes);
					var oldListLength = nodeList.length;
					splice.apply(nodeList, [0, oldListLength].concat(newNodes));
					if (nodeList.replacements) {
						nodeLists.nestReplacements(nodeList);
						nodeList.deepChildren = nodeList.newDeepChildren;
						nodeList.newDeepChildren = [];
					} else {
						nodeLists.nestList(nodeList);
					}
					return oldNodes;
				},
				nestReplacements: function(list) {
					var index = 0,
						rMap = replacementMap(list.replacements),
						rCount = list.replacements.length;
					while (index < list.length && rCount) {
						var node = list[index],
							replacement = rMap.get(node);
						if (replacement) {
							rMap["delete"](node);
							list.splice(
								index,
								itemsInChildListTree(replacement),
								replacement
							);
							rCount--;
						}
						index++;
					}
					if (rCount) {
						addUnfoundAsDeepChildren(list, rMap);
					}
					list.replacements = [];
				},
				nestList: function(list) {
					var index = 0;
					while (index < list.length) {
						var node = list[index],
							childNodeList = nodeMap.get(node);
						if (childNodeList) {
							if (childNodeList !== list) {
								list.splice(
									index,
									itemsInChildListTree(childNodeList),
									childNodeList
								);
							}
						} else {
							nodeMap.set(node, list);
						}
						index++;
					}
				},
				last: function(nodeList) {
					var last = nodeList[nodeList.length - 1];
					if (last.nodeType) {
						return last;
					} else {
						return nodeLists.last(last);
					}
				},
				first: function(nodeList) {
					var first = nodeList[0];
					if (first.nodeType) {
						return first;
					} else {
						return nodeLists.first(first);
					}
				},
				flatten: function(nodeList) {
					var items = [];
					for (var i = 0; i < nodeList.length; i++) {
						var item = nodeList[i];
						if (item.nodeType) {
							items.push(item);
						} else {
							items.push.apply(items, nodeLists.flatten(item));
						}
					}
					return items;
				},
				register: function(nodeList, unregistered, parent, directlyNested) {
					nodeList.unregistered = unregistered;
					nodeList.parentList = parent;
					nodeList.nesting =
						parent && typeof parent.nesting !== "undefined"
							? parent.nesting + 1
							: 0;
					if (parent) {
						nodeList.deepChildren = [];
						nodeList.newDeepChildren = [];
						nodeList.replacements = [];
						if (parent !== true) {
							if (directlyNested) {
								parent.replacements.push(nodeList);
							} else {
								parent.newDeepChildren.push(nodeList);
							}
						}
					} else {
						nodeLists.nestList(nodeList);
					}
					return nodeList;
				},
				unregisterChildren: function(nodeList) {
					var nodes = [];
					each(nodeList, function(node) {
						if (node.nodeType) {
							if (!nodeList.replacements) {
								nodeMap["delete"](node);
							}
							nodes.push(node);
						} else {
							push.apply(nodes, nodeLists.unregister(node, true));
						}
					});
					each(nodeList.deepChildren, function(nodeList) {
						nodeLists.unregister(nodeList, true);
					});
					return nodes;
				},
				unregister: function(nodeList, isChild) {
					var nodes = nodeLists.unregisterChildren(nodeList, true);
					if (nodeList.unregistered) {
						var unregisteredCallback = nodeList.unregistered;
						nodeList.replacements = nodeList.unregistered = null;
						if (!isChild) {
							var deepChildren =
								nodeList.parentList && nodeList.parentList.deepChildren;
							if (deepChildren) {
								var index = deepChildren.indexOf(nodeList);
								if (index !== -1) {
									deepChildren.splice(index, 1);
								}
							}
						}
						unregisteredCallback();
					}
					return nodes;
				},
				after: function(oldElements, newFrag) {
					var last = oldElements[oldElements.length - 1];
					if (last.nextSibling) {
						domMutate.insertBefore.call(
							last.parentNode,
							newFrag,
							last.nextSibling
						);
					} else {
						domMutate.appendChild.call(last.parentNode, newFrag);
					}
				},
				replace: function(oldElements, newFrag) {
					var selectedValue,
						parentNode = oldElements[0].parentNode;
					if (
						parentNode.nodeName.toUpperCase() === "SELECT" &&
						parentNode.selectedIndex >= 0
					) {
						selectedValue = parentNode.value;
					}
					if (oldElements.length === 1) {
						domMutate.replaceChild.call(parentNode, newFrag, oldElements[0]);
					} else {
						nodeLists.after(oldElements, newFrag);
						nodeLists.remove(oldElements);
					}
					if (selectedValue !== undefined) {
						parentNode.value = selectedValue;
					}
				},
				remove: function(elementsToBeRemoved) {
					var parent =
						elementsToBeRemoved[0] && elementsToBeRemoved[0].parentNode;
					each(elementsToBeRemoved, function(child) {
						domMutate.removeChild.call(parent, child);
					});
				},
				nodeMap: nodeMap
			};
			stealModule.exports = namespace.nodeLists = nodeLists;
		}
	],
	[
		61,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = function(obj) {
				for (var prop in obj) {
					return false;
				}
				return true;
			};
		}
	],
	[
		98,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var matchesMethod = function(element) {
				return (
					element.matches ||
					element.webkitMatchesSelector ||
					element.webkitMatchesSelector ||
					element.mozMatchesSelector ||
					element.msMatchesSelector ||
					element.oMatchesSelector
				);
			};
			stealModule.exports = function() {
				var method = matchesMethod(this);
				return method ? method.apply(this, arguments) : false;
			};
		}
	],
	[
		85,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var domEvents = stealRequire(48);
			var domData = stealRequire(69);
			var domMatches = stealRequire(98);
			var each = stealRequire(12);
			var isEmptyObject = stealRequire(61);
			var dataName = "delegateEvents";
			var useCapture = function(eventType) {
				return eventType === "focus" || eventType === "blur";
			};
			var handleEvent = function(ev) {
				var events = domData.get.call(this, dataName);
				var eventTypeEvents = events[ev.type];
				var matches = [];
				if (eventTypeEvents) {
					var selectorDelegates = [];
					each(eventTypeEvents, function(delegates) {
						selectorDelegates.push(delegates);
					});
					var cur = ev.target;
					do {
						selectorDelegates.forEach(function(delegates) {
							if (domMatches.call(cur, delegates[0].selector)) {
								matches.push({
									target: cur,
									delegates: delegates
								});
							}
						});
						cur = cur.parentNode;
					} while (cur && cur !== ev.currentTarget);
				}
				var oldStopProp = ev.stopPropagation;
				ev.stopPropagation = function() {
					oldStopProp.apply(this, arguments);
					this.cancelBubble = true;
				};
				for (var i = 0; i < matches.length; i++) {
					var match = matches[i];
					var delegates = match.delegates;
					for (var d = 0, dLen = delegates.length; d < dLen; d++) {
						if (delegates[d].handler.call(match.target, ev) === false) {
							return false;
						}
						if (ev.cancelBubble) {
							return;
						}
					}
				}
			};
			domEvents.addDelegateListener = function(eventType, selector, handler) {
				var events = domData.get.call(this, dataName),
					eventTypeEvents;
				if (!events) {
					domData.set.call(this, dataName, (events = {}));
				}
				if (!(eventTypeEvents = events[eventType])) {
					eventTypeEvents = events[eventType] = {};
					domEvents.addEventListener.call(
						this,
						eventType,
						handleEvent,
						useCapture(eventType)
					);
				}
				if (!eventTypeEvents[selector]) {
					eventTypeEvents[selector] = [];
				}
				eventTypeEvents[selector].push({
					handler: handler,
					selector: selector
				});
			};
			domEvents.removeDelegateListener = function(
				eventType,
				selector,
				handler
			) {
				var events = domData.get.call(this, dataName);
				if (events && events[eventType] && events[eventType][selector]) {
					var eventTypeEvents = events[eventType],
						delegates = eventTypeEvents[selector],
						i = 0;
					while (i < delegates.length) {
						if (delegates[i].handler === handler) {
							delegates.splice(i, 1);
						} else {
							i++;
						}
					}
					if (delegates.length === 0) {
						delete eventTypeEvents[selector];
						if (isEmptyObject(eventTypeEvents)) {
							domEvents.removeEventListener.call(
								this,
								eventType,
								handleEvent,
								useCapture(eventType)
							);
							delete events[eventType];
							if (isEmptyObject(events)) {
								domData.clean.call(this, dataName);
							}
						}
					}
				}
			};
		}
	],
	[
		56,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var CID = stealRequire(55);
				var singleReference;
				function getKeyName(key, extraKey) {
					var keyName = extraKey ? CID(key) + ":" + extraKey : CID(key);
					return keyName || key;
				}
				singleReference = {
					set: function(obj, key, value, extraKey) {
						obj[getKeyName(key, extraKey)] = value;
					},
					getAndDelete: function(obj, key, extraKey) {
						var keyName = getKeyName(key, extraKey);
						var value = obj[keyName];
						delete obj[keyName];
						return value;
					}
				};
				stealModule.exports = singleReference;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		100,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var CID = stealRequire(55);
			var domDataState = stealRequire(104);
			stealModule.exports = function(obj) {
				if (typeof obj.nodeType === "number") {
					return domDataState.cid.call(obj);
				} else {
					var type = typeof obj;
					var isObject =
						type !== null && (type === "object" || type === "function");
					return type + ":" + (isObject ? CID(obj) : obj);
				}
			};
		}
	],
	[
		86,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var domEvents = stealRequire(48),
				singleRef = stealRequire(56),
				cid = stealRequire(100);
			var eventMap = {
					mouseenter: "mouseover",
					mouseleave: "mouseout",
					pointerenter: "pointerover",
					pointerleave: "pointerout"
				},
				classMap = {
					mouseenter: "MouseEvent",
					mouseleave: "MouseEvent",
					pointerenter: "PointerEvent",
					pointerleave: "PointerEvent"
				},
				_addDelegateListener = domEvents.addDelegateListener,
				_removeDelegateListener = domEvents.removeDelegateListener;
			domEvents.addDelegateListener = function(eventType, selector, handler) {
				if (eventMap[eventType] !== undefined) {
					var origHandler = handler,
						origType = eventType;
					eventType = eventMap[eventType];
					handler = function(event) {
						var target = this,
							related = event.relatedTarget;
						if (!related || (related !== target && !target.contains(related))) {
							var eventClass = classMap[origType];
							if (eventClass === "MouseEvent") {
								var newEv = document.createEvent(eventClass);
								newEv.initMouseEvent(
									origType,
									false,
									false,
									event.view,
									event.detail,
									event.screenX,
									event.screenY,
									event.clientX,
									event.clientY,
									event.ctrlKey,
									event.altKey,
									event.shiftKey,
									event.metaKey,
									event.button,
									event.relatedTarget
								);
								event = newEv;
							} else if (eventClass === "PointerEvent") {
								event = new PointerEvent(origType, event);
							}
							return origHandler.call(this, event);
						}
					};
					singleRef.set(origHandler, cid(this) + eventType, handler);
				}
				_addDelegateListener.call(this, eventType, selector, handler);
			};
			domEvents.removeDelegateListener = function(
				eventType,
				selector,
				handler
			) {
				if (eventMap[eventType] !== undefined) {
					eventType = eventMap[eventType];
					handler = singleRef.getAndDelete(handler, cid(this) + eventType);
				}
				_removeDelegateListener.call(this, eventType, selector, handler);
			};
		}
	],
	[
		52,
		function(stealRequire, stealExports, stealModule) {
			var domEvents = stealRequire(48);
			var CID = stealRequire(55);
			var isEmptyObject = stealRequire(61);
			var domDispatch = stealRequire(68);
			var namespace = stealRequire(19);
			stealRequire(85);
			stealRequire(86);
			function makeHandlerArgs(event, args) {
				if (typeof event === "string") {
					event = { type: event };
				}
				var handlerArgs = [event];
				if (args) {
					handlerArgs.push.apply(handlerArgs, args);
				}
				return handlerArgs;
			}
			function getHandlers(eventName) {
				var events = this.__bindEvents;
				if (!events) {
					return;
				}
				return events[eventName];
			}
			var canEvent = {
				addEventListener: function(event, handler) {
					var allEvents = this.__bindEvents || (this.__bindEvents = {}),
						eventList = allEvents[event] || (allEvents[event] = []);
					eventList.push(handler);
					return this;
				},
				removeEventListener: function(event, fn) {
					if (!this.__bindEvents) {
						return this;
					}
					if (!arguments.length) {
						for (var bindEvent in this.__bindEvents) {
							if (bindEvent === "_lifecycleBindings") {
								this.__bindEvents._lifecycleBindings = null;
							} else if (this.__bindEvents.hasOwnProperty(bindEvent)) {
								canEvent.removeEventListener.call(this, bindEvent);
							}
						}
						return this;
					}
					var handlers = this.__bindEvents[event] || [],
						i = 0,
						handler,
						isFunction = typeof fn === "function";
					while (i < handlers.length) {
						handler = handlers[i];
						if (
							(isFunction && handler === fn) ||
							(!isFunction && (handler.cid === fn || !fn))
						) {
							handlers.splice(i, 1);
						} else {
							i++;
						}
					}
					return this;
				},
				dispatchSync: function(event, args) {
					var handlerArgs = makeHandlerArgs(event, args);
					var handlers = getHandlers.call(this, handlerArgs[0].type);
					if (!handlers) {
						return;
					}
					handlers = handlers.slice(0);
					for (var i = 0, len = handlers.length; i < len; i++) {
						handlers[i].apply(this, handlerArgs);
					}
					return handlerArgs[0];
				},
				on: function(eventName, selector, handler) {
					var method =
						typeof selector === "string"
							? "addDelegateListener"
							: "addEventListener";
					var listenWithDOM = domEvents.canAddEventListener.call(this);
					var eventBinder = listenWithDOM
						? domEvents[method]
						: this[method] || canEvent[method];
					return eventBinder.apply(this, arguments);
				},
				off: function(eventName, selector, handler) {
					var method =
						typeof selector === "string"
							? "removeDelegateListener"
							: "removeEventListener";
					var listenWithDOM = domEvents.canAddEventListener.call(this);
					var eventBinder = listenWithDOM
						? domEvents[method]
						: this[method] || canEvent[method];
					return eventBinder.apply(this, arguments);
				},
				trigger: function() {
					var listenWithDOM = domEvents.canAddEventListener.call(this);
					var dispatch = listenWithDOM ? domDispatch : canEvent.dispatch;
					return dispatch.apply(this, arguments);
				},
				one: function(event, handler) {
					var one = function() {
						canEvent.off.call(this, event, one);
						return handler.apply(this, arguments);
					};
					canEvent.on.call(this, event, one);
					return this;
				},
				listenTo: function(other, event, handler) {
					var idedEvents = this.__listenToEvents;
					if (!idedEvents) {
						idedEvents = this.__listenToEvents = {};
					}
					var otherId = CID(other);
					var othersEvents = idedEvents[otherId];
					if (!othersEvents) {
						othersEvents = idedEvents[otherId] = {
							obj: other,
							events: {}
						};
					}
					var eventsEvents = othersEvents.events[event];
					if (!eventsEvents) {
						eventsEvents = othersEvents.events[event] = [];
					}
					eventsEvents.push(handler);
					canEvent.on.call(other, event, handler);
				},
				stopListening: function(other, event, handler) {
					var idedEvents = this.__listenToEvents,
						iterIdedEvents = idedEvents,
						i = 0;
					if (!idedEvents) {
						return this;
					}
					if (other) {
						var othercid = CID(other);
						(iterIdedEvents = {})[othercid] = idedEvents[othercid];
						if (!idedEvents[othercid]) {
							return this;
						}
					}
					for (var cid in iterIdedEvents) {
						var othersEvents = iterIdedEvents[cid],
							eventsEvents;
						other = idedEvents[cid].obj;
						if (!event) {
							eventsEvents = othersEvents.events;
						} else {
							(eventsEvents = {})[event] = othersEvents.events[event];
						}
						for (var eventName in eventsEvents) {
							var handlers = eventsEvents[eventName] || [];
							i = 0;
							while (i < handlers.length) {
								if ((handler && handler === handlers[i]) || !handler) {
									canEvent.off.call(other, eventName, handlers[i]);
									handlers.splice(i, 1);
								} else {
									i++;
								}
							}
							if (!handlers.length) {
								delete othersEvents.events[eventName];
							}
						}
						if (isEmptyObject(othersEvents.events)) {
							delete idedEvents[cid];
						}
					}
					return this;
				}
			};
			canEvent.addEvent = canEvent.bind = function() {
				return canEvent.addEventListener.apply(this, arguments);
			};
			canEvent.unbind = canEvent.removeEvent = function() {
				return canEvent.removeEventListener.apply(this, arguments);
			};
			canEvent.delegate = canEvent.on;
			canEvent.undelegate = canEvent.off;
			canEvent.dispatch = canEvent.dispatchSync;
			Object.defineProperty(canEvent, "makeHandlerArgs", {
				enumerable: false,
				value: makeHandlerArgs
			});
			Object.defineProperty(canEvent, "handlers", {
				enumerable: false,
				value: getHandlers
			});
			Object.defineProperty(canEvent, "flush", {
				enumerable: false,
				writable: true,
				value: function() {}
			});
			stealModule.exports = namespace.event = canEvent;
		}
	],
	[
		72,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = function(arr) {
				return arr && arr[arr.length - 1];
			};
		}
	],
	[
		111,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealExports.warnTimeout = 5000;
			stealExports.logLevel = 0;
			stealExports.warn = function(out) {
				var ll = this.logLevel;
				if (ll < 2) {
					Array.prototype.unshift.call(arguments, "WARN:");
					if (typeof console !== "undefined" && console.warn) {
						this._logger("warn", Array.prototype.slice.call(arguments));
					} else if (typeof console !== "undefined" && console.log) {
						this._logger("log", Array.prototype.slice.call(arguments));
					} else if (window && window.opera && window.opera.postError) {
						window.opera.postError("CanJS WARNING: " + out);
					}
				}
			};
			stealExports.log = function(out) {
				var ll = this.logLevel;
				if (ll < 1) {
					if (typeof console !== "undefined" && console.log) {
						Array.prototype.unshift.call(arguments, "INFO:");
						this._logger("log", Array.prototype.slice.call(arguments));
					} else if (window && window.opera && window.opera.postError) {
						window.opera.postError("CanJS INFO: " + out);
					}
				}
			};
			stealExports.error = function(out) {
				var ll = this.logLevel;
				if (ll < 1) {
					if (typeof console !== "undefined" && console.error) {
						Array.prototype.unshift.call(arguments, "ERROR:");
						this._logger("error", Array.prototype.slice.call(arguments));
					} else if (window && window.opera && window.opera.postError) {
						window.opera.postError("ERROR: " + out);
					}
				}
			};
			stealExports._logger = function(type, arr) {
				try {
					console[type].apply(console, arr);
				} catch (e) {
					console[type](arr);
				}
			};
		}
	],
	[
		107,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var canLog = stealRequire(111);
			stealModule.exports = {
				warnTimeout: 5000,
				logLevel: 0,
				stringify: function(value) {
					var flagUndefined = function flagUndefined(key, value) {
						return value === undefined ? "/* void(undefined) */" : value;
					};
					return JSON.stringify(value, flagUndefined, "  ").replace(
						/"\/\* void\(undefined\) \*\/"/g,
						"undefined"
					);
				},
				warn: function() {},
				log: function() {},
				error: function() {},
				_logger: canLog._logger
			};
		}
	],
	[
		76,
		function(stealRequire, stealExports, stealModule) {
			var namespace = stealRequire(19);
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var dev = stealRequire(107);
			var types = {
				isMapLike: function(obj) {
					return canReflect.isObservableLike(obj) && canReflect.isMapLike(obj);
				},
				isListLike: function(obj) {
					return canReflect.isObservableLike(obj) && canReflect.isListLike(obj);
				},
				isPromise: function(obj) {
					return canReflect.isPromise(obj);
				},
				isConstructor: function(func) {
					return canReflect.isConstructorLike(func);
				},
				isCallableForValue: function(obj) {
					return (
						obj &&
						canReflect.isFunctionLike(obj) &&
						!canReflect.isConstructorLike(obj)
					);
				},
				isCompute: function(obj) {
					return obj && obj.isComputed;
				},
				get iterator() {
					return canSymbol.iterator || canSymbol.for("iterator");
				},
				DefaultMap: null,
				DefaultList: null,
				queueTask: function(task) {
					var args = task[2] || [];
					task[0].apply(task[1], args);
				},
				wrapElement: function(element) {
					return element;
				},
				unwrapElement: function(element) {
					return element;
				}
			};
			if (namespace.types) {
				throw new Error(
					"You can't have two versions of can-types, check your dependencies"
				);
			} else {
				stealModule.exports = namespace.types = types;
			}
		}
	],
	[
		53,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var canEvent = stealRequire(52);
			var last = stealRequire(72);
			var namespace = stealRequire(19);
			var canTypes = stealRequire(76);
			var canDev = stealRequire(29);
			var canLog = stealRequire(47);
			var batchNum = 1,
				collectionQueue = null,
				queues = [],
				dispatchingQueues = false,
				makeHandlerArgs = canEvent.makeHandlerArgs,
				getHandlers = canEvent.handlers;
			function addToCollectionQueue(item, event, args, handlers) {
				var handlerArgs = makeHandlerArgs(event, args);
				var tasks = [];
				for (var i = 0, len = handlers.length; i < len; i++) {
					tasks[i] = [handlers[i], item, handlerArgs];
				}
				[].push.apply(collectionQueue.tasks, tasks);
			}
			var canBatch = {
				transactions: 0,
				start: function(batchStopHandler) {
					canBatch.transactions++;
					if (canBatch.transactions === 1) {
						var queue = {
							number: batchNum++,
							index: 0,
							tasks: [],
							batchEnded: false,
							callbacksIndex: 0,
							callbacks: [],
							complete: false
						};
						if (batchStopHandler) {
							queue.callbacks.push(batchStopHandler);
						}
						collectionQueue = queue;
					}
				},
				collecting: function() {
					return collectionQueue;
				},
				dispatching: function() {
					return queues[0];
				},
				stop: function(force, callStart) {
					if (force) {
						canBatch.transactions = 0;
					} else {
						canBatch.transactions--;
					}
					if (canBatch.transactions === 0) {
						queues.push(collectionQueue);
						collectionQueue = null;
						if (!dispatchingQueues) {
							canEvent.flush();
						}
					}
				},
				flush: function() {
					dispatchingQueues = true;
					while (queues.length) {
						var queue = queues[0];
						var tasks = queue.tasks,
							callbacks = queue.callbacks;
						canBatch.batchNum = queue.number;
						var len = tasks.length;
						while (queue.index < len) {
							var task = tasks[queue.index++];
							task[0].apply(task[1], task[2]);
						}
						if (!queue.batchEnded) {
							queue.batchEnded = true;
							canEvent.dispatchSync.call(canBatch, "batchEnd", [queue.number]);
						}
						while (queue.callbacksIndex < callbacks.length) {
							callbacks[queue.callbacksIndex++]();
						}
						if (!queue.complete) {
							queue.complete = true;
							canBatch.batchNum = undefined;
							queues.shift();
						}
					}
					dispatchingQueues = false;
				},
				dispatch: function(event, args) {
					var item = this,
						handlers;
					if (!item.__inSetup) {
						event = typeof event === "string" ? { type: event } : event;
						if (event.batchNum) {
							canBatch.batchNum = event.batchNum;
							canEvent.dispatchSync.call(item, event, args);
						} else if (collectionQueue) {
							handlers = getHandlers.call(this, event.type);
							if (handlers) {
								event.batchNum = collectionQueue.number;
								addToCollectionQueue(item, event, args, handlers);
							}
						} else if (queues.length) {
							handlers = getHandlers.call(this, event.type);
							if (handlers) {
								canBatch.start();
								event.batchNum = collectionQueue.number;
								addToCollectionQueue(item, event, args, handlers);
								last(queues).callbacks.push(canBatch.stop);
							}
						} else {
							handlers = getHandlers.call(this, event.type);
							if (handlers) {
								canBatch.start();
								event.batchNum = collectionQueue.number;
								addToCollectionQueue(item, event, args, handlers);
								canBatch.stop();
							}
						}
					}
				},
				queue: function(task, inCurrentBatch) {
					if (collectionQueue) {
						collectionQueue.tasks.push(task);
					} else if (queues.length) {
						if (inCurrentBatch && queues[0].index < queues.tasks.length) {
							queues[0].tasks.push(task);
						} else {
							canBatch.start();
							collectionQueue.tasks.push(task);
							last(queues).callbacks.push(canBatch.stop);
						}
					} else {
						canBatch.start();
						collectionQueue.tasks.push(task);
						canBatch.stop();
					}
				},
				queues: function() {
					return queues;
				},
				afterPreviousEvents: function(handler) {
					this.queue([handler]);
				},
				after: function(handler) {
					var queue = collectionQueue || queues[0];
					if (queue) {
						queue.callbacks.push(handler);
					} else {
						handler({});
					}
				}
			};
			Object.defineProperty(canBatch, "debounce", {
				enumerable: false,
				value: function(handler) {
					var that = null;
					var args = null;
					return function() {
						if (!that) {
							canEvent.addEventListener.call(
								canBatch,
								"batchEnd",
								function listener() {
									canEvent.removeEventListener.call(
										canBatch,
										"batchEnd",
										listener
									);
									handler.apply(that, args);
									that = null;
									args = null;
								}
							);
						}
						that = this;
						args = arguments;
					};
				}
			});
			canEvent.flush = canBatch.flush;
			canEvent.dispatch = canBatch.dispatch;
			canBatch.trigger = function() {
				canLog.warn("use canEvent.dispatch instead");
				return canEvent.dispatch.apply(this, arguments);
			};
			canTypes.queueTask = canBatch.queue;
			if (namespace.batch) {
				throw new Error(
					"You can't have two versions of can-event/batch/batch, check your dependencies"
				);
			} else {
				stealModule.exports = namespace.batch = canBatch;
			}
		}
	],
	[
		58,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = stealRequire(89);
		}
	],
	[
		23,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				stealRequire(52);
				var canEvent = stealRequire(52);
				var canBatch = stealRequire(53);
				var assign = stealRequire(57);
				var isEmptyObject = stealRequire(61);
				var namespace = stealRequire(19);
				var canLog = stealRequire(47);
				var canReflect = stealRequire(28);
				var canSymbol = stealRequire(16);
				var CID = stealRequire(55);
				var CIDMap = stealRequire(39);
				var CIDSet = stealRequire(58);
				function Observation(func, context, compute) {
					this.newObserved = {};
					this.oldObserved = null;
					this.func = func;
					this.context = context;
					this.compute =
						compute && (compute.updater || "isObservable" in compute)
							? compute
							: { updater: compute };
					this.isObservable =
						typeof compute === "object" ? compute.isObservable : true;
					var observation = this;
					this.onDependencyChange = function(value, legacyValue) {
						observation.dependencyChange(this, value, legacyValue);
					};
					this.ignore = 0;
					this.needsUpdate = false;
					this.handlers = null;
					CID(this);
				}
				var observationStack = [];
				Observation.observationStack = observationStack;
				var remaining = {
					updates: 0,
					notifications: 0
				};
				Observation.remaining = remaining;
				assign(Observation.prototype, {
					get: function() {
						if (this.isObservable && Observation.isRecording()) {
							Observation.add(this);
							if (!this.bound) {
								Observation.temporarilyBind(this);
							}
						}
						if (this.bound === true) {
							canEvent.flush();
							if (remaining.updates > 0) {
								Observation.updateChildrenAndSelf(this);
							}
							return this.value;
						} else {
							return this.func.call(this.context);
						}
					},
					getPrimaryDepth: function() {
						return this.compute._primaryDepth || 0;
					},
					addEdge: function(objEv) {
						if (objEv.event === "undefined") {
							canReflect.onValue(objEv.obj, this.onDependencyChange);
						} else {
							canReflect.onKeyValue(
								objEv.obj,
								objEv.event,
								this.onDependencyChange
							);
						}
					},
					removeEdge: function(objEv) {
						if (objEv.event === "undefined") {
							canReflect.offValue(objEv.obj, this.onDependencyChange);
						} else {
							canReflect.offKeyValue(
								objEv.obj,
								objEv.event,
								this.onDependencyChange
							);
						}
					},
					dependencyChange: function() {
						if (this.bound === true) {
							if (
								canBatch.batchNum === undefined ||
								canBatch.batchNum !== this.batchNum
							) {
								Observation.registerUpdate(this, canBatch.batchNum);
								this.batchNum = canBatch.batchNum;
							}
						}
					},
					onDependencyChange: function(value) {
						this.dependencyChange(value);
					},
					update: function(batchNum) {
						if (this.needsUpdate === true) {
							remaining.updates--;
						}
						this.needsUpdate = false;
						if (this.bound === true) {
							var oldValue = this.value;
							this.oldValue = null;
							this.start();
							if (oldValue !== this.value) {
								this.compute.updater(this.value, oldValue, batchNum);
								return true;
							}
						}
					},
					getValueAndBind: function() {
						canLog.warn(
							"can-observation: call start instead of getValueAndBind"
						);
						return this.start();
					},
					start: function() {
						this.bound = true;
						this.oldObserved = this.newObserved || {};
						this.ignore = 0;
						this.newObserved = {};
						observationStack.push(this);
						this.value = this.func.call(this.context);
						observationStack.pop();
						this.updateBindings();
					},
					updateBindings: function() {
						var newObserved = this.newObserved,
							oldObserved = this.oldObserved,
							name,
							obEv;
						for (name in newObserved) {
							obEv = newObserved[name];
							if (!oldObserved[name]) {
								this.addEdge(obEv);
							} else {
								oldObserved[name] = undefined;
							}
						}
						for (name in oldObserved) {
							obEv = oldObserved[name];
							if (obEv !== undefined) {
								this.removeEdge(obEv);
							}
						}
					},
					teardown: function() {
						canLog.warn("can-observation: call stop instead of teardown");
						return this.stop();
					},
					stop: function() {
						this.bound = false;
						for (var name in this.newObserved) {
							var ob = this.newObserved[name];
							this.removeEdge(ob);
						}
						this.newObserved = {};
					}
				});
				var updateOrder = [],
					curPrimaryDepth = Infinity,
					maxPrimaryDepth = 0,
					currentBatchNum,
					isUpdating = false;
				var updateUpdateOrder = function(observation) {
					var primaryDepth = observation.getPrimaryDepth();
					if (primaryDepth < curPrimaryDepth) {
						curPrimaryDepth = primaryDepth;
					}
					if (primaryDepth > maxPrimaryDepth) {
						maxPrimaryDepth = primaryDepth;
					}
					var primary =
						updateOrder[primaryDepth] || (updateOrder[primaryDepth] = []);
					return primary;
				};
				Observation.registerUpdate = function(observation, batchNum) {
					if (observation.needsUpdate === true) {
						return;
					}
					remaining.updates++;
					observation.needsUpdate = true;
					var objs = updateUpdateOrder(observation);
					objs.push(observation);
				};
				var afterCallbacks = [];
				Observation.updateAndNotify = function(ev, batchNum) {
					currentBatchNum = batchNum;
					if (isUpdating === true) {
						return;
					}
					isUpdating = true;
					while (true) {
						if (curPrimaryDepth <= maxPrimaryDepth) {
							var primary = updateOrder[curPrimaryDepth];
							var lastUpdate = primary && primary.pop();
							if (lastUpdate !== undefined) {
								lastUpdate.update(currentBatchNum);
							} else {
								curPrimaryDepth++;
							}
						} else {
							updateOrder = [];
							curPrimaryDepth = Infinity;
							maxPrimaryDepth = 0;
							isUpdating = false;
							var afterCB = afterCallbacks;
							afterCallbacks = [];
							afterCB.forEach(function(cb) {
								cb();
							});
							return;
						}
					}
				};
				canEvent.addEventListener.call(
					canBatch,
					"batchEnd",
					Observation.updateAndNotify
				);
				Observation.afterUpdateAndNotify = function(callback) {
					canBatch.after(function() {
						if (isUpdating === true) {
							afterCallbacks.push(callback);
						} else {
							callback();
						}
					});
				};
				Observation.updateChildrenAndSelf = function(observation) {
					if (observation.needsUpdate === true) {
						return Observation.unregisterAndUpdate(observation);
					}
					var childHasChanged = false;
					for (var prop in observation.newObserved) {
						if (observation.newObserved[prop].obj.observation) {
							if (
								Observation.updateChildrenAndSelf(
									observation.newObserved[prop].obj.observation
								)
							) {
								childHasChanged = true;
							}
						}
					}
					if (childHasChanged === true) {
						return observation.update(currentBatchNum);
					}
				};
				Observation.unregisterAndUpdate = function(observation) {
					var primaryDepth = observation.getPrimaryDepth();
					var primary = updateOrder[primaryDepth];
					if (primary !== undefined) {
						var index = primary.indexOf(observation);
						if (index !== -1) {
							primary.splice(index, 1);
						}
					}
					return observation.update(currentBatchNum);
				};
				Observation.add = function(obj, event) {
					var top = observationStack[observationStack.length - 1];
					if (top !== undefined && !top.ignore) {
						var evStr = event + "",
							name = obj._cid + "|" + evStr;
						if (top.traps !== undefined) {
							top.traps.push({
								obj: obj,
								event: evStr,
								name: name
							});
						} else {
							top.newObserved[name] = {
								obj: obj,
								event: evStr
							};
						}
					}
				};
				Observation.addAll = function(observes) {
					var top = observationStack[observationStack.length - 1];
					if (top !== undefined) {
						if (top.traps !== undefined) {
							top.traps.push.apply(top.traps, observes);
						} else {
							for (var i = 0, len = observes.length; i < len; i++) {
								var trap = observes[i],
									name = trap.name;
								if (top.newObserved[name] === undefined) {
									top.newObserved[name] = trap;
								}
							}
						}
					}
				};
				Observation.ignore = function(fn) {
					return function() {
						if (observationStack.length > 0) {
							var top = observationStack[observationStack.length - 1];
							top.ignore++;
							var res = fn.apply(this, arguments);
							top.ignore--;
							return res;
						} else {
							return fn.apply(this, arguments);
						}
					};
				};
				Observation.trap = function() {
					if (observationStack.length > 0) {
						var top = observationStack[observationStack.length - 1];
						var oldTraps = top.traps;
						var traps = (top.traps = []);
						return function() {
							top.traps = oldTraps;
							return traps;
						};
					} else {
						return function() {
							return [];
						};
					}
				};
				Observation.trapsCount = function() {
					if (observationStack.length > 0) {
						var top = observationStack[observationStack.length - 1];
						return top.traps.length;
					} else {
						return 0;
					}
				};
				Observation.isRecording = function() {
					var len = observationStack.length;
					var last = len > 0 && observationStack[len - 1];
					return last && last.ignore === 0;
				};
				var noop = function() {};
				var observables;
				var unbindComputes = function() {
					for (var i = 0, len = observables.length; i < len; i++) {
						canReflect.offValue(observables[i], noop);
					}
					observables = null;
				};
				Observation.temporarilyBind = function(compute) {
					var computeInstance = compute.computeInstance || compute;
					canReflect.onValue(computeInstance, noop);
					if (!observables) {
						observables = [];
						setTimeout(unbindComputes, 10);
					}
					observables.push(computeInstance);
				};
				var callHandlers = function(newValue) {
					this.handlers.forEach(function(handler) {
						handler.call(this.compute, newValue);
					}, this);
				};
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.onValue"),
					function(handler) {
						if (!this.handlers) {
							this.handlers = [];
							this.compute.updater = callHandlers.bind(this);
						}
						if (!this.handlers.length) {
							this.start();
						}
						this.handlers.push(handler);
					}
				);
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.offValue"),
					function(handler) {
						if (this.handlers) {
							var index = this.handlers.indexOf(handler);
							this.handlers.splice(index, 1);
							if (this.handlers.length === 0) {
								this.stop();
							}
						}
					}
				);
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.getValue"),
					Observation.prototype.get
				);
				Observation.prototype.hasDependencies = function() {
					return this.bound ? !isEmptyObject(this.newObserved) : undefined;
				};
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.isValueLike"),
					true
				);
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.isMapLike"),
					false
				);
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.isListLike"),
					false
				);
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.valueHasDependencies"),
					Observation.prototype.hasDependencies
				);
				canReflect.set(
					Observation.prototype,
					canSymbol.for("can.getValueDependencies"),
					function() {
						var rets;
						if (this.bound === true) {
							rets = {};
							canReflect.eachKey(this.newObserved || {}, function(dep) {
								if (canReflect.isValueLike(dep.obj)) {
									rets.valueDependencies =
										rets.valueDependencies || new CIDSet();
									rets.valueDependencies.add(dep.obj);
								} else {
									rets.keyDependencies = rets.keyDependencies || new CIDMap();
									if (rets.keyDependencies.get(dep.obj)) {
										rets.keyDependencies.get(dep.obj).push(dep.event);
									} else {
										rets.keyDependencies.set(dep.obj, [dep.event]);
									}
								}
							});
						}
						return rets;
					}
				);
				if (namespace.Observation) {
					throw new Error(
						"You can't have two versions of can-observation, check your dependencies"
					);
				} else {
					stealModule.exports = namespace.Observation = Observation;
				}
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		99,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				stealModule.exports = stealRequire(74);
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		82,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var Observation = stealRequire(23);
				var dev = stealRequire(29);
				var getGlobal = stealRequire(99);
				var domMutate = stealRequire(37);
				var namespace = stealRequire(19);
				var attr = function(attributeName, attrHandler) {
					if (attrHandler) {
						if (typeof attributeName === "string") {
							attributes[attributeName] = attrHandler;
						} else {
							regExpAttributes.push({
								match: attributeName,
								handler: attrHandler
							});
						}
					} else {
						var cb = attributes[attributeName];
						if (!cb) {
							for (var i = 0, len = regExpAttributes.length; i < len; i++) {
								var attrMatcher = regExpAttributes[i];
								if (attrMatcher.match.test(attributeName)) {
									return attrMatcher.handler;
								}
							}
						}
						return cb;
					}
				};
				var attributes = {},
					regExpAttributes = [],
					automaticCustomElementCharacters = /[-\:]/;
				var defaultCallback = function() {};
				var tag = function(tagName, tagHandler) {
					if (tagHandler) {
						if (getGlobal().html5) {
							getGlobal().html5.elements += " " + tagName;
							getGlobal().html5.shivDocument();
						}
						tags[tagName.toLowerCase()] = tagHandler;
					} else {
						var cb;
						if (tagHandler === null) {
							delete tags[tagName.toLowerCase()];
						} else {
							cb = tags[tagName.toLowerCase()];
						}
						if (!cb && automaticCustomElementCharacters.test(tagName)) {
							cb = defaultCallback;
						}
						return cb;
					}
				};
				var tags = {};
				var callbacks = {
					_tags: tags,
					_attributes: attributes,
					_regExpAttributes: regExpAttributes,
					defaultCallback: defaultCallback,
					tag: tag,
					attr: attr,
					tagHandler: function(el, tagName, tagData) {
						var helperTagCallback = tagData.options.get("tags." + tagName, {
								proxyMethods: false
							}),
							tagCallback = helperTagCallback || tags[tagName];
						var scope = tagData.scope,
							res;
						if (tagCallback) {
							res = Observation.ignore(tagCallback)(el, tagData);
						} else {
							res = scope;
						}
						if (res && tagData.subtemplate) {
							if (scope !== res) {
								scope = scope.add(res);
							}
							var result = tagData.subtemplate(scope, tagData.options);
							var frag =
								typeof result === "string" ? can.view.frag(result) : result;
							domMutate.appendChild.call(el, frag);
						}
					}
				};
				namespace.view = namespace.view || {};
				if (namespace.view.callbacks) {
					throw new Error(
						"You can't have two versions of can-view-callbacks, check your dependencies"
					);
				} else {
					stealModule.exports = namespace.view.callbacks = callbacks;
				}
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		118,
		function(stealRequire, stealExports, stealModule) {
			var assign = stealRequire(57);
			var canData = stealRequire(69);
			var DOCUMENT = stealRequire(123);
			var getChildNodes = stealRequire(49);
			var importer = stealRequire(124);
			var mutate = stealRequire(37);
			var nodeLists = stealRequire(21);
			var tag = stealRequire(82).tag;
			var events = stealRequire(52);
			var canLog = stealRequire(47);
			function processImport(el, tagData) {
				var moduleName = el.getAttribute("from");
				var templateModule = tagData.options.get("helpers.module");
				var parentName = templateModule ? templateModule.id : undefined;
				if (!moduleName) {
					return Promise.reject("No module name provided");
				}
				var importPromise = importer(moduleName, parentName);
				importPromise.catch(function(err) {
					canLog.error(err);
				});
				canData.set.call(el, "viewModel", importPromise);
				canData.set.call(el, "scope", importPromise);
				var scope = tagData.scope.add(importPromise);
				var handOffTag = el.getAttribute("can-tag");
				if (handOffTag) {
					var callback = tag(handOffTag);
					canData.set.call(el, "preventDataBindings", true);
					callback(el, assign(tagData, { scope: scope }));
					canData.set.call(el, "preventDataBindings", false);
					canData.set.call(el, "viewModel", importPromise);
					canData.set.call(el, "scope", importPromise);
				} else {
					var frag = tagData.subtemplate
						? tagData.subtemplate(scope, tagData.options)
						: DOCUMENT().createDocumentFragment();
					var nodeList = nodeLists.register(
						[],
						undefined,
						tagData.parentNodeList || true
					);
					nodeList.expression = "<" + this.tagName + ">";
					events.one.call(el, "removed", function() {
						nodeLists.unregister(nodeList);
					});
					mutate.appendChild.call(el, frag);
					nodeLists.update(nodeList, getChildNodes(el));
				}
			}
			["can-import", "can-dynamic-import"].forEach(function(tagName) {
				tag(tagName, processImport.bind({ tagName: tagName }));
			});
		}
	],
	[
		115,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = stealRequire(19);
		}
	],
	[
		88,
		function(stealRequire, stealExports, stealModule) {
			var canEvent = stealRequire(52);
			var lifecycle = function(prototype) {
				var baseAddEventListener = prototype.addEventListener;
				var baseRemoveEventListener = prototype.removeEventListener;
				prototype.addEventListener = function() {
					var ret = baseAddEventListener.apply(this, arguments);
					if (!this.__inSetup) {
						this.__bindEvents = this.__bindEvents || {};
						if (!this.__bindEvents._lifecycleBindings) {
							this.__bindEvents._lifecycleBindings = 1;
							if (this._eventSetup) {
								this._eventSetup();
							}
						} else {
							this.__bindEvents._lifecycleBindings++;
						}
					}
					return ret;
				};
				prototype.removeEventListener = function(event, handler) {
					if (!this.__bindEvents) {
						return this;
					}
					var handlers = this.__bindEvents[event] || [];
					var handlerCount = handlers.length;
					var ret = baseRemoveEventListener.apply(this, arguments);
					if (this.__bindEvents._lifecycleBindings === null) {
						this.__bindEvents._lifecycleBindings = 0;
					} else {
						this.__bindEvents._lifecycleBindings -=
							handlerCount - handlers.length;
					}
					if (!this.__bindEvents._lifecycleBindings && this._eventTeardown) {
						this._eventTeardown();
					}
					return ret;
				};
				return prototype;
			};
			var baseEvents = lifecycle({
				addEventListener: canEvent.addEventListener,
				removeEventListener: canEvent.removeEventListener
			});
			lifecycle.addAndSetup = baseEvents.addEventListener;
			lifecycle.removeAndTeardown = baseEvents.removeEventListener;
			stealModule.exports = lifecycle;
		}
	],
	[
		105,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			stealModule.exports = function(obj) {
				return (
					!!obj &&
					(typeof obj === "object" || typeof obj === "function") &&
					typeof obj.then === "function"
				);
			};
		}
	],
	[
		106,
		function(stealRequire, stealExports, stealModule) {
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var dev = stealRequire(29);
			var Observation = stealRequire(23);
			var CID = stealRequire(55);
			var assign = stealRequire(57);
			var canEvent = stealRequire(52);
			var singleReference = stealRequire(56);
			var getValueSymbol = canSymbol.for("can.getValue"),
				getKeyValueSymbol = canSymbol.for("can.getKeyValue"),
				onValueSymbol = canSymbol.for("can.onValue"),
				onKeyValueSymbol = canSymbol.for("can.onKeyValue"),
				offKeyValueSymbol = canSymbol.for("can.offKeyValue"),
				observeDataSymbol = canSymbol.for("can.observeData");
			var promiseDataPrototype = {
				isPending: true,
				state: "pending",
				isResolved: false,
				isRejected: false,
				value: undefined,
				reason: undefined
			};
			assign(promiseDataPrototype, canEvent);
			canReflect.set(promiseDataPrototype, onKeyValueSymbol, function(
				key,
				handler
			) {
				var observeData = this;
				var translated = function() {
					handler(observeData[key]);
				};
				singleReference.set(handler, this, translated, key);
				canEvent.on.call(this, "state", translated);
			});
			canReflect.set(promiseDataPrototype, offKeyValueSymbol, function(
				key,
				handler
			) {
				var translated = singleReference.getAndDelete(handler, this, key);
				canEvent.off.call(this, "state", translated);
			});
			function initPromise(promise) {
				var observeData = promise[observeDataSymbol];
				if (!observeData) {
					Object.defineProperty(promise, observeDataSymbol, {
						enumerable: false,
						configurable: false,
						writable: false,
						value: Object.create(promiseDataPrototype)
					});
					observeData = promise[observeDataSymbol];
					CID(observeData);
				}
				promise.then(
					function(value) {
						observeData.isPending = false;
						observeData.isResolved = true;
						observeData.value = value;
						observeData.state = "resolved";
						observeData.dispatch("state", ["resolved", "pending"]);
					},
					function(reason) {
						observeData.isPending = false;
						observeData.isRejected = true;
						observeData.reason = reason;
						observeData.state = "rejected";
						observeData.dispatch("state", ["rejected", "pending"]);
					}
				);
			}
			function setupPromise(value) {
				var oldPromiseFn;
				var proto =
					"getPrototypeOf" in Object
						? Object.getPrototypeOf(value)
						: value.__proto__;
				if (value[getKeyValueSymbol] && value[observeDataSymbol]) {
					return;
				}
				if (proto === null || proto === Object.prototype) {
					proto = value;
					if (typeof proto.promise === "function") {
						oldPromiseFn = proto.promise;
						proto.promise = function() {
							var result = oldPromiseFn.call(proto);
							setupPromise(result);
							return result;
						};
					}
				}
				[
					getKeyValueSymbol,
					function(key) {
						if (!this[observeDataSymbol]) {
							initPromise(this);
						}
						Observation.add(this[observeDataSymbol], "state");
						switch (key) {
							case "state":
							case "isPending":
							case "isResolved":
							case "isRejected":
							case "value":
							case "reason":
								return this[observeDataSymbol][key];
							default:
								return this[key];
						}
					},
					getValueSymbol,
					function() {
						return this[getKeyValueSymbol]("value");
					},
					canSymbol.for("can.isValueLike"),
					false,
					onValueSymbol,
					function(handler) {
						return this[onKeyValueSymbol]("value", handler);
					},
					onKeyValueSymbol,
					function(key, handler) {
						if (!this[observeDataSymbol]) {
							initPromise(this);
						}
						var promise = this;
						var translated = function() {
							handler(promise[getKeyValueSymbol](key));
						};
						singleReference.set(handler, this, translated, key);
						canEvent.on.call(this[observeDataSymbol], "state", translated);
					},
					canSymbol.for("can.offValue"),
					function(handler) {
						return this[offKeyValueSymbol]("value", handler);
					},
					offKeyValueSymbol,
					function(key, handler) {
						var translated = singleReference.getAndDelete(handler, this, key);
						if (translated) {
							canEvent.off.call(this[observeDataSymbol], "state", translated);
						}
					}
				].forEach(function(symbol, index, list) {
					if (index % 2 === 0) {
						canReflect.set(proto, symbol, list[index + 1]);
					}
				});
			}
			stealModule.exports = setupPromise;
		}
	],
	[
		71,
		function(stealRequire, stealExports, stealModule) {
			var Observation = stealRequire(23);
			var dev = stealRequire(29);
			var each = stealRequire(12);
			var canSymbol = stealRequire(16);
			var canReflect = stealRequire(28);
			var isPromiseLike = stealRequire(105);
			var canReflectPromise = stealRequire(106);
			var getValueSymbol = canSymbol.for("can.getValue");
			var setValueSymbol = canSymbol.for("can.setValue");
			var isValueLikeSymbol = canSymbol.for("can.isValueLike");
			var observeReader;
			var isAt = function(index, reads) {
				var prevRead = reads[index - 1];
				return prevRead && prevRead.at;
			};
			var readValue = function(value, index, reads, options, state, prev) {
				var usedValueReader;
				do {
					usedValueReader = false;
					for (
						var i = 0, len = observeReader.valueReaders.length;
						i < len;
						i++
					) {
						if (
							observeReader.valueReaders[i].test(value, index, reads, options)
						) {
							value = observeReader.valueReaders[i].read(
								value,
								index,
								reads,
								options,
								state,
								prev
							);
						}
					}
				} while (usedValueReader);
				return value;
			};
			var specialRead = {
				index: true,
				key: true,
				event: true,
				element: true,
				viewModel: true
			};
			var checkForObservableAndNotify = function(
				options,
				state,
				getObserves,
				value,
				index
			) {
				if (options.foundObservable && !state.foundObservable) {
					if (Observation.trapsCount()) {
						Observation.addAll(getObserves());
						options.foundObservable(value, index);
						state.foundObservable = true;
					}
				}
			};
			observeReader = {
				read: function(parent, reads, options) {
					options = options || {};
					var state = { foundObservable: false };
					var getObserves;
					if (options.foundObservable) {
						getObserves = Observation.trap();
					}
					var cur = readValue(parent, 0, reads, options, state),
						type,
						prev,
						readLength = reads.length,
						i = 0,
						last;
					checkForObservableAndNotify(options, state, getObserves, parent, 0);
					while (i < readLength) {
						prev = cur;
						for (
							var r = 0, readersLength = observeReader.propertyReaders.length;
							r < readersLength;
							r++
						) {
							var reader = observeReader.propertyReaders[r];
							if (reader.test(cur)) {
								cur = reader.read(cur, reads[i], i, options, state);
								break;
							}
						}
						checkForObservableAndNotify(options, state, getObserves, prev, i);
						last = cur;
						i = i + 1;
						cur = readValue(cur, i, reads, options, state, prev);
						checkForObservableAndNotify(
							options,
							state,
							getObserves,
							prev,
							i - 1
						);
						type = typeof cur;
						if (i < reads.length && (cur === null || cur === undefined)) {
							if (options.earlyExit) {
								options.earlyExit(prev, i - 1, cur);
							}
							return {
								value: undefined,
								parent: prev
							};
						}
					}
					if (cur === undefined) {
						if (options.earlyExit) {
							options.earlyExit(prev, i - 1);
						}
					}
					return {
						value: cur,
						parent: prev
					};
				},
				get: function(parent, reads, options) {
					return observeReader.read(
						parent,
						observeReader.reads(reads),
						options || {}
					).value;
				},
				valueReadersMap: {},
				valueReaders: [
					{
						name: "function",
						test: function(value) {
							return (
								value &&
								canReflect.isFunctionLike(value) &&
								!canReflect.isConstructorLike(value)
							);
						},
						read: function(value, i, reads, options, state, prev) {
							if (isAt(i, reads)) {
								return i === reads.length ? value.bind(prev) : value;
							} else if (
								options.callMethodsOnObservables &&
								canReflect.isObservableLike(prev) &&
								canReflect.isMapLike(prev)
							) {
								return value.apply(prev, options.args || []);
							} else if (options.isArgument && i === reads.length) {
								return options.proxyMethods !== false
									? value.bind(prev)
									: value;
							}
							return value.apply(prev, options.args || []);
						}
					},
					{
						name: "isValueLike",
						test: function(value, i, reads, options) {
							return (
								value &&
								value[getValueSymbol] &&
								value[isValueLikeSymbol] !== false &&
								(options.foundAt || !isAt(i, reads))
							);
						},
						read: function(value, i, reads, options) {
							if (options.readCompute === false && i === reads.length) {
								return value;
							}
							return canReflect.getValue(value);
						},
						write: function(base, newVal) {
							if (base[setValueSymbol]) {
								base[setValueSymbol](newVal);
							} else if (base.set) {
								base.set(newVal);
							} else {
								base(newVal);
							}
						}
					}
				],
				propertyReadersMap: {},
				propertyReaders: [
					{
						name: "map",
						test: function(value) {
							if (
								isPromiseLike(value) ||
								(typeof value === "object" &&
									value &&
									typeof value.then === "function")
							) {
								canReflectPromise(value);
							}
							return (
								canReflect.isObservableLike(value) &&
								canReflect.isMapLike(value)
							);
						},
						read: function(value, prop) {
							var res = canReflect.getKeyValue(value, prop.key);
							if (res !== undefined) {
								return res;
							} else {
								return value[prop.key];
							}
						},
						write: canReflect.setKeyValue
					},
					{
						name: "object",
						test: function() {
							return true;
						},
						read: function(value, prop, i, options) {
							if (value == null) {
								return undefined;
							} else {
								if (typeof value === "object") {
									if (prop.key in value) {
										return value[prop.key];
									} else if (
										prop.at &&
										specialRead[prop.key] &&
										"@" + prop.key in value
									) {
										options.foundAt = true;
										return value["@" + prop.key];
									}
								} else {
									return value[prop.key];
								}
							}
						},
						write: function(base, prop, newVal) {
							base[prop] = newVal;
						}
					}
				],
				reads: function(keyArg) {
					var key = "" + keyArg;
					var keys = [];
					var last = 0;
					var at = false;
					if (key.charAt(0) === "@") {
						last = 1;
						at = true;
					}
					var keyToAdd = "";
					for (var i = last; i < key.length; i++) {
						var character = key.charAt(i);
						if (character === "." || character === "@") {
							if (key.charAt(i - 1) !== "\\") {
								keys.push({
									key: keyToAdd,
									at: at
								});
								at = character === "@";
								keyToAdd = "";
							} else {
								keyToAdd = keyToAdd.substr(0, keyToAdd.length - 1) + ".";
							}
						} else {
							keyToAdd += character;
						}
					}
					keys.push({
						key: keyToAdd,
						at: at
					});
					return keys;
				},
				write: function(parent, key, value, options) {
					var keys = typeof key === "string" ? observeReader.reads(key) : key;
					var last;
					options = options || {};
					if (keys.length > 1) {
						last = keys.pop();
						parent = observeReader.read(parent, keys, options).value;
						keys.push(last);
					} else {
						last = keys[0];
					}
					if (
						observeReader.valueReadersMap.isValueLike.test(
							parent[last.key],
							keys.length - 1,
							keys,
							options
						)
					) {
						observeReader.valueReadersMap.isValueLike.write(
							parent[last.key],
							value,
							options
						);
					} else {
						if (
							observeReader.valueReadersMap.isValueLike.test(
								parent,
								keys.length - 1,
								keys,
								options
							)
						) {
							parent = parent[getValueSymbol]();
						}
						if (observeReader.propertyReadersMap.map.test(parent)) {
							observeReader.propertyReadersMap.map.write(
								parent,
								last.key,
								value,
								options
							);
						} else if (observeReader.propertyReadersMap.object.test(parent)) {
							observeReader.propertyReadersMap.object.write(
								parent,
								last.key,
								value,
								options
							);
							if (options.observation) {
								options.observation.update();
							}
						}
					}
				}
			};
			each(observeReader.propertyReaders, function(reader) {
				observeReader.propertyReadersMap[reader.name] = reader;
			});
			each(observeReader.valueReaders, function(reader) {
				observeReader.valueReadersMap[reader.name] = reader;
			});
			observeReader.set = observeReader.write;
			stealModule.exports = observeReader;
		}
	],
	[
		54,
		function(stealRequire, stealExports, stealModule) {
			var Observation = stealRequire(23);
			var canEvent = stealRequire(52);
			var eventLifecycle = stealRequire(88);
			stealRequire(53);
			var observeReader = stealRequire(71);
			var getObject = stealRequire(87);
			var CID = stealRequire(55);
			var assign = stealRequire(57);
			var canLog = stealRequire(47);
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var CIDSet = stealRequire(58);
			var singleReference = stealRequire(56);
			var Compute = function(getterSetter, context, eventName, bindOnce) {
				CID(this, "compute");
				var args = [];
				for (var i = 0, arglen = arguments.length; i < arglen; i++) {
					args[i] = arguments[i];
				}
				var contextType = typeof args[1];
				if (typeof args[0] === "function") {
					this._setupGetterSetterFn(args[0], args[1], args[2], args[3]);
				} else if (args[1] !== undefined) {
					if (contextType === "string" || contextType === "number") {
						var isListLike =
							canReflect.isObservableLike(args[0]) &&
							canReflect.isListLike(args[0]);
						var isMapLike =
							canReflect.isObservableLike(args[0]) &&
							canReflect.isMapLike(args[0]);
						if (isMapLike || isListLike) {
							var map = args[0];
							var propertyName = args[1];
							var mapGetterSetter = function(newValue) {
								if (arguments.length) {
									observeReader.set(map, propertyName, newValue);
								} else {
									if (isListLike) {
										observeReader.get(map, "length");
									}
									return observeReader.get(map, "" + propertyName);
								}
							};
							this._setupGetterSetterFn(
								mapGetterSetter,
								args[1],
								args[2],
								args[3]
							);
						} else {
							this._setupProperty(args[0], args[1], args[2]);
						}
					} else if (contextType === "function") {
						this._setupSetter(args[0], args[1], args[2]);
					} else {
						if (args[1] && args[1].fn) {
							this._setupAsyncCompute(args[0], args[1]);
						} else {
							this._setupSettings(args[0], args[1]);
						}
					}
				} else {
					this._setupSimpleValue(args[0]);
				}
				this._args = args;
				this._primaryDepth = 0;
				this.isComputed = true;
			};
			var updateOnChange = function(compute, newValue, oldValue, batchNum) {
				var valueChanged =
					newValue !== oldValue &&
					!(newValue !== newValue && oldValue !== oldValue);
				if (valueChanged) {
					canEvent.dispatch.call(
						compute,
						{
							type: "change",
							batchNum: batchNum
						},
						[newValue, oldValue]
					);
				}
			};
			var setupComputeHandlers = function(compute, func, context) {
				var observation = new Observation(func, context, compute);
				compute.observation = observation;
				return {
					_on: function() {
						observation.start();
						compute.value = observation.value;
					},
					_off: function() {
						observation.stop();
					},
					getDepth: function() {
						return observation.getDepth();
					}
				};
			};
			assign(Compute.prototype, {
				setPrimaryDepth: function(depth) {
					this._primaryDepth = depth;
				},
				_setupGetterSetterFn: function(getterSetter, context, eventName) {
					this._set = context ? getterSetter.bind(context) : getterSetter;
					this._get = context ? getterSetter.bind(context) : getterSetter;
					this._canObserve = eventName === false ? false : true;
					var handlers = setupComputeHandlers(
						this,
						getterSetter,
						context || this
					);
					assign(this, handlers);
				},
				_setupProperty: function(target, propertyName, eventName) {
					var self = this,
						handler;
					handler = function() {
						self.updater(self._get(), self.value);
					};
					this._get = function() {
						return getObject(target, propertyName);
					};
					this._set = function(value) {
						var properties = propertyName.split("."),
							leafPropertyName = properties.pop();
						if (properties.length) {
							var targetProperty = getObject(target, properties.join("."));
							targetProperty[leafPropertyName] = value;
						} else {
							target[propertyName] = value;
						}
					};
					this._on = function(update) {
						canEvent.on.call(target, eventName || propertyName, handler);
						this.value = this._get();
					};
					this._off = function() {
						return canEvent.off.call(
							target,
							eventName || propertyName,
							handler
						);
					};
				},
				_setupSetter: function(initialValue, setter, eventName) {
					this.value = initialValue;
					this._set = setter;
					assign(this, eventName);
				},
				_setupSettings: function(initialValue, settings) {
					this.value = initialValue;
					this._set = settings.set || this._set;
					this._get = settings.get || this._get;
					if (!settings.__selfUpdater) {
						var self = this,
							oldUpdater = this.updater;
						this.updater = function() {
							oldUpdater.call(self, self._get(), self.value);
						};
					}
					this._on = settings.on ? settings.on : this._on;
					this._off = settings.off ? settings.off : this._off;
				},
				_setupAsyncCompute: function(initialValue, settings) {
					var self = this;
					var getter = settings.fn;
					var bindings;
					this.value = initialValue;
					this._setUpdates = true;
					this.lastSetValue = new Compute(initialValue);
					this._set = function(newVal) {
						if (newVal === self.lastSetValue.get()) {
							return this.value;
						}
						return self.lastSetValue.set(newVal);
					};
					this._get = function() {
						return getter.call(settings.context, self.lastSetValue.get());
					};
					if (getter.length === 0) {
						bindings = setupComputeHandlers(this, getter, settings.context);
					} else if (getter.length === 1) {
						bindings = setupComputeHandlers(
							this,
							function() {
								return getter.call(settings.context, self.lastSetValue.get());
							},
							settings
						);
					} else {
						var oldUpdater = this.updater,
							resolve = Observation.ignore(function(newVal) {
								oldUpdater.call(self, newVal, self.value);
							});
						this.updater = function(newVal) {
							oldUpdater.call(self, newVal, self.value);
						};
						bindings = setupComputeHandlers(
							this,
							function() {
								var res = getter.call(
									settings.context,
									self.lastSetValue.get(),
									resolve
								);
								return res !== undefined ? res : this.value;
							},
							this
						);
					}
					assign(this, bindings);
				},
				_setupSimpleValue: function(initialValue) {
					this.value = initialValue;
				},
				_eventSetup: Observation.ignore(function() {
					this.bound = true;
					this._on(this.updater);
				}),
				_eventTeardown: function() {
					this._off(this.updater);
					this.bound = false;
				},
				addEventListener: eventLifecycle.addAndSetup,
				removeEventListener: eventLifecycle.removeAndTeardown,
				clone: function(context) {
					if (context && typeof this._args[0] === "function") {
						this._args[1] = context;
					} else if (context) {
						this._args[2] = context;
					}
					return new Compute(
						this._args[0],
						this._args[1],
						this._args[2],
						this._args[3]
					);
				},
				_on: function() {},
				_off: function() {},
				get: function() {
					var recordingObservation = Observation.isRecording();
					if (recordingObservation && this._canObserve !== false) {
						Observation.add(this, "change");
						if (!this.bound) {
							Compute.temporarilyBind(this);
						}
					}
					if (this.bound) {
						if (this.observation) {
							return this.observation.get();
						} else {
							return this.value;
						}
					} else {
						return this._get();
					}
				},
				_get: function() {
					return this.value;
				},
				set: function(newVal) {
					var old = this.value;
					var setVal = this._set(newVal, old);
					if (this._setUpdates) {
						return this.value;
					}
					if (this.hasDependencies) {
						return this._get();
					}
					this.updater(setVal === undefined ? this._get() : setVal, old);
					return this.value;
				},
				_set: function(newVal) {
					return (this.value = newVal);
				},
				updater: function(newVal, oldVal, batchNum) {
					this.value = newVal;
					if (this.observation) {
						this.observation.value = newVal;
					}
					updateOnChange(this, newVal, oldVal, batchNum);
				},
				toFunction: function() {
					return this._computeFn.bind(this);
				},
				_computeFn: function(newVal) {
					if (arguments.length) {
						return this.set(newVal);
					}
					return this.get();
				}
			});
			var hasDependencies = function() {
				return this.observation && this.observation.hasDependencies();
			};
			Object.defineProperty(Compute.prototype, "hasDependencies", {
				get: hasDependencies
			});
			canReflect.set(
				Compute.prototype,
				canSymbol.for("can.valueHasDependencies"),
				hasDependencies
			);
			Compute.prototype.on = Compute.prototype.bind =
				Compute.prototype.addEventListener;
			Compute.prototype.off = Compute.prototype.unbind =
				Compute.prototype.removeEventListener;
			canReflect.set(Compute.prototype, canSymbol.for("can.onValue"), function(
				handler
			) {
				var translationHandler = function(ev, newValue) {
					handler(newValue);
				};
				singleReference.set(handler, this, translationHandler);
				this.addEventListener("change", translationHandler);
			});
			canReflect.set(Compute.prototype, canSymbol.for("can.offValue"), function(
				handler
			) {
				this.removeEventListener(
					"change",
					singleReference.getAndDelete(handler, this)
				);
			});
			canReflect.set(
				Compute.prototype,
				canSymbol.for("can.getValue"),
				Compute.prototype.get
			);
			canReflect.set(
				Compute.prototype,
				canSymbol.for("can.setValue"),
				Compute.prototype.set
			);
			Compute.temporarilyBind = Observation.temporarilyBind;
			Compute.async = function(initialValue, asyncComputer, context) {
				return new Compute(initialValue, {
					fn: asyncComputer,
					context: context
				});
			};
			Compute.truthy = function(compute) {
				return new Compute(function() {
					var res = compute.get();
					if (typeof res === "function") {
						res = res.get();
					}
					return !!res;
				});
			};
			canReflect.set(
				Compute.prototype,
				canSymbol.for("can.setValue"),
				Compute.prototype.set
			);
			canReflect.set(Compute.prototype, canSymbol.for("can.isValueLike"), true);
			canReflect.set(Compute.prototype, canSymbol.for("can.isMapLike"), false);
			canReflect.set(Compute.prototype, canSymbol.for("can.isListLike"), false);
			canReflect.set(
				Compute.prototype,
				canSymbol.for("can.valueHasDependencies"),
				function() {
					return !!this.observation;
				}
			);
			canReflect.set(
				Compute.prototype,
				canSymbol.for("can.getValueDependencies"),
				function() {
					var ret;
					if (this.observation) {
						ret = { valueDependencies: new CIDSet() };
						ret.valueDependencies.add(this.observation);
					}
					return ret;
				}
			);
			stealModule.exports = stealExports = Compute;
		}
	],
	[
		22,
		function(stealRequire, stealExports, stealModule) {
			stealRequire(52);
			stealRequire(53);
			var Compute = stealRequire(54);
			var CID = stealRequire(55);
			var namespace = stealRequire(19);
			var singleReference = stealRequire(56);
			var canReflect = stealRequire(41);
			var canSymbol = stealRequire(16);
			var canOnValueSymbol = canSymbol.for("can.onValue"),
				canOffValueSymbol = canSymbol.for("can.offValue"),
				canGetValue = canSymbol.for("can.getValue"),
				canSetValue = canSymbol.for("can.setValue"),
				isValueLike = canSymbol.for("can.isValueLike"),
				isMapLike = canSymbol.for("can.isMapLike"),
				isListLike = canSymbol.for("can.isListLike"),
				isFunctionLike = canSymbol.for("can.isFunctionLike"),
				canValueHasDependencies = canSymbol.for("can.valueHasDependencies"),
				canGetValueDependencies = canSymbol.for("can.getValueDependencies");
			var addEventListener = function(ev, handler) {
				var compute = this;
				var translationHandler;
				if (handler) {
					translationHandler = function() {
						handler.apply(compute, arguments);
					};
					singleReference.set(handler, this, translationHandler);
				}
				return compute.computeInstance.addEventListener(ev, translationHandler);
			};
			var removeEventListener = function(ev, handler) {
				return this.computeInstance.removeEventListener(
					ev,
					handler && singleReference.getAndDelete(handler, this)
				);
			};
			var onValue = function(handler) {
					return this.computeInstance[canOnValueSymbol](handler);
				},
				offValue = function(handler) {
					return this.computeInstance[canOffValueSymbol](handler);
				},
				getValue = function() {
					return this.computeInstance.get();
				},
				setValue = function(value) {
					return this.computeInstance.set(value);
				},
				hasDependencies = function() {
					return this.computeInstance.hasDependencies;
				},
				getDependencies = function() {
					return this.computeInstance[canGetValueDependencies]();
				};
			var COMPUTE = function(getterSetter, context, eventName, bindOnce) {
				function compute(val) {
					if (arguments.length) {
						return compute.computeInstance.set(val);
					}
					return compute.computeInstance.get();
				}
				var cid = CID(compute, "compute");
				compute.computeInstance = new Compute(
					getterSetter,
					context,
					eventName,
					bindOnce
				);
				compute.handlerKey = "__handler" + cid;
				compute.on = compute.bind = compute.addEventListener = addEventListener;
				compute.off = compute.unbind = compute.removeEventListener = removeEventListener;
				compute.isComputed = compute.computeInstance.isComputed;
				compute.clone = function(ctx) {
					if (typeof getterSetter === "function") {
						context = ctx;
					}
					return COMPUTE(getterSetter, context, ctx, bindOnce);
				};
				canReflect.set(compute, canOnValueSymbol, onValue);
				canReflect.set(compute, canOffValueSymbol, offValue);
				canReflect.set(compute, canGetValue, getValue);
				canReflect.set(compute, canSetValue, setValue);
				canReflect.set(compute, isValueLike, true);
				canReflect.set(compute, isMapLike, false);
				canReflect.set(compute, isListLike, false);
				canReflect.set(compute, isFunctionLike, false);
				canReflect.set(compute, canValueHasDependencies, hasDependencies);
				canReflect.set(compute, canGetValueDependencies, getDependencies);
				return compute;
			};
			COMPUTE.truthy = function(compute) {
				return COMPUTE(function() {
					var res = compute();
					return !!res;
				});
			};
			COMPUTE.async = function(initialValue, asyncComputer, context) {
				return COMPUTE(initialValue, {
					fn: asyncComputer,
					context: context
				});
			};
			COMPUTE.temporarilyBind = Compute.temporarilyBind;
			stealModule.exports = namespace.compute = COMPUTE;
		}
	],
	[
		125,
		function(stealRequire, stealExports, stealModule) {
			var namespace = stealRequire(19);
			function buildParam(prefix, obj, add) {
				if (Array.isArray(obj)) {
					for (var i = 0, l = obj.length; i < l; ++i) {
						add(prefix + "[]", obj[i]);
					}
				} else if (obj && typeof obj === "object") {
					for (var name in obj) {
						buildParam(prefix + "[" + name + "]", obj[name], add);
					}
				} else {
					add(prefix, obj);
				}
			}
			stealModule.exports = namespace.param = function param(object) {
				var pairs = [],
					add = function(key, value) {
						pairs.push(
							encodeURIComponent(key) + "=" + encodeURIComponent(value)
						);
					};
				for (var name in object) {
					buildParam(name, object[name], add);
				}
				return pairs.join("&").replace(/%20/g, "+");
			};
		}
	],
	[
		126,
		function(stealRequire, stealExports, stealModule) {
			var namespace = stealRequire(19);
			var digitTest = /^\d+$/,
				keyBreaker = /([^\[\]]+)|(\[\])/g,
				paramTest = /([^?#]*)(#.*)?$/,
				entityRegex = /%([^0-9a-f][0-9a-f]|[0-9a-f][^0-9a-f]|[^0-9a-f][^0-9a-f])/i,
				prep = function(str) {
					str = str.replace(/\+/g, " ");
					try {
						return decodeURIComponent(str);
					} catch (e) {
						return decodeURIComponent(
							str.replace(entityRegex, function(match, hex) {
								return "%25" + hex;
							})
						);
					}
				};
			stealModule.exports = namespace.deparam = function(params) {
				var data = {},
					pairs,
					lastPart;
				if (params && paramTest.test(params)) {
					pairs = params.split("&");
					pairs.forEach(function(pair) {
						var parts = pair.split("="),
							key = prep(parts.shift()),
							value = prep(parts.join("=")),
							current = data;
						if (key) {
							parts = key.match(keyBreaker);
							for (var j = 0, l = parts.length - 1; j < l; j++) {
								if (!current[parts[j]]) {
									current[parts[j]] =
										digitTest.test(parts[j + 1]) || parts[j + 1] === "[]"
											? []
											: {};
								}
								current = current[parts[j]];
							}
							lastPart = parts.pop();
							if (lastPart === "[]") {
								current.push(value);
							} else {
								current[lastPart] = value;
							}
						}
					});
				}
				return data;
			};
		}
	],
	[
		113,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var isFunction = stealRequire(60);
			var isPlainObject = stealRequire(81);
			function deepAssign() {
				var options,
					name,
					src,
					copy,
					copyIsArray,
					clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length;
				if (typeof target !== "object" && !isFunction(target)) {
					target = {};
				}
				if (length === i) {
					target = this;
					--i;
				}
				for (; i < length; i++) {
					if ((options = arguments[i]) != null) {
						for (name in options) {
							src = target[name];
							copy = options[name];
							if (target === copy) {
								continue;
							}
							if (
								copy &&
								(isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
							) {
								if (copyIsArray) {
									copyIsArray = false;
									clone = src && Array.isArray(src) ? src : [];
								} else {
									clone = src && isPlainObject(src) ? src : {};
								}
								target[name] = deepAssign(clone, copy);
							} else if (copy !== undefined) {
								target[name] = copy;
							}
						}
					}
				}
				return target;
			}
			stealModule.exports = deepAssign;
		}
	],
	[
		127,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				stealModule.exports = function() {
					return (
						typeof WorkerGlobalScope !== "undefined" &&
						this instanceof WorkerGlobalScope
					);
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		62,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var slice = [].slice;
			var defaultIdentity = function(a, b) {
				return a === b;
			};
			function reverseDiff(
				oldDiffStopIndex,
				newDiffStopIndex,
				oldList,
				newList,
				identity
			) {
				var oldIndex = oldList.length - 1,
					newIndex = newList.length - 1;
				while (oldIndex > oldDiffStopIndex && newIndex > newDiffStopIndex) {
					var oldItem = oldList[oldIndex],
						newItem = newList[newIndex];
					if (identity(oldItem, newItem)) {
						oldIndex--;
						newIndex--;
						continue;
					} else {
						return [
							{
								index: newDiffStopIndex,
								deleteCount: oldIndex - oldDiffStopIndex + 1,
								insert: slice.call(newList, newDiffStopIndex, newIndex + 1)
							}
						];
					}
				}
				return [
					{
						index: newDiffStopIndex,
						deleteCount: oldIndex - oldDiffStopIndex + 1,
						insert: slice.call(newList, newDiffStopIndex, newIndex + 1)
					}
				];
			}
			stealModule.exports = stealExports = function(
				oldList,
				newList,
				identity
			) {
				identity = identity || defaultIdentity;
				var oldIndex = 0,
					newIndex = 0,
					oldLength = oldList.length,
					newLength = newList.length,
					patches = [];
				while (oldIndex < oldLength && newIndex < newLength) {
					var oldItem = oldList[oldIndex],
						newItem = newList[newIndex];
					if (identity(oldItem, newItem)) {
						oldIndex++;
						newIndex++;
						continue;
					}
					if (
						newIndex + 1 < newLength &&
						identity(oldItem, newList[newIndex + 1])
					) {
						patches.push({
							index: newIndex,
							deleteCount: 0,
							insert: [newList[newIndex]]
						});
						oldIndex++;
						newIndex += 2;
						continue;
					} else if (
						oldIndex + 1 < oldLength &&
						identity(oldList[oldIndex + 1], newItem)
					) {
						patches.push({
							index: newIndex,
							deleteCount: 1,
							insert: []
						});
						oldIndex += 2;
						newIndex++;
						continue;
					} else {
						patches.push.apply(
							patches,
							reverseDiff(oldIndex, newIndex, oldList, newList, identity)
						);
						return patches;
					}
				}
				if (newIndex === newLength && oldIndex === oldLength) {
					return patches;
				}
				patches.push({
					index: newIndex,
					deleteCount: oldLength - oldIndex,
					insert: slice.call(newList, newIndex)
				});
				return patches;
			};
		}
	],
	[
		131,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var assign = stealRequire(102);
			stealModule.exports = stealExports = function(oldObject, newObject) {
				var oldObjectClone,
					patches = [];
				oldObjectClone = assign({}, oldObject);
				for (var newProp in newObject) {
					if (!oldObject || !oldObject.hasOwnProperty(newProp)) {
						patches.push({
							property: newProp,
							type: "add",
							value: newObject[newProp]
						});
					} else if (newObject[newProp] !== oldObject[newProp]) {
						patches.push({
							property: newProp,
							type: "set",
							value: newObject[newProp]
						});
					}
					delete oldObjectClone[newProp];
				}
				for (var oldProp in oldObjectClone) {
					patches.push({
						property: oldProp,
						type: "remove"
					});
				}
				return patches;
			};
		}
	],
	[
		119,
		function(stealRequire, stealExports, stealModule) {
			var canBatch = stealRequire(53);
			var canEvent = stealRequire(52);
			var Observation = stealRequire(23);
			var compute = stealRequire(22);
			var namespace = stealRequire(19);
			var param = stealRequire(125);
			var deparam = stealRequire(126);
			var each = stealRequire(12);
			var string = stealRequire(97);
			var isFunction = stealRequire(60);
			var isEmptyObject = stealRequire(61);
			var deepAssign = stealRequire(113);
			var isWebWorker = stealRequire(127);
			var isBrowserWindow = stealRequire(80);
			var makeArray = stealRequire(38);
			var assign = stealRequire(57);
			var types = stealRequire(76);
			var dev = stealRequire(29);
			var diff = stealRequire(62);
			var diffObject = stealRequire(131);
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var curliesMatcher = /\{\s*([\w.]+)\s*\}/g;
			var colonMatcher = /\:([\w.]+)/g;
			var paramsMatcher = /^(?:&[^=]+=[^&]*)+/;
			var makeProps = function(props) {
				var tags = [];
				each(props, function(val, name) {
					tags.push(
						(name === "className" ? "class" : name) +
							'="' +
							(name === "href" ? val : string.esc(val)) +
							'"'
					);
				});
				return tags.join(" ");
			};
			var matchesData = function(route, data) {
				var count = 0,
					i = 0,
					defaults = {};
				for (var name in route.defaults) {
					if (route.defaults[name] === data[name]) {
						defaults[name] = 1;
						count++;
					}
				}
				for (; i < route.names.length; i++) {
					if (!data.hasOwnProperty(route.names[i])) {
						return -1;
					}
					if (!defaults[route.names[i]]) {
						count++;
					}
				}
				return count;
			};
			var location = typeof window !== "undefined" ? window.location : {};
			var wrapQuote = function(str) {
				return (str + "").replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
			};
			var attrHelper = function(prop, value) {
				if ("attr" in this) {
					return this.attr.apply(this, arguments);
				} else {
					if (arguments.length > 1) {
						canReflect.setKeyValue(this, prop, value);
						return this;
					} else if (typeof prop === "object") {
						canReflect.assignDeep(this, prop);
						return this;
					} else if (arguments.length === 1) {
						return canReflect.getKeyValue(this, prop);
					} else {
						return canReflect.unwrap(this);
					}
				}
			};
			var stringify = function(obj) {
				if (obj && typeof obj === "object") {
					if (obj && typeof obj === "object" && "serialize" in obj) {
						obj = obj.serialize();
					} else {
						obj = isFunction(obj.slice) ? obj.slice() : assign({}, obj);
					}
					each(obj, function(val, prop) {
						obj[prop] = stringify(val);
					});
				} else if (
					obj !== undefined &&
					obj !== null &&
					isFunction(obj.toString)
				) {
					obj = obj.toString();
				}
				return obj;
			};
			var removeBackslash = function(str) {
				return str.replace(/\\/g, "");
			};
			var timer;
			var curParams;
			var lastHash;
			var changingData;
			var changedAttrs = [];
			var eventsObject = assign({}, canEvent);
			var canRoute = function(url, defaults) {
				var root = canRoute._call("root");
				if (
					root.lastIndexOf("/") === root.length - 1 &&
					url.indexOf("/") === 0
				) {
					url = url.substr(1);
				}
				defaults = defaults || {};
				var names = [],
					res,
					test = "",
					matcher,
					lastIndex,
					next,
					querySeparator = canRoute._call("querySeparator"),
					matchSlashes = canRoute._call("matchSlashes");
				if (colonMatcher.test(url)) {
					matcher = colonMatcher;
				} else {
					matcher = curliesMatcher;
				}
				lastIndex = matcher.lastIndex = 0;
				while ((res = matcher.exec(url))) {
					names.push(res[1]);
					test += removeBackslash(
						url.substring(lastIndex, matcher.lastIndex - res[0].length)
					);
					next =
						"\\" +
						(removeBackslash(url.substr(matcher.lastIndex, 1)) ||
							querySeparator + (matchSlashes ? "" : "|/"));
					test += "([^" + next + "]" + (defaults[res[1]] ? "*" : "+") + ")";
					lastIndex = matcher.lastIndex;
				}
				test += url.substr(lastIndex).replace("\\", "");
				canRoute.routes[url] = {
					test: new RegExp(
						"^" + test + "($|" + wrapQuote(querySeparator) + ")"
					),
					route: url,
					names: names,
					defaults: defaults,
					length: url.split("/").length
				};
				return canRoute;
			};
			var oldProperties = null;
			var onRouteDataChange = function(ev, newProps, oldProps) {
				changingData = 1;
				if (!oldProperties) {
					oldProperties = oldProps;
				}
				clearTimeout(timer);
				timer = setTimeout(function() {
					var old = oldProperties;
					oldProperties = null;
					changingData = 0;
					var serialized = canRoute.data.serialize(),
						path = canRoute.param(serialized, true);
					canRoute._call("setURL", path, newProps, old);
					canEvent.dispatch.call(eventsObject, "__url", [path, lastHash]);
					lastHash = path;
					changedAttrs = [];
				}, 10);
			};
			var stringCoercingMapDecorator = function(map) {
				var sym = canSymbol.for("can.route.stringCoercingMapDecorator");
				if (!map.attr[sym]) {
					var attrSuper = map.attr;
					map.attr = function(prop, val) {
						var serializable =
								this.define === undefined ||
								this.define[prop] === undefined ||
								!!this.define[prop].serialize,
							args;
						if (serializable) {
							args = stringify(Array.apply(null, arguments));
						} else {
							args = arguments;
						}
						return attrSuper.apply(this, args);
					};
					canReflect.setKeyValue(map.attr, sym, true);
				}
				return map;
			};
			var recursiveClean = function(old, cur, data) {
				for (var attr in old) {
					if (cur[attr] === undefined) {
						if ("removeAttr" in data) {
							data.removeAttr(attr);
						} else {
							cur[attr] = undefined;
						}
					} else if (
						Object.prototype.toString.call(old[attr]) === "[object Object]"
					) {
						recursiveClean(old[attr], cur[attr], attrHelper.call(data, attr));
					}
				}
			};
			var matchCheck = function(source, matcher) {
				for (var prop in source) {
					var s = source[prop],
						m = matcher[prop];
					if (s && m && typeof s === "object" && typeof matcher === "object") {
						return matchCheck(s, m);
					}
					if (s != m) {
						return false;
					}
				}
				return true;
			};
			var setState = (canRoute.setState = function() {
				var hash = canRoute._call("matchingPartOfURL");
				var oldParams = curParams;
				curParams = canRoute.deparam(hash);
				var matched;
				if (!changingData || hash !== lastHash) {
					canRoute.batch.start();
					recursiveClean(oldParams, curParams, canRoute.data);
					matched = curParams.route;
					delete curParams.route;
					canRoute.matched(matched);
					canRoute.attr(curParams);
					curParams.route = matched;
					canEvent.dispatch.call(eventsObject, "__url", [hash, lastHash]);
					canRoute.batch.stop();
				}
			});
			var decode = function(str) {
				try {
					return decodeURIComponent(str);
				} catch (ex) {
					return unescape(str);
				}
			};
			assign(canRoute, {
				param: function(data, _setRoute) {
					var route,
						matches = 0,
						matchCount,
						routeName = data.route,
						propCount = 0,
						cpy,
						res,
						after,
						matcher;
					delete data.route;
					each(data, function() {
						propCount++;
					});
					each(canRoute.routes, function(temp, name) {
						matchCount = matchesData(temp, data);
						if (matchCount > matches) {
							route = temp;
							matches = matchCount;
						}
						if (matchCount >= propCount) {
							return false;
						}
					});
					if (
						canRoute.routes[routeName] &&
						matchesData(canRoute.routes[routeName], data) === matches
					) {
						route = canRoute.routes[routeName];
					}
					if (route) {
						cpy = assign({}, data);
						matcher = colonMatcher.test(route.route)
							? colonMatcher
							: curliesMatcher;
						res = route.route
							.replace(matcher, function(whole, name) {
								delete cpy[name];
								return data[name] === route.defaults[name]
									? ""
									: encodeURIComponent(data[name]);
							})
							.replace("\\", "");
						each(route.defaults, function(val, name) {
							if (cpy[name] === val) {
								delete cpy[name];
							}
						});
						after = param(cpy);
						if (_setRoute) {
							canRoute.matched(route.route);
						}
						return (
							res + (after ? canRoute._call("querySeparator") + after : "")
						);
					}
					return isEmptyObject(data)
						? ""
						: canRoute._call("querySeparator") + param(data);
				},
				deparam: function(url) {
					var root = canRoute._call("root");
					if (
						root.lastIndexOf("/") === root.length - 1 &&
						url.indexOf("/") === 0
					) {
						url = url.substr(1);
					}
					var route = { length: -1 },
						querySeparator = canRoute._call("querySeparator"),
						paramsMatcher = canRoute._call("paramsMatcher");
					each(canRoute.routes, function(temp, name) {
						if (temp.test.test(url) && temp.length > route.length) {
							route = temp;
						}
					});
					if (route.length > -1) {
						var parts = url.match(route.test),
							start = parts.shift(),
							remainder = url.substr(
								start.length -
									(parts[parts.length - 1] === querySeparator ? 1 : 0)
							),
							obj =
								remainder && paramsMatcher.test(remainder)
									? deparam(remainder.slice(1))
									: {};
						obj = deepAssign(true, {}, route.defaults, obj);
						each(parts, function(part, i) {
							if (part && part !== querySeparator) {
								obj[route.names[i]] = decode(part);
							}
						});
						obj.route = route.route;
						return obj;
					}
					if (url.charAt(0) !== querySeparator) {
						url = querySeparator + url;
					}
					return paramsMatcher.test(url) ? deparam(url.slice(1)) : {};
				},
				map: function(data) {
					canRoute.data = data;
				},
				routes: {},
				ready: function(val) {
					if (val !== true) {
						canRoute._setup();
						if (isBrowserWindow() || isWebWorker()) {
							canRoute.setState();
						}
					}
					return canRoute;
				},
				url: function(options, merge) {
					if (merge) {
						Observation.add(eventsObject, "__url");
						var baseOptions = canRoute.deparam(
							canRoute._call("matchingPartOfURL")
						);
						options = assign(assign({}, baseOptions), options);
					}
					return canRoute._call("root") + canRoute.param(options);
				},
				link: function(name, options, props, merge) {
					return (
						"<a " +
						makeProps(assign({ href: canRoute.url(options, merge) }, props)) +
						">" +
						name +
						"</a>"
					);
				},
				current: function(options, subsetMatch) {
					Observation.add(eventsObject, "__url");
					if (subsetMatch) {
						var baseOptions = canRoute.deparam(
							canRoute._call("matchingPartOfURL")
						);
						return matchCheck(options, baseOptions);
					} else {
						return this._call("matchingPartOfURL") === canRoute.param(options);
					}
				},
				bindings: {
					hashchange: {
						paramsMatcher: paramsMatcher,
						querySeparator: "&",
						matchSlashes: false,
						bind: function() {
							canEvent.on.call(window, "hashchange", setState);
						},
						unbind: function() {
							canEvent.on.call(window, "hashchange", setState);
						},
						matchingPartOfURL: function() {
							var loc = canRoute.location || location;
							return loc.href.split(/#!?/)[1] || "";
						},
						setURL: function(path) {
							if (location.hash !== "#" + path) {
								location.hash = "!" + path;
							}
							return path;
						},
						root: "#!"
					}
				},
				defaultBinding: "hashchange",
				currentBinding: null,
				_setup: function() {
					if (!canRoute.currentBinding) {
						canRoute._call("bind");
						canRoute.serializedCompute.addEventListener(
							"change",
							onRouteDataChange
						);
						canRoute.currentBinding = canRoute.defaultBinding;
					}
				},
				_teardown: function() {
					if (canRoute.currentBinding) {
						canRoute._call("unbind");
						canRoute.serializedCompute.removeEventListener(
							"change",
							onRouteDataChange
						);
						canRoute.currentBinding = null;
					}
					clearTimeout(timer);
					changingData = 0;
				},
				_call: function() {
					var args = makeArray(arguments),
						prop = args.shift(),
						binding =
							canRoute.bindings[
								canRoute.currentBinding || canRoute.defaultBinding
							],
						method = binding[prop];
					if (method.apply) {
						return method.apply(binding, args);
					} else {
						return method;
					}
				},
				matched: compute()
			});
			each(
				[
					"addEventListener",
					"removeEventListener",
					"bind",
					"unbind",
					"on",
					"off",
					"delegate",
					"undelegate",
					"removeAttr",
					"compute",
					"_get",
					"___get",
					"each"
				],
				function(name) {
					canRoute[name] = function() {
						if (!canRoute.data[name]) {
							return;
						}
						return canRoute.data[name].apply(canRoute.data, arguments);
					};
				}
			);
			var routeData;
			var setRouteData = function(data) {
				routeData = data;
				return routeData;
			};
			var serializedCompute;
			Object.defineProperty(canRoute, "serializedCompute", {
				get: function() {
					if (!serializedCompute) {
						serializedCompute = compute(function() {
							return canRoute.data.serialize();
						});
					}
					return serializedCompute;
				}
			});
			Object.defineProperty(canRoute, "data", {
				get: function() {
					if (routeData) {
						return routeData;
					} else if (types.DefaultMap) {
						if (types.DefaultMap.prototype.toObject) {
							var DefaultRouteMap = types.DefaultMap.extend(
								{ seal: false },
								{ "*": "stringOrObservable" }
							);
							return setRouteData(new DefaultRouteMap());
						} else {
							return setRouteData(
								stringCoercingMapDecorator(new types.DefaultMap())
							);
						}
					} else {
						throw new Error("can.route.data accessed without being set");
					}
				},
				set: function(data) {
					if (canReflect.isConstructorLike(data)) {
						data = new data();
					}
					if ("attr" in data) {
						setRouteData(stringCoercingMapDecorator(data));
					} else {
						setRouteData(data);
					}
				}
			});
			canRoute.attr = function() {
				return attrHelper.apply(canRoute.data, arguments);
			};
			canRoute.batch = canBatch;
			canReflect.setKeyValue(
				canRoute,
				canSymbol.for("can.isFunctionLike"),
				false
			);
			stealModule.exports = namespace.route = canRoute;
		}
	],
	[
		30,
		function(stealRequire, stealExports, stealModule) {
			var namespace = stealRequire(19);
			var dev = stealRequire(29);
			function each(items, callback) {
				for (var i = 0; i < items.length; i++) {
					callback(items[i], i);
				}
			}
			function makeMap(str) {
				var obj = {},
					items = str.split(",");
				each(items, function(name) {
					obj[name] = true;
				});
				return obj;
			}
			var caseMattersAttributes = makeMap(
				"allowReorder,attributeName,attributeType,autoReverse,baseFrequency,baseProfile,calcMode,clipPathUnits,contentScriptType,contentStyleType,diffuseConstant,edgeMode,externalResourcesRequired,filterRes,filterUnits,glyphRef,gradientTransform,gradientUnits,kernelMatrix,kernelUnitLength,keyPoints,keySplines,keyTimes,lengthAdjust,limitingConeAngle,markerHeight,markerUnits,markerWidth,maskContentUnits,maskUnits,patternContentUnits,patternTransform,patternUnits,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,repeatCount,repeatDur,requiredExtensions,requiredFeatures,specularConstant,specularExponent,spreadMethod,startOffset,stdDeviation,stitchTiles,surfaceScale,systemLanguage,tableValues,textLength,viewBox,viewTarget,xChannelSelector,yChannelSelector"
			);
			function camelCaseToSpinalCase(match, lowerCaseChar, upperCaseChar) {
				return lowerCaseChar + "-" + upperCaseChar.toLowerCase();
			}
			function startsWith(allOfIt, startsWith) {
				return allOfIt.indexOf(startsWith) === 0;
			}
			function endsWith(allOfIt, endsWith) {
				return allOfIt.length - allOfIt.indexOf(endsWith) === endsWith.length;
			}
			var regexes = {
				leftParens: /\(/g,
				rightParens: /\)/g,
				leftBrace: /\{/g,
				rightBrace: /\}/g,
				camelCase: /([a-z])([A-Z])/g,
				forwardSlash: /\//g,
				space: /\s/g,
				uppercase: /[A-Z]/g,
				uppercaseDelimiterThenChar: /:u:([a-z])/g,
				caret: /\^/g,
				dollar: /\$/g,
				at: /@/g
			};
			var delimiters = {
				prependUppercase: ":u:",
				replaceSpace: ":s:",
				replaceForwardSlash: ":f:",
				replaceLeftParens: ":lp:",
				replaceRightParens: ":rp:",
				replaceLeftBrace: ":lb:",
				replaceRightBrace: ":rb:",
				replaceCaret: ":c:",
				replaceDollar: ":d:",
				replaceAt: ":at:"
			};
			var encoder = {};
			encoder.encode = function(name) {
				var encoded = name;
				if (
					!caseMattersAttributes[encoded] &&
					encoded.match(regexes.camelCase)
				) {
					if (
						startsWith(encoded, "on:") ||
						endsWith(encoded, ":to") ||
						endsWith(encoded, ":from") ||
						endsWith(encoded, ":bind")
					) {
						encoded = encoded.replace(regexes.uppercase, function(char) {
							return delimiters.prependUppercase + char.toLowerCase();
						});
					} else {
						encoded = encoded.replace(regexes.camelCase, camelCaseToSpinalCase);
					}
				}
				encoded = encoded
					.replace(regexes.space, delimiters.replaceSpace)
					.replace(regexes.forwardSlash, delimiters.replaceForwardSlash)
					.replace(regexes.leftParens, delimiters.replaceLeftParens)
					.replace(regexes.rightParens, delimiters.replaceRightParens)
					.replace(regexes.leftBrace, delimiters.replaceLeftBrace)
					.replace(regexes.rightBrace, delimiters.replaceRightBrace)
					.replace(regexes.caret, delimiters.replaceCaret)
					.replace(regexes.dollar, delimiters.replaceDollar)
					.replace(regexes.at, delimiters.replaceAt);
				return encoded;
			};
			encoder.decode = function(name) {
				var decoded = name;
				decoded = decoded
					.replace(delimiters.replaceLeftParens, "(")
					.replace(delimiters.replaceRightParens, ")")
					.replace(delimiters.replaceLeftBrace, "{")
					.replace(delimiters.replaceRightBrace, "}")
					.replace(delimiters.replaceForwardSlash, "/")
					.replace(delimiters.replaceSpace, " ")
					.replace(delimiters.replaceCaret, "^")
					.replace(delimiters.replaceDollar, "$")
					.replace(delimiters.replaceAt, "@");
				if (
					!caseMattersAttributes[decoded] &&
					decoded.match(regexes.uppercaseDelimiterThenChar)
				) {
					if (
						startsWith(decoded, "on:") ||
						endsWith(decoded, ":to") ||
						endsWith(decoded, ":from") ||
						endsWith(decoded, ":bind")
					) {
						decoded = decoded.replace(
							regexes.uppercaseDelimiterThenChar,
							function(match, char) {
								return char.toUpperCase();
							}
						);
					}
				}
				return decoded;
			};
			if (namespace.encoder) {
				throw new Error(
					"You can't have two versions of can-attribute-encoder, check your dependencies"
				);
			} else {
				stealModule.exports = namespace.encoder = encoder;
			}
		}
	],
	[
		18,
		function(stealRequire, stealExports, stealModule) {
			var namespace = stealRequire(19),
				dev = stealRequire(29),
				encoder = stealRequire(30);
			function each(items, callback) {
				for (var i = 0; i < items.length; i++) {
					callback(items[i], i);
				}
			}
			function makeMap(str) {
				var obj = {},
					items = str.split(",");
				each(items, function(name) {
					obj[name] = true;
				});
				return obj;
			}
			function handleIntermediate(intermediate, handler) {
				for (var i = 0, len = intermediate.length; i < len; i++) {
					var item = intermediate[i];
					handler[item.tokenType].apply(handler, item.args);
				}
				return intermediate;
			}
			var alphaNumeric = "A-Za-z0-9",
				alphaNumericHU = "-:_" + alphaNumeric,
				defaultMagicStart = "{{",
				endTag = new RegExp("^<\\/([" + alphaNumericHU + "]+)[^>]*>"),
				defaultMagicMatch = new RegExp(
					"\\{\\{(![\\s\\S]*?!|[\\s\\S]*?)\\}\\}\\}?",
					"g"
				),
				space = /\s/,
				alphaRegex = new RegExp("[" + alphaNumeric + "]");
			var empty = makeMap(
				"area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"
			);
			var caseMattersElements = makeMap(
				"altGlyph,altGlyphDef,altGlyphItem,animateColor,animateMotion,animateTransform,clipPath,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,foreignObject,glyphRef,linearGradient,radialGradient,textPath"
			);
			var closeSelf = makeMap(
				"colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"
			);
			var special = makeMap("script");
			var tokenTypes = "start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(
				","
			);
			var startOppositesMap = {
				"{": "}",
				"(": ")"
			};
			var fn = function() {};
			var HTMLParser = function(html, handler, returnIntermediate) {
				if (typeof html === "object") {
					return handleIntermediate(html, handler);
				}
				var intermediate = [];
				handler = handler || {};
				if (returnIntermediate) {
					each(tokenTypes, function(name) {
						var callback = handler[name] || fn;
						handler[name] = function() {
							if (callback.apply(this, arguments) !== false) {
								intermediate.push({
									tokenType: name,
									args: [].slice.call(arguments, 0)
								});
							}
						};
					});
				}
				var magicMatch = handler.magicMatch || defaultMagicMatch,
					magicStart = handler.magicStart || defaultMagicStart;
				function parseStartTag(tag, tagName, rest, unary) {
					tagName = caseMattersElements[tagName]
						? tagName
						: tagName.toLowerCase();
					if (closeSelf[tagName] && stack.last() === tagName) {
						parseEndTag("", tagName);
					}
					unary = empty[tagName] || !!unary;
					handler.start(tagName, unary);
					if (!unary) {
						stack.push(tagName);
					}
					HTMLParser.parseAttrs(rest, handler);
					handler.end(tagName, unary);
				}
				function parseEndTag(tag, tagName) {
					var pos;
					if (!tagName) {
						pos = 0;
					} else {
						tagName = caseMattersElements[tagName]
							? tagName
							: tagName.toLowerCase();
						for (pos = stack.length - 1; pos >= 0; pos--) {
							if (stack[pos] === tagName) {
								break;
							}
						}
					}
					if (pos >= 0) {
						for (var i = stack.length - 1; i >= pos; i--) {
							if (handler.close) {
								handler.close(stack[i]);
							}
						}
						stack.length = pos;
					}
				}
				function parseMustache(mustache, inside) {
					if (handler.special) {
						handler.special(inside);
					}
				}
				var callChars = function() {
					if (charsText) {
						if (handler.chars) {
							handler.chars(charsText);
						}
					}
					charsText = "";
				};
				var index,
					chars,
					match,
					stack = [],
					last = html,
					charsText = "";
				stack.last = function() {
					return this[this.length - 1];
				};
				while (html) {
					chars = true;
					if (!stack.last() || !special[stack.last()]) {
						if (html.indexOf("<!--") === 0) {
							index = html.indexOf("-->");
							if (index >= 0) {
								callChars();
								if (handler.comment) {
									handler.comment(html.substring(4, index));
								}
								html = html.substring(index + 3);
								chars = false;
							}
						} else if (html.indexOf("</") === 0) {
							match = html.match(endTag);
							if (match) {
								callChars();
								html = html.substring(match[0].length);
								match[0].replace(endTag, parseEndTag);
								chars = false;
							}
						} else if (html.indexOf("<") === 0) {
							var res = HTMLParser.searchStartTag(html);
							if (res) {
								callChars();
								html = res.html;
								parseStartTag.apply(null, res.match);
								chars = false;
							}
						} else if (html.indexOf(magicStart) === 0) {
							match = html.match(magicMatch);
							if (match) {
								callChars();
								html = html.substring(match[0].length);
								match[0].replace(magicMatch, parseMustache);
							}
						}
						if (chars) {
							index = findBreak(html, magicStart);
							if (index === 0 && html === last) {
								charsText += html.charAt(0);
								html = html.substr(1);
								index = findBreak(html, magicStart);
							}
							var text = index < 0 ? html : html.substring(0, index);
							html = index < 0 ? "" : html.substring(index);
							if (text) {
								charsText += text;
							}
						}
					} else {
						html = html.replace(
							new RegExp("([\\s\\S]*?)</" + stack.last() + "[^>]*>"),
							function(all, text) {
								text = text.replace(
									/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
									"$1$2"
								);
								if (handler.chars) {
									handler.chars(text);
								}
								return "";
							}
						);
						parseEndTag("", stack.last());
					}
					if (html === last) {
						throw new Error("Parse Error: " + html);
					}
					last = html;
				}
				callChars();
				parseEndTag();
				handler.done();
				return intermediate;
			};
			var callAttrStart = function(state, curIndex, handler, rest) {
				var attrName = rest.substring(
						typeof state.nameStart === "number" ? state.nameStart : curIndex,
						curIndex
					),
					newAttrName = encoder.encode(attrName);
				state.attrStart = newAttrName;
				handler.attrStart(state.attrStart);
				state.inName = false;
			};
			var callAttrEnd = function(state, curIndex, handler, rest) {
				if (state.valueStart !== undefined && state.valueStart < curIndex) {
					handler.attrValue(rest.substring(state.valueStart, curIndex));
				} else if (!state.inValue) {
				}
				handler.attrEnd(state.attrStart);
				state.attrStart = undefined;
				state.valueStart = undefined;
				state.inValue = false;
				state.inName = false;
				state.lookingForEq = false;
				state.inQuote = false;
				state.lookingForName = true;
			};
			var findBreak = function(str, magicStart) {
				var magicLength = magicStart.length;
				for (var i = 0, len = str.length; i < len; i++) {
					if (str[i] === "<" || str.substr(i, magicLength) === magicStart) {
						return i;
					}
				}
				return -1;
			};
			HTMLParser.parseAttrs = function(rest, handler) {
				if (!rest) {
					return;
				}
				var magicMatch = handler.magicMatch || defaultMagicMatch,
					magicStart = handler.magicStart || defaultMagicStart;
				var i = 0;
				var curIndex;
				var state = {
					inName: false,
					nameStart: undefined,
					inValue: false,
					valueStart: undefined,
					inQuote: false,
					attrStart: undefined,
					lookingForName: true,
					lookingForValue: false,
					lookingForEq: false
				};
				while (i < rest.length) {
					curIndex = i;
					var cur = rest.charAt(i);
					i++;
					if (magicStart === rest.substr(curIndex, magicStart.length)) {
						if (state.inValue && curIndex > state.valueStart) {
							handler.attrValue(rest.substring(state.valueStart, curIndex));
						} else if (state.inName && state.nameStart < curIndex) {
							callAttrStart(state, curIndex, handler, rest);
							callAttrEnd(state, curIndex, handler, rest);
						} else if (state.lookingForValue) {
							state.inValue = true;
						} else if (state.lookingForEq && state.attrStart) {
							callAttrEnd(state, curIndex, handler, rest);
						}
						magicMatch.lastIndex = curIndex;
						var match = magicMatch.exec(rest);
						if (match) {
							handler.special(match[1]);
							i = curIndex + match[0].length;
							if (state.inValue) {
								state.valueStart = curIndex + match[0].length;
							}
						}
					} else if (state.inValue) {
						if (state.inQuote) {
							if (cur === state.inQuote) {
								callAttrEnd(state, curIndex, handler, rest);
							}
						} else if (space.test(cur)) {
							callAttrEnd(state, curIndex, handler, rest);
						}
					} else if (
						cur === "=" &&
						(state.lookingForEq || state.lookingForName || state.inName)
					) {
						if (!state.attrStart) {
							callAttrStart(state, curIndex, handler, rest);
						}
						state.lookingForValue = true;
						state.lookingForEq = false;
						state.lookingForName = false;
					} else if (state.inName) {
						var started = rest[state.nameStart],
							otherStart,
							otherOpposite;
						if (startOppositesMap[started] === cur) {
							otherStart = started === "{" ? "(" : "{";
							otherOpposite = startOppositesMap[otherStart];
							if (rest[curIndex + 1] === otherOpposite) {
								callAttrStart(state, curIndex + 2, handler, rest);
								i++;
							} else {
								callAttrStart(state, curIndex + 1, handler, rest);
							}
							state.lookingForEq = true;
						} else if (space.test(cur) && started !== "{" && started !== "(") {
							callAttrStart(state, curIndex, handler, rest);
							state.lookingForEq = true;
						}
					} else if (state.lookingForName) {
						if (!space.test(cur)) {
							if (state.attrStart) {
								callAttrEnd(state, curIndex, handler, rest);
							}
							state.nameStart = curIndex;
							state.inName = true;
						}
					} else if (state.lookingForValue) {
						if (!space.test(cur)) {
							state.lookingForValue = false;
							state.inValue = true;
							if (cur === "'" || cur === '"') {
								state.inQuote = cur;
								state.valueStart = curIndex + 1;
							} else {
								state.valueStart = curIndex;
							}
						} else if (i === rest.length) {
							callAttrEnd(state, curIndex, handler, rest);
						}
					}
				}
				if (state.inName) {
					callAttrStart(state, curIndex + 1, handler, rest);
					callAttrEnd(state, curIndex + 1, handler, rest);
				} else if (
					state.lookingForEq ||
					state.lookingForValue ||
					state.inValue
				) {
					callAttrEnd(state, curIndex + 1, handler, rest);
				}
				magicMatch.lastIndex = 0;
			};
			HTMLParser.searchStartTag = function(html) {
				var closingIndex = html.indexOf(">");
				if (closingIndex === -1 || !alphaRegex.test(html[1])) {
					return null;
				}
				var tagName,
					tagContent,
					match,
					rest = "",
					unary = "";
				var startTag = html.substring(0, closingIndex + 1);
				var isUnary = startTag[startTag.length - 2] === "/";
				var spaceIndex = startTag.search(space);
				if (isUnary) {
					unary = "/";
					tagContent = startTag.substring(1, startTag.length - 2).trim();
				} else {
					tagContent = startTag.substring(1, startTag.length - 1).trim();
				}
				if (spaceIndex === -1) {
					tagName = tagContent;
				} else {
					spaceIndex--;
					tagName = tagContent.substring(0, spaceIndex);
					rest = tagContent.substring(spaceIndex);
				}
				match = [startTag, tagName, rest, unary];
				return {
					match: match,
					html: html.substring(startTag.length)
				};
			};
			stealModule.exports = namespace.HTMLParser = HTMLParser;
		}
	],
	[
		75,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var getDocument = stealRequire(63);
				stealModule.exports = function(el) {
					return (el.ownerDocument || el) === getDocument();
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		77,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var events = stealRequire(48);
				var isOfGlobalDocument = stealRequire(75);
				var domData = stealRequire(69);
				var getMutationObserver = stealRequire(66);
				var assign = stealRequire(102);
				var domDispatch = stealRequire(68);
				var originalAdd = events.addEventListener,
					originalRemove = events.removeEventListener;
				events.addEventListener = function(eventName) {
					if (eventName === "attributes") {
						var MutationObserver = getMutationObserver();
						if (isOfGlobalDocument(this) && MutationObserver) {
							var existingObserver = domData.get.call(
								this,
								"canAttributesObserver"
							);
							if (!existingObserver) {
								var self = this;
								var observer = new MutationObserver(function(mutations) {
									mutations.forEach(function(mutation) {
										var copy = assign({}, mutation);
										domDispatch.call(self, copy, [], false);
									});
								});
								observer.observe(this, {
									attributes: true,
									attributeOldValue: true
								});
								domData.set.call(this, "canAttributesObserver", observer);
							}
						} else {
							domData.set.call(this, "canHasAttributesBindings", true);
						}
					}
					return originalAdd.apply(this, arguments);
				};
				events.removeEventListener = function(eventName) {
					if (eventName === "attributes") {
						var MutationObserver = getMutationObserver();
						var observer;
						if (isOfGlobalDocument(this) && MutationObserver) {
							observer = domData.get.call(this, "canAttributesObserver");
							if (observer && observer.disconnect) {
								observer.disconnect();
								domData.clean.call(this, "canAttributesObserver");
							}
						} else {
							domData.clean.call(this, "canHasAttributesBindings");
						}
					}
					return originalRemove.apply(this, arguments);
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		83,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var events = stealRequire(48);
				var domData = stealRequire(69);
				var getMutationObserver = stealRequire(66);
				var domDispatch = stealRequire(68);
				var mutationDocument = stealRequire(96);
				var getDocument = stealRequire(63);
				var CIDMap = stealRequire(51);
				var string = stealRequire(97);
				stealRequire(75);
				stealModule.exports = function(
					specialEventName,
					mutationNodesProperty
				) {
					var originalAdd = events.addEventListener,
						originalRemove = events.removeEventListener;
					events.addEventListener = function(eventName) {
						if (eventName === specialEventName && getMutationObserver()) {
							var documentElement = getDocument().documentElement;
							var specialEventData = domData.get.call(
								documentElement,
								specialEventName + "Data"
							);
							if (!specialEventData) {
								specialEventData = {
									handler: function(mutatedNode) {
										if (
											specialEventData.nodeIdsRespondingToInsert.has(
												mutatedNode
											)
										) {
											domDispatch.call(
												mutatedNode,
												specialEventName,
												[],
												false
											);
											specialEventData.nodeIdsRespondingToInsert.delete(
												mutatedNode
											);
										}
									},
									nodeIdsRespondingToInsert: new CIDMap()
								};
								mutationDocument[
									"on" + string.capitalize(mutationNodesProperty)
								](specialEventData.handler);
								domData.set.call(
									documentElement,
									specialEventName + "Data",
									specialEventData
								);
							}
							if (this.nodeType !== 11) {
								var count =
									specialEventData.nodeIdsRespondingToInsert.get(this) || 0;
								specialEventData.nodeIdsRespondingToInsert.set(this, count + 1);
							}
						}
						return originalAdd.apply(this, arguments);
					};
					events.removeEventListener = function(eventName) {
						if (eventName === specialEventName && getMutationObserver()) {
							var documentElement = getDocument().documentElement;
							var specialEventData = domData.get.call(
								documentElement,
								specialEventName + "Data"
							);
							if (specialEventData) {
								var newCount =
									specialEventData.nodeIdsRespondingToInsert.get(this) - 1;
								if (newCount) {
									specialEventData.nodeIdsRespondingToInsert.set(
										this,
										newCount
									);
								} else {
									specialEventData.nodeIdsRespondingToInsert.delete(this);
								}
								if (!specialEventData.nodeIdsRespondingToInsert.size) {
									mutationDocument[
										"off" + string.capitalize(mutationNodesProperty)
									](specialEventData.handler);
									domData.clean.call(
										documentElement,
										specialEventName + "Data"
									);
								}
							}
						}
						return originalRemove.apply(this, arguments);
					};
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		78,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var makeMutationEvent = stealRequire(83);
			makeMutationEvent("inserted", "addedNodes");
		}
	],
	[
		26,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var setImmediate = stealRequire(65);
				var getDocument = stealRequire(63);
				var global = stealRequire(74)();
				var isOfGlobalDocument = stealRequire(75);
				var setData = stealRequire(69);
				var domContains = stealRequire(67);
				var domEvents = stealRequire(48);
				var domDispatch = stealRequire(68);
				var getMutationObserver = stealRequire(66);
				var each = stealRequire(12);
				var types = stealRequire(76);
				var diff = stealRequire(62);
				stealRequire(77);
				stealRequire(78);
				var namespaces = { xlink: "http://www.w3.org/1999/xlink" };
				var formElements = {
						INPUT: true,
						TEXTAREA: true,
						SELECT: true
					},
					toString = function(value) {
						if (value == null) {
							return "";
						} else {
							return "" + value;
						}
					},
					isSVG = function(el) {
						return el.namespaceURI === "http://www.w3.org/2000/svg";
					},
					truthy = function() {
						return true;
					},
					getSpecialTest = function(special) {
						return (special && special.test) || truthy;
					},
					propProp = function(prop, obj) {
						obj = obj || {};
						obj.get = function() {
							return this[prop];
						};
						obj.set = function(value) {
							if (this[prop] !== value) {
								this[prop] = value;
							}
							return value;
						};
						return obj;
					},
					booleanProp = function(prop) {
						return {
							isBoolean: true,
							set: function(value) {
								if (prop in this) {
									this[prop] = value !== false;
								} else {
									this.setAttribute(prop, "");
								}
							},
							remove: function() {
								this[prop] = false;
							}
						};
					},
					setupMO = function(el, callback) {
						var attrMO = setData.get.call(el, "attrMO");
						if (!attrMO) {
							var onMutation = function() {
								callback.call(el);
							};
							var MO = getMutationObserver();
							if (MO) {
								var observer = new MO(onMutation);
								observer.observe(el, {
									childList: true,
									subtree: true
								});
								setData.set.call(el, "attrMO", observer);
							} else {
								setData.set.call(el, "attrMO", true);
								setData.set.call(el, "canBindingCallback", {
									onMutation: onMutation
								});
							}
						}
					},
					_findOptionToSelect = function(parent, value) {
						var child = parent.firstChild;
						while (child) {
							if (child.nodeName === "OPTION" && value === child.value) {
								return child;
							}
							if (child.nodeName === "OPTGROUP") {
								var groupChild = _findOptionToSelect(child, value);
								if (groupChild) {
									return groupChild;
								}
							}
							child = child.nextSibling;
						}
					},
					setChildOptions = function(el, value) {
						var option;
						if (value != null) {
							option = _findOptionToSelect(el, value);
						}
						if (option) {
							option.selected = true;
						} else {
							el.selectedIndex = -1;
						}
					},
					forEachOption = function(parent, fn) {
						var child = parent.firstChild;
						while (child) {
							if (child.nodeName === "OPTION") {
								fn(child);
							}
							if (child.nodeName === "OPTGROUP") {
								forEachOption(child, fn);
							}
							child = child.nextSibling;
						}
					},
					collectSelectedOptions = function(parent) {
						var selectedValues = [];
						forEachOption(parent, function(option) {
							if (option.selected) {
								selectedValues.push(option.value);
							}
						});
						return selectedValues;
					},
					markSelectedOptions = function(parent, values) {
						forEachOption(parent, function(option) {
							option.selected = values.indexOf(option.value) !== -1;
						});
					},
					setChildOptionsOnChange = function(select, aEL) {
						var handler = setData.get.call(select, "attrSetChildOptions");
						if (handler) {
							return Function.prototype;
						}
						handler = function() {
							setChildOptions(select, select.value);
						};
						setData.set.call(select, "attrSetChildOptions", handler);
						aEL.call(select, "change", handler);
						return function(rEL) {
							setData.clean.call(select, "attrSetChildOptions");
							rEL.call(select, "change", handler);
						};
					},
					attr = {
						special: {
							checked: {
								get: function() {
									return this.checked;
								},
								set: function(val) {
									var notFalse = !!val || val === "" || arguments.length === 0;
									this.checked = notFalse;
									if (notFalse && this.type === "radio") {
										this.defaultChecked = true;
									}
									return val;
								},
								remove: function() {
									this.checked = false;
								},
								test: function() {
									return this.nodeName === "INPUT";
								}
							},
							class: {
								get: function() {
									if (isSVG(this)) {
										return this.getAttribute("class");
									}
									return this.className;
								},
								set: function(val) {
									val = val || "";
									if (isSVG(this)) {
										this.setAttribute("class", "" + val);
									} else {
										this.className = val;
									}
									return val;
								}
							},
							disabled: booleanProp("disabled"),
							focused: {
								get: function() {
									return this === document.activeElement;
								},
								set: function(val) {
									var cur = attr.get(this, "focused");
									var docEl = this.ownerDocument.documentElement;
									var element = this;
									function focusTask() {
										if (val) {
											element.focus();
										} else {
											element.blur();
										}
									}
									if (cur !== val) {
										if (!domContains.call(docEl, element)) {
											var initialSetHandler = function() {
												domEvents.removeEventListener.call(
													element,
													"inserted",
													initialSetHandler
												);
												focusTask();
											};
											domEvents.addEventListener.call(
												element,
												"inserted",
												initialSetHandler
											);
										} else {
											types.queueTask([focusTask, this, []]);
										}
									}
									return !!val;
								},
								addEventListener: function(eventName, handler, aEL) {
									aEL.call(this, "focus", handler);
									aEL.call(this, "blur", handler);
									return function(rEL) {
										rEL.call(this, "focus", handler);
										rEL.call(this, "blur", handler);
									};
								},
								test: function() {
									return this.nodeName === "INPUT";
								}
							},
							for: propProp("htmlFor"),
							innertext: propProp("innerText"),
							innerhtml: propProp("innerHTML"),
							innerHTML: propProp("innerHTML", {
								addEventListener: function(eventName, handler, aEL) {
									var handlers = [];
									var el = this;
									each(["change", "blur"], function(eventName) {
										var localHandler = function() {
											handler.apply(this, arguments);
										};
										domEvents.addEventListener.call(
											el,
											eventName,
											localHandler
										);
										handlers.push([eventName, localHandler]);
									});
									return function(rEL) {
										each(handlers, function(info) {
											rEL.call(el, info[0], info[1]);
										});
									};
								}
							}),
							required: booleanProp("required"),
							readonly: booleanProp("readOnly"),
							selected: {
								get: function() {
									return this.selected;
								},
								set: function(val) {
									val = !!val;
									setData.set.call(this, "lastSetValue", val);
									return (this.selected = val);
								},
								addEventListener: function(eventName, handler, aEL) {
									var option = this;
									var select = this.parentNode;
									var lastVal = option.selected;
									var localHandler = function(changeEvent) {
										var curVal = option.selected;
										lastVal =
											setData.get.call(option, "lastSetValue") || lastVal;
										if (curVal !== lastVal) {
											lastVal = curVal;
											domDispatch.call(option, eventName);
										}
									};
									var removeChangeHandler = setChildOptionsOnChange(
										select,
										aEL
									);
									domEvents.addEventListener.call(
										select,
										"change",
										localHandler
									);
									aEL.call(option, eventName, handler);
									return function(rEL) {
										removeChangeHandler(rEL);
										domEvents.removeEventListener.call(
											select,
											"change",
											localHandler
										);
										rEL.call(option, eventName, handler);
									};
								},
								test: function() {
									return (
										this.nodeName === "OPTION" &&
										this.parentNode &&
										this.parentNode.nodeName === "SELECT"
									);
								}
							},
							src: {
								set: function(val) {
									if (val == null || val === "") {
										this.removeAttribute("src");
										return null;
									} else {
										this.setAttribute("src", val);
										return val;
									}
								}
							},
							style: {
								set: (function() {
									var el =
										global.document && getDocument().createElement("div");
									if (el && el.style && "cssText" in el.style) {
										return function(val) {
											return (this.style.cssText = val || "");
										};
									} else {
										return function(val) {
											return this.setAttribute("style", val);
										};
									}
								})()
							},
							textcontent: propProp("textContent"),
							value: {
								get: function() {
									var value = this.value;
									if (this.nodeName === "SELECT") {
										if ("selectedIndex" in this && this.selectedIndex === -1) {
											value = undefined;
										}
									}
									return value;
								},
								set: function(value) {
									var nodeName = this.nodeName.toLowerCase();
									if (nodeName === "input") {
										value = toString(value);
									}
									if (this.value !== value || nodeName === "option") {
										this.value = value;
									}
									if (attr.defaultValue[nodeName]) {
										this.defaultValue = value;
									}
									if (nodeName === "select") {
										setData.set.call(this, "attrValueLastVal", value);
										setChildOptions(this, value === null ? value : this.value);
										var docEl = this.ownerDocument.documentElement;
										if (!domContains.call(docEl, this)) {
											var select = this;
											var initialSetHandler = function() {
												domEvents.removeEventListener.call(
													select,
													"inserted",
													initialSetHandler
												);
												setChildOptions(
													select,
													value === null ? value : select.value
												);
											};
											domEvents.addEventListener.call(
												this,
												"inserted",
												initialSetHandler
											);
										}
										setupMO(this, function() {
											var value = setData.get.call(this, "attrValueLastVal");
											attr.set(this, "value", value);
											domDispatch.call(this, "change");
										});
									}
									return value;
								},
								test: function() {
									return formElements[this.nodeName];
								}
							},
							values: {
								get: function() {
									return collectSelectedOptions(this);
								},
								set: function(values) {
									values = values || [];
									markSelectedOptions(this, values);
									setData.set.call(
										this,
										"stickyValues",
										attr.get(this, "values")
									);
									setupMO(this, function() {
										var previousValues = setData.get.call(this, "stickyValues");
										attr.set(this, "values", previousValues);
										var currentValues = setData.get.call(this, "stickyValues");
										var changes = diff(
											previousValues.slice().sort(),
											currentValues.slice().sort()
										);
										if (changes.length) {
											domDispatch.call(this, "values");
										}
									});
									return values;
								},
								addEventListener: function(eventName, handler, aEL) {
									var localHandler = function() {
										domDispatch.call(this, "values");
									};
									domEvents.addEventListener.call(this, "change", localHandler);
									aEL.call(this, eventName, handler);
									return function(rEL) {
										domEvents.removeEventListener.call(
											this,
											"change",
											localHandler
										);
										rEL.call(this, eventName, handler);
									};
								}
							}
						},
						defaultValue: {
							input: true,
							textarea: true
						},
						setAttrOrProp: function(el, attrName, val) {
							attrName = attrName.toLowerCase();
							var special = attr.special[attrName];
							if (special && special.isBoolean && !val) {
								this.remove(el, attrName);
							} else {
								this.set(el, attrName, val);
							}
						},
						set: function(el, attrName, val) {
							var usingMutationObserver =
								isOfGlobalDocument(el) && getMutationObserver();
							attrName = attrName.toLowerCase();
							var oldValue;
							if (!usingMutationObserver) {
								oldValue = attr.get(el, attrName);
							}
							var newValue;
							var special = attr.special[attrName];
							var setter = special && special.set;
							var test = getSpecialTest(special);
							if (typeof setter === "function" && test.call(el)) {
								if (arguments.length === 2) {
									newValue = setter.call(el);
								} else {
									newValue = setter.call(el, val);
								}
							} else {
								attr.setAttribute(el, attrName, val);
							}
							if (!usingMutationObserver && newValue !== oldValue) {
								attr.trigger(el, attrName, oldValue);
							}
						},
						setSelectValue: function(el, value) {
							attr.set(el, "value", value);
						},
						setAttribute: (function() {
							var doc = getDocument();
							if (doc && document.createAttribute) {
								try {
									doc.createAttribute("{}");
								} catch (e) {
									var invalidNodes = {},
										attributeDummy = document.createElement("div");
									return function(el, attrName, val) {
										var first = attrName.charAt(0),
											cachedNode,
											node,
											attr;
										if (
											(first === "{" || first === "(" || first === "*") &&
											el.setAttributeNode
										) {
											cachedNode = invalidNodes[attrName];
											if (!cachedNode) {
												attributeDummy.innerHTML =
													"<div " + attrName + '=""></div>';
												cachedNode = invalidNodes[attrName] =
													attributeDummy.childNodes[0].attributes[0];
											}
											node = cachedNode.cloneNode();
											node.value = val;
											el.setAttributeNode(node);
										} else {
											attr = attrName.split(":");
											if (attr.length !== 1 && namespaces[attr[0]]) {
												el.setAttributeNS(namespaces[attr[0]], attrName, val);
											} else {
												el.setAttribute(attrName, val);
											}
										}
									};
								}
							}
							return function(el, attrName, val) {
								el.setAttribute(attrName, val);
							};
						})(),
						trigger: function(el, attrName, oldValue) {
							if (setData.get.call(el, "canHasAttributesBindings")) {
								attrName = attrName.toLowerCase();
								return setImmediate(function() {
									domDispatch.call(
										el,
										{
											type: "attributes",
											attributeName: attrName,
											target: el,
											oldValue: oldValue,
											bubbles: false
										},
										[]
									);
								});
							}
						},
						get: function(el, attrName) {
							attrName = attrName.toLowerCase();
							var special = attr.special[attrName];
							var getter = special && special.get;
							var test = getSpecialTest(special);
							if (typeof getter === "function" && test.call(el)) {
								return getter.call(el);
							} else {
								return el.getAttribute(attrName);
							}
						},
						remove: function(el, attrName) {
							attrName = attrName.toLowerCase();
							var oldValue;
							if (!getMutationObserver()) {
								oldValue = attr.get(el, attrName);
							}
							var special = attr.special[attrName];
							var setter = special && special.set;
							var remover = special && special.remove;
							var test = getSpecialTest(special);
							if (typeof remover === "function" && test.call(el)) {
								remover.call(el);
							} else if (typeof setter === "function" && test.call(el)) {
								setter.call(el, undefined);
							} else {
								el.removeAttribute(attrName);
							}
							if (!getMutationObserver() && oldValue != null) {
								attr.trigger(el, attrName, oldValue);
							}
						},
						has: (function() {
							var el = getDocument() && document.createElement("div");
							if (el && el.hasAttribute) {
								return function(el, name) {
									return el.hasAttribute(name);
								};
							} else {
								return function(el, name) {
									return el.getAttribute(name) !== null;
								};
							}
						})()
					};
				var oldAddEventListener = domEvents.addEventListener;
				domEvents.addEventListener = function(eventName, handler) {
					var special = attr.special[eventName];
					if (special && special.addEventListener) {
						var teardown = special.addEventListener.call(
							this,
							eventName,
							handler,
							oldAddEventListener
						);
						var teardowns = setData.get.call(this, "attrTeardowns");
						if (!teardowns) {
							setData.set.call(this, "attrTeardowns", (teardowns = {}));
						}
						if (!teardowns[eventName]) {
							teardowns[eventName] = [];
						}
						teardowns[eventName].push({
							teardown: teardown,
							handler: handler
						});
						return;
					}
					return oldAddEventListener.apply(this, arguments);
				};
				var oldRemoveEventListener = domEvents.removeEventListener;
				domEvents.removeEventListener = function(eventName, handler) {
					var special = attr.special[eventName];
					if (special && special.addEventListener) {
						var teardowns = setData.get.call(this, "attrTeardowns");
						if (teardowns && teardowns[eventName]) {
							var eventTeardowns = teardowns[eventName];
							for (var i = 0, len = eventTeardowns.length; i < len; i++) {
								if (eventTeardowns[i].handler === handler) {
									eventTeardowns[i].teardown.call(this, oldRemoveEventListener);
									eventTeardowns.splice(i, 1);
									break;
								}
							}
							if (eventTeardowns.length === 0) {
								delete teardowns[eventName];
							}
						}
						return;
					}
					return oldRemoveEventListener.apply(this, arguments);
				};
				stealModule.exports = stealExports = attr;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		129,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var childNodes = stealRequire(49);
				var domAttr = stealRequire(26);
				var each = stealRequire(12);
				var makeArray = stealRequire(38);
				var getDocument = stealRequire(123);
				var domMutate = stealRequire(37);
				var namespace = stealRequire(19);
				var MUTATION_OBSERVER = stealRequire(66);
				var processNodes = function(nodes, paths, location, document) {
						var frag = document.createDocumentFragment();
						for (var i = 0, len = nodes.length; i < len; i++) {
							var node = nodes[i];
							frag.appendChild(
								processNode(node, paths, location.concat(i), document)
							);
						}
						return frag;
					},
					keepsTextNodes =
						typeof document !== "undefined" &&
						(function() {
							var testFrag = document.createDocumentFragment();
							var div = document.createElement("div");
							div.appendChild(document.createTextNode(""));
							div.appendChild(document.createTextNode(""));
							testFrag.appendChild(div);
							var cloned = testFrag.cloneNode(true);
							return childNodes(cloned.firstChild).length === 2;
						})(),
					clonesWork =
						typeof document !== "undefined" &&
						(function() {
							var el = document.createElement("a");
							el.innerHTML = "<xyz></xyz>";
							var clone = el.cloneNode(true);
							var works = clone.innerHTML === "<xyz></xyz>";
							var MO, observer;
							if (works) {
								el = document.createDocumentFragment();
								el.appendChild(document.createTextNode("foo-bar"));
								MO = MUTATION_OBSERVER();
								if (MO) {
									observer = new MO(function() {});
									observer.observe(document.documentElement, {
										childList: true,
										subtree: true
									});
									clone = el.cloneNode(true);
									observer.disconnect();
								} else {
									clone = el.cloneNode(true);
								}
								return clone.childNodes.length === 1;
							}
							return works;
						})(),
					namespacesWork =
						typeof document !== "undefined" && !!document.createElementNS;
				var cloneNode = clonesWork
					? function(el) {
							return el.cloneNode(true);
						}
					: function(node) {
							var document = node.ownerDocument;
							var copy;
							if (node.nodeType === 1) {
								if (
									node.namespaceURI !== "http://www.w3.org/1999/xhtml" &&
									namespacesWork &&
									document.createElementNS
								) {
									copy = document.createElementNS(
										node.namespaceURI,
										node.nodeName
									);
								} else {
									copy = document.createElement(node.nodeName);
								}
							} else if (node.nodeType === 3) {
								copy = document.createTextNode(node.nodeValue);
							} else if (node.nodeType === 8) {
								copy = document.createComment(node.nodeValue);
							} else if (node.nodeType === 11) {
								copy = document.createDocumentFragment();
							}
							if (node.attributes) {
								var attributes = makeArray(node.attributes);
								each(attributes, function(node) {
									if (node && node.specified) {
										domAttr.setAttribute(
											copy,
											node.nodeName || node.name,
											node.nodeValue || node.value
										);
									}
								});
							}
							if (node && node.firstChild) {
								var child = node.firstChild;
								while (child) {
									copy.appendChild(cloneNode(child));
									child = child.nextSibling;
								}
							}
							return copy;
						};
				function processNode(node, paths, location, document) {
					var callback,
						loc = location,
						nodeType = typeof node,
						el,
						p,
						i,
						len;
					var getCallback = function() {
						if (!callback) {
							callback = {
								path: location,
								callbacks: []
							};
							paths.push(callback);
							loc = [];
						}
						return callback;
					};
					if (nodeType === "object") {
						if (node.tag) {
							if (namespacesWork && node.namespace) {
								el = document.createElementNS(node.namespace, node.tag);
							} else {
								el = document.createElement(node.tag);
							}
							if (node.attrs) {
								for (var attrName in node.attrs) {
									var value = node.attrs[attrName];
									if (typeof value === "function") {
										getCallback().callbacks.push({ callback: value });
									} else {
										domAttr.setAttribute(el, attrName, value);
									}
								}
							}
							if (node.attributes) {
								for (i = 0, len = node.attributes.length; i < len; i++) {
									getCallback().callbacks.push({
										callback: node.attributes[i]
									});
								}
							}
							if (node.children && node.children.length) {
								if (callback) {
									p = callback.paths = [];
								} else {
									p = paths;
								}
								el.appendChild(processNodes(node.children, p, loc, document));
							}
						} else if (node.comment) {
							el = document.createComment(node.comment);
							if (node.callbacks) {
								for (i = 0, len = node.attributes.length; i < len; i++) {
									getCallback().callbacks.push({ callback: node.callbacks[i] });
								}
							}
						}
					} else if (nodeType === "string") {
						el = document.createTextNode(node);
					} else if (nodeType === "function") {
						if (keepsTextNodes) {
							el = document.createTextNode("");
							getCallback().callbacks.push({ callback: node });
						} else {
							el = document.createComment("~");
							getCallback().callbacks.push({
								callback: function() {
									var el = document.createTextNode("");
									domMutate.replaceChild.call(this.parentNode, el, this);
									return node.apply(el, arguments);
								}
							});
						}
					}
					return el;
				}
				function getCallbacks(el, pathData, elementCallbacks) {
					var path = pathData.path,
						callbacks = pathData.callbacks,
						paths = pathData.paths,
						child = el,
						pathLength = path ? path.length : 0,
						pathsLength = paths ? paths.length : 0;
					for (var i = 0; i < pathLength; i++) {
						child = child.childNodes.item(path[i]);
					}
					for (i = 0; i < pathsLength; i++) {
						getCallbacks(child, paths[i], elementCallbacks);
					}
					elementCallbacks.push({
						element: child,
						callbacks: callbacks
					});
				}
				function hydrateCallbacks(callbacks, args) {
					var len = callbacks.length,
						callbacksLength,
						callbackElement,
						callbackData;
					for (var i = 0; i < len; i++) {
						callbackData = callbacks[i];
						callbacksLength = callbackData.callbacks.length;
						callbackElement = callbackData.element;
						for (var c = 0; c < callbacksLength; c++) {
							callbackData.callbacks[c].callback.apply(callbackElement, args);
						}
					}
				}
				function makeTarget(nodes, doc) {
					var paths = [];
					var frag = processNodes(nodes, paths, [], doc || getDocument());
					return {
						paths: paths,
						clone: frag,
						hydrate: function() {
							var cloned = cloneNode(this.clone);
							var args = makeArray(arguments);
							var callbacks = [];
							for (var i = 0; i < paths.length; i++) {
								getCallbacks(cloned, paths[i], callbacks);
							}
							hydrateCallbacks(callbacks, args);
							return cloned;
						}
					};
				}
				makeTarget.keepsTextNodes = keepsTextNodes;
				makeTarget.cloneNode = cloneNode;
				namespace.view = namespace.view || {};
				stealModule.exports = namespace.view.target = makeTarget;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		112,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var assign = stealRequire(57);
			var deepAssign = stealRequire(113);
			var dev = stealRequire(29);
			var makeArray = stealRequire(38);
			var namespace = stealRequire(19);
			var initializing = 0;
			var Construct = function() {
				if (arguments.length) {
					return Construct.extend.apply(Construct, arguments);
				}
			};
			var canGetDescriptor;
			try {
				Object.getOwnPropertyDescriptor({});
				canGetDescriptor = true;
			} catch (e) {
				canGetDescriptor = false;
			}
			var getDescriptor = function(newProps, name) {
					var descriptor = Object.getOwnPropertyDescriptor(newProps, name);
					if (descriptor && (descriptor.get || descriptor.set)) {
						return descriptor;
					}
					return null;
				},
				inheritGetterSetter = function(newProps, oldProps, addTo) {
					addTo = addTo || newProps;
					var descriptor;
					for (var name in newProps) {
						if ((descriptor = getDescriptor(newProps, name))) {
							this._defineProperty(addTo, oldProps, name, descriptor);
						} else {
							Construct._overwrite(addTo, oldProps, name, newProps[name]);
						}
					}
				},
				simpleInherit = function(newProps, oldProps, addTo) {
					addTo = addTo || newProps;
					for (var name in newProps) {
						Construct._overwrite(addTo, oldProps, name, newProps[name]);
					}
				};
			assign(Construct, {
				constructorExtends: true,
				newInstance: function() {
					var inst = this.instance(),
						args;
					if (inst.setup) {
						Object.defineProperty(inst, "__inSetup", {
							configurable: true,
							enumerable: false,
							value: true,
							writable: true
						});
						args = inst.setup.apply(inst, arguments);
						if (args instanceof Construct.ReturnValue) {
							return args.value;
						}
						inst.__inSetup = false;
					}
					if (inst.init) {
						inst.init.apply(inst, args || arguments);
					}
					return inst;
				},
				_inherit: canGetDescriptor ? inheritGetterSetter : simpleInherit,
				_defineProperty: function(what, oldProps, propName, descriptor) {
					Object.defineProperty(what, propName, descriptor);
				},
				_overwrite: function(what, oldProps, propName, val) {
					Object.defineProperty(what, propName, {
						value: val,
						configurable: true,
						enumerable: true,
						writable: true
					});
				},
				setup: function(base) {
					this.defaults = deepAssign(true, {}, base.defaults, this.defaults);
				},
				instance: function() {
					initializing = 1;
					var inst = new this();
					initializing = 0;
					return inst;
				},
				extend: function(name, staticProperties, instanceProperties) {
					var shortName = name,
						klass = staticProperties,
						proto = instanceProperties;
					if (typeof shortName !== "string") {
						proto = klass;
						klass = shortName;
						shortName = null;
					}
					if (!proto) {
						proto = klass;
						klass = null;
					}
					proto = proto || {};
					var _super_class = this,
						_super = this.prototype,
						Constructor,
						prototype;
					prototype = this.instance();
					Construct._inherit(proto, _super, prototype);
					if (shortName) {
					} else if (klass && klass.shortName) {
						shortName = klass.shortName;
					} else if (this.shortName) {
						shortName = this.shortName;
					}
					function init() {
						if (!initializing) {
							return (!this || this.constructor !== Constructor) &&
								arguments.length &&
								Constructor.constructorExtends
								? Constructor.extend.apply(Constructor, arguments)
								: Constructor.newInstance.apply(Constructor, arguments);
						}
					}
					Constructor =
						typeof namedCtor === "function"
							? namedCtor(constructorName, init)
							: function() {
									return init.apply(this, arguments);
								};
					for (var propName in _super_class) {
						if (_super_class.hasOwnProperty(propName)) {
							Constructor[propName] = _super_class[propName];
						}
					}
					Construct._inherit(klass, _super_class, Constructor);
					assign(Constructor, {
						constructor: Constructor,
						prototype: prototype
					});
					if (shortName !== undefined) {
						Constructor.shortName = shortName;
					}
					Constructor.prototype.constructor = Constructor;
					var t = [_super_class].concat(makeArray(arguments)),
						args = Constructor.setup.apply(Constructor, t);
					if (Constructor.init) {
						Constructor.init.apply(Constructor, args || t);
					}
					return Constructor;
				},
				ReturnValue: function(value) {
					this.value = value;
				}
			});
			Construct.prototype.setup = function() {};
			Construct.prototype.init = function() {};
			stealModule.exports = namespace.Construct = Construct;
		}
	],
	[
		109,
		function(stealRequire, stealExports, stealModule) {
			var Construct = stealRequire(112);
			var canEvent = stealRequire(52);
			var canBatch = stealRequire(53);
			var assign = stealRequire(57);
			var each = stealRequire(12);
			var types = stealRequire(76);
			var Observation = stealRequire(23);
			var canReflect = stealRequire(28);
			var singleReference = stealRequire(56);
			var CIDMap = stealRequire(39);
			var SimpleMap = Construct.extend({
				setup: function(initialData) {
					this._data = {};
					this.attr(initialData);
				},
				attr: function(prop, value) {
					var self = this;
					if (arguments.length === 0) {
						Observation.add(this, "__keys");
						var data = {};
						each(
							this._data,
							function(value, prop) {
								Observation.add(this, prop);
								data[prop] = value;
							},
							this
						);
						return data;
					} else if (arguments.length > 1) {
						var had = this._data.hasOwnProperty(prop);
						var old = this._data[prop];
						this._data[prop] = value;
						canBatch.start();
						if (!had) {
							canEvent.dispatch.call(this, "__keys", []);
						}
						canEvent.dispatch.call(this, prop, [value, old]);
						canBatch.stop();
					} else if (typeof prop === "object") {
						canReflect.eachKey(prop, function(value, key) {
							self.attr(key, value);
						});
					} else {
						if (prop !== "constructor") {
							Observation.add(this, prop);
							return this._data[prop];
						}
						return this.constructor;
					}
				},
				serialize: function() {
					return canReflect.serialize(this, CIDMap);
				},
				get: function() {
					return this.attr.apply(this, arguments);
				},
				set: function() {
					return this.attr.apply(this, arguments);
				}
			});
			assign(SimpleMap.prototype, canEvent);
			if (!types.DefaultMap) {
				types.DefaultMap = SimpleMap;
			}
			canReflect.assignSymbols(SimpleMap.prototype, {
				"can.isMapLike": true,
				"can.isListLike": false,
				"can.isValueLike": false,
				"can.getKeyValue": SimpleMap.prototype.get,
				"can.setKeyValue": SimpleMap.prototype.set,
				"can.deleteKeyValue": function(prop) {
					return this.attr(prop, undefined);
				},
				"can.getOwnEnumerableKeys": function() {
					Observation.add(this, "__keys");
					return Object.keys(this._data);
				},
				"can.assignDeep": function(source) {
					canBatch.start();
					canReflect.assignMap(this, source);
					canBatch.stop();
				},
				"can.updateDeep": function(source) {
					canBatch.start();
					canReflect.updateMap(this, source);
					canBatch.stop();
				},
				"can.onKeyValue": function(key, handler) {
					var translationHandler = function(ev, newValue, oldValue) {
						handler.call(this, newValue, oldValue);
					};
					singleReference.set(handler, this, translationHandler, key);
					this.addEventListener(key, translationHandler);
				},
				"can.offKeyValue": function(key, handler) {
					this.removeEventListener(
						key,
						singleReference.getAndDelete(handler, this, key)
					);
				},
				"can.keyHasDependencies": function(key) {
					return false;
				},
				"can.getKeyDependencies": function(key) {
					return undefined;
				}
			});
			stealModule.exports = SimpleMap;
		}
	],
	[
		91,
		function(stealRequire, stealExports, stealModule) {
			var SimpleMap = stealRequire(109);
			var ReferenceMap = SimpleMap.extend({});
			stealModule.exports = ReferenceMap;
		}
	],
	[
		92,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var Observation = stealRequire(23);
			var observeReader = stealRequire(71);
			var makeCompute = stealRequire(22);
			var assign = stealRequire(57);
			var isFunction = stealRequire(60);
			var canBatch = stealRequire(53);
			var CID = stealRequire(55);
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var getFastPathRoot = function(computeData) {
				if (computeData.reads && computeData.reads.length === 1) {
					var root = computeData.root;
					if (root && root[canSymbol.for("can.getValue")]) {
						root = canReflect.getValue(root);
					}
					return (
						root &&
						canReflect.isObservableLike(root) &&
						canReflect.isMapLike(root) &&
						!isFunction(root[computeData.reads[0].key]) &&
						root
					);
				}
				return;
			};
			var isEventObject = function(obj) {
				return (
					obj &&
					typeof obj.batchNum === "number" &&
					typeof obj.type === "string"
				);
			};
			var ScopeKeyData = function(scope, key, options) {
				CID(this);
				this.startingScope = scope;
				this.key = key;
				this.observation = new Observation(this.read, this);
				this.options = assign({ observation: this.observation }, options);
				this.handlers = [];
				this.dispatchHandler = this.dispatch.bind(this);
				this.fastPath = undefined;
				this.root = undefined;
				this.initialValue = undefined;
				this.reads = undefined;
				this.setRoot = undefined;
			};
			ScopeKeyData.prototype.getValue = function() {
				Observation.add(this);
				return this.getObservationValue();
			};
			ScopeKeyData.prototype.getObservationValue = Observation.ignore(
				function() {
					return this.observation.get();
				}
			);
			ScopeKeyData.prototype.read = function() {
				if (this.root) {
					return observeReader.read(this.root, this.reads, this.options).value;
				}
				var data = this.startingScope.read(this.key, this.options);
				this.scope = data.scope;
				this.reads = data.reads;
				this.root = data.rootObserve;
				this.setRoot = data.setRoot;
				return (this.initialValue = data.value);
			};
			ScopeKeyData.prototype.setValue = function(newVal) {
				var root = this.root || this.setRoot;
				if (root) {
					observeReader.write(root, this.reads, newVal, this.options);
				} else {
					this.startingScope.set(this.key, newVal, this.options);
				}
			};
			ScopeKeyData.prototype.hasDependencies = function() {
				return this.observation.hasDependencies();
			};
			var canOnValue = canSymbol.for("can.onValue"),
				canOffValue = canSymbol.for("can.offValue");
			canReflect.set(ScopeKeyData.prototype, canOnValue, function(handler) {
				if (!this.handlers.length) {
					canReflect.onValue(this.observation, this.dispatchHandler);
					var fastPathRoot = getFastPathRoot(this);
					if (fastPathRoot) {
						var self = this,
							observation = this.observation;
						this.fastPath = true;
						observation.dependencyChange = function(
							target,
							newVal,
							altNewValue
						) {
							if (isEventObject(newVal)) {
								newVal = altNewValue;
							}
							if (target === fastPathRoot && typeof newVal !== "function") {
								this.newVal = newVal;
							} else {
								observation.dependencyChange =
									Observation.prototype.dependencyChange;
								observation.start = Observation.prototype.start;
								self.fastPath = false;
							}
							return Observation.prototype.dependencyChange.call(
								this,
								target,
								newVal,
								altNewValue
							);
						};
						observation.start = function() {
							this.value = this.newVal;
						};
					}
				}
				this.handlers.push(handler);
			});
			ScopeKeyData.prototype.dispatch = function() {
				var handlers = this.handlers.slice(0);
				for (var i = 0, len = handlers.length; i < len; i++) {
					canBatch.batchNum = this.observation.batchNum;
					handlers[i].apply(this, arguments);
				}
			};
			canReflect.set(ScopeKeyData.prototype, canOffValue, function(handler) {
				var index = this.handlers.indexOf(handler);
				this.handlers.splice(index, 1);
				if (!this.handlers.length) {
					canReflect.offValue(this.observation, this.dispatchHandler);
					this.observation.dependencyChange =
						Observation.prototype.dependencyChange;
					this.observation.start = Observation.prototype.start;
				}
			});
			canReflect.set(
				ScopeKeyData.prototype,
				canSymbol.for("can.getValue"),
				ScopeKeyData.prototype.getValue
			);
			canReflect.set(
				ScopeKeyData.prototype,
				canSymbol.for("can.setValue"),
				ScopeKeyData.prototype.setValue
			);
			canReflect.set(
				ScopeKeyData.prototype,
				canSymbol.for("can.valueHasDependencies"),
				ScopeKeyData.prototype.hasDependencies
			);
			Object.defineProperty(ScopeKeyData.prototype, "compute", {
				get: function() {
					var scopeKeyData = this;
					var compute = makeCompute(undefined, {
						on: function(updater) {
							scopeKeyData[canOnValue](updater);
							this.value = scopeKeyData.observation.value;
						},
						off: function(updater) {
							scopeKeyData[canOffValue](updater);
						},
						get: function() {
							return scopeKeyData.observation.get();
						},
						set: function(newValue) {
							return scopeKeyData.setValue(newValue);
						}
					});
					compute.computeInstance.observation = this.observation;
					compute.computeInstance._canObserve = false;
					Object.defineProperty(this, "compute", {
						value: compute,
						writable: false,
						configurable: false
					});
					return compute;
				},
				configurable: true
			});
			stealModule.exports = function(scope, key, options) {
				return new ScopeKeyData(scope, key, options || { args: [] });
			};
		}
	],
	[
		70,
		function(stealRequire, stealExports, stealModule) {
			var observeReader = stealRequire(71);
			var Observation = stealRequire(23);
			var ReferenceMap = stealRequire(91);
			var makeComputeData = stealRequire(92);
			var assign = stealRequire(57);
			var each = stealRequire(12);
			var namespace = stealRequire(19);
			var dev = stealRequire(29);
			var canReflect = stealRequire(28);
			var canLog = stealRequire(47);
			function Scope(context, parent, meta) {
				this._context = context;
				this._parent = parent;
				this._meta = meta || {};
				this.__cache = {};
			}
			assign(Scope, {
				read: observeReader.read,
				Refs: ReferenceMap,
				refsScope: function() {
					return new Scope(new this.Refs());
				},
				keyInfo: function(attr) {
					var info = {};
					info.isDotSlash = attr.substr(0, 2) === "./";
					info.isThisDot = attr.substr(0, 5) === "this.";
					info.isThisAt = attr.substr(0, 5) === "this@";
					info.isInCurrentContext =
						info.isDotSlash || info.isThisDot || info.isThisAt;
					info.isInParentContext = attr.substr(0, 3) === "../";
					info.isCurrentContext = attr === "." || attr === "this";
					info.isParentContext = attr === "..";
					info.isContextBased =
						info.isInCurrentContext ||
						info.isInParentContext ||
						info.isCurrentContext ||
						info.isParentContext;
					return info;
				}
			});
			assign(Scope.prototype, {
				add: function(context, meta) {
					if (context !== this._context) {
						return new this.constructor(context, this, meta);
					} else {
						return this;
					}
				},
				read: function(attr, options) {
					if (attr === "%root") {
						return { value: this.getRoot() };
					}
					if (attr === "%scope") {
						return { value: this };
					}
					var keyInfo = Scope.keyInfo(attr);
					if (keyInfo.isContextBased && this._meta.notContext) {
						return this._parent.read(attr, options);
					}
					var currentScopeOnly;
					if (keyInfo.isInCurrentContext) {
						currentScopeOnly = true;
						attr = keyInfo.isDotSlash ? attr.substr(2) : attr.substr(5);
					} else if (keyInfo.isInParentContext || keyInfo.isParentContext) {
						var parent = this._parent;
						while (parent._meta.notContext) {
							parent = parent._parent;
						}
						if (keyInfo.isParentContext) {
							return observeReader.read(parent._context, [], options);
						}
						return parent.read(attr.substr(3) || ".", options);
					} else if (keyInfo.isCurrentContext) {
						return observeReader.read(this._context, [], options);
					}
					var keyReads = observeReader.reads(attr);
					if (keyReads[0].key.charAt(0) === "*") {
						return this.getRefs()._read(keyReads, options, true);
					} else {
						return this._read(keyReads, options, currentScopeOnly);
					}
				},
				_read: function(keyReads, options, currentScopeOnly) {
					var currentScope = this,
						currentContext,
						undefinedObserves = [],
						currentObserve,
						currentReads,
						setObserveDepth = -1,
						currentSetReads,
						currentSetObserve,
						readOptions = assign(
							{
								foundObservable: function(observe, nameIndex) {
									currentObserve = observe;
									currentReads = keyReads.slice(nameIndex);
								},
								earlyExit: function(parentValue, nameIndex) {
									if (
										nameIndex > setObserveDepth ||
										(nameIndex === setObserveDepth &&
											(typeof parentValue === "object" &&
												keyReads[nameIndex].key in parentValue))
									) {
										currentSetObserve = currentObserve;
										currentSetReads = currentReads;
										setObserveDepth = nameIndex;
									}
								}
							},
							options
						);
					while (currentScope) {
						currentContext = currentScope._context;
						if (
							currentContext !== null &&
							(typeof currentContext === "object" ||
								typeof currentContext === "function")
						) {
							var getObserves = Observation.trap();
							var data = observeReader.read(
								currentContext,
								keyReads,
								readOptions
							);
							var observes = getObserves();
							if (data.value !== undefined) {
								Observation.addAll(observes);
								return {
									scope: currentScope,
									rootObserve: currentObserve,
									value: data.value,
									reads: currentReads
								};
							} else {
								undefinedObserves.push.apply(undefinedObserves, observes);
							}
						}
						if (currentScopeOnly) {
							currentScope = null;
						} else {
							currentScope = currentScope._parent;
						}
					}
					Observation.addAll(undefinedObserves);
					return {
						setRoot: currentSetObserve,
						reads: currentSetReads,
						value: undefined
					};
				},
				get: function(key, options) {
					options = assign({ isArgument: true }, options);
					var res = this.read(key, options);
					return res.value;
				},
				peek: Observation.ignore(function(key, options) {
					return this.get(key, options);
				}),
				peak: Observation.ignore(function(key, options) {
					return this.peek(key, options);
				}),
				getScope: function(tester) {
					var scope = this;
					while (scope) {
						if (tester(scope)) {
							return scope;
						}
						scope = scope._parent;
					}
				},
				getContext: function(tester) {
					var res = this.getScope(tester);
					return res && res._context;
				},
				getRefs: function() {
					var lastScope;
					var refScope = this.getScope(function(scope) {
						lastScope = scope;
						return scope._context instanceof Scope.Refs;
					});
					if (!refScope) {
						lastScope._parent = new Scope.Refs();
						refScope = lastScope._parent;
					}
					return refScope;
				},
				getRoot: function() {
					var cur = this,
						child = this;
					while (cur._parent) {
						child = cur;
						cur = cur._parent;
					}
					if (cur._context instanceof Scope.Refs) {
						cur = child;
					}
					return cur._context;
				},
				set: function(key, value, options) {
					options = options || {};
					var keyInfo = Scope.keyInfo(key);
					if (keyInfo.isCurrentContext) {
						return canReflect.setValue(this._context, value);
					} else if (keyInfo.isInParentContext || keyInfo.isParentContext) {
						var parent = this._parent;
						while (parent._meta.notContext) {
							parent = parent._parent;
						}
						if (keyInfo.isParentContext) {
							return canReflect.setValue(parent._context, value);
						}
						return parent.set(key.substr(3) || ".", value, options);
					}
					var dotIndex = key.lastIndexOf("."),
						slashIndex = key.lastIndexOf("/"),
						contextPath,
						propName;
					if (slashIndex > dotIndex) {
						contextPath = key.substring(0, slashIndex);
						propName = key.substring(slashIndex + 1, key.length);
					} else {
						if (dotIndex !== -1) {
							contextPath = key.substring(0, dotIndex);
							propName = key.substring(dotIndex + 1, key.length);
						} else {
							contextPath = ".";
							propName = key;
						}
					}
					if (key.charAt(0) === "*") {
						observeReader.write(this.getRefs()._context, key, value, options);
					} else {
						var context = this.read(contextPath, options).value;
						if (
							!canReflect.isObservableLike(context) &&
							canReflect.isObservableLike(context[propName])
						) {
							if (canReflect.isMapLike(context[propName])) {
								dev.warn(
									'can-view-scope: Merging data into "' +
										propName +
										'" because its parent is non-observable'
								);
								canReflect.updateDeep(context[propName], value);
							} else if (canReflect.isValueLike(context[propName])) {
								canReflect.setValue(context[propName], value);
							} else {
								observeReader.write(context, propName, value, options);
							}
						} else {
							observeReader.write(context, propName, value, options);
						}
					}
				},
				attr: Observation.ignore(function(key, value, options) {
					canLog.warn(
						"can-view-scope::attr is deprecated, please use peek, get or set"
					);
					options = assign({ isArgument: true }, options);
					if (arguments.length === 2) {
						return this.set(key, value, options);
					} else {
						return this.get(key, options);
					}
				}),
				computeData: function(key, options) {
					return makeComputeData(this, key, options);
				},
				compute: function(key, options) {
					return this.computeData(key, options).compute;
				},
				cloneFromRef: function() {
					var contexts = [];
					var scope = this,
						context,
						parent;
					while (scope) {
						context = scope._context;
						if (context instanceof Scope.Refs) {
							parent = scope._parent;
							break;
						}
						contexts.unshift(context);
						scope = scope._parent;
					}
					if (parent) {
						each(contexts, function(context) {
							parent = parent.add(context);
						});
						return parent;
					} else {
						return this;
					}
				}
			});
			function Options(data, parent, meta) {
				if (!data.helpers && !data.partials && !data.tags) {
					data = { helpers: data };
				}
				Scope.call(this, data, parent, meta);
			}
			Options.prototype = new Scope();
			Options.prototype.constructor = Options;
			Scope.Options = Options;
			namespace.view = namespace.view || {};
			stealModule.exports = namespace.view.Scope = Scope;
		}
	],
	[
		24,
		function(stealRequire, stealExports, stealModule) {
			var Scope = stealRequire(70);
			var Observation = stealRequire(23);
			var observationReader = stealRequire(71);
			var compute = stealRequire(22);
			var canReflect = stealRequire(28);
			var isArrayLike = stealRequire(14);
			var Options = Scope.Options;
			var noop = function() {};
			stealModule.exports = {
				isArrayLike: isArrayLike,
				emptyHandler: function() {},
				jsonParse: function(str) {
					if (str[0] === "'") {
						return str.substr(1, str.length - 2);
					} else if (str === "undefined") {
						return undefined;
					} else {
						return JSON.parse(str);
					}
				},
				mixins: {
					last: function() {
						return this.stack[this.stack.length - 1];
					},
					add: function(chars) {
						this.last().add(chars);
					},
					subSectionDepth: function() {
						return this.stack.length - 1;
					}
				},
				convertToScopes: function(
					helperOptions,
					scope,
					options,
					nodeList,
					truthyRenderer,
					falseyRenderer,
					isStringOnly
				) {
					helperOptions.fn = truthyRenderer
						? this.makeRendererConvertScopes(
								truthyRenderer,
								scope,
								options,
								nodeList,
								isStringOnly
							)
						: noop;
					helperOptions.inverse = falseyRenderer
						? this.makeRendererConvertScopes(
								falseyRenderer,
								scope,
								options,
								nodeList,
								isStringOnly
							)
						: noop;
					helperOptions.isSection = !!(truthyRenderer || falseyRenderer);
				},
				makeRendererConvertScopes: function(
					renderer,
					parentScope,
					parentOptions,
					nodeList,
					observeObservables
				) {
					var rendererWithScope = function(ctx, opts, parentNodeList) {
						return renderer(ctx || parentScope, opts, parentNodeList);
					};
					var convertedRenderer = function(
						newScope,
						newOptions,
						parentNodeList
					) {
						if (newScope !== undefined && !(newScope instanceof Scope)) {
							if (parentScope) {
								newScope = parentScope.add(newScope);
							} else {
								newScope = Scope.refsScope().add(newScope || {});
							}
						}
						if (newOptions !== undefined && !(newOptions instanceof Options)) {
							newOptions = parentOptions.add(newOptions);
						}
						var result = rendererWithScope(
							newScope,
							newOptions || parentOptions,
							parentNodeList || nodeList
						);
						return result;
					};
					return observeObservables
						? convertedRenderer
						: Observation.ignore(convertedRenderer);
				},
				getItemsStringContent: function(
					items,
					isObserveList,
					helperOptions,
					options
				) {
					var txt = "",
						len = observationReader.get(items, "length"),
						isObservable = canReflect.isObservableLike(items);
					for (var i = 0; i < len; i++) {
						var item = isObservable ? compute(items, "" + i) : items[i];
						txt += helperOptions.fn(item, options);
					}
					return txt;
				},
				getItemsFragContent: function(items, helperOptions, scope, asVariable) {
					var result = [],
						len = observationReader.get(items, "length"),
						isObservable = canReflect.isObservableLike(items);
					for (var i = 0; i < len; i++) {
						var aliases = {
							"%index": i,
							"@index": i
						};
						var item = isObservable ? compute(items, "" + i) : items[i];
						if (asVariable) {
							aliases[asVariable] = item;
						}
						result.push(
							helperOptions.fn(
								scope.add(aliases, { notContext: true }).add(item)
							)
						);
					}
					return result;
				},
				Options: Options
			};
		}
	],
	[
		64,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var getDocument = stealRequire(63),
					childNodes = stealRequire(49);
				var fragmentRE = /^\s*<(\w+)[^>]*>/,
					toString = {}.toString,
					fragment = function(html, name, doc) {
						if (name === undefined) {
							name = fragmentRE.test(html) && RegExp.$1;
						}
						if (html && toString.call(html.replace) === "[object Function]") {
							html = html.replace(
								/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
								"<$1></$2>"
							);
						}
						var container = doc.createElement("div"),
							temp = doc.createElement("div");
						if (
							name === "tbody" ||
							name === "tfoot" ||
							name === "thead" ||
							name === "colgroup"
						) {
							temp.innerHTML = "<table>" + html + "</table>";
							container =
								temp.firstChild.nodeType === 3
									? temp.lastChild
									: temp.firstChild;
						} else if (name === "col") {
							temp.innerHTML =
								"<table><colgroup>" + html + "</colgroup></table>";
							container =
								temp.firstChild.nodeType === 3
									? temp.lastChild
									: temp.firstChild.firstChild;
						} else if (name === "tr") {
							temp.innerHTML = "<table><tbody>" + html + "</tbody></table>";
							container =
								temp.firstChild.nodeType === 3
									? temp.lastChild
									: temp.firstChild.firstChild;
						} else if (name === "td" || name === "th") {
							temp.innerHTML =
								"<table><tbody><tr>" + html + "</tr></tbody></table>";
							container =
								temp.firstChild.nodeType === 3
									? temp.lastChild
									: temp.firstChild.firstChild.firstChild;
						} else if (name === "option") {
							temp.innerHTML = "<select>" + html + "</select>";
							container =
								temp.firstChild.nodeType === 3
									? temp.lastChild
									: temp.firstChild;
						} else {
							container.innerHTML = "" + html;
						}
						var tmp = {},
							children = childNodes(container);
						tmp.length = children.length;
						for (var i = 0; i < children.length; i++) {
							tmp[i] = children[i];
						}
						return [].slice.call(tmp);
					};
				var buildFragment = function(html, doc) {
					if (html && html.nodeType === 11) {
						return html;
					}
					if (!doc) {
						doc = getDocument();
					} else if (doc.length) {
						doc = doc[0];
					}
					var parts = fragment(html, undefined, doc),
						frag = (doc || document).createDocumentFragment();
					for (var i = 0, length = parts.length; i < length; i++) {
						frag.appendChild(parts[i]);
					}
					return frag;
				};
				stealModule.exports = buildFragment;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		27,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var getDocument = stealRequire(63);
				var fragment = stealRequire(64);
				var each = stealRequire(12);
				var childNodes = stealRequire(49);
				var makeFrag = function(item, doc) {
					var document = doc || getDocument();
					var frag;
					if (!item || typeof item === "string") {
						frag = fragment(item == null ? "" : "" + item, document);
						if (!frag.childNodes.length) {
							frag.appendChild(document.createTextNode(""));
						}
						return frag;
					} else if (item.nodeType === 11) {
						return item;
					} else if (typeof item.nodeType === "number") {
						frag = document.createDocumentFragment();
						frag.appendChild(item);
						return frag;
					} else if (typeof item.length === "number") {
						frag = document.createDocumentFragment();
						each(item, function(item) {
							frag.appendChild(makeFrag(item));
						});
						if (!childNodes(frag).length) {
							frag.appendChild(document.createTextNode(""));
						}
						return frag;
					} else {
						frag = fragment("" + item, document);
						if (!childNodes(frag).length) {
							frag.appendChild(document.createTextNode(""));
						}
						return frag;
					}
				};
				stealModule.exports = makeFrag;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		50,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var makeMutationEvent = stealRequire(83);
			makeMutationEvent("removed", "removedNodes");
		}
	],
	[
		31,
		function(stealRequire, stealExports, stealModule) {
			var parser = stealRequire(18);
			var domEvents = stealRequire(48);
			var nodeLists = stealRequire(21);
			var makeFrag = stealRequire(27);
			var childNodes = stealRequire(49);
			var canReflect = stealRequire(28);
			stealRequire(50);
			var childMutationCallbacks = {};
			var live = {
				setup: function(el, bind, unbind) {
					var tornDown = false,
						teardown = function() {
							if (!tornDown) {
								tornDown = true;
								unbind(data);
								domEvents.removeEventListener.call(el, "removed", teardown);
							}
							return true;
						},
						data = {
							teardownCheck: function(parent) {
								return parent ? false : teardown();
							}
						};
					domEvents.addEventListener.call(el, "removed", teardown);
					bind(data);
					return data;
				},
				listen: function(el, compute, change) {
					return live.setup(
						el,
						function() {
							canReflect.onValue(compute, change);
						},
						function(data) {
							canReflect.offValue(compute, change);
							if (data.nodeList) {
								nodeLists.unregister(data.nodeList);
							}
						}
					);
				},
				getAttributeParts: function(newVal) {
					var attrs = {},
						attr;
					parser.parseAttrs(newVal, {
						attrStart: function(name) {
							attrs[name] = "";
							attr = name;
						},
						attrValue: function(value) {
							attrs[attr] += value;
						},
						attrEnd: function() {}
					});
					return attrs;
				},
				isNode: function(obj) {
					return obj && obj.nodeType;
				},
				addTextNodeIfNoChildren: function(frag) {
					if (!frag.firstChild) {
						frag.appendChild(frag.ownerDocument.createTextNode(""));
					}
				},
				registerChildMutationCallback: function(tag, callback) {
					if (callback) {
						childMutationCallbacks[tag] = callback;
					} else {
						return childMutationCallbacks[tag];
					}
				},
				callChildMutationCallback: function(el) {
					var callback =
						el && childMutationCallbacks[el.nodeName.toLowerCase()];
					if (callback) {
						callback(el);
					}
				},
				replace: function(nodes, val, teardown) {
					var oldNodes = nodes.slice(0),
						frag = makeFrag(val);
					nodeLists.register(nodes, teardown);
					nodeLists.update(nodes, childNodes(frag));
					nodeLists.replace(oldNodes, frag);
					return nodes;
				},
				getParentNode: function(el, defaultParentNode) {
					return defaultParentNode && el.parentNode.nodeType === 11
						? defaultParentNode
						: el.parentNode;
				},
				makeString: function(txt) {
					return txt == null ? "" : "" + txt;
				}
			};
			stealModule.exports = live;
		}
	],
	[
		34,
		function(stealRequire, stealExports, stealModule) {
			var attr = stealRequire(26);
			var live = stealRequire(31);
			var canReflect = stealRequire(28);
			live.attr = function(el, attributeName, compute) {
				live.listen(el, compute, function(newVal) {
					attr.set(el, attributeName, newVal);
				});
				attr.set(el, attributeName, canReflect.getValue(compute));
			};
		}
	],
	[
		32,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(31);
			var viewCallbacks = stealRequire(82);
			var attr = stealRequire(26);
			var domEvents = stealRequire(48);
			var types = stealRequire(76);
			var canReflect = stealRequire(28);
			live.attrs = function(el, compute, scope, options) {
				if (!canReflect.isObservableLike(compute)) {
					var attrs = live.getAttributeParts(compute);
					for (var name in attrs) {
						attr.set(el, name, attrs[name]);
					}
					return;
				}
				var oldAttrs = {};
				var setAttrs = function(newVal) {
					var newAttrs = live.getAttributeParts(newVal),
						name;
					for (name in newAttrs) {
						var newValue = newAttrs[name],
							oldValue = oldAttrs[name];
						if (newValue !== oldValue) {
							attr.set(el, name, newValue);
							var callback = viewCallbacks.attr(name);
							if (callback) {
								callback(el, {
									attributeName: name,
									scope: scope,
									options: options
								});
							}
						}
						delete oldAttrs[name];
					}
					for (name in oldAttrs) {
						attr.remove(el, name);
					}
					oldAttrs = newAttrs;
				};
				var handler = function(newVal) {
					setAttrs(newVal);
				};
				canReflect.onValue(compute, handler);
				var teardownHandler = function() {
					canReflect.offValue(compute, handler);
					domEvents.removeEventListener.call(el, "removed", teardownHandler);
				};
				domEvents.addEventListener.call(el, "removed", teardownHandler);
				setAttrs(canReflect.getValue(compute));
			};
		}
	],
	[
		33,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(31);
			var nodeLists = stealRequire(21);
			var makeFrag = stealRequire(27);
			var makeArray = stealRequire(38);
			var childNodes = stealRequire(49);
			var canReflect = stealRequire(28);
			live.html = function(el, compute, parentNode, nodeList) {
				var data, makeAndPut, nodes;
				parentNode = live.getParentNode(el, parentNode);
				data = live.listen(parentNode, compute, function(newVal) {
					var attached = nodeLists.first(nodes).parentNode;
					if (attached) {
						makeAndPut(newVal);
					}
					var pn = nodeLists.first(nodes).parentNode;
					data.teardownCheck(pn);
					live.callChildMutationCallback(pn);
				});
				nodes = nodeList || [el];
				makeAndPut = function(val) {
					var isFunction = typeof val === "function",
						frag = makeFrag(isFunction ? "" : val),
						oldNodes = makeArray(nodes);
					live.addTextNodeIfNoChildren(frag);
					oldNodes = nodeLists.update(nodes, childNodes(frag));
					if (isFunction) {
						val(frag.firstChild);
					}
					nodeLists.replace(oldNodes, frag);
				};
				data.nodeList = nodes;
				if (!nodeList) {
					nodeLists.register(nodes, data.teardownCheck);
				} else {
					nodeList.unregistered = data.teardownCheck;
				}
				makeAndPut(canReflect.getValue(compute));
			};
		}
	],
	[
		59,
		function(stealRequire, stealExports, stealModule) {
			var Observation = stealRequire(23);
			stealModule.exports = function queueFns(fns, primaryDepth) {
				var updateQueue = [],
					queuedFns = {};
				var updateQueueObservation = {
					needsUpdate: false,
					update: function() {
						for (var i = 0; i < updateQueue.length; i++) {
							var obj = updateQueue[i];
							obj.fn.apply(obj.context, obj.args);
						}
						updateQueue = [];
					},
					getPrimaryDepth: function() {
						return primaryDepth || 0;
					}
				};
				var wrapFn = function(fn) {
					return function() {
						updateQueue.push({
							fn: fn,
							context: this,
							args: arguments
						});
						updateQueueObservation.needsUpdate = false;
						Observation.registerUpdate(updateQueueObservation);
					};
				};
				for (var key in fns) {
					queuedFns[key] = wrapFn(fns[key]);
				}
				queuedFns.clear = function() {
					updateQueue = [];
				};
				return queuedFns;
			};
		}
	],
	[
		35,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(31);
			var queueFns = stealRequire(59);
			var nodeLists = stealRequire(21);
			var makeCompute = stealRequire(22);
			var canBatch = stealRequire(53);
			var frag = stealRequire(27);
			var domMutate = stealRequire(37);
			var childNodes = stealRequire(49);
			var makeArray = stealRequire(38);
			var each = stealRequire(12);
			var isFunction = stealRequire(60);
			var diff = stealRequire(62);
			var splice = [].splice;
			var Compute = stealRequire(54);
			var canReflect = stealRequire(28);
			var renderAndAddToNodeLists = function(
					newNodeLists,
					parentNodeList,
					render,
					context,
					args
				) {
					var itemNodeList = [];
					if (parentNodeList) {
						nodeLists.register(itemNodeList, null, parentNodeList, true);
						itemNodeList.parentList = parentNodeList;
						itemNodeList.expression = "#each SUBEXPRESSION";
					}
					var itemHTML = render.apply(context, args.concat([itemNodeList])),
						itemFrag = frag(itemHTML);
					var children = makeArray(childNodes(itemFrag));
					if (parentNodeList) {
						nodeLists.update(itemNodeList, children);
						newNodeLists.push(itemNodeList);
					} else {
						newNodeLists.push(nodeLists.register(children));
					}
					return itemFrag;
				},
				removeFromNodeList = function(masterNodeList, index, length) {
					var removedMappings = masterNodeList.splice(index + 1, length),
						itemsToRemove = [];
					each(removedMappings, function(nodeList) {
						var nodesToRemove = nodeLists.unregister(nodeList);
						[].push.apply(itemsToRemove, nodesToRemove);
					});
					return itemsToRemove;
				},
				addFalseyIfEmpty = function(
					list,
					falseyRender,
					masterNodeList,
					nodeList
				) {
					if (falseyRender && list.length === 0) {
						var falseyNodeLists = [];
						var falseyFrag = renderAndAddToNodeLists(
							falseyNodeLists,
							nodeList,
							falseyRender,
							list,
							[list]
						);
						nodeLists.after([masterNodeList[0]], falseyFrag);
						masterNodeList.push(falseyNodeLists[0]);
					}
				};
			live.list = function(
				el,
				compute,
				render,
				context,
				parentNode,
				nodeList,
				falseyRender
			) {
				var masterNodeList = nodeList || [el],
					indexMap = [],
					afterPreviousEvents = false,
					isTornDown = false,
					add = function add(ev, items, index) {
						if (!afterPreviousEvents) {
							return;
						}
						var frag = text.ownerDocument.createDocumentFragment(),
							newNodeLists = [],
							newIndicies = [];
						each(items, function(item, key) {
							var itemIndex = new Compute(key + index),
								itemCompute = new Compute(function(newVal) {
									if (arguments.length) {
										if ("set" in list) {
											list.set(itemIndex.get(), newVal);
										} else {
											list.attr(itemIndex.get(), newVal);
										}
									} else {
										return item;
									}
								}),
								itemFrag = renderAndAddToNodeLists(
									newNodeLists,
									nodeList,
									render,
									context,
									[itemCompute, itemIndex]
								);
							frag.appendChild(itemFrag);
							newIndicies.push(itemIndex);
						});
						var masterListIndex = index + 1;
						if (!indexMap.length) {
							var falseyItemsToRemove = removeFromNodeList(
								masterNodeList,
								0,
								masterNodeList.length - 1
							);
							nodeLists.remove(falseyItemsToRemove);
						}
						if (!masterNodeList[masterListIndex]) {
							nodeLists.after(
								masterListIndex === 1
									? [text]
									: [nodeLists.last(masterNodeList[masterListIndex - 1])],
								frag
							);
						} else {
							var el = nodeLists.first(masterNodeList[masterListIndex]);
							domMutate.insertBefore.call(el.parentNode, frag, el);
						}
						splice.apply(
							masterNodeList,
							[masterListIndex, 0].concat(newNodeLists)
						);
						splice.apply(indexMap, [index, 0].concat(newIndicies));
						for (
							var i = index + newIndicies.length, len = indexMap.length;
							i < len;
							i++
						) {
							indexMap[i].set(i);
						}
						if (ev.callChildMutationCallback !== false) {
							live.callChildMutationCallback(text.parentNode);
						}
					},
					set = function set(ev, newVal, index) {
						remove({}, { length: 1 }, index, true);
						add({}, [newVal], index);
					},
					remove = function remove(
						ev,
						items,
						index,
						duringTeardown,
						fullTeardown
					) {
						if (!afterPreviousEvents) {
							return;
						}
						if (!duringTeardown && data.teardownCheck(text.parentNode)) {
							return;
						}
						if (index < 0) {
							index = indexMap.length + index;
						}
						var itemsToRemove = removeFromNodeList(
							masterNodeList,
							index,
							items.length
						);
						indexMap.splice(index, items.length);
						for (var i = index, len = indexMap.length; i < len; i++) {
							indexMap[i].set(i);
						}
						if (!fullTeardown) {
							addFalseyIfEmpty(list, falseyRender, masterNodeList, nodeList);
							nodeLists.remove(itemsToRemove);
							if (ev.callChildMutationCallback !== false) {
								live.callChildMutationCallback(text.parentNode);
							}
						} else {
							nodeLists.unregister(masterNodeList);
						}
					},
					move = function move(ev, item, newIndex, currentIndex) {
						if (!afterPreviousEvents) {
							return;
						}
						newIndex = newIndex + 1;
						currentIndex = currentIndex + 1;
						var referenceNodeList = masterNodeList[newIndex];
						var movedElements = frag(
							nodeLists.flatten(masterNodeList[currentIndex])
						);
						var referenceElement;
						if (currentIndex < newIndex) {
							referenceElement = nodeLists.last(referenceNodeList).nextSibling;
						} else {
							referenceElement = nodeLists.first(referenceNodeList);
						}
						var parentNode = masterNodeList[0].parentNode;
						parentNode.insertBefore(movedElements, referenceElement);
						var temp = masterNodeList[currentIndex];
						[].splice.apply(masterNodeList, [currentIndex, 1]);
						[].splice.apply(masterNodeList, [newIndex, 0, temp]);
						newIndex = newIndex - 1;
						currentIndex = currentIndex - 1;
						var indexCompute = indexMap[currentIndex];
						[].splice.apply(indexMap, [currentIndex, 1]);
						[].splice.apply(indexMap, [newIndex, 0, indexCompute]);
						var i = Math.min(currentIndex, newIndex);
						var len = indexMap.length;
						for (i, len; i < len; i++) {
							indexMap[i].set(i);
						}
						if (ev.callChildMutationCallback !== false) {
							live.callChildMutationCallback(text.parentNode);
						}
					},
					queuedFns = queueFns(
						{
							add: add,
							set: set,
							remove: remove,
							move: move
						},
						nodeList && nodeList.nesting
					),
					text = el.ownerDocument.createTextNode(""),
					list,
					teardownList = function(fullTeardown) {
						if (list && list.removeEventListener) {
							list.removeEventListener("add", queuedFns.add);
							list.removeEventListener("set", queuedFns.set);
							list.removeEventListener("remove", queuedFns.remove);
							list.removeEventListener("move", queuedFns.move);
						}
						remove(
							{ callChildMutationCallback: !!fullTeardown },
							{ length: masterNodeList.length - 1 },
							0,
							true,
							fullTeardown
						);
						queuedFns.clear();
					},
					oldList,
					updateList = function(newList) {
						if (isTornDown) {
							return;
						}
						afterPreviousEvents = true;
						if (newList && oldList) {
							list = newList || [];
							var patches = diff(oldList, newList);
							oldList = newList;
							if (oldList.removeEventListener) {
								oldList.removeEventListener("add", queuedFns.add);
								oldList.removeEventListener("set", queuedFns.set);
								oldList.removeEventListener("remove", queuedFns.remove);
								oldList.removeEventListener("move", queuedFns.move);
							}
							for (var i = 0, patchLen = patches.length; i < patchLen; i++) {
								var patch = patches[i];
								if (patch.deleteCount) {
									remove(
										{ callChildMutationCallback: false },
										{ length: patch.deleteCount },
										patch.index,
										true
									);
								}
								if (patch.insert.length) {
									add(
										{ callChildMutationCallback: false },
										patch.insert,
										patch.index
									);
								}
							}
						} else {
							if (oldList) {
								teardownList();
							}
							list = newList || [];
							oldList = list;
							add({ callChildMutationCallback: false }, list, 0);
							addFalseyIfEmpty(list, falseyRender, masterNodeList, nodeList);
						}
						live.callChildMutationCallback(text.parentNode);
						afterPreviousEvents = false;
						if (list.addEventListener) {
							list.addEventListener("add", queuedFns.add);
							list.addEventListener("set", queuedFns.set);
							list.addEventListener("remove", queuedFns.remove);
							list.addEventListener("move", queuedFns.move);
						}
						canBatch.afterPreviousEvents(function() {
							afterPreviousEvents = true;
						});
					};
				var isValueLike = canReflect.isValueLike(compute),
					isObservableLike = canReflect.isObservableLike(compute);
				parentNode = live.getParentNode(el, parentNode);
				var data = live.setup(
					parentNode,
					function() {
						if (isValueLike && isObservableLike) {
							canReflect.onValue(compute, updateList);
						}
					},
					function() {
						if (isValueLike && isObservableLike) {
							canReflect.offValue(compute, updateList);
						}
						teardownList(true);
					}
				);
				if (!nodeList) {
					live.replace(masterNodeList, text, data.teardownCheck);
				} else {
					nodeLists.replace(masterNodeList, text);
					nodeLists.update(masterNodeList, [text]);
					nodeList.unregistered = function() {
						data.teardownCheck();
						isTornDown = true;
					};
				}
				updateList(isValueLike ? canReflect.getValue(compute) : compute);
			};
		}
	],
	[
		36,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(31);
			var nodeLists = stealRequire(21);
			var canReflect = stealRequire(28);
			live.text = function(el, compute, parentNode, nodeList) {
				var parent = live.getParentNode(el, parentNode);
				var data = live.listen(parent, compute, function(newVal) {
					if (typeof node.nodeValue !== "unknown") {
						node.nodeValue = live.makeString(newVal);
					}
				});
				var node = el.ownerDocument.createTextNode(
					live.makeString(canReflect.getValue(compute))
				);
				if (nodeList) {
					nodeList.unregistered = data.teardownCheck;
					data.nodeList = nodeList;
					nodeLists.update(nodeList, [node]);
					nodeLists.replace([el], node);
				} else {
					data.nodeList = live.replace([el], node, data.teardownCheck);
				}
			};
		}
	],
	[
		20,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(31);
			stealRequire(34);
			stealRequire(32);
			stealRequire(33);
			stealRequire(35);
			stealRequire(36);
			stealModule.exports = live;
		}
	],
	[
		93,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"use strict";
				var getGlobal = stealRequire(74);
				var getDomDocument = stealRequire(63);
				var setBaseUrl;
				stealModule.exports = function(setUrl) {
					if (setUrl !== undefined) {
						setBaseUrl = setUrl;
					}
					if (setBaseUrl !== undefined) {
						return setBaseUrl;
					}
					var global = getGlobal();
					var domDocument = getDomDocument();
					if (domDocument && "baseURI" in domDocument) {
						return domDocument.baseURI;
					} else if (global.location) {
						var href = global.location.href;
						var lastSlash = href.lastIndexOf("/");
						return lastSlash !== -1 ? href.substr(0, lastSlash) : href;
					} else if (typeof process !== "undefined") {
						return process.cwd();
					}
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		110,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = function(url) {
				var m = String(url)
					.replace(/^\s+|\s+$/g, "")
					.match(
						/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
					);
				return m
					? {
							href: m[0] || "",
							protocol: m[1] || "",
							authority: m[2] || "",
							host: m[3] || "",
							hostname: m[4] || "",
							port: m[5] || "",
							pathname: m[6] || "",
							search: m[7] || "",
							hash: m[8] || ""
						}
					: null;
			};
		}
	],
	[
		94,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var parseURI = stealRequire(110);
			stealModule.exports = function(base, href) {
				function removeDotSegments(input) {
					var output = [];
					input
						.replace(/^(\.\.?(\/|$))+/, "")
						.replace(/\/(\.(\/|$))+/g, "/")
						.replace(/\/\.\.$/, "/../")
						.replace(/\/?[^\/]*/g, function(p) {
							if (p === "/..") {
								output.pop();
							} else {
								output.push(p);
							}
						});
					return output
						.join("")
						.replace(/^\//, input.charAt(0) === "/" ? "/" : "");
				}
				href = parseURI(href || "");
				base = parseURI(base || "");
				return !href || !base
					? null
					: (href.protocol || base.protocol) +
							(href.protocol || href.authority
								? href.authority
								: base.authority) +
							removeDotSegments(
								href.protocol ||
								href.authority ||
								href.pathname.charAt(0) === "/"
									? href.pathname
									: href.pathname
										? (base.authority && !base.pathname ? "/" : "") +
											base.pathname.slice(
												0,
												base.pathname.lastIndexOf("/") + 1
											) +
											href.pathname
										: base.pathname
							) +
							(href.protocol || href.authority || href.pathname
								? href.search
								: href.search || base.search) +
							href.hash;
			};
		}
	],
	[
		95,
		function(stealRequire, stealExports, stealModule) {
			var canLog = stealRequire(47);
			function noop() {}
			var resolveValue = noop;
			var evaluateArgs = noop;
			var __testing = {};
			function debuggerHelper(left, right) {
				canLog.warn("Forgotten {{debugger}} helper");
			}
			stealModule.exports = {
				helper: debuggerHelper,
				evaluateArgs: evaluateArgs,
				resolveValue: resolveValue,
				__testing: __testing
			};
		}
	],
	[
		73,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(20);
			var nodeLists = stealRequire(21);
			var compute = stealRequire(22);
			var utils = stealRequire(24);
			var isFunction = stealRequire(60);
			var getBaseURL = stealRequire(93);
			var joinURIs = stealRequire(94);
			var each = stealRequire(12);
			var assign = stealRequire(57);
			var isIterable = stealRequire(15);
			var dev = stealRequire(29);
			var canSymbol = stealRequire(16);
			var canReflect = stealRequire(28);
			var isEmptyObject = stealRequire(61);
			var debuggerHelper = stealRequire(95).helper;
			var domData = stealRequire(69);
			var looksLikeOptions = function(options) {
				return (
					options &&
					typeof options.fn === "function" &&
					typeof options.inverse === "function"
				);
			};
			var resolve = function(value) {
				if (
					value &&
					value[canSymbol.for("can.isValueLike")] &&
					value[canSymbol.for("can.getValue")]
				) {
					return canReflect.getValue(value);
				} else {
					return value;
				}
			};
			var resolveHash = function(hash) {
				var params = {};
				for (var prop in hash) {
					params[prop] = resolve(hash[prop]);
				}
				return params;
			};
			var helpers = {
				each: function(items) {
					var args = [].slice.call(arguments),
						options = args.pop(),
						argsLen = args.length,
						argExprs = options.exprData.argExprs,
						resolved = resolve(items),
						asVariable,
						aliases,
						key;
					if (argsLen === 2 || (argsLen === 3 && argExprs[1].key === "as")) {
						asVariable = args[argsLen - 1];
						if (typeof asVariable !== "string") {
							asVariable = argExprs[argsLen - 1].key;
						}
					}
					if (
						((canReflect.isObservableLike(resolved) &&
							canReflect.isListLike(resolved)) ||
							(utils.isArrayLike(resolved) && items.isComputed)) &&
						!options.stringOnly
					) {
						return function(el) {
							var nodeList = [el];
							nodeList.expression = "live.list";
							nodeLists.register(nodeList, null, options.nodeList, true);
							nodeLists.update(options.nodeList, [el]);
							var cb = function(item, index, parentNodeList) {
								var aliases = {
									"%index": index,
									"@index": index
								};
								if (asVariable) {
									aliases[asVariable] = item;
								}
								return options.fn(
									options.scope.add(aliases, { notContext: true }).add(item),
									options.options,
									parentNodeList
								);
							};
							live.list(
								el,
								items,
								cb,
								options.context,
								el.parentNode,
								nodeList,
								function(list, parentNodeList) {
									return options.inverse(
										options.scope.add(list),
										options.options,
										parentNodeList
									);
								}
							);
						};
					}
					var expr = resolved,
						result;
					if (!!expr && utils.isArrayLike(expr)) {
						result = utils.getItemsFragContent(
							expr,
							options,
							options.scope,
							asVariable
						);
						return options.stringOnly ? result.join("") : result;
					} else if (isIterable(expr)) {
						result = [];
						each(expr, function(value, key) {
							aliases = { "%key": key };
							if (asVariable) {
								aliases[asVariable] = value;
							}
							result.push(
								options.fn(
									options.scope.add(aliases, { notContext: true }).add(value)
								)
							);
						});
						return options.stringOnly ? result.join("") : result;
					} else if (
						canReflect.isObservableLike(expr) &&
						canReflect.isMapLike(expr)
					) {
						result = [];
						(expr.forEach || expr.each).call(expr, function(val, key) {
							var value = compute(expr, key);
							aliases = {
								"%key": key,
								"@key": key
							};
							if (asVariable) {
								aliases[asVariable] = expr[key];
							}
							result.push(
								options.fn(
									options.scope.add(aliases, { notContext: true }).add(value)
								)
							);
						});
						return options.stringOnly ? result.join("") : result;
					} else if (expr instanceof Object) {
						result = [];
						for (key in expr) {
							aliases = {
								"%key": key,
								"@key": key
							};
							if (asVariable) {
								aliases[asVariable] = expr[key];
							}
							result.push(
								options.fn(
									options.scope
										.add(aliases, { notContext: true })
										.add(expr[key])
								)
							);
						}
						return options.stringOnly ? result.join("") : result;
					}
				},
				"@index": function(offset, options) {
					if (!options) {
						options = offset;
						offset = 0;
					}
					var index = options.scope.peek("@index");
					return "" + ((isFunction(index) ? index() : index) + offset);
				},
				if: function(expr, options) {
					var value;
					if (expr && expr.isComputed) {
						value = compute.truthy(expr)();
					} else {
						value = !!resolve(expr);
					}
					if (value) {
						return options.fn(options.scope || this);
					} else {
						return options.inverse(options.scope || this);
					}
				},
				is: function() {
					var lastValue,
						curValue,
						options = arguments[arguments.length - 1];
					if (arguments.length - 2 <= 0) {
						return options.inverse();
					}
					var args = arguments;
					var callFn = compute(function() {
						for (var i = 0; i < args.length - 1; i++) {
							curValue = resolve(args[i]);
							curValue = isFunction(curValue) ? curValue() : curValue;
							if (i > 0) {
								if (curValue !== lastValue) {
									return false;
								}
							}
							lastValue = curValue;
						}
						return true;
					});
					return callFn() ? options.fn() : options.inverse();
				},
				eq: function() {
					return helpers.is.apply(this, arguments);
				},
				unless: function(expr, options) {
					return helpers["if"].apply(this, [
						expr,
						assign(assign({}, options), {
							fn: options.inverse,
							inverse: options.fn
						})
					]);
				},
				with: function(expr, options) {
					var ctx = expr;
					if (!options) {
						options = expr;
						expr = true;
						ctx = options.hash;
					} else {
						expr = resolve(expr);
						if (options.hash && !isEmptyObject(options.hash)) {
							ctx = options.scope.add(options.hash).add(ctx);
						}
					}
					return options.fn(ctx || {});
				},
				log: function(options) {
					var logs = [];
					each(arguments, function(val) {
						if (!looksLikeOptions(val)) {
							logs.push(val);
						}
					});
					if (typeof console !== "undefined" && console.log) {
						if (!logs.length) {
							console.log(options.context);
						} else {
							console.log.apply(console, logs);
						}
					}
				},
				data: function(attr) {
					var data = arguments.length === 2 ? this : arguments[1];
					return function(el) {
						domData.set.call(el, attr, data || this.context);
					};
				},
				switch: function(expression, options) {
					resolve(expression);
					var found = false;
					var newOptions = options.helpers.add({
						case: function(value, options) {
							if (!found && resolve(expression) === resolve(value)) {
								found = true;
								return options.fn(options.scope || this);
							}
						},
						default: function(options) {
							if (!found) {
								return options.fn(options.scope || this);
							}
						}
					});
					return options.fn(options.scope, newOptions);
				},
				joinBase: function(firstExpr) {
					var args = [].slice.call(arguments);
					var options = args.pop();
					var moduleReference = args
						.map(function(expr) {
							var value = resolve(expr);
							return isFunction(value) ? value() : value;
						})
						.join("");
					var templateModule = options.helpers.peek("helpers.module");
					var parentAddress = templateModule ? templateModule.uri : undefined;
					var isRelative = moduleReference[0] === ".";
					if (isRelative && parentAddress) {
						return joinURIs(parentAddress, moduleReference);
					} else {
						var baseURL =
							(typeof System !== "undefined" &&
								(System.renderingBaseURL || System.baseURL)) ||
							getBaseURL();
						if (
							moduleReference[0] !== "/" &&
							baseURL[baseURL.length - 1] !== "/"
						) {
							baseURL += "/";
						}
						return joinURIs(baseURL, moduleReference);
					}
				}
			};
			helpers.eachOf = helpers.each;
			helpers.debugger = debuggerHelper;
			var registerHelper = function(name, callback) {
				helpers[name] = callback;
			};
			var makeSimpleHelper = function(fn) {
				return function() {
					var realArgs = [];
					each(arguments, function(val) {
						while (val && val.isComputed) {
							val = val();
						}
						realArgs.push(val);
					});
					return fn.apply(this, realArgs);
				};
			};
			stealModule.exports = {
				registerHelper: registerHelper,
				registerSimpleHelper: function(name, callback) {
					registerHelper(name, makeSimpleHelper(callback));
				},
				getHelper: function(name, options) {
					var helper =
						options &&
						options.get &&
						options.get("helpers." + name, { proxyMethods: false });
					if (!helper) {
						helper = helpers[name];
					}
					if (helper) {
						return { fn: helper };
					}
				},
				resolve: resolve,
				resolveHash: resolveHash,
				looksLikeOptions: looksLikeOptions
			};
		}
	],
	[
		25,
		function(stealRequire, stealExports, stealModule) {
			var compute = stealRequire(22);
			var observeReader = stealRequire(71);
			var utils = stealRequire(24);
			var mustacheHelpers = stealRequire(73);
			var each = stealRequire(12);
			var isEmptyObject = stealRequire(61);
			var dev = stealRequire(29);
			var assign = stealRequire(57);
			var last = stealRequire(72);
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var getObservableValue_fromKey = function(key, scope, readOptions) {
					var data = scope.computeData(key, readOptions);
					compute.temporarilyBind(data);
					return data;
				},
				computeHasDependencies = function(compute) {
					return compute[canSymbol.for("can.valueHasDependencies")]
						? canReflect.valueHasDependencies(compute)
						: compute.computeInstance.hasDependencies;
				},
				lookupValueOrHelper = function(key, scope, helperOptions, readOptions) {
					var scopeKeyData = getObservableValue_fromKey(
						key,
						scope,
						readOptions
					);
					var result = { value: scopeKeyData };
					if (scopeKeyData.initialValue === undefined) {
						if (key.charAt(0) === "@" && key !== "@index") {
							key = key.substr(1);
						}
						var helper = mustacheHelpers.getHelper(key, helperOptions);
						result.helper = helper && helper.fn;
					}
					return result;
				},
				getObservableValue_fromDynamicKey_fromObservable = function(
					key,
					root,
					helperOptions,
					readOptions
				) {
					var computeValue = compute(function(newVal) {
						var keyValue = canReflect.getValue(key);
						var rootValue = canReflect.getValue(root);
						keyValue = ("" + keyValue).replace(".", "\\.");
						if (arguments.length) {
							observeReader.write(
								rootValue,
								observeReader.reads(keyValue),
								newVal
							);
						} else {
							return observeReader.get(rootValue, keyValue);
						}
					});
					compute.temporarilyBind(computeValue);
					return computeValue;
				},
				convertToArgExpression = function(expr) {
					if (!(expr instanceof Arg) && !(expr instanceof Literal)) {
						return new Arg(expr);
					} else {
						return expr;
					}
				},
				toComputeOrValue = function(value) {
					if (canReflect.isObservableLike(value)) {
						if (canReflect.valueHasDependencies(value) === false) {
							return canReflect.getValue(value);
						}
						if (value.compute) {
							return value.compute;
						}
					}
					return value;
				},
				toCompute = function(value) {
					if (value) {
						if (value.isComputed) {
							return value;
						}
						if (value.compute) {
							return value.compute;
						}
					}
					return value;
				};
			var Bracket = function(key, root) {
				this.root = root;
				this.key = key;
			};
			Bracket.prototype.value = function(scope, helpers) {
				var root = this.root
					? this.root.value(scope, helpers)
					: scope.peek(".");
				return getObservableValue_fromDynamicKey_fromObservable(
					this.key.value(scope, helpers),
					root,
					scope,
					helpers,
					{}
				);
			};
			var Literal = function(value) {
				this._value = value;
			};
			Literal.prototype.value = function() {
				return this._value;
			};
			var Lookup = function(key, root) {
				this.key = key;
				this.rootExpr = root;
			};
			Lookup.prototype.value = function(scope, helperOptions) {
				if (this.rootExpr) {
					return getObservableValue_fromDynamicKey_fromObservable(
						this.key,
						this.rootExpr.value(scope, helperOptions),
						scope,
						{},
						{}
					);
				} else {
					var result = lookupValueOrHelper(this.key, scope, helperOptions);
					this.isHelper = result.helper && !result.helper.callAsMethod;
					return result.helper || result.value;
				}
			};
			var ScopeLookup = function(key, root) {
				Lookup.apply(this, arguments);
			};
			ScopeLookup.prototype.value = function(scope, helperOptions) {
				if (this.rootExpr) {
					return getObservableValue_fromDynamicKey_fromObservable(
						this.key,
						this.rootExpr.value(scope, helperOptions),
						scope,
						{},
						{}
					);
				}
				return getObservableValue_fromKey(this.key, scope, helperOptions);
			};
			var Arg = function(expression, modifiers) {
				this.expr = expression;
				this.modifiers = modifiers || {};
				this.isCompute = false;
			};
			Arg.prototype.value = function() {
				return this.expr.value.apply(this.expr, arguments);
			};
			var Hash = function() {};
			var Hashes = function(hashes) {
				this.hashExprs = hashes;
			};
			Hashes.prototype.value = function(scope, helperOptions) {
				var hash = {};
				for (var prop in this.hashExprs) {
					var val = convertToArgExpression(this.hashExprs[prop]),
						value = val.value.apply(val, arguments);
					hash[prop] = {
						call: !val.modifiers || !val.modifiers.compute,
						value: value
					};
				}
				return compute(function() {
					var finalHash = {};
					for (var prop in hash) {
						finalHash[prop] = hash[prop].call
							? canReflect.getValue(hash[prop].value)
							: toComputeOrValue(hash[prop].value);
					}
					return finalHash;
				});
			};
			var Call = function(methodExpression, argExpressions) {
				this.methodExpr = methodExpression;
				this.argExprs = argExpressions.map(convertToArgExpression);
			};
			Call.prototype.args = function(scope, helperOptions) {
				var args = [];
				for (var i = 0, len = this.argExprs.length; i < len; i++) {
					var arg = this.argExprs[i];
					var value = arg.value.apply(arg, arguments);
					args.push({
						call: !arg.modifiers || !arg.modifiers.compute,
						value: value
					});
				}
				return function() {
					var finalArgs = [];
					for (var i = 0, len = args.length; i < len; i++) {
						finalArgs[i] = args[i].call
							? canReflect.getValue(args[i].value)
							: toCompute(args[i].value);
					}
					return finalArgs;
				};
			};
			Call.prototype.value = function(scope, helperScope, helperOptions) {
				var method = this.methodExpr.value(scope, helperScope);
				var isHelper = (this.isHelper = this.methodExpr.isHelper);
				var getArgs = this.args(scope, helperScope);
				var computeValue = compute(function(newVal) {
					var func = canReflect.getValue(method);
					if (typeof func === "function") {
						var args = getArgs();
						if (isHelper && helperOptions) {
							args.push(helperOptions);
						}
						if (arguments.length) {
							args.unshift(new expression.SetIdentifier(newVal));
						}
						return func.apply(null, args);
					}
				});
				compute.temporarilyBind(computeValue);
				return computeValue;
			};
			Call.prototype.closingTag = function() {
				return this.methodExpr.key;
			};
			var HelperLookup = function() {
				Lookup.apply(this, arguments);
			};
			HelperLookup.prototype.value = function(scope, helperOptions) {
				var result = lookupValueOrHelper(this.key, scope, helperOptions, {
					isArgument: true,
					args: [scope.peek("."), scope]
				});
				return result.helper || result.value;
			};
			var HelperScopeLookup = function() {
				Lookup.apply(this, arguments);
			};
			HelperScopeLookup.prototype.value = function(scope, helperOptions) {
				return getObservableValue_fromKey(this.key, scope, {
					callMethodsOnObservables: true,
					isArgument: true,
					args: [scope.peek("."), scope]
				});
			};
			var Helper = function(methodExpression, argExpressions, hashExpressions) {
				this.methodExpr = methodExpression;
				this.argExprs = argExpressions;
				this.hashExprs = hashExpressions;
				this.mode = null;
			};
			Helper.prototype.args = function(scope, helperOptions) {
				var args = [];
				for (var i = 0, len = this.argExprs.length; i < len; i++) {
					var arg = this.argExprs[i];
					args.push(toComputeOrValue(arg.value.apply(arg, arguments)));
				}
				return args;
			};
			Helper.prototype.hash = function(scope, helperOptions) {
				var hash = {};
				for (var prop in this.hashExprs) {
					var val = this.hashExprs[prop];
					hash[prop] = toComputeOrValue(val.value.apply(val, arguments));
				}
				return hash;
			};
			Helper.prototype.helperAndValue = function(scope, helperOptions) {
				var looksLikeAHelper =
						this.argExprs.length || !isEmptyObject(this.hashExprs),
					helper,
					computeData,
					methodKey =
						this.methodExpr instanceof Literal
							? "" + this.methodExpr._value
							: this.methodExpr.key,
					initialValue,
					args;
				if (looksLikeAHelper) {
					helper = mustacheHelpers.getHelper(methodKey, helperOptions);
				}
				if (!helper) {
					computeData = getObservableValue_fromKey(methodKey, scope, {
						isArgument: true
					});
					if (typeof computeData.initialValue === "function") {
						args = this.args(scope, helperOptions).map(toComputeOrValue);
						var functionResult = compute(function() {
							return computeData.initialValue.apply(null, args);
						});
						compute.temporarilyBind(functionResult);
						return { value: functionResult };
					} else if (typeof computeData.initialValue !== "undefined") {
						return { value: computeData };
					}
					if (!looksLikeAHelper && initialValue === undefined) {
						helper = mustacheHelpers.getHelper(methodKey, helperOptions);
					}
				}
				return {
					value: computeData,
					args: args,
					helper: helper && helper.fn
				};
			};
			Helper.prototype.evaluator = function(
				helper,
				scope,
				helperOptions,
				readOptions,
				nodeList,
				truthyRenderer,
				falseyRenderer,
				stringOnly
			) {
				var helperOptionArg = { stringOnly: stringOnly },
					context = scope.peek("."),
					args = this.args(
						scope,
						helperOptions,
						nodeList,
						truthyRenderer,
						falseyRenderer,
						stringOnly
					),
					hash = this.hash(
						scope,
						helperOptions,
						nodeList,
						truthyRenderer,
						falseyRenderer,
						stringOnly
					);
				utils.convertToScopes(
					helperOptionArg,
					scope,
					helperOptions,
					nodeList,
					truthyRenderer,
					falseyRenderer,
					stringOnly
				);
				assign(helperOptionArg, {
					context: context,
					scope: scope,
					contexts: scope,
					hash: hash,
					nodeList: nodeList,
					exprData: this,
					helperOptions: helperOptions,
					helpers: helperOptions
				});
				args.push(helperOptionArg);
				return function() {
					return helper.apply(context, args);
				};
			};
			Helper.prototype.value = function(
				scope,
				helperOptions,
				nodeList,
				truthyRenderer,
				falseyRenderer,
				stringOnly
			) {
				var helperAndValue = this.helperAndValue(scope, helperOptions);
				var helper = helperAndValue.helper;
				if (!helper) {
					return helperAndValue.value;
				}
				var fn = this.evaluator(
					helper,
					scope,
					helperOptions,
					nodeList,
					truthyRenderer,
					falseyRenderer,
					stringOnly
				);
				var computeValue = compute(fn);
				compute.temporarilyBind(computeValue);
				if (!computeHasDependencies(computeValue)) {
					return computeValue();
				} else {
					return computeValue;
				}
			};
			Helper.prototype.closingTag = function() {
				return this.methodExpr.key;
			};
			var keyRegExp = /[\w\.\\\-_@\/\&%]+/,
				tokensRegExp = /('.*?'|".*?"|=|[\w\.\\\-_@\/*%\$]+|[\(\)]|,|\~|\[|\]\s*|\s*(?=\[))/g,
				bracketSpaceRegExp = /\]\s+/,
				literalRegExp = /^('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)$/;
			var isTokenKey = function(token) {
				return keyRegExp.test(token);
			};
			var testDot = /^[\.@]\w/;
			var isAddingToExpression = function(token) {
				return isTokenKey(token) && testDot.test(token);
			};
			var ensureChildren = function(type) {
				if (!type.children) {
					type.children = [];
				}
				return type;
			};
			var Stack = function() {
				this.root = {
					children: [],
					type: "Root"
				};
				this.current = this.root;
				this.stack = [this.root];
			};
			assign(Stack.prototype, {
				top: function() {
					return last(this.stack);
				},
				isRootTop: function() {
					return this.top() === this.root;
				},
				popTo: function(types) {
					this.popUntil(types);
					this.pop();
				},
				pop: function() {
					if (!this.isRootTop()) {
						this.stack.pop();
					}
				},
				first: function(types) {
					var curIndex = this.stack.length - 1;
					while (
						curIndex > 0 &&
						types.indexOf(this.stack[curIndex].type) === -1
					) {
						curIndex--;
					}
					return this.stack[curIndex];
				},
				firstParent: function(types) {
					var curIndex = this.stack.length - 2;
					while (
						curIndex > 0 &&
						types.indexOf(this.stack[curIndex].type) === -1
					) {
						curIndex--;
					}
					return this.stack[curIndex];
				},
				popUntil: function(types) {
					while (types.indexOf(this.top().type) === -1 && !this.isRootTop()) {
						this.stack.pop();
					}
					return this.top();
				},
				addTo: function(types, type) {
					var cur = this.popUntil(types);
					ensureChildren(cur).children.push(type);
				},
				addToAndPush: function(types, type) {
					this.addTo(types, type);
					this.stack.push(type);
				},
				push: function(type) {
					this.stack.push(type);
				},
				topLastChild: function() {
					return last(this.top().children);
				},
				replaceTopLastChild: function(type) {
					var children = ensureChildren(this.top()).children;
					children.pop();
					children.push(type);
					return type;
				},
				replaceTopLastChildAndPush: function(type) {
					this.replaceTopLastChild(type);
					this.stack.push(type);
				},
				replaceTopAndPush: function(type) {
					var children;
					if (this.top() === this.root) {
						children = ensureChildren(this.top()).children;
					} else {
						this.stack.pop();
						children = ensureChildren(this.top()).children;
					}
					children.pop();
					children.push(type);
					this.stack.push(type);
					return type;
				}
			});
			var convertKeyToLookup = function(key) {
				var lastPath = key.lastIndexOf("./");
				var lastDot = key.lastIndexOf(".");
				if (lastDot > lastPath) {
					return key.substr(0, lastDot) + "@" + key.substr(lastDot + 1);
				}
				var firstNonPathCharIndex = lastPath === -1 ? 0 : lastPath + 2;
				var firstNonPathChar = key.charAt(firstNonPathCharIndex);
				if (firstNonPathChar === "." || firstNonPathChar === "@") {
					return (
						key.substr(0, firstNonPathCharIndex) +
						"@" +
						key.substr(firstNonPathCharIndex + 1)
					);
				} else {
					return (
						key.substr(0, firstNonPathCharIndex) +
						"@" +
						key.substr(firstNonPathCharIndex)
					);
				}
			};
			var convertToAtLookup = function(ast) {
				if (ast.type === "Lookup") {
					ast.key = convertKeyToLookup(ast.key);
				}
				return ast;
			};
			var convertToHelperIfTopIsLookup = function(stack) {
				var top = stack.top();
				if (top && top.type === "Lookup") {
					var base = stack.stack[stack.stack.length - 2];
					if (base.type !== "Helper" && base) {
						stack.replaceTopAndPush({
							type: "Helper",
							method: top
						});
					}
				}
			};
			var expression = {
				toComputeOrValue: toComputeOrValue,
				convertKeyToLookup: convertKeyToLookup,
				Literal: Literal,
				Lookup: Lookup,
				ScopeLookup: ScopeLookup,
				Arg: Arg,
				Hash: Hash,
				Hashes: Hashes,
				Call: Call,
				Helper: Helper,
				HelperLookup: HelperLookup,
				HelperScopeLookup: HelperScopeLookup,
				Bracket: Bracket,
				SetIdentifier: function(value) {
					this.value = value;
				},
				tokenize: function(expression) {
					var tokens = [];
					(expression.trim() + " ").replace(tokensRegExp, function(whole, arg) {
						if (bracketSpaceRegExp.test(arg)) {
							tokens.push(arg[0]);
							tokens.push(arg.slice(1));
						} else {
							tokens.push(arg);
						}
					});
					return tokens;
				},
				lookupRules: {
					default: function(ast, methodType, isArg) {
						var name =
							(methodType === "Helper" && !ast.root ? "Helper" : "") +
							(isArg ? "Scope" : "") +
							"Lookup";
						return expression[name];
					},
					method: function(ast, methodType, isArg) {
						return ScopeLookup;
					}
				},
				methodRules: {
					default: function(ast) {
						return ast.type === "Call" ? Call : Helper;
					},
					call: function(ast) {
						return Call;
					}
				},
				parse: function(expressionString, options) {
					options = options || {};
					var ast = this.ast(expressionString);
					if (!options.lookupRule) {
						options.lookupRule = "default";
					}
					if (typeof options.lookupRule === "string") {
						options.lookupRule = expression.lookupRules[options.lookupRule];
					}
					if (!options.methodRule) {
						options.methodRule = "default";
					}
					if (typeof options.methodRule === "string") {
						options.methodRule = expression.methodRules[options.methodRule];
					}
					var expr = this.hydrateAst(
						ast,
						options,
						options.baseMethodType || "Helper"
					);
					return expr;
				},
				hydrateAst: function(ast, options, methodType, isArg) {
					var hashes;
					if (ast.type === "Lookup") {
						var lookup = new (options.lookupRule(ast, methodType, isArg))(
							ast.key,
							ast.root && this.hydrateAst(ast.root, options, methodType)
						);
						return lookup;
					} else if (ast.type === "Literal") {
						return new Literal(ast.value);
					} else if (ast.type === "Arg") {
						return new Arg(
							this.hydrateAst(ast.children[0], options, methodType, isArg),
							{ compute: true }
						);
					} else if (ast.type === "Hash") {
						throw new Error("");
					} else if (ast.type === "Hashes") {
						hashes = {};
						each(
							ast.children,
							function(hash) {
								hashes[hash.prop] = this.hydrateAst(
									hash.children[0],
									options,
									methodType,
									true
								);
							},
							this
						);
						return new Hashes(hashes);
					} else if (ast.type === "Call" || ast.type === "Helper") {
						hashes = {};
						var args = [],
							children = ast.children,
							ExpressionType = options.methodRule(ast);
						if (children) {
							for (var i = 0; i < children.length; i++) {
								var child = children[i];
								if (
									child.type === "Hashes" &&
									ast.type === "Helper" &&
									ExpressionType !== Call
								) {
									each(
										child.children,
										function(hash) {
											hashes[hash.prop] = this.hydrateAst(
												hash.children[0],
												options,
												ast.type,
												true
											);
										},
										this
									);
								} else {
									args.push(this.hydrateAst(child, options, ast.type, true));
								}
							}
						}
						return new ExpressionType(
							this.hydrateAst(ast.method, options, ast.type),
							args,
							hashes
						);
					} else if (ast.type === "Bracket") {
						return new Bracket(
							this.hydrateAst(ast.children[0], options),
							ast.root ? this.hydrateAst(ast.root, options) : undefined
						);
					}
				},
				ast: function(expression) {
					var tokens = this.tokenize(expression);
					return this.parseAst(tokens, { index: 0 });
				},
				parseAst: function(tokens, cursor) {
					var stack = new Stack(),
						top,
						firstParent,
						lastToken;
					while (cursor.index < tokens.length) {
						var token = tokens[cursor.index],
							nextToken = tokens[cursor.index + 1];
						cursor.index++;
						if (nextToken === "=") {
							top = stack.top();
							if (top && top.type === "Lookup") {
								firstParent = stack.firstParent(["Call", "Helper", "Hash"]);
								if (
									firstParent.type === "Call" ||
									firstParent.type === "Root"
								) {
									stack.popUntil(["Call"]);
									top = stack.top();
									stack.replaceTopAndPush({
										type: "Helper",
										method: top.type === "Root" ? last(top.children) : top
									});
								}
							}
							firstParent = stack.firstParent(["Call", "Helper", "Hashes"]);
							var hash = {
								type: "Hash",
								prop: token
							};
							if (firstParent.type === "Hashes") {
								stack.addToAndPush(["Hashes"], hash);
							} else {
								stack.addToAndPush(["Helper", "Call"], {
									type: "Hashes",
									children: [hash]
								});
								stack.push(hash);
							}
							cursor.index++;
						} else if (literalRegExp.test(token)) {
							convertToHelperIfTopIsLookup(stack);
							firstParent = stack.first(["Helper", "Call", "Hash", "Bracket"]);
							if (
								firstParent.type === "Hash" &&
								(firstParent.children && firstParent.children.length > 0)
							) {
								stack.addTo(["Helper", "Call", "Bracket"], {
									type: "Literal",
									value: utils.jsonParse(token)
								});
							} else if (
								firstParent.type === "Bracket" &&
								(firstParent.children && firstParent.children.length > 0)
							) {
								stack.addTo(["Helper", "Call", "Hash"], {
									type: "Literal",
									value: utils.jsonParse(token)
								});
							} else {
								stack.addTo(["Helper", "Call", "Hash", "Bracket"], {
									type: "Literal",
									value: utils.jsonParse(token)
								});
							}
						} else if (keyRegExp.test(token)) {
							lastToken = stack.topLastChild();
							firstParent = stack.first(["Helper", "Call", "Hash", "Bracket"]);
							if (
								lastToken &&
								(lastToken.type === "Call" || lastToken.type === "Bracket") &&
								isAddingToExpression(token)
							) {
								stack.replaceTopLastChildAndPush({
									type: "Lookup",
									root: lastToken,
									key: token.slice(1)
								});
							} else if (firstParent.type === "Bracket") {
								if (
									!(firstParent.children && firstParent.children.length > 0)
								) {
									stack.addToAndPush(["Bracket"], {
										type: "Lookup",
										key: token
									});
								} else {
									if (
										stack.first(["Helper", "Call", "Hash", "Arg"]).type ===
											"Helper" &&
										token[0] !== "."
									) {
										stack.addToAndPush(["Helper"], {
											type: "Lookup",
											key: token
										});
									} else {
										stack.replaceTopAndPush({
											type: "Lookup",
											key: token.slice(1),
											root: firstParent
										});
									}
								}
							} else {
								convertToHelperIfTopIsLookup(stack);
								stack.addToAndPush(
									["Helper", "Call", "Hash", "Arg", "Bracket"],
									{
										type: "Lookup",
										key: token
									}
								);
							}
						} else if (token === "~") {
							convertToHelperIfTopIsLookup(stack);
							stack.addToAndPush(["Helper", "Call", "Hash"], {
								type: "Arg",
								key: token
							});
						} else if (token === "(") {
							top = stack.top();
							if (top.type === "Lookup") {
								stack.replaceTopAndPush({
									type: "Call",
									method: convertToAtLookup(top)
								});
							} else {
								throw new Error(
									"Unable to understand expression " + tokens.join("")
								);
							}
						} else if (token === ")") {
							stack.popTo(["Call"]);
						} else if (token === ",") {
							stack.popUntil(["Call"]);
						} else if (token === "[") {
							top = stack.top();
							lastToken = stack.topLastChild();
							if (
								lastToken &&
								(lastToken.type === "Call" || lastToken.type === "Bracket")
							) {
								stack.replaceTopAndPush({
									type: "Bracket",
									root: lastToken
								});
							} else if (top.type === "Lookup" || top.type === "Bracket") {
								stack.replaceTopAndPush({
									type: "Bracket",
									root: top
								});
							} else if (top.type === "Call") {
								stack.addToAndPush(["Call"], { type: "Bracket" });
							} else if (top === " ") {
								stack.popUntil(["Lookup"]);
								convertToHelperIfTopIsLookup(stack);
								stack.addToAndPush(["Helper", "Call", "Hash"], {
									type: "Bracket"
								});
							} else {
								stack.replaceTopAndPush({ type: "Bracket" });
							}
						} else if (token === "]") {
							stack.pop();
						} else if (token === " ") {
							stack.push(token);
						}
					}
					return stack.root.children[0];
				}
			};
			stealModule.exports = expression;
		}
	],
	[
		17,
		function(stealRequire, stealExports, stealModule) {
			var live = stealRequire(20);
			var nodeLists = stealRequire(21);
			var compute = stealRequire(22);
			var Observation = stealRequire(23);
			var utils = stealRequire(24);
			var expression = stealRequire(25);
			var frag = stealRequire(27);
			var attr = stealRequire(26);
			var canSymbol = stealRequire(16);
			var canReflect = stealRequire(28);
			var mustacheLineBreakRegExp = /(?:(^|\r?\n)(\s*)(\{\{([\s\S]*)\}\}\}?)([^\S\n\r]*)($|\r?\n))|(\{\{([\s\S]*)\}\}\}?)/g,
				mustacheWhitespaceRegExp = /(\s*)(\{\{\{?)(-?)([\s\S]*?)(-?)(\}\}\}?)(\s*)/g,
				k = function() {};
			var core = {
				expression: expression,
				makeEvaluator: function(
					scope,
					helperOptions,
					nodeList,
					mode,
					exprData,
					truthyRenderer,
					falseyRenderer,
					stringOnly
				) {
					if (mode === "^") {
						var temp = truthyRenderer;
						truthyRenderer = falseyRenderer;
						falseyRenderer = temp;
					}
					var value, helperOptionArg;
					if (exprData instanceof expression.Call) {
						helperOptionArg = {
							context: scope.peek("."),
							scope: scope,
							nodeList: nodeList,
							exprData: exprData,
							helpersScope: helperOptions
						};
						utils.convertToScopes(
							helperOptionArg,
							scope,
							helperOptions,
							nodeList,
							truthyRenderer,
							falseyRenderer,
							stringOnly
						);
						value = exprData.value(scope, helperOptions, helperOptionArg);
						if (exprData.isHelper) {
							return value;
						}
					} else if (exprData instanceof expression.Bracket) {
						value = exprData.value(scope);
						if (exprData.isHelper) {
							return value;
						}
					} else if (exprData instanceof expression.Lookup) {
						value = exprData.value(scope);
						if (exprData.isHelper) {
							return value;
						}
					} else if (
						exprData instanceof expression.Helper &&
						exprData.methodExpr instanceof expression.Bracket
					) {
						value = exprData.methodExpr.value(scope);
						if (exprData.isHelper) {
							return value;
						}
					} else {
						var readOptions = {
							isArgument: true,
							args: [scope.peek("."), scope],
							asCompute: true
						};
						var helperAndValue = exprData.helperAndValue(
							scope,
							helperOptions,
							readOptions,
							nodeList,
							truthyRenderer,
							falseyRenderer,
							stringOnly
						);
						var helper = helperAndValue.helper;
						value = helperAndValue.value;
						if (helper) {
							return exprData.evaluator(
								helper,
								scope,
								helperOptions,
								readOptions,
								nodeList,
								truthyRenderer,
								falseyRenderer,
								stringOnly
							);
						}
					}
					if (!mode) {
						return value;
					} else if (mode === "#" || mode === "^") {
						helperOptionArg = {};
						utils.convertToScopes(
							helperOptionArg,
							scope,
							helperOptions,
							nodeList,
							truthyRenderer,
							falseyRenderer,
							stringOnly
						);
						return function() {
							var finalValue = canReflect.getValue(value);
							if (typeof finalValue === "function") {
								return finalValue;
							} else if (
								typeof finalValue !== "string" &&
								utils.isArrayLike(finalValue)
							) {
								var isObserveList =
									canReflect.isObservableLike(finalValue) &&
									canReflect.isListLike(finalValue);
								if (
									isObserveList ? finalValue.attr("length") : finalValue.length
								) {
									if (stringOnly) {
										return utils.getItemsStringContent(
											finalValue,
											isObserveList,
											helperOptionArg,
											helperOptions
										);
									} else {
										return frag(
											utils.getItemsFragContent(
												finalValue,
												helperOptionArg,
												scope
											)
										);
									}
								} else {
									return helperOptionArg.inverse(scope, helperOptions);
								}
							} else {
								return finalValue
									? helperOptionArg.fn(finalValue || scope, helperOptions)
									: helperOptionArg.inverse(scope, helperOptions);
							}
						};
					} else {
					}
				},
				makeLiveBindingPartialRenderer: function(expressionString, state) {
					expressionString = expressionString.trim();
					var exprData,
						partialName = expressionString.split(/\s+/).shift();
					if (partialName !== expressionString) {
						exprData = core.expression.parse(expressionString);
					}
					return function(scope, options, parentSectionNodeList) {
						var nodeList = [this];
						nodeList.expression = ">" + partialName;
						nodeLists.register(
							nodeList,
							null,
							parentSectionNodeList || true,
							state.directlyNested
						);
						var partialFrag = compute(function() {
							var localPartialName = partialName;
							if (exprData && exprData.argExprs.length === 1) {
								var newContext = canReflect.getValue(
									exprData.argExprs[0].value(scope, options)
								);
								if (typeof newContext === "undefined") {
								} else {
									scope = scope.add(newContext);
								}
							}
							var partial = options.peek("partials." + localPartialName);
							partial =
								partial ||
								(options.inlinePartials &&
									options.inlinePartials[localPartialName]);
							var renderer;
							if (partial) {
								renderer = function() {
									return partial.render
										? partial.render(scope, options, nodeList)
										: partial(scope, options);
								};
							} else {
								var scopePartialName = scope.read(localPartialName, {
									isArgument: true
								}).value;
								if (
									scopePartialName === null ||
									(!scopePartialName && localPartialName[0] === "*")
								) {
									return frag("");
								}
								if (scopePartialName) {
									localPartialName = scopePartialName;
								}
								renderer = function() {
									if (typeof localPartialName === "function") {
										return localPartialName(scope, options, nodeList);
									} else {
										return core.getTemplateById(localPartialName)(
											scope,
											options,
											nodeList
										);
									}
								};
							}
							var res = Observation.ignore(renderer)();
							return frag(res);
						});
						partialFrag.computeInstance.setPrimaryDepth(nodeList.nesting);
						live.html(this, partialFrag, this.parentNode, nodeList);
					};
				},
				makeStringBranchRenderer: function(mode, expressionString) {
					var exprData = core.expression.parse(expressionString),
						fullExpression = mode + expressionString;
					if (
						!(exprData instanceof expression.Helper) &&
						!(exprData instanceof expression.Call)
					) {
						exprData = new expression.Helper(exprData, [], {});
					}
					var branchRenderer = function branchRenderer(
						scope,
						options,
						truthyRenderer,
						falseyRenderer
					) {
						var evaluator = scope.__cache[fullExpression];
						if (mode || !evaluator) {
							evaluator = makeEvaluator(
								scope,
								options,
								null,
								mode,
								exprData,
								truthyRenderer,
								falseyRenderer,
								true
							);
							if (!mode) {
								scope.__cache[fullExpression] = evaluator;
							}
						}
						var gotObservableValue = evaluator[canSymbol.for("can.onValue")],
							res;
						if (gotObservableValue) {
							res = canReflect.getValue(evaluator);
						} else {
							res = evaluator();
						}
						return res == null ? "" : "" + res;
					};
					branchRenderer.exprData = exprData;
					return branchRenderer;
				},
				makeLiveBindingBranchRenderer: function(mode, expressionString, state) {
					var exprData = core.expression.parse(expressionString);
					if (
						!(exprData instanceof expression.Helper) &&
						!(exprData instanceof expression.Call) &&
						!(exprData instanceof expression.Bracket) &&
						!(exprData instanceof expression.Lookup)
					) {
						exprData = new expression.Helper(exprData, [], {});
					}
					var branchRenderer = function branchRenderer(
						scope,
						options,
						parentSectionNodeList,
						truthyRenderer,
						falseyRenderer
					) {
						var nodeList = [this];
						nodeList.expression = expressionString;
						nodeLists.register(
							nodeList,
							null,
							parentSectionNodeList || true,
							state.directlyNested
						);
						var evaluator = makeEvaluator(
							scope,
							options,
							nodeList,
							mode,
							exprData,
							truthyRenderer,
							falseyRenderer,
							state.tag
						);
						var gotObservableValue = evaluator[canSymbol.for("can.onValue")];
						var observable;
						if (gotObservableValue) {
							observable = evaluator;
						} else {
							observable = new Observation(evaluator, null, {
								isObservable: false
							});
						}
						if (observable instanceof Observation) {
							observable.compute._primaryDepth = nodeList.nesting;
						} else if (observable.computeInstance) {
							observable.computeInstance.setPrimaryDepth(nodeList.nesting);
						} else if (observable.observation) {
							observable.observation.compute._primaryDepth = nodeList.nesting;
						}
						canReflect.onValue(observable, k);
						var value = canReflect.getValue(observable);
						if (typeof value === "function") {
							Observation.ignore(value)(this);
						} else if (canReflect.valueHasDependencies(observable)) {
							if (state.attr) {
								live.attr(this, state.attr, observable);
							} else if (state.tag) {
								live.attrs(this, observable);
							} else if (state.text && typeof value !== "object") {
								live.text(this, observable, this.parentNode, nodeList);
							} else {
								live.html(this, observable, this.parentNode, nodeList);
							}
						} else {
							if (state.attr) {
								attr.set(this, state.attr, value);
							} else if (state.tag) {
								live.attrs(this, value);
							} else if (state.text && typeof value === "string") {
								this.nodeValue = value;
							} else if (value != null) {
								nodeLists.replace([this], frag(value, this.ownerDocument));
							}
						}
						canReflect.offValue(observable, k);
					};
					branchRenderer.exprData = exprData;
					return branchRenderer;
				},
				splitModeFromExpression: function(expression, state) {
					expression = expression.trim();
					var mode = expression.charAt(0);
					if ("#/{&^>!<".indexOf(mode) >= 0) {
						expression = expression.substr(1).trim();
					} else {
						mode = null;
					}
					if (mode === "{" && state.node) {
						mode = null;
					}
					return {
						mode: mode,
						expression: expression
					};
				},
				cleanLineEndings: function(template) {
					return template.replace(mustacheLineBreakRegExp, function(
						whole,
						returnBefore,
						spaceBefore,
						special,
						expression,
						spaceAfter,
						returnAfter,
						spaceLessSpecial,
						spaceLessExpression,
						matchIndex
					) {
						spaceAfter = spaceAfter || "";
						returnBefore = returnBefore || "";
						spaceBefore = spaceBefore || "";
						var modeAndExpression = splitModeFromExpression(
							expression || spaceLessExpression,
							{}
						);
						if (spaceLessSpecial || ">{".indexOf(modeAndExpression.mode) >= 0) {
							return whole;
						} else if ("^#!/".indexOf(modeAndExpression.mode) >= 0) {
							spaceBefore = returnBefore + spaceBefore && " ";
							return (
								spaceBefore +
								special +
								(matchIndex !== 0 && returnAfter.length
									? returnBefore + "\n"
									: "")
							);
						} else {
							return (
								spaceBefore +
								special +
								spaceAfter +
								(spaceBefore.length || matchIndex !== 0
									? returnBefore + "\n"
									: "")
							);
						}
					});
				},
				cleanWhitespaceControl: function(template) {
					return template.replace(mustacheWhitespaceRegExp, function(
						whole,
						spaceBefore,
						bracketBefore,
						controlBefore,
						expression,
						controlAfter,
						bracketAfter,
						spaceAfter,
						matchIndex
					) {
						if (controlBefore === "-") {
							spaceBefore = "";
						}
						if (controlAfter === "-") {
							spaceAfter = "";
						}
						return (
							spaceBefore +
							bracketBefore +
							expression +
							bracketAfter +
							spaceAfter
						);
					});
				},
				Options: utils.Options,
				getTemplateById: function() {}
			};
			var makeEvaluator = core.makeEvaluator,
				splitModeFromExpression = core.splitModeFromExpression;
			stealModule.exports = core;
		}
	],
	[
		133,
		function(stealRequire, stealExports, stealModule) {
			var target = stealRequire(129);
			var Scope = stealRequire(70);
			var Observation = stealRequire(23);
			var utils = stealRequire(24);
			var mustacheCore = stealRequire(17);
			var getDocument = stealRequire(123);
			var assign = stealRequire(57);
			var last = stealRequire(72);
			var decodeHTML =
				typeof document !== "undefined" &&
				(function() {
					var el = getDocument().createElement("div");
					return function(html) {
						if (html.indexOf("&") === -1) {
							return html.replace(/\r\n/g, "\n");
						}
						el.innerHTML = html;
						return el.childNodes.length === 0
							? ""
							: el.childNodes.item(0).nodeValue;
					};
				})();
			var HTMLSectionBuilder = function() {
				this.stack = [new HTMLSection()];
			};
			HTMLSectionBuilder.scopify = function(renderer) {
				return Observation.ignore(function(scope, options, nodeList) {
					if (!(scope instanceof Scope)) {
						scope = Scope.refsScope().add(scope || {});
					}
					if (!(options instanceof mustacheCore.Options)) {
						options = new mustacheCore.Options(options || {});
					}
					return renderer(scope, options, nodeList);
				});
			};
			assign(HTMLSectionBuilder.prototype, utils.mixins);
			assign(HTMLSectionBuilder.prototype, {
				startSubSection: function(process) {
					var newSection = new HTMLSection(process);
					this.stack.push(newSection);
					return newSection;
				},
				endSubSectionAndReturnRenderer: function() {
					if (this.last().isEmpty()) {
						this.stack.pop();
						return null;
					} else {
						var htmlSection = this.endSection();
						return htmlSection.compiled.hydrate.bind(htmlSection.compiled);
					}
				},
				startSection: function(process) {
					var newSection = new HTMLSection(process);
					this.last().add(newSection.targetCallback);
					this.stack.push(newSection);
				},
				endSection: function() {
					this.last().compile();
					return this.stack.pop();
				},
				inverse: function() {
					this.last().inverse();
				},
				compile: function() {
					var compiled = this.stack.pop().compile();
					return Observation.ignore(function(scope, options, nodeList) {
						if (!(scope instanceof Scope)) {
							scope = Scope.refsScope().add(scope || {});
						}
						if (!(options instanceof mustacheCore.Options)) {
							options = new mustacheCore.Options(options || {});
						}
						return compiled.hydrate(scope, options, nodeList);
					});
				},
				push: function(chars) {
					this.last().push(chars);
				},
				pop: function() {
					return this.last().pop();
				},
				removeCurrentNode: function() {
					this.last().removeCurrentNode();
				}
			});
			var HTMLSection = function(process) {
				this.data = "targetData";
				this.targetData = [];
				this.targetStack = [];
				var self = this;
				this.targetCallback = function(scope, options, sectionNode) {
					process.call(
						this,
						scope,
						options,
						sectionNode,
						self.compiled.hydrate.bind(self.compiled),
						self.inverseCompiled &&
							self.inverseCompiled.hydrate.bind(self.inverseCompiled)
					);
				};
			};
			assign(HTMLSection.prototype, {
				inverse: function() {
					this.inverseData = [];
					this.data = "inverseData";
				},
				push: function(data) {
					this.add(data);
					this.targetStack.push(data);
				},
				pop: function() {
					return this.targetStack.pop();
				},
				add: function(data) {
					if (typeof data === "string") {
						data = decodeHTML(data);
					}
					if (this.targetStack.length) {
						last(this.targetStack).children.push(data);
					} else {
						this[this.data].push(data);
					}
				},
				compile: function() {
					this.compiled = target(this.targetData, getDocument());
					if (this.inverseData) {
						this.inverseCompiled = target(this.inverseData, getDocument());
						delete this.inverseData;
					}
					this.targetStack = this.targetData = null;
					return this.compiled;
				},
				removeCurrentNode: function() {
					var children = this.children();
					return children.pop();
				},
				children: function() {
					if (this.targetStack.length) {
						return last(this.targetStack).children;
					} else {
						return this[this.data];
					}
				},
				isEmpty: function() {
					return !this.targetData.length;
				}
			});
			HTMLSectionBuilder.HTMLSection = HTMLSection;
			stealModule.exports = HTMLSectionBuilder;
		}
	],
	[
		132,
		function(stealRequire, stealExports, stealModule) {
			var compute = stealRequire(22);
			var live = stealRequire(20);
			var utils = stealRequire(24);
			var attr = stealRequire(26);
			var assign = stealRequire(57);
			var canReflect = stealRequire(28);
			var Observation = stealRequire(23);
			var noop = function() {};
			var TextSectionBuilder = function() {
				this.stack = [new TextSection()];
			};
			assign(TextSectionBuilder.prototype, utils.mixins);
			assign(TextSectionBuilder.prototype, {
				startSection: function(process) {
					var subSection = new TextSection();
					this.last().add({
						process: process,
						truthy: subSection
					});
					this.stack.push(subSection);
				},
				endSection: function() {
					this.stack.pop();
				},
				inverse: function() {
					this.stack.pop();
					var falseySection = new TextSection();
					this.last().last().falsey = falseySection;
					this.stack.push(falseySection);
				},
				compile: function(state) {
					var renderer = this.stack[0].compile();
					return function(scope, options) {
						var observation = new Observation(
							function() {
								return renderer(scope, options);
							},
							null,
							{ isObservable: false }
						);
						canReflect.onValue(observation, noop);
						var value = canReflect.getValue(observation);
						if (canReflect.valueHasDependencies(observation)) {
							if (state.textContentOnly) {
								live.text(this, observation);
							} else if (state.attr) {
								live.attr(this, state.attr, observation);
							} else {
								live.attrs(this, observation, scope, options);
							}
							canReflect.offValue(observation, noop);
						} else {
							if (state.textContentOnly) {
								this.nodeValue = value;
							} else if (state.attr) {
								attr.set(this, state.attr, value);
							} else {
								live.attrs(this, value);
							}
						}
					};
				}
			});
			var passTruthyFalsey = function(process, truthy, falsey) {
				return function(scope, options) {
					return process.call(this, scope, options, truthy, falsey);
				};
			};
			var TextSection = function() {
				this.values = [];
			};
			assign(TextSection.prototype, {
				add: function(data) {
					this.values.push(data);
				},
				last: function() {
					return this.values[this.values.length - 1];
				},
				compile: function() {
					var values = this.values,
						len = values.length;
					for (var i = 0; i < len; i++) {
						var value = this.values[i];
						if (typeof value === "object") {
							values[i] = passTruthyFalsey(
								value.process,
								value.truthy && value.truthy.compile(),
								value.falsey && value.falsey.compile()
							);
						}
					}
					return function(scope, options) {
						var txt = "",
							value;
						for (var i = 0; i < len; i++) {
							value = values[i];
							txt +=
								typeof value === "string"
									? value
									: value.call(this, scope, options);
						}
						return txt;
					};
				}
			});
			stealModule.exports = TextSectionBuilder;
		}
	],
	[
		128,
		function(stealRequire, stealExports, stealModule) {
			var helpers = stealRequire(73);
			var expression = stealRequire(25);
			var makeArray = stealRequire(38);
			helpers.registerConverter = function(name, getterSetter) {
				getterSetter = getterSetter || {};
				helpers.registerHelper(name, function(newVal, source) {
					var args = makeArray(arguments);
					if (newVal instanceof expression.SetIdentifier) {
						return typeof getterSetter.set === "function"
							? getterSetter.set.apply(
									this,
									[newVal.value].concat(args.slice(1))
								)
							: source(newVal.value);
					} else {
						return typeof getterSetter.get === "function"
							? getterSetter.get.apply(this, args)
							: args[0];
					}
				});
			};
			stealModule.exports = helpers;
		}
	],
	[
		13,
		function(stealRequire, stealExports, stealModule) {
			var mustacheCore = stealRequire(17);
			var parser = stealRequire(18);
			stealModule.exports = function(source) {
				var template = source;
				template = mustacheCore.cleanWhitespaceControl(template);
				template = mustacheCore.cleanLineEndings(template);
				var imports = [],
					dynamicImports = [],
					ases = {},
					inImport = false,
					inFrom = false,
					inAs = false,
					isUnary = false,
					importIsDynamic = false,
					currentAs = "",
					currentFrom = "";
				function processImport() {
					if (currentAs) {
						ases[currentAs] = currentFrom;
						currentAs = "";
					}
					if (importIsDynamic) {
						dynamicImports.push(currentFrom);
					} else {
						imports.push(currentFrom);
					}
				}
				var intermediate = parser(
					template,
					{
						start: function(tagName, unary) {
							if (tagName === "can-import") {
								isUnary = unary;
								importIsDynamic = false;
								inImport = true;
							} else if (tagName === "can-dynamic-import") {
								isUnary = unary;
								importIsDynamic = true;
								inImport = true;
							} else if (inImport) {
								importIsDynamic = true;
								inImport = false;
							}
						},
						attrStart: function(attrName) {
							if (attrName === "from") {
								inFrom = true;
							} else if (attrName === "as" || attrName === "export-as") {
								inAs = true;
							}
						},
						attrEnd: function(attrName) {
							if (attrName === "from") {
								inFrom = false;
							} else if (attrName === "as" || attrName === "export-as") {
								inAs = false;
							}
						},
						attrValue: function(value) {
							if (inFrom && inImport) {
								currentFrom = value;
							} else if (inAs && inImport) {
								currentAs = value;
							}
						},
						end: function(tagName) {
							if (
								(tagName === "can-import" ||
									tagName === "can-dymamic-import") &&
								isUnary
							) {
								processImport();
							}
						},
						close: function(tagName) {
							if (
								tagName === "can-import" ||
								tagName === "can-dymamic-import"
							) {
								processImport();
							}
						},
						chars: function(text) {
							if (text.trim().length > 0) {
								importIsDynamic = true;
							}
						},
						special: function(text) {
							importIsDynamic = true;
						}
					},
					true
				);
				return {
					intermediate: intermediate,
					imports: imports,
					dynamicImports: dynamicImports,
					ases: ases,
					stealExports: ases
				};
			};
		}
	],
	[
		120,
		function(stealRequire, stealExports, stealModule) {
			var parser = stealRequire(18);
			var viewCallbacks = stealRequire(82);
			var HTMLSectionBuilder = stealRequire(133);
			var TextSectionBuilder = stealRequire(132);
			var mustacheCore = stealRequire(17);
			var mustacheHelpers = stealRequire(73);
			stealRequire(128);
			var getIntermediateAndImports = stealRequire(13);
			var makeRendererConvertScopes = stealRequire(24)
				.makeRendererConvertScopes;
			var attributeEncoder = stealRequire(30);
			var dev = stealRequire(29);
			var namespace = stealRequire(19);
			var DOCUMENT = stealRequire(123);
			var assign = stealRequire(57);
			var last = stealRequire(72);
			var importer = stealRequire(124);
			stealRequire(129);
			stealRequire(21);
			viewCallbacks.tag("content", function(el, tagData) {
				return tagData.scope;
			});
			var wrappedAttrPattern = /[{(].*[)}]/;
			var colonWrappedAttrPattern = /^on:|(:to|:from|:bind)$|.*:to:on:.*/;
			var svgNamespace = "http://www.w3.org/2000/svg";
			var namespaces = {
					svg: svgNamespace,
					g: svgNamespace
				},
				textContentOnlyTag = {
					style: true,
					script: true
				};
			function stache(template) {
				var inlinePartials = {};
				if (typeof template === "string") {
					template = mustacheCore.cleanWhitespaceControl(template);
					template = mustacheCore.cleanLineEndings(template);
				}
				var section = new HTMLSectionBuilder(),
					state = {
						node: null,
						attr: null,
						sectionElementStack: [],
						text: false,
						namespaceStack: [],
						textContentOnly: null
					},
					makeRendererAndUpdateSection = function(section, mode, stache) {
						if (mode === ">") {
							section.add(
								mustacheCore.makeLiveBindingPartialRenderer(stache, copyState())
							);
						} else if (mode === "/") {
							var createdSection = section.last();
							if (createdSection.startedWith === "<") {
								inlinePartials[
									stache
								] = section.endSubSectionAndReturnRenderer();
								section.removeCurrentNode();
							} else {
								section.endSection();
							}
							if (section instanceof HTMLSectionBuilder) {
								state.sectionElementStack.pop();
							}
						} else if (mode === "else") {
							section.inverse();
						} else {
							var makeRenderer =
								section instanceof HTMLSectionBuilder
									? mustacheCore.makeLiveBindingBranchRenderer
									: mustacheCore.makeStringBranchRenderer;
							if (mode === "{" || mode === "&") {
								section.add(makeRenderer(null, stache, copyState()));
							} else if (mode === "#" || mode === "^" || mode === "<") {
								var renderer = makeRenderer(mode, stache, copyState());
								section.startSection(renderer);
								section.last().startedWith = mode;
								if (section instanceof HTMLSectionBuilder) {
									state.sectionElementStack.push({ type: "section" });
								}
							} else {
								section.add(
									makeRenderer(null, stache, copyState({ text: true }))
								);
							}
						}
					},
					copyState = function(overwrites) {
						var lastElement =
							state.sectionElementStack[state.sectionElementStack.length - 1];
						var cur = {
							tag: state.node && state.node.tag,
							attr: state.attr && state.attr.name,
							directlyNested: state.sectionElementStack.length
								? lastElement.type === "section" ||
									lastElement.type === "custom"
								: true,
							textContentOnly: !!state.textContentOnly
						};
						return overwrites ? assign(cur, overwrites) : cur;
					},
					addAttributesCallback = function(node, callback) {
						if (!node.attributes) {
							node.attributes = [];
						}
						node.attributes.unshift(callback);
					};
				parser(template, {
					start: function(tagName, unary) {
						var matchedNamespace = namespaces[tagName];
						if (matchedNamespace && !unary) {
							state.namespaceStack.push(matchedNamespace);
						}
						state.node = {
							tag: tagName,
							children: [],
							namespace: matchedNamespace || last(state.namespaceStack)
						};
					},
					end: function(tagName, unary) {
						var isCustomTag = viewCallbacks.tag(tagName);
						if (unary) {
							section.add(state.node);
							if (isCustomTag) {
								addAttributesCallback(state.node, function(
									scope,
									options,
									parentNodeList
								) {
									viewCallbacks.tagHandler(this, tagName, {
										scope: scope,
										options: options,
										subtemplate: null,
										templateType: "stache",
										parentNodeList: parentNodeList
									});
								});
							}
						} else {
							section.push(state.node);
							state.sectionElementStack.push({
								type: isCustomTag ? "custom" : null,
								tag: isCustomTag ? null : tagName,
								templates: {}
							});
							if (isCustomTag) {
								section.startSubSection();
							} else if (textContentOnlyTag[tagName]) {
								state.textContentOnly = new TextSectionBuilder();
							}
						}
						state.node = null;
					},
					close: function(tagName) {
						var matchedNamespace = namespaces[tagName];
						if (matchedNamespace) {
							state.namespaceStack.pop();
						}
						var isCustomTag = viewCallbacks.tag(tagName),
							renderer;
						if (isCustomTag) {
							renderer = section.endSubSectionAndReturnRenderer();
						}
						if (textContentOnlyTag[tagName]) {
							section.last().add(state.textContentOnly.compile(copyState()));
							state.textContentOnly = null;
						}
						var oldNode = section.pop();
						if (isCustomTag) {
							if (tagName === "can-template") {
								var parent =
									state.sectionElementStack[
										state.sectionElementStack.length - 2
									];
								parent.templates[
									oldNode.attrs.name
								] = makeRendererConvertScopes(renderer);
								section.removeCurrentNode();
							} else {
								var current =
									state.sectionElementStack[
										state.sectionElementStack.length - 1
									];
								addAttributesCallback(oldNode, function(
									scope,
									options,
									parentNodeList
								) {
									viewCallbacks.tagHandler(this, tagName, {
										scope: scope,
										options: options,
										subtemplate: renderer
											? makeRendererConvertScopes(renderer)
											: renderer,
										templateType: "stache",
										parentNodeList: parentNodeList,
										templates: current.templates
									});
								});
							}
						}
						state.sectionElementStack.pop();
					},
					attrStart: function(attrName) {
						if (state.node.section) {
							state.node.section.add(attrName + '="');
						} else {
							state.attr = {
								name: attrName,
								value: ""
							};
						}
					},
					attrEnd: function(attrName) {
						if (state.node.section) {
							state.node.section.add('" ');
						} else {
							if (!state.node.attrs) {
								state.node.attrs = {};
							}
							state.node.attrs[state.attr.name] = state.attr.section
								? state.attr.section.compile(copyState())
								: state.attr.value;
							var attrCallback = viewCallbacks.attr(attrName);
							if (attrCallback) {
								if (!state.node.attributes) {
									state.node.attributes = [];
								}
								state.node.attributes.push(function(scope, options, nodeList) {
									attrCallback(this, {
										attributeName: attrName,
										scope: scope,
										options: options,
										nodeList: nodeList
									});
								});
							}
							state.attr = null;
						}
					},
					attrValue: function(value) {
						var section = state.node.section || state.attr.section;
						if (section) {
							section.add(value);
						} else {
							state.attr.value += value;
						}
					},
					chars: function(text) {
						(state.textContentOnly || section).add(text);
					},
					special: function(text) {
						var firstAndText = mustacheCore.splitModeFromExpression(
								text,
								state
							),
							mode = firstAndText.mode,
							expression = firstAndText.expression;
						if (expression === "else") {
							var inverseSection;
							if (state.attr && state.attr.section) {
								inverseSection = state.attr.section;
							} else if (state.node && state.node.section) {
								inverseSection = state.node.section;
							} else {
								inverseSection = state.textContentOnly || section;
							}
							inverseSection.inverse();
							return;
						}
						if (mode === "!") {
							return;
						}
						if (state.node && state.node.section) {
							makeRendererAndUpdateSection(
								state.node.section,
								mode,
								expression
							);
							if (state.node.section.subSectionDepth() === 0) {
								state.node.attributes.push(
									state.node.section.compile(copyState())
								);
								delete state.node.section;
							}
						} else if (state.attr) {
							if (!state.attr.section) {
								state.attr.section = new TextSectionBuilder();
								if (state.attr.value) {
									state.attr.section.add(state.attr.value);
								}
							}
							makeRendererAndUpdateSection(
								state.attr.section,
								mode,
								expression
							);
						} else if (state.node) {
							if (!state.node.attributes) {
								state.node.attributes = [];
							}
							if (!mode) {
								state.node.attributes.push(
									mustacheCore.makeLiveBindingBranchRenderer(
										null,
										expression,
										copyState()
									)
								);
							} else if (mode === "#" || mode === "^") {
								if (!state.node.section) {
									state.node.section = new TextSectionBuilder();
								}
								makeRendererAndUpdateSection(
									state.node.section,
									mode,
									expression
								);
							} else {
								throw new Error(
									mode + " is currently not supported within a tag."
								);
							}
						} else {
							makeRendererAndUpdateSection(
								state.textContentOnly || section,
								mode,
								expression
							);
						}
					},
					comment: function(text) {
						section.add({ comment: text });
					},
					done: function() {}
				});
				var renderer = section.compile();
				var scopifiedRenderer = HTMLSectionBuilder.scopify(function(
					scope,
					optionsScope,
					nodeList
				) {
					if (Object.keys(inlinePartials).length) {
						optionsScope.inlinePartials = optionsScope.inlinePartials || {};
						assign(optionsScope.inlinePartials, inlinePartials);
					}
					scope.set("*self", scopifiedRenderer);
					return renderer.apply(this, arguments);
				});
				return scopifiedRenderer;
			}
			assign(stache, mustacheHelpers);
			stache.safeString = function(text) {
				return {
					toString: function() {
						return text;
					}
				};
			};
			stache.async = function(source) {
				var iAi = getIntermediateAndImports(source);
				var importPromises = iAi.imports.map(function(moduleName) {
					return importer(moduleName);
				});
				return Promise.all(importPromises).then(function() {
					return stache(iAi.intermediate);
				});
			};
			var templates = {};
			stache.from = mustacheCore.getTemplateById = function(id) {
				if (!templates[id]) {
					var el = DOCUMENT().getElementById(id);
					templates[id] = stache(el.innerHTML);
				}
				return templates[id];
			};
			stache.registerPartial = function(id, partial) {
				templates[id] = typeof partial === "string" ? stache(partial) : partial;
			};
			stealModule.exports = namespace.stache = stache;
		}
	],
	[
		5,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var isNode =
					typeof process !== "undefined" &&
					{}.toString.call(process) === "[object process]";
				var nodeRequire =
					typeof System !== "undefined" && System._nodeRequire
						? System._nodeRequire
						: typeof stealRequire === "function" ? stealRequire : function() {};
				var isNW =
					isNode &&
					(function() {
						try {
							return nodeRequire("nw.gui") !== "undefined";
						} catch (e) {
							return false;
						}
					})();
				var g =
					typeof WorkerGlobalScope !== "undefined" &&
					self instanceof WorkerGlobalScope
						? self
						: isNW ? window : isNode ? global : window;
				stealExports.isNode = isNode;
				stealExports.isNW = isNW;
				stealExports.global = g;
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		6,
		function(stealRequire, stealExports, stealModule) {
			stealExports.forEach =
				Array.prototype.forEach ||
				function(fn) {
					for (var i = 0, len = this.length; i < len; i++) {
						fn.call(this, this[i], i);
					}
				};
			var supportsSymbol = typeof Symbol === "function";
			stealExports.symbol = function(str) {
				return supportsSymbol ? Symbol(str) : str;
			};
			stealExports.defineProperty = function(obj, prop, defn) {
				if (Object.defineProperty) {
					Object.defineProperty(obj, prop, defn);
				} else {
					obj[prop] = defn.value;
				}
			};
		}
	],
	[
		121,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var env = stealRequire(5);
				var util = stealRequire(6);
				stealModule.exports = env.isNode ? nodeZone : browserZone;
				var WAIT_URL = util.symbol("__canWaitURL");
				function browserZone(data) {
					var cache, oldXHR, oldOpen, oldSend;
					var noop = Function.prototype;
					var matches = function(request, url, body) {
						return request.url === url && (!body || request.data === body);
					};
					var open = function(method, url) {
						util.defineProperty(this, WAIT_URL, {
							value: url,
							enumerable: false
						});
						return oldOpen.apply(this, arguments);
					};
					var send = function(body) {
						var data, response;
						var url = this[WAIT_URL];
						for (var i = 0, len = cache.length; i < len; i++) {
							data = cache[i];
							if (matches(data.request, url, body)) {
								response = setResponse(this, data.response);
								cache.splice(i, 1);
								break;
							}
						}
						if (response) {
							var onload = this.onload || noop;
							var onreadystatechange = this.onreadystatechange || noop;
							var xhr = this;
							setTimeout(function() {
								var ev = { target: xhr };
								onreadystatechange.call(xhr, ev);
								onload.call(xhr, ev);
							}, 0);
							return;
						}
						return oldSend.apply(this, arguments);
					};
					return {
						beforeTask: function() {
							cache = env.global.XHR_CACHE;
							if (cache) {
								oldXHR = XMLHttpRequest;
								oldOpen = XMLHttpRequest.prototype.open;
								oldSend = XMLHttpRequest.prototype.send;
								XMLHttpRequest.prototype.open = open;
								XMLHttpRequest.prototype.send = send;
							}
						},
						afterTask: function() {
							if (cache && oldXHR === XMLHttpRequest) {
								XMLHttpRequest.prototype.open = oldOpen;
								XMLHttpRequest.prototype.send = oldSend;
							}
						}
					};
				}
				function nodeZone(data) {
					var oldXHR, oldOpen, oldSend;
					var open = function(method, url) {
						util.defineProperty(this, WAIT_URL, {
							value: url,
							enumerable: false
						});
						return oldOpen.apply(this, arguments);
					};
					var send = function(body) {
						var onload = this.onload,
							thisXhr = this;
						this.onload = function(ev) {
							var xhr = ev ? ev.target : thisXhr;
							if (!data.xhr) {
								data.xhr = new XHR();
							}
							data.xhr.data.push({
								request: {
									url: xhr[WAIT_URL],
									data: body
								},
								response: {
									status: xhr.status,
									responseText: xhr.responseText,
									headers: xhr.getAllResponseHeaders()
								}
							});
							if (onload) {
								return onload.apply(this, arguments);
							}
						};
						return oldSend.apply(this, arguments);
					};
					var supportsXHR = function() {
						return typeof XMLHttpRequest !== "undefined";
					};
					return {
						beforeTask: function() {
							oldXHR = XMLHttpRequest;
							oldSend = XMLHttpRequest.prototype.send;
							oldOpen = XMLHttpRequest.prototype.open;
							XMLHttpRequest.prototype.send = send;
							XMLHttpRequest.prototype.open = open;
						},
						afterTask: function() {
							if (oldXHR === XMLHttpRequest) {
								XMLHttpRequest.prototype.send = oldSend;
								XMLHttpRequest.prototype.open = oldOpen;
							}
						}
					};
				}
				function setResponse(xhr, response) {
					util.defineProperty(xhr, "responseText", {
						value: response.responseText
					});
					util.defineProperty(xhr, "status", { value: response.status });
					util.defineProperty(xhr, "readyState", { value: 4 });
					xhr.getAllResponseHeaders = function() {
						return response.headers;
					};
					return xhr;
				}
				var escapeTable = {
					"<": "\\u003c",
					">": "\\u003e",
					"&": "\\u0026",
					"=": "\\u003d"
				};
				var escapeRegExp = new RegExp(
					"(" + Object.keys(escapeTable).join("|") + ")",
					"g"
				);
				function XHR() {
					this.data = [];
				}
				XHR.prototype.toString = function() {
					var json = JSON.stringify(this.data);
					json = json.replace(escapeRegExp, function(m) {
						return escapeTable[m];
					});
					return "XHR_CACHE = " + json + ";";
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		116,
		function(stealRequire, stealExports, stealModule) {
			stealModule.exports = stealRequire(121);
		}
	],
	[
		8,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var util = stealRequire(6);
				var env = stealRequire(5);
				var g = env.global;
				var Zone = stealRequire(4);
				if (env.isNode) {
					var globalTimeoutId = 1;
				}
				stealModule.exports = function() {
					var globals,
						overrides = [];
					return {
						name: "globals",
						plugins: [promiseZone],
						created: function() {
							var zone = this;
							globals = this.globals || {};
							function findObj(name, obj) {
								var parts = name.split(".");
								var property = parts.pop();
								util.forEach.call(parts, function(prop) {
									var n = obj[prop];
									if (!n) {
										n = obj[prop] = {};
									}
									obj = n;
								});
								return {
									obj: obj,
									prop: property
								};
							}
							function addGlobal(name, value) {
								var info = findObj(name, g);
								overrides.push(
									new Override(info.obj, info.prop, function() {
										return value;
									})
								);
							}
							for (var name in globals) {
								addGlobal(name, globals[name]);
							}
						},
						beforeTask: function(task) {
							if (task.nestedTask) return;
							util.forEach.call(overrides, function(o) {
								o.trap();
							});
						},
						afterTask: function(task) {
							if (task.nestedTask) return;
							util.forEach.call(overrides, function(o) {
								o.release();
							});
						}
					};
				};
				function Override(obj, name, fn) {
					this.oldValue = obj[name];
					this.obj = obj;
					this.name = name;
					this.value = fn(this.oldValue, this);
				}
				Override.prototype.trap = function() {
					this.obj[this.name] = this.value;
				};
				Override.prototype.release = function() {
					this.obj[this.name] = this.oldValue;
				};
				function promiseZone() {
					var promiseThen = function() {
							if (!Zone.current || oldPromiseThen.zoneWrapped) {
								return oldPromiseThen.apply(this, arguments);
							}
							return Zone.tasks.then(oldPromiseThen).apply(this, arguments);
						},
						oldPromiseThen;
					return {
						beforeTask: function(task) {
							if (task.nestedTask) return;
							oldPromiseThen = Promise.prototype.then;
							Promise.prototype.then = promiseThen;
						},
						afterTask: function(task) {
							if (task.nestedTask) return;
							Promise.prototype.then = oldPromiseThen;
						}
					};
				}
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		7,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				"format cjs";
				(function() {
					var isNode =
						typeof process !== "undefined" &&
						{}.toString.call(process) === "[object process]";
					var g =
						typeof WorkerGlobalScope !== "undefined" &&
						self instanceof WorkerGlobalScope
							? self
							: isNode ? global : window;
					if (typeof stealModule !== "undefined" && !!stealModule.exports) {
						stealModule.exports = wrapAll;
					}
					var wrapped = g.__canZoneWrapped;
					if (!wrapped) {
						wrapped = g.__canZoneWrapped = {};
					}
					var forEach =
						Array.prototype.forEach ||
						function(cb) {
							var i = 0,
								len = this.length;
							for (; i < len; i++) {
								cb.call(this, this[i], i);
							}
						};
					var props = [
						"setTimeout",
						"clearTimeout",
						"requestAnimationFrame",
						"Promise.prototype.then",
						"XMLHttpRequest.prototype.send",
						"Node.prototype.addEventListener",
						"process.nextTick",
						"setImmediate",
						"clearImmediate",
						{
							prop: "MutationObserver",
							fn: function(MutationObserver) {
								return function(fn) {
									return new MutationObserver(fn);
								};
							}
						}
					];
					wrapAll();
					if (g.Promise) {
						monitor(g, "Promise", "Promise.prototype.then");
					}
					function extract(obj, prop) {
						var parts = prop.split(".");
						while (parts.length > 1) {
							prop = parts.shift();
							obj = obj[prop];
							if (!obj) break;
							if (parts.length === 1) prop = parts[0];
						}
						return [obj, prop];
					}
					function wrapAll() {
						forEach.call(props, function(prop) {
							var fn;
							if (typeof prop === "object") {
								fn = prop.fn;
								prop = prop.prop;
							}
							var key = prop;
							if (wrapped[key]) {
								return;
							}
							var results = extract(g, prop);
							var obj = results[0];
							prop = results[1];
							if (!obj || !obj[prop]) {
								return;
							} else {
								wrapped[key] = true;
							}
							wrapInZone(obj, prop, fn);
						});
					}
					function wrapInZone(object, property, fn) {
						if (fn) {
							fn = fn(object[property]);
						} else {
							fn = object[property];
						}
						var wrappedFn = function() {
							if (typeof CanZone !== "undefined" && !!CanZone.current) {
								return CanZone.tasks[property](fn).apply(this, arguments);
							}
							return fn.apply(this, arguments);
						};
						wrappedFn.zoneWrapped = true;
						object[property] = wrappedFn;
					}
					function monitor(object, property, thingToRewrap) {
						var current = object[property];
						Object.defineProperty(object, property, {
							get: function() {
								return current;
							},
							set: function(val) {
								var hasChanged = !val.zoneWrapped && val !== current;
								current = val;
								if (hasChanged) {
									var results = extract(object, thingToRewrap);
									var localObject = results[0];
									var localProperty = results[1];
									wrapInZone(localObject, localProperty);
									monitor(object, property, thingToRewrap);
								}
							}
						});
					}
				})();
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		122,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var env = stealRequire(5);
				var slice = Array.prototype.slice;
				if (env.isNode) {
					var globalTimeoutId = 1;
				}
				var addTimer = function(callback) {
					var timeoutId = callback();
					var id = timeoutId;
					if (env.isNode && typeof id !== "number") {
						id = timeoutId.__timeoutId = globalTimeoutId++;
					}
					var zone = CanZone.current;
					if (!zone.isResolved) {
						zone.ids[id] = timeoutId;
					}
					return {
						timeoutId: timeoutId,
						id: id
					};
				};
				var removeTimer = function(timeoutId, callback) {
					if (timeoutId == null) {
						return callback();
					}
					var zone = CanZone.current;
					var ids = zone.ids;
					var id =
						env.isNode && typeof timeoutId !== "number"
							? timeoutId.__timeoutId
							: timeoutId;
					if (!zone.isResolved && ids[id]) {
						delete ids[id];
						zone.removeWait();
					}
					return callback();
				};
				stealExports.setTimeout = function(setTimeout) {
					return function(fn, timeout) {
						var args = Array.prototype.slice.call(arguments);
						var zone = CanZone.current;
						var idInfo;
						args[0] = zone.waitFor(function() {
							delete zone.ids[idInfo.id];
							return fn.apply(this, arguments);
						});
						var self = this;
						idInfo = addTimer(function() {
							return setTimeout.apply(self, args);
						});
						return idInfo.timeoutId;
					};
				};
				stealExports.clearTimeout = function(clearTimeout) {
					return function(timeoutId) {
						var args = arguments,
							self = this;
						return removeTimer(timeoutId, function() {
							return clearTimeout.apply(self, args);
						});
					};
				};
				stealExports.setImmediate = function(setImmediate) {
					return function(fn) {
						var idInfo;
						var zone = CanZone.current;
						var callback = zone.waitFor(function() {
							delete zone.ids[idInfo.id];
							return fn.apply(this, arguments);
						});
						var self = this,
							args = slice.call(arguments, 1);
						idInfo = addTimer(function() {
							return setImmediate.apply(self, [callback].concat(args));
						});
						return idInfo.timeoutId;
					};
				};
				stealExports.clearImmediate = function(clearImmediate) {
					return function(immediateId) {
						var args = arguments,
							self = this;
						return removeTimer(immediateId, function() {
							return clearImmediate.apply(self, args);
						});
					};
				};
				stealExports.requestAnimationFrame = function(rAF) {
					return function(fn) {
						var callback = CanZone.current.waitFor(fn);
						return rAF.call(this, callback);
					};
				};
				stealExports.then = function(then) {
					return function(onFulfilled, onRejected) {
						var fn;
						var rejected;
						var callback = CanZone.current.waitFor(function(val) {
							if (fn) {
								return fn.apply(this, arguments);
							} else if (rejected) {
								return Promise.reject(val);
							}
							return val;
						}, false);
						var callWith = function(cb, isError) {
							return function() {
								fn = cb;
								rejected = !!isError;
								return callback.apply(this, arguments);
							};
						};
						return then.call(
							this,
							callWith(onFulfilled),
							callWith(onRejected, true)
						);
					};
				};
				var supportsOnload = undefined;
				stealExports.send = function(send) {
					if (typeof supportsOnload === "undefined") {
						supportsOnload = "onload" in new XMLHttpRequest();
					}
					return function() {
						var onreadystatechange = this.onreadystatechange,
							onload = this.onload,
							onerror = this.onerror,
							thisXhr = this,
							zone = CanZone.current;
						zone.addWait();
						if (supportsOnload && this.onload) {
							this.onload = createCallback(onload);
							this.onerror = createCallback(onerror);
						} else {
							onreadystatechange = onreadystatechange || function() {};
							var callback = createCallback(onreadystatechange);
							this.onreadystatechange = function(ev) {
								var xhr = ev ? ev.target : thisXhr;
								if (xhr.readyState === 4) {
									return callback.apply(this, arguments);
								} else {
									return onreadystatechange.apply(this, arguments);
								}
							};
						}
						function createCallback(fn) {
							fn = fn || function() {};
							return function() {
								var task = new CanZone.Task(zone, fn);
								var res = task.run(this, arguments);
								zone.removeWait();
								return res;
							};
						}
						return send.apply(this, arguments);
					};
				};
				stealExports.nextTick = function(nextTick) {
					return function(fn) {
						var callback = CanZone.current.waitFor(fn);
						var args = slice.call(arguments, 1);
						args.unshift(callback);
						return nextTick.apply(process, args);
					};
				};
				stealExports.MutationObserver = function(MutationObserver) {
					return function(fn) {
						fn = CanZone.current.wrap(fn);
						return new MutationObserver(fn);
					};
				};
				stealExports.addEventListener = function(addEventListener) {
					return function(eventName, handler, useCapture) {
						handler = CanZone.current.wrap(handler);
						return addEventListener.call(this, eventName, handler, useCapture);
					};
				};
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		4,
		function(stealRequire, stealExports, stealModule) {
			(function(global) {
				var g = stealRequire(5).global;
				var Promise = g.Promise;
				var globalsZone = stealRequire(8);
				var forEach = stealRequire(6).forEach;
				stealRequire(7);
				var slice = Array.prototype.slice;
				var noop = function() {};
				function Deferred() {
					var dfd = this;
					this.promise = new Promise(function(resolve, reject) {
						dfd.resolve = resolve;
						dfd.reject = reject;
					});
				}
				function Task(zone, fn, catchErrors) {
					this.zone = zone;
					this.fn = fn;
					this.catchErrors = catchErrors;
					this.nestedTask = zone.runningTask;
				}
				Task.prototype.run = function(ctx, args) {
					var previousZone = Zone.current;
					var zone = (Zone.current = this.zone);
					if (!this.nestedTask) zone.execHook("beforeTask", this);
					var res;
					try {
						zone.runningTask = true;
						res = this.fn.apply(ctx, args);
						Zone.current = previousZone;
						if (!this.nestedTask) zone.execHookR("afterTask", this);
					} catch (err) {
						Zone.current = previousZone;
						if (!this.nestedTask) zone.execHookR("afterTask", this);
						if (this.catchErrors !== false) {
							zone.errors.push(err);
						} else {
							throw err;
						}
					} finally {
						zone.runningTask = this.nestedTask;
					}
					return res;
				};
				var hooks = [
					"beforeTask",
					"afterTask",
					"created",
					"ended",
					"beforeRun",
					"afterRun"
				];
				var commonGlobals = ["document", "window", "location"];
				function buildZoneSpec(zone, spec, plugins, processedSpecs) {
					spec = spec || {};
					processedSpecs = processedSpecs || [];
					if (processedSpecs.indexOf(spec) !== -1) {
						return;
					} else {
						processedSpecs.push(spec);
					}
					plugins = plugins || [];
					if (typeof spec === "function") {
						spec = spec(zone.data);
					} else if (Array.isArray(spec)) {
						spec = { plugins: spec };
					}
					if (spec.plugins) {
						plugins = plugins.concat(spec.plugins);
					}
					forEach.call(plugins, function(plugin) {
						buildZoneSpec(zone, plugin, null, processedSpecs);
					});
					if (spec.hooks) {
						zone.hooks = zone.hooks.concat(spec.hooks);
					}
					forEach.call(zone.hooks, function(hook) {
						var propName = hook + "s";
						var array = zone[propName];
						if (!array) {
							array = zone[propName] = [];
						}
						if (spec[hook]) {
							array.push(spec[hook]);
						}
					});
					var globals = extend({}, spec.globals || {});
					forEach.call(commonGlobals, function(name) {
						if (spec[name]) globals[name] = spec[name];
					});
					for (var p in globals) {
						zone.globals[p] = globals[p];
					}
				}
				function Zone(spec) {
					spec = spec || {};
					this.deferred = new Deferred();
					this.waits = 0;
					this.ids = {};
					this.errors = [];
					this.data = {};
					this.globals = {};
					this.parent = Zone.current;
					this.hooks = slice.call(hooks);
					buildZoneSpec(this, spec, [globalsZone]);
					this.execHook("created");
				}
				Zone.waitFor = function(fn, catchErrors) {
					fn = fn || noop;
					var zone = Zone.current;
					if (!zone) return fn;
					return zone.waitFor(fn, catchErrors);
				};
				Zone.error = function(error) {
					var zone = Zone.current;
					if (!zone) return error;
					zone.errors.push(error);
					return error;
				};
				Zone.ignore = function(fn) {
					return function() {
						var zone = Zone.current;
						if (!zone) return fn.apply(this, arguments);
						var task = new Task(zone);
						Zone.current = undefined;
						zone.execHookR("afterTask", task);
						var res = fn.apply(this, arguments);
						zone.execHook("beforeTask", task);
						Zone.current = zone;
						return res;
					};
				};
				Zone.prototype.runTask = function(
					fn,
					ctx,
					args,
					catchErrors,
					decrementWaits
				) {
					var res, error;
					var task = new Task(this, fn, catchErrors);
					try {
						res = task.run(ctx, args);
					} catch (err) {
						error = err;
					}
					if (decrementWaits && this.removeWait) this.removeWait();
					if (error) throw error;
					return res;
				};
				Zone.prototype.run = function(fn) {
					if (this.isResolved) {
						this.deferred = new Deferred();
						this.isResolved = false;
					} else {
						this.execHook("beforeRun");
					}
					var task = new Task(this, fn);
					this.data.result = task.run();
					if (!this.isResolved) {
						this.execHook("afterRun");
					}
					if (!this.waits || this.errors.length) {
						this.end();
					}
					return this.deferred.promise;
				};
				Zone.prototype.fork = function(zoneSpec) {
					var plugins = [];
					if (zoneSpec) plugins.push(zoneSpec);
					plugins.unshift(this);
					var newZone = new Zone({ plugins: plugins });
					return newZone;
				};
				Zone.prototype.execHook = function(hook) {
					var args = slice.call(arguments, 1);
					var zone = this;
					var prop = hook + "s";
					var array = this[prop];
					if (array) {
						forEach.call(array, function(fn) {
							fn.apply(zone, args);
						});
					}
				};
				Zone.prototype.execHookR = function(hook) {
					var args = slice.call(arguments, 1);
					var zone = this;
					var prop = hook + "s";
					var array = this[prop];
					if (array) {
						var i = array.length - 1;
						for (; i >= 0; i--) {
							array[i].apply(zone, args);
						}
					}
				};
				Zone.prototype.wrap = function(fn, catchErrors) {
					var zone = this;
					return function() {
						return zone.runTask(fn, this, arguments, catchErrors);
					};
				};
				Zone.prototype.end = function() {
					if (!this.isResolved) {
						this.execHook("ended");
					}
					var dfd = this.deferred;
					if (this.errors.length) {
						var error = this.errors[0];
						error.errors = this.errors;
						dfd.reject(error);
					} else {
						dfd.resolve(this.data);
					}
					this.isResolved = true;
				};
				Zone.prototype.waitFor = function(fn, catchErrors) {
					this.addWait();
					var zone = this;
					return function() {
						return zone.runTask(fn, this, arguments, catchErrors, true);
					};
				};
				Zone.prototype.addWait = function() {
					this.waits++;
					if (this.parent) {
						this.parent.addWait();
					}
				};
				Zone.prototype.removeWait = function() {
					this.waits--;
					if (this.waits === 0) {
						this.end();
					}
					if (this.parent) {
						this.parent.removeWait();
					}
				};
				Zone.Task = Task;
				function extend(a, b) {
					if (!b) return a;
					for (var p in b) {
						a[p] = b[p];
					}
					return a;
				}
				Zone.tasks = {};
				addTasks(stealRequire(122));
				function addTasks(tasks) {
					for (var p in tasks) {
						Zone.tasks[p] = tasks[p];
					}
				}
				g.CanZone = g.CanZone || Zone;
				if (typeof stealModule !== "undefined" && stealModule.exports) {
					stealModule.exports = Zone;
				}
			})(
				(function() {
					return this;
				})()
			);
		}
	],
	[
		135,
		function(stealRequire, stealExports, stealModule) {
			var canEvent = stealRequire(52);
			var makeArray = stealRequire(38);
			var canReflect = stealRequire(28);
			var isEmptyObject = stealRequire(61);
			var bubble = {
				bind: function(parent, eventName) {
					if (!parent.__inSetup) {
						var bubbleEvents = bubble.events(parent, eventName),
							len = bubbleEvents.length,
							bubbleEvent;
						if (!parent._bubbleBindings) {
							parent._bubbleBindings = {};
						}
						for (var i = 0; i < len; i++) {
							bubbleEvent = bubbleEvents[i];
							if (!parent._bubbleBindings[bubbleEvent]) {
								parent._bubbleBindings[bubbleEvent] = 1;
								bubble.childrenOf(parent, bubbleEvent);
							} else {
								parent._bubbleBindings[bubbleEvent]++;
							}
						}
					}
				},
				unbind: function(parent, eventName) {
					var bubbleEvents = bubble.events(parent, eventName),
						len = bubbleEvents.length,
						bubbleEvent;
					for (var i = 0; i < len; i++) {
						bubbleEvent = bubbleEvents[i];
						if (parent._bubbleBindings) {
							parent._bubbleBindings[bubbleEvent]--;
						}
						if (
							parent._bubbleBindings &&
							!parent._bubbleBindings[bubbleEvent]
						) {
							delete parent._bubbleBindings[bubbleEvent];
							bubble.teardownChildrenFrom(parent, bubbleEvent);
							if (isEmptyObject(parent._bubbleBindings)) {
								delete parent._bubbleBindings;
							}
						}
					}
				},
				add: function(parent, child, prop) {
					if (
						canReflect.isObservableLike(child) &&
						canReflect.isMapLike(child) &&
						parent._bubbleBindings
					) {
						for (var eventName in parent._bubbleBindings) {
							if (parent._bubbleBindings[eventName]) {
								bubble.teardownFromParent(parent, child, eventName);
								bubble.toParent(child, parent, prop, eventName);
							}
						}
					}
				},
				addMany: function(parent, children) {
					for (var i = 0, len = children.length; i < len; i++) {
						bubble.add(parent, children[i], i);
					}
				},
				remove: function(parent, child) {
					if (
						canReflect.isObservableLike(child) &&
						canReflect.isMapLike(child) &&
						parent._bubbleBindings
					) {
						for (var eventName in parent._bubbleBindings) {
							if (parent._bubbleBindings[eventName]) {
								bubble.teardownFromParent(parent, child, eventName);
							}
						}
					}
				},
				removeMany: function(parent, children) {
					for (var i = 0, len = children.length; i < len; i++) {
						bubble.remove(parent, children[i]);
					}
				},
				set: function(parent, prop, value, current) {
					if (
						canReflect.isObservableLike(value) &&
						canReflect.isMapLike(value)
					) {
						bubble.add(parent, value, prop);
					}
					if (
						canReflect.isObservableLike(current) &&
						canReflect.isMapLike(current)
					) {
						bubble.remove(parent, current);
					}
					return value;
				},
				events: function(map, boundEventName) {
					return map.constructor._bubbleRule(boundEventName, map);
				},
				toParent: function(child, parent, prop, eventName) {
					canEvent.listenTo.call(parent, child, eventName, function() {
						var args = makeArray(arguments),
							ev = args.shift();
						args[0] =
							(canReflect.isObservableLike(parent) &&
							canReflect.isListLike(parent)
								? parent.indexOf(child)
								: prop) + (args[0] ? "." + args[0] : "");
						ev.triggeredNS = ev.triggeredNS || {};
						if (ev.triggeredNS[parent._cid]) {
							return;
						}
						ev.triggeredNS[parent._cid] = true;
						canEvent.dispatch.call(parent, ev, args);
						if (eventName === "change") {
							canEvent.dispatch.call(parent, args[0], [args[2], args[3]]);
						}
					});
				},
				childrenOf: function(parent, eventName) {
					parent._each(function(child, prop) {
						if (child && child.bind) {
							bubble.toParent(child, parent, prop, eventName);
						}
					});
				},
				teardownFromParent: function(parent, child, eventName) {
					if (child && child.unbind) {
						canEvent.stopListening.call(parent, child, eventName);
					}
				},
				teardownChildrenFrom: function(parent, eventName) {
					parent._each(function(child) {
						bubble.teardownFromParent(parent, child, eventName);
					});
				},
				isBubbling: function(parent, eventName) {
					return parent._bubbleBindings && parent._bubbleBindings[eventName];
				}
			};
			stealModule.exports = bubble;
		}
	],
	[
		136,
		function(stealRequire, stealExports, stealModule) {
			"use strict";
			var canReflect = stealRequire(28);
			stealModule.exports = function(obj) {
				return canReflect.isPromise(obj);
			};
		}
	],
	[
		134,
		function(stealRequire, stealExports, stealModule) {
			var isPlainObject = stealRequire(81);
			var isPromise = stealRequire(136);
			var CID = stealRequire(55);
			var assign = stealRequire(57);
			var canReflect = stealRequire(28);
			var madeMap = null;
			var teardownMap = function() {
				for (var cid in madeMap) {
					if (madeMap[cid].added) {
						delete madeMap[cid].obj._cid;
					}
				}
				madeMap = null;
			};
			var mapHelpers = {
				attrParts: function(attr, keepKey) {
					if (keepKey) {
						return [attr];
					}
					return typeof attr === "object" ? attr : ("" + attr).split(".");
				},
				canMakeObserve: function(obj) {
					return (
						obj && !isPromise(obj) && (Array.isArray(obj) || isPlainObject(obj))
					);
				},
				reflectSerialize: function(unwrapped) {
					this.each(function(val, name) {
						if (this.___serialize) {
							val = this.___serialize(name, val);
						} else {
							val = canReflect.serialize(val);
						}
						if (val !== undefined) {
							unwrapped[name] = val;
						}
					}, this);
					return unwrapped;
				},
				reflectUnwrap: function(unwrapped) {
					this.each(function(value, key) {
						if (value !== undefined) {
							unwrapped[key] = canReflect.unwrap(value);
						}
					});
					return unwrapped;
				},
				removeSpecialKeys: function(map) {
					if (map) {
						["_data", "constructor", "_cid", "__bindEvents"].forEach(function(
							key
						) {
							delete map[key];
						});
					}
					return map;
				},
				define: null,
				addComputedAttr: function(map, attrName, compute) {
					map._computedAttrs[attrName] = {
						compute: compute,
						count: 0,
						handler: function(newVal, oldVal) {
							map._triggerChange(attrName, "set", newVal, oldVal);
						}
					};
				},
				addToMap: function addToMap(obj, instance) {
					var teardown;
					if (!madeMap) {
						teardown = teardownMap;
						madeMap = {};
					}
					var hasCid = obj._cid;
					var cid = CID(obj);
					if (!madeMap[cid]) {
						madeMap[cid] = {
							obj: obj,
							instance: instance,
							added: !hasCid
						};
					}
					return teardown;
				},
				getMapFromObject: function(obj) {
					return madeMap && madeMap[obj._cid] && madeMap[obj._cid].instance;
				},
				twoLevelDeepExtend: function(destination, source) {
					for (var prop in source) {
						destination[prop] = destination[prop] || {};
						assign(destination[prop], source[prop]);
					}
				}
			};
			stealModule.exports = stealExports = mapHelpers;
		}
	],
	[
		130,
		function(stealRequire, stealExports, stealModule) {
			var bubble = stealRequire(135);
			var mapHelpers = stealRequire(134);
			var canEvent = stealRequire(52);
			var canBatch = stealRequire(53);
			var eventLifecycle = stealRequire(88);
			var Construct = stealRequire(112);
			var Observation = stealRequire(23);
			var ObserveReader = stealRequire(71);
			var canCompute = stealRequire(22);
			var singleReference = stealRequire(56);
			var namespace = stealRequire(19);
			var dev = stealRequire(29);
			var CID = stealRequire(55);
			var deepAssign = stealRequire(113);
			var isFunction = stealRequire(60);
			var assign = stealRequire(57);
			var types = stealRequire(76);
			var canReflect = stealRequire(28);
			var canSymbol = stealRequire(16);
			var CIDSet = stealRequire(58);
			var CIDMap = stealRequire(39);
			var unobservable = { constructor: true };
			var hasOwnProperty = {}.hasOwnProperty;
			var Map = Construct.extend(
				{
					setup: function(baseMap) {
						Construct.setup.apply(this, arguments);
						this._computedPropertyNames = [];
						if (Map) {
							if (!this.defaults) {
								this.defaults = {};
							}
							for (var prop in this.prototype) {
								if (
									prop !== "define" &&
									prop !== "constructor" &&
									(typeof this.prototype[prop] !== "function" ||
										this.prototype[prop].prototype instanceof Construct)
								) {
									this.defaults[prop] = this.prototype[prop];
								} else if (this.prototype[prop].isComputed) {
									this._computedPropertyNames.push(prop);
								}
							}
							if (mapHelpers.define) {
								mapHelpers.define(this, baseMap.prototype.define);
							}
						}
					},
					shortName: "Map",
					_bubbleRule: function(eventName) {
						return eventName === "change" || eventName.indexOf(".") >= 0
							? ["change"]
							: [];
					},
					addEventListener: eventLifecycle.addAndSetup,
					removeEventListener: eventLifecycle.removeAndTeardown,
					keys: function(map) {
						Observation.add(map, "__keys");
						return canReflect.getOwnEnumerableKeys(map._data);
					}
				},
				{
					setup: function(obj) {
						if (
							canReflect.isObservableLike(obj) &&
							typeof obj.serialize === "function"
						) {
							obj = obj.serialize();
						}
						this._data = Object.create(null);
						CID(this, ".map");
						this._setupComputedProperties();
						var teardownMapping = obj && mapHelpers.addToMap(obj, this);
						var defaultValues = this._setupDefaults(obj);
						var data = assign(deepAssign(true, {}, defaultValues), obj);
						this.attr(data);
						if (teardownMapping) {
							teardownMapping();
						}
					},
					_setupComputedProperties: function() {
						this._computedAttrs = Object.create(null);
						var computes = this.constructor._computedPropertyNames;
						for (var i = 0, len = computes.length; i < len; i++) {
							var attrName = computes[i];
							mapHelpers.addComputedAttr(
								this,
								attrName,
								this[attrName].clone(this)
							);
						}
					},
					_setupDefaults: function() {
						return this.constructor.defaults || {};
					},
					attr: function(attr, val) {
						var type = typeof attr;
						if (attr === undefined) {
							return this._getAttrs();
						} else if (type !== "string" && type !== "number") {
							return this._setAttrs(attr, val);
						} else if (arguments.length === 1) {
							return this._get(attr + "");
						} else {
							this._set(attr + "", val);
							return this;
						}
					},
					_get: function(attr) {
						var dotIndex = attr.indexOf(".");
						if (dotIndex >= 0) {
							var value = this.___get(attr);
							if (value !== undefined) {
								Observation.add(this, attr);
								return value;
							}
							var first = attr.substr(0, dotIndex),
								second = attr.substr(dotIndex + 1);
							var current = this.__get(first);
							return current && canReflect.getKeyValue(current, second);
						} else {
							return this.__get(attr);
						}
					},
					__get: function(attr) {
						if (!unobservable[attr] && !this._computedAttrs[attr]) {
							Observation.add(this, attr);
						}
						return this.___get(attr);
					},
					___get: function(attr) {
						if (attr !== undefined) {
							var computedAttr = this._computedAttrs[attr];
							if (computedAttr && computedAttr.compute) {
								return computedAttr.compute();
							} else {
								return hasOwnProperty.call(this._data, attr)
									? this._data[attr]
									: undefined;
							}
						} else {
							return this._data;
						}
					},
					_set: function(attr, value, keepKey) {
						var dotIndex = attr.indexOf("."),
							current;
						if (dotIndex >= 0 && !keepKey) {
							var first = attr.substr(0, dotIndex),
								second = attr.substr(dotIndex + 1);
							current = this.__inSetup ? undefined : this.___get(first);
							if (canReflect.isMapLike(current)) {
								canReflect.setKeyValue(current, second, value);
							} else {
								current = this.__inSetup ? undefined : this.___get(attr);
								if (this.__convert) {
									value = this.__convert(attr, value);
								}
								this.__set(attr, this.__type(value, attr), current);
							}
						} else {
							current = this.__inSetup ? undefined : this.___get(attr);
							if (this.__convert) {
								value = this.__convert(attr, value);
							}
							this.__set(attr, this.__type(value, attr), current);
						}
					},
					__type: function(value, prop) {
						if (
							typeof value === "object" &&
							!canReflect.isObservableLike(value) &&
							mapHelpers.canMakeObserve(value) &&
							!canReflect.isListLike(value)
						) {
							var cached = mapHelpers.getMapFromObject(value);
							if (cached) {
								return cached;
							}
							var MapConstructor = this.constructor.Map || Map;
							return new MapConstructor(value);
						}
						return value;
					},
					__set: function(prop, value, current) {
						if (value !== current) {
							var computedAttr = this._computedAttrs[prop];
							var changeType =
								computedAttr ||
								current !== undefined ||
								hasOwnProperty.call(this.___get(), prop)
									? "set"
									: "add";
							this.___set(
								prop,
								typeof value === "object"
									? bubble.set(this, prop, value, current)
									: value
							);
							if (!computedAttr || !computedAttr.count) {
								this._triggerChange(prop, changeType, value, current);
							}
							if (typeof current === "object") {
								bubble.teardownFromParent(this, current);
							}
						}
					},
					___set: function(prop, val) {
						var computedAttr = this._computedAttrs[prop];
						if (computedAttr) {
							computedAttr.compute(val);
						} else {
							this._data[prop] = val;
						}
						if (
							typeof this.constructor.prototype[prop] !== "function" &&
							!computedAttr
						) {
							this[prop] = val;
						}
					},
					removeAttr: function(attr) {
						return this._remove(attr);
					},
					_remove: function(attr) {
						var parts = mapHelpers.attrParts(attr),
							prop = parts.shift(),
							current = this.___get(prop);
						if (parts.length && current) {
							return canReflect.deleteKeyValue(current, parts.join("."));
						} else {
							if (typeof attr === "string" && !!~attr.indexOf(".")) {
								prop = attr;
							}
							this.__remove(prop, current);
							return current;
						}
					},
					__remove: function(prop, current) {
						if (prop in this._data) {
							this.___remove(prop);
							this._triggerChange(prop, "remove", undefined, current);
						}
					},
					___remove: function(prop) {
						delete this._data[prop];
						if (!(prop in this.constructor.prototype)) {
							delete this[prop];
						}
					},
					___serialize: function(name, val) {
						return canReflect.serialize(val, CIDMap);
					},
					_getAttrs: function() {
						return canReflect.unwrap(this, CIDMap);
					},
					_setAttrs: function(props, remove) {
						if (remove === true) {
							this[canSymbol.for("can.updateDeep")](props);
						} else {
							this[canSymbol.for("can.assignDeep")](props);
						}
						return this;
					},
					serialize: function() {
						return canReflect.serialize(this, CIDMap);
					},
					_triggerChange: function(attr, how, newVal, oldVal, batchNum) {
						if (bubble.isBubbling(this, "change")) {
							canEvent.dispatch.call(
								this,
								{
									type: "change",
									target: this,
									batchNum: batchNum
								},
								[attr, how, newVal, oldVal]
							);
						}
						canEvent.dispatch.call(
							this,
							{
								type: attr,
								target: this,
								batchNum: batchNum
							},
							[newVal, oldVal]
						);
						if (how === "remove" || how === "add") {
							canEvent.dispatch.call(this, {
								type: "__keys",
								target: this,
								batchNum: batchNum
							});
						}
					},
					_eventSetup: function() {},
					_eventTeardown: function() {},
					one: canEvent.one,
					addEventListener: function(eventName, handler) {
						var computedBinding =
							this._computedAttrs && this._computedAttrs[eventName];
						if (computedBinding && computedBinding.compute) {
							if (!computedBinding.count) {
								computedBinding.count = 1;
								computedBinding.compute.addEventListener("change", function(
									ev,
									newVal,
									oldVal
								) {
									computedBinding.handler(newVal, oldVal);
								});
							} else {
								computedBinding.count++;
							}
						}
						bubble.bind(this, eventName);
						return eventLifecycle.addAndSetup.apply(this, arguments);
					},
					removeEventListener: function(eventName, handler) {
						var computedBinding =
							this._computedAttrs && this._computedAttrs[eventName];
						if (computedBinding) {
							if (computedBinding.count === 1) {
								computedBinding.count = 0;
								canReflect.offValue(
									computedBinding.compute,
									computedBinding.handler
								);
							} else {
								computedBinding.count--;
							}
						}
						bubble.unbind(this, eventName);
						return eventLifecycle.removeAndTeardown.apply(this, arguments);
					},
					compute: function(prop) {
						if (isFunction(this.constructor.prototype[prop])) {
							return canCompute(this[prop], this);
						} else {
							var reads = ObserveReader.reads(prop);
							var last = reads.length - 1;
							return canCompute(function(newVal) {
								if (arguments.length) {
									ObserveReader.write(this, reads[last].key, newVal, {});
								} else {
									return ObserveReader.get(this, prop);
								}
							}, this);
						}
					},
					each: function(callback, context) {
						var key, item;
						var keys = Map.keys(this);
						for (var i = 0, len = keys.length; i < len; i++) {
							key = keys[i];
							item = this.attr(key);
							if (callback.call(context || item, item, key, this) === false) {
								break;
							}
						}
						return this;
					},
					_each: function(callback) {
						var data = this.___get();
						for (var prop in data) {
							if (hasOwnProperty.call(data, prop)) {
								callback(data[prop], prop);
							}
						}
					},
					dispatch: canEvent.dispatch
				}
			);
			Map.prototype.on = Map.prototype.bind = Map.prototype.addEventListener;
			Map.prototype.off = Map.prototype.unbind =
				Map.prototype.removeEventListener;
			Map.on = Map.bind = Map.addEventListener;
			Map.off = Map.unbind = Map.removeEventListener;
			canReflect.assignSymbols(Map.prototype, {
				"can.isMapLike": true,
				"can.isListLike": false,
				"can.isValueLike": false,
				"can.getKeyValue": Map.prototype._get,
				"can.setKeyValue": Map.prototype._set,
				"can.deleteKeyValue": Map.prototype._remove,
				"can.getOwnEnumerableKeys": function() {
					Observation.add(this, "__keys");
					return Object.keys(this._data);
				},
				"can.assignDeep": function(source) {
					canBatch.start();
					canReflect.assignDeepMap(
						this,
						mapHelpers.removeSpecialKeys(canReflect.assignMap({}, source))
					);
					canBatch.stop();
				},
				"can.updateDeep": function(source) {
					canBatch.start();
					canReflect.updateDeepMap(
						this,
						mapHelpers.removeSpecialKeys(canReflect.assignMap({}, source))
					);
					canBatch.stop();
				},
				"can.unwrap": mapHelpers.reflectUnwrap,
				"can.serialize": mapHelpers.reflectSerialize,
				"can.onKeyValue": function(key, handler) {
					var translationHandler = function(ev, newValue, oldValue) {
						handler.call(this, newValue, oldValue);
					};
					singleReference.set(handler, this, translationHandler, key);
					this.addEventListener(key, translationHandler);
				},
				"can.offKeyValue": function(key, handler) {
					this.removeEventListener(
						key,
						singleReference.getAndDelete(handler, this, key)
					);
				},
				"can.keyHasDependencies": function(key) {
					return !!(
						this._computedAttrs &&
						this._computedAttrs[key] &&
						this._computedAttrs[key].compute
					);
				},
				"can.getKeyDependencies": function(key) {
					var ret;
					if (
						this._computedAttrs &&
						this._computedAttrs[key] &&
						this._computedAttrs[key].compute
					) {
						ret = {};
						ret.valueDependencies = new CIDSet();
						ret.valueDependencies.add(this._computedAttrs[key].compute);
					}
					return ret;
				}
			});
			if (!types.DefaultMap) {
				types.DefaultMap = Map;
			}
			stealModule.exports = namespace.Map = Map;
		}
	],
	[
		117,
		function(stealRequire, stealExports, stealModule) {
			var Map = stealRequire(130);
			stealRequire(119);
			stealModule.exports = Map.extend({
				hello: function() {
					return "world";
				}
			});
		}
	],
	[
		114,
		function(stealRequire, stealExports, stealModule) {
			stealModule.id =
				"test/basics-optimized/index.stache!done-autorender@1.3.0#src/autorender";
			var steal = stealRequire(137);
			var loader = stealRequire(138);
			var canViewImport = stealRequire(118);
			var can = stealRequire(115);
			var mutate = stealRequire(37);
			var childNodes = stealRequire(49);
			var route = stealRequire(119);
			var domData = stealRequire(69);
			var stache = stealRequire(120);
			var xhrZone = stealRequire(116);
			var Zone = stealRequire(4);
			var viewModel = stealRequire(117);
			var useZones = true;
			var tokens = [
				{
					tokenType: "start",
					args: ["html", false]
				},
				{
					tokenType: "end",
					args: ["html", false]
				},
				{
					tokenType: "chars",
					args: ["\n\t"]
				},
				{
					tokenType: "start",
					args: ["head", false]
				},
				{
					tokenType: "end",
					args: ["head", false]
				},
				{
					tokenType: "chars",
					args: ["\n\t\t"]
				},
				{
					tokenType: "start",
					args: ["title", false]
				},
				{
					tokenType: "end",
					args: ["title", false]
				},
				{
					tokenType: "chars",
					args: ["Hello page"]
				},
				{
					tokenType: "close",
					args: ["title"]
				},
				{
					tokenType: "chars",
					args: ["\n\t"]
				},
				{
					tokenType: "close",
					args: ["head"]
				},
				{
					tokenType: "chars",
					args: ["\n\t"]
				},
				{
					tokenType: "start",
					args: ["body", false]
				},
				{
					tokenType: "end",
					args: ["body", false]
				},
				{
					tokenType: "chars",
					args: ["\n\t\t"]
				},
				{
					tokenType: "start",
					args: ["can-import", true]
				},
				{
					tokenType: "attrStart",
					args: ["from"]
				},
				{
					tokenType: "attrValue",
					args: ["test/basics/state"]
				},
				{
					tokenType: "attrEnd",
					args: ["from"]
				},
				{
					tokenType: "attrStart",
					args: ["as"]
				},
				{
					tokenType: "attrValue",
					args: ["viewModel"]
				},
				{
					tokenType: "attrEnd",
					args: ["as"]
				},
				{
					tokenType: "end",
					args: ["can-import", true]
				},
				{
					tokenType: "chars",
					args: ["\n\t\t"]
				},
				{
					tokenType: "start",
					args: ["h1", false]
				},
				{
					tokenType: "attrStart",
					args: ["id"]
				},
				{
					tokenType: "attrValue",
					args: ["hello"]
				},
				{
					tokenType: "attrEnd",
					args: ["id"]
				},
				{
					tokenType: "end",
					args: ["h1", false]
				},
				{
					tokenType: "chars",
					args: ["Hello "]
				},
				{
					tokenType: "special",
					args: ["hello"]
				},
				{
					tokenType: "chars",
					args: ["!"]
				},
				{
					tokenType: "close",
					args: ["h1"]
				},
				{
					tokenType: "chars",
					args: ["\n\t"]
				},
				{
					tokenType: "close",
					args: ["body"]
				},
				{
					tokenType: "chars",
					args: ["\n"]
				},
				{
					tokenType: "close",
					args: ["html"]
				},
				{
					tokenType: "chars",
					args: ["\n"]
				},
				{
					tokenType: "done",
					args: []
				}
			];
			var renderer = stache(tokens);
			var isNode =
				typeof process === "object" &&
				{}.toString.call(process) === "[object process]";
			stache.registerHelper("isProduction", function(options) {
				console.warn(
					"The isProduction helper is deprecated. Use a #switch helper on `env.NODE_ENV` instead."
				);
				if (loader && loader.isEnv && loader.isEnv("production")) {
					return options.fn(this);
				} else {
					return options.inverse(this);
				}
			});
			function systemImportZone() {
				var oldImport;
				var myImport = function() {
					return Promise.resolve(oldImport.apply(this, arguments));
				};
				return {
					beforeTask: function() {
						oldImport = steal.import;
						steal.import = myImport;
					},
					afterTask: function() {
						steal.import = oldImport;
					}
				};
			}
			function render(scope, options) {
				var moduleOptions = { stealModule: stealModule };
				options =
					options && options.add ? options.add(moduleOptions) : moduleOptions;
				return renderer(scope, options);
			}
			function connectViewModel() {
				var ViewModel = autorender.viewModel;
				if (!ViewModel) {
					var message =
						"done-autorender cannot start without a ViewModel. " +
						"Please ensure your template contains an export for your " +
						"application's ViewModel. https://github.com/donejs/autorender#viewmodel";
					console.error(message);
					return;
				}
				var viewModel = (autorender.state = new ViewModel());
				domData.set.call(document.documentElement, "viewModel", viewModel);
				route.data = viewModel;
				route.ready();
				return viewModel;
			}
			function connectViewModelAndAttach() {
				connectViewModel();
				return renderAndAttach();
			}
			function reattachWithZone() {
				new Zone({
					plugins: [xhrZone, systemImportZone]
				}).run(function() {
					var viewModel = connectViewModel();
					var result = renderInZone(viewModel);
					if (typeof doneSsrAttach !== "undefined") {
						doneSsrAttach(result.fragment);
					} else {
						result.promise.then(attach);
					}
				});
			}
			var tagsToIgnore = {
				SCRIPT: true,
				STYLE: true,
				LINK: true
			};
			function eachChild(parent, callback) {
				var nodes = Array.prototype.slice.call(childNodes(parent)),
					i = 0,
					len = nodes.length,
					node,
					ignoreTag;
				for (; i < len; i++) {
					node = nodes[i];
					ignoreTag = tagsToIgnore[node.nodeName];
					if (!ignoreTag) {
						if (callback(node) === false) {
							break;
						}
					}
				}
			}
			function remove(el) {
				mutate.removeChild.call(el.parentNode, el);
			}
			function appendTo(parent) {
				return function(el) {
					mutate.appendChild.call(parent, el);
				};
			}
			function attach(result) {
				var frag = result.fragment;
				if (document.documentElement.hasAttribute("data-attached")) {
					return;
				}
				var head = document.head;
				var body = document.body;
				eachChild(head, remove);
				var fragHead = frag.querySelector("head");
				eachChild(fragHead, appendTo(head));
				eachChild(body, remove);
				var fragBody = frag.querySelector("body");
				eachChild(fragBody, appendTo(body));
				document.documentElement.setAttribute("data-attached", "");
			}
			function renderAndAttach() {
				var viewModel = autorender.state;
				return useZones
					? renderInZone(viewModel).promise.then(attach)
					: renderNoZone(viewModel).then(attach);
			}
			function renderInZone(viewModel) {
				var fragment;
				var zonePromise = new Zone({
					plugins: [xhrZone, systemImportZone]
				})
					.run(function() {
						fragment = render(viewModel, {});
					})
					.then(function(zoneData) {
						return {
							fragment: fragment,
							zoneData: zoneData
						};
					});
				return {
					promise: zonePromise,
					fragment: fragment
				};
			}
			function renderNoZone(viewModel) {
				var fragment = render(viewModel, {});
				return Promise.resolve({ fragment: fragment });
			}
			function renderIntoDocument(document, viewModel) {
				var frag = render(viewModel, {});
				var firstChild = frag.firstChild;
				var documentElement = document.documentElement;
				if (firstChild && firstChild.nodeName === "HTML") {
					mutate.replaceChild.call(document, firstChild, documentElement);
				} else {
					mutate.appendChild.call(documentElement, frag);
				}
			}
			var autorender = {
				renderAndAttach: renderAndAttach,
				renderInZone: renderInZone,
				legacy: false,
				render: function(doc, state) {
					console.warn(
						"render() is deprecated in done-autorender 1.3.0. Please use renderIntoDocument() instead."
					);
					var frag = render(state, {});
					var oldDoc = can.document;
					can.document = doc;
					mutate.appendChild.call(doc.body, frag, doc);
					can.document = oldDoc;
				},
				renderIntoDocument: renderIntoDocument,
				viewModel: viewModel["default"] || viewModel
			};
			var isNW = (function() {
				try {
					var nr = loader._nodeRequire;
					return nr && nr("nw.gui") !== "undefined";
				} catch (e) {
					return false;
				}
			})();
			var isElectron = isNode && !!process.versions.electron;
			if (typeof steal !== "undefined" && (isNW || isElectron || !isNode))
				steal.done().then(function() {
					if (steal.loader.autorenderAutostart !== false) {
						if (useZones) {
							reattachWithZone();
						} else {
							connectViewModelAndAttach();
						}
					}
				});
			stealModule.exports = autorender;
		}
	]
]);
