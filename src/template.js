define([], function(){
	return function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += 'define(' +
((__t = ( imports )) == null ? '' : __t) +
', function(' +
((__t = ( args )) == null ? '' : __t) +
'){\n\n	var renderer = stache(' +
((__t = ( intermediate )) == null ? '' : __t) +
');\n\n	var __export = {\n		render: function(scope, options){\n			var moduleOptions = { module: module };\n			options = (options && options.add) ? options.add(moduleOptions) :\n				moduleOptions;\n			return renderer(scope, options);\n		},\n		start: function(){\n			var state = this.state = new this.viewModel;\n			can.route.map(state);\n			can.route.ready();\n			this.rerender();\n		},\n		rerender: function(){\n			var keep = { "SCRIPT": true, "STYLE": true, "LINK": true };\n			function eachChild(parent, callback){\n				can.each(can.makeArray(parent.childNodes), function(el){\n					if(!keep[el.nodeName]) {\n						callback(el);\n					}\n				});\n			}\n\n			function remove(el) {\n				can.remove(el);\n			}\n\n			function appendTo(parent){\n				return function(el){\n					can.appendChild(parent, el);\n				}\n			}\n\n			this.renderAsync().then(function(result){\n				var frag = result.fragment;\n				var head = document.head;\n				var body = document.body;\n\n				// Move elements from the fragment\'s head to the document head.\n				eachChild(head, remove);\n				eachChild(can.$("head", frag)[0], appendTo(head));\n\n				// Move elements from the fragment\'s body to the document body.\n				eachChild(body, remove);\n				eachChild(can.$("body", frag)[0], appendTo(body));\n			});\n		},\n		promiseAll: function(promises){\n			var dfd = new can.Deferred();\n\n			var left = promises.length,\n				failed = false;\n\n			function done(){\n				left--;\n				if(!left && !failed) {\n					dfd.resolve();\n				}\n			}\n\n			function fail(e){\n				failed = true;\n				dfd.reject(e);\n			}\n\n			can.each(promises, function(p){\n				p.then(done, fail);\n			});\n\n			return dfd;\n		},\n		renderAsync: function(renderer, data, options, doc){\n			renderer = renderer || this.render;\n			data = data || this.state;\n			options = options || {};\n\n			var promiseAll = this.promiseAll;\n			var frag = renderer(data, options);\n\n			function waitForPromises(){\n				var readyPromises = [];\n				if(data.__readyPromises) {\n					readyPromises = data.__readyPromises;\n					data.__readyPromises = [];\n				}\n\n				if(readyPromises.length === 0) {\n					if(doc) {\n						var oldDoc = can.document;\n						can.document = doc;\n						can.appendChild(doc.body, frag, doc);\n						can.document = oldDoc;\n					}\n\n					return new can.Deferred().resolve();\n				}\n\n				return promiseAll(readyPromises).then(waitForPromises);\n			}\n\n			return waitForPromises().then(function(){\n				return {\n					fragment: frag,\n					data: data.__pageData\n				};\n			});\n		},\n		' +
((__t = ( ases )) == null ? '' : __t) +
'\n	};\n	var __isNW = (function(){\n		try{var nr = System._nodeRequire; return nr && nr(\'nw.gui\') !== \'undefined\';}catch(e){return false;}\n	})();\n\n	if(typeof steal !== \'undefined\' && (__isNW || !(typeof process === \'object\' && {}.toString.call(process) === \'[object process]\')))\n		steal.done().then(function() { __export.start(); });\n\n	return __export;\n});\n';

}
return __p
}
});