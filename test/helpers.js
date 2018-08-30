var loader = require("@loader");

function makeDoc(){
	var doc = document.implementation.createHTMLDocument("Some Title");
	return doc;
}

function makeContextForDocument(render, document) {
	var proto = Object.getPrototypeOf(render);
	return Object.create(proto, {
		ownerDocument: {
			get: function() {
				return document;
			}
		}
	});
}

function Request(url) {
	this.url = url;
	this.connection = {};
	this.headers = {};
	// This prop is to make the structure circular
	// To make sure we have tested this as a bug.
	this._self = this;
}

function makeHeaders(pth) {
	return {
		":scheme": "http",
		":authority": "localhost",
		":path": pth
	};
}

function load(moduleName) {
	loader.config({
		autorenderAutostart: false
	});

	return loader.normalize(moduleName)
	.then(function(normalizedName){
		loader["delete"](normalizedName);

		return loader["import"](moduleName);
	});
}

exports.makeDoc = makeDoc;
exports.makeContextForDocument = makeContextForDocument;
exports.makeHeaders = makeHeaders;
exports.Request = Request;
exports.load = load;
