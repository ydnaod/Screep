

var roleSoldierRoom2Six = {

    run: function(creep) {
        var creepTargets = creep.room.find(FIND_HOSTILE_CREEPS);
        var structureTargets = creep.room.find(FIND_HOSTILE_STRUCTURES);
        var targets = creepTargets.concat(structureTargets);
        if(creep.memory.scouting && targets) {
            creep.memory.scouting = false;
            creep.say('attack');
	    }
	    if(!creep.memory.scouting && !targets) {
	        creep.memory.scouting = true;
	        creep.say('scouting');
	    }
	    if(creep.room === Game.spawns['Spawn2'].room){
            creep.moveTo(new RoomPosition(9, 31, 'W8N5'));
        }
        else if(creep.attack(targets[0]) !== ERR_INVALID_TARGET){
            //var sources = creep.room.find(FIND_SOURCES);
            if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        /*else if(creep.room.controller && !creep.room.controller.my) {
             if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
             creep.moveTo(creep.room.controller);
        }
}*/
        else{
            creep.moveTo(44, 18);
        }
        //console.log((creep.attack(targets[0])))
	}
};

module.exports = roleSoldierRoom2Six;