define([
	"./init",
	"@steal",
	"can-zone"
], function(autorenderInit, steal){
	var l = steal.loader;
	var isDevelopment = l.isEnv("development") && !l.isPlatform("build");

	var zoneOpts = {
		useZones: true,
		useDebug: isDevelopment,
		timeout: Number(l.autorenderTimeout || 5000),
		debugBrk: isDevelopment && l.autorenderDebugBreak
	};

	return autorenderInit(zoneOpts, isDevelopment);
});
