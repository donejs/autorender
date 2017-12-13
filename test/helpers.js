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

exports.makeDoc = makeDoc;
exports.makeContextForDocument = makeContextForDocument;
exports.Request = Request;
