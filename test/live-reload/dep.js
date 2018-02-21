var id;

var globalZoneId = 0;
function logZone(msg, id) {
	return; // Comment this out for debugging
	var zone = CanZone.current;
	if(!zone.zoneId) {
		zone.zoneId = globalZoneId++;
	}
	console.log(msg, id, 'zone:', zone.zoneId);
}

module.exports = function(){
	return {
		decrement: function(){
			logZone('clearTimeout', id);
			clearTimeout(id);
		},
		increment: function(){
			id = setTimeout(function(){
				logZone('callback', localId);
			}, 10);
			var localId = id;
			logZone('setTimeout', localId);
		}
	};
};
