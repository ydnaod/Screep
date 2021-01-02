
var roleBuilder = {

    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        var target = creep.pos.findClosestByPath(targets);
	        if(target){
	            if(creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}},{ maxRooms: 1});
                }
	        }
            else if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}},{ maxRooms: 1});
                }
            }
            var constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
	    if(constructionSites.length == 0){
	        const repairTargets = creep.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax
            });
    
            repairTargets.sort((a,b) => a.hits - b.hits);
    
            if(repairTargets.length > 0) {
                 if(creep.repair(repairTargets[0]) == ERR_NOT_IN_RANGE) {
                     creep.moveTo(repairTargets[0]);
                }
            }
	        
	    }
	    }
	    else {
	        //upgrader source
	        var source = Game.getObjectById("33bd077274d064f")
	        //container
	        //var source = Game.getObjectById("1ad54afa4fed3d8");
	        //var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms: 1});
            }
	    }
	    
        
	}
};

module.exports = roleBuilder;