

var roleScout = {

    run: function(creep) {
        var targets = creep.room.find(FIND_HOSTILE_CREEPS);
        console.log(creep.attack(targets[0]))
	    
	    if(creep.room === Game.spawns['Spawn1'].room){
	        creep.moveTo(new RoomPosition(48, 35, 'W6N7'));
	    }
	    else if(creep.room === Game.getObjectById('2d930772d9842f1').room){
	        creep.moveTo(new RoomPosition(48, 35, 'W5N7'));
	    }
	    else if(creep.attack(targets[0]) !== ERR_INVALID_TARGET){
	        creep.moveTo(26, 5);
            //var sources = creep.room.find(FIND_SOURCES);
            if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
	    else{
	        creep.moveTo(new RoomPosition(10, 23, 'W5N8'));
	    }
        console.log(creep.attack(targets[0]))
        //console.log(Game.getObjectById('2d930772d9842f1').room);
	}
};

module.exports = roleScout;