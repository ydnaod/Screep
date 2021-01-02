
var roleClaimer = {

    run: function(creep) {
	    
	    if(creep.room === Game.spawns['Spawn1'].room){
	        creep.moveTo(new RoomPosition(48, 35, 'W8N7'));
	    }
	    else if(creep.room === Game.getObjectById('1039077215080e1').room){
	        creep.moveTo(new RoomPosition(48, 35, 'W8N6'));
	    }
	    else if(creep.room.controller === Game.getObjectById('392007721c09ef4')) {
            if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
            }
        }
	    else{
	        creep.moveTo(new RoomPosition(19, 26, 'W8N6'));
	    }
	}
};

module.exports = roleClaimer;