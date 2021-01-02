

var roleUpgraderRoom2 = {

    run: function(creep) {

        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }
	    
	    if(creep.room === Game.spawns['Spawn1'].room){
	        creep.moveTo(new RoomPosition(48, 35, 'W8N7'));
	    }
	    else if(creep.room === Game.rooms['W8N7']){
	        creep.moveTo(new RoomPosition(48, 35, 'W8N6'));
	    }
	    else if(creep.memory.upgrading) {
	        var controller = Game.getObjectById("392007721c09ef4")
            if(creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var source = Game.getObjectById("213d07721c097c0");
            //var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        
	}
};

module.exports = roleUpgraderRoom2;