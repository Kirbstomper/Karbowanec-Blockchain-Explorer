var api = 'http://localhost:11898';
var blockTargetInterval = 30;
var coinUnits = 100;
var symbol = 'TRTL';
var refreshDelay = 30000;


//Add mining pools to get stats from in this format [poolUrl, poolStatsAPIURL]
var networkStat = {
    "trtl": [
		["Z-pool.com","http://z-pool.com:8117/stats"],
		["turtle.atpool.party","http://turtle-eu.atpool.party:8117/stats"],
		["pool.turtleco.in","https://pool.turtleco.in/api/live_stats"],
		["turtlepool.space","http://eu.turtlepool.space:8117/live_stats"]
		]
};