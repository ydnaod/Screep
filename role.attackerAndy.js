
var roleAttackerAndy = {

    run: function(creep) {
        var creepTargets = creep.room.find(FIND_HOSTILE_CREEPS);
        var structureTargets = creep.room.find(FIND_HOSTILE_STRUCTURES);
        //var targets = creepTargets.concat(structureTargets);
        var targets = structureTargets
        var target = creep.pos.findClosestByPath(targets);
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
        else if(creep.room === Game.rooms['W6N7']){
            creep.moveTo(new RoomPosition(38, 41, 'W6N8'));
        }

        else{
            if(creep.attack(target == ERR_NOT_IN_RANGE)) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('sah dude')
                creep.attack(target);
            }
            else if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('sah dudeeee')
            }
        }
        /*else{
            creep.attackController(Game.getObjectById("d9cf0772ccaa764"))
            creep.say('sah dude')
        }*/
        //console.log((creep.attack(targets[0])))
	}
};

module.exports = roleAttackerAndy;