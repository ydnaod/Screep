

var roleUpgraderThree = {

    run: function(creep) {

        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }
	    if(creep.memory.upgrading) {
	        var controller = Game.getObjectById("6aa0077274df11c")
            if(creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else if(creep.room === Game.spawns['Spawn1'].room && creep.store.getFreeCapacity() == 100){
            creep.moveTo(new RoomPosition(9, 31, 'W6N7'));
        }
        else {
            var source = Game.getObjectById("c6ee0772d9884c3");
            console.log(creep.harvest(source));
            //var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        
	}
};

module.exports = roleUpgraderThree;