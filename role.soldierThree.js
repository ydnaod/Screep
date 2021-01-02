
var roleSoldierThree = {

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
	    if(creep.room === Game.spawns['Spawn1'].room){
            creep.moveTo(new RoomPosition(9, 31, 'W6N7'));
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
            creep.moveTo(38, 19);
        }
        //console.log((creep.attack(targets[0])))
	}
};

module.exports = roleSoldierThree;