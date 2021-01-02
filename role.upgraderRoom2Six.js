

var roleUpgraderRoom2Six = {

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
	        var controller = Game.getObjectById("392007721c09ef4")
            if(creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else if(creep.room === Game.spawns['Spawn2'].room && !creep.memory.upgrading){
            creep.moveTo(new RoomPosition(39, 24, 'W8N5'));
        }
        else {
            var source = Game.getObjectById("cd680772223fb65");
            //var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        
	}
};

module.exports = roleUpgraderRoom2Six;