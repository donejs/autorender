
window.OTHER_STATE = window.OTHER_STATE || 1;

module.exports = function() {
	var current = window.OTHER_STATE;
	window.OTHER_STATE++;
	return current;
};
