// main code

var roleHarvester = require('role.harvester');
var roleHarvesterFast = require('role.harvesterFast');
var roleHarvesterNine = require('role.harvesterNine');
var roleUpgrader = require('role.upgrader');
var roleUpgraderThree = require('role.upgraderThree');
var roleUpgraderNine = require('role.upgraderNine');
var roleBuilder = require('role.builder');
var roleSoldierThree = require('role.soldierThree');
var roleSoldier = require('role.soldier');
var roleSoldierNine = require('role.soldierNine');
var roleScout = require('role.scout');
var roleClaimer = require('role.claimer');
var roleAttackerAndy = require('role.attackerAndy');

//room 2 roles
var roleUpgraderRoom2 = require('role.upgraderRoom2');
var roleBuilderRoom2 = require('role.builderRoom2');
var roleHarvesterRoom2 = require('role.harvesterRoom2');
var roleUpgraderRoom2Six = require('role.upgraderRoom2Six');
var roleSoldierRoom2Six = require('role.soldierRoom2Six');

module.exports.loop = function () {

    
    //console.log(Game.rooms['W8N6']);
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'upgraderThree') {
            roleUpgraderThree.run(creep);
        }
        if(creep.memory.role == 'upgraderNine') {
            roleUpgraderNine.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'harvesterNine') {
            roleHarvesterNine.run(creep);
        }
        if(creep.memory.role == 'harvesterFast') {
            roleHarvesterFast.run(creep);
        }
        if(creep.memory.role == 'soldier') {
            roleSoldier.run(creep);
        }
        if(creep.memory.role == 'soldierThree') {
            roleSoldierThree.run(creep);
        }
        if(creep.memory.role == 'soldierNine') {
            roleSoldierNine.run(creep);
        }
        if(creep.memory.role == 'scout') {
            roleScout.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'attackerAndy') {
            roleAttackerAndy.run(creep);
        }
        
        //room 2
        if(creep.memory.role == 'upgraderRoom2') {
            roleUpgraderRoom2.run(creep);
        }
        if(creep.memory.role == 'builderRoom2') {
            roleBuilderRoom2.run(creep);
        }
        if(creep.memory.role == 'harvesterRoom2') {
            roleHarvesterRoom2.run(creep);
        }
        if(creep.memory.role == 'upgraderRoom2Six') {
            roleUpgraderRoom2Six.run(creep);
        }
        if(creep.memory.role == 'soldierRoom2Six') {
            roleSoldierRoom2Six.run(creep);
        }
    }
    
    //minimum count for roles in room1
    var harvesterMin = 2
    var upgraderMin = 3
    //ideal count for roles
    
    var harvesterNineCount = 1
    var harvesterFastCount = 3
    
    var upgradersCount = 4
    var upgradersThreeCount = 5
    var upgradersNineCount = 3
    
    var buildersCount = 2
    
    var soldiersCount = 1
    var soldiersNineCount = 1
    var soldiersThreeCount = 2
    
    var scoutsCount = 0
    
    //minimum count for roles in room2
    var harvestersRoom2Min = 2
    var upgradersRoom2Min = 4
    var buildersRoom2Min = 2
    
    //room 2 count
    var upgradersRoom2SixCount = 2
    var soldiersRoom2SixCount = 1
    
    //harvesters
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if(harvesters.length < harvesterMin) {
        var newName = 'Harvester' + Game.time;
        //console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,CARRY,MOVE,WORK,WORK,MOVE,CARRY,MOVE,CARRY,WORK,WORK,CARRY,MOVE,CARRY,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }
    
    //harvesters fast that harvest from upgrader source
    var harvestersFast = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFast');

    if(harvestersFast.length < harvesterFastCount) {
        var newName = 'HarvesterFast' + Game.time;
        //console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,CARRY,MOVE], newName, 
            {memory: {role: 'harvesterFast'}});
    }

    //upgrader
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < upgradersCount && harvesters.length >= harvesterMin && harvestersFast.length >= harvesterMin) {
        var newName = 'Upgrader' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,CARRY,WORK,MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }
    
    //harvesterNine - harvesting the room to 9'Oclock
    
    var harvestersNine = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterNine');

    if(harvestersNine.length < harvesterNineCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin) {
        var newName = 'HarvesterNine' + Game.time;
        //console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE,WORK,MOVE,MOVE], newName, 
            {memory: {role: 'harvesterNine'}});
    }
    
    //UpgraderThree - Mines the room in 3 o clock position for controller
    var upgradersThree = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderThree');
    var soldiersThree = _.filter(Game.creeps, (creep) => creep.memory.role == 'soldierThree');

    if(upgradersThree.length < upgradersThreeCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin && soldiersThree.length >= soldiersThreeCount) {
        var newName = 'UpgraderThree' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,WORK,MOVE,MOVE,CARRY], newName, 
            {memory: {role: 'upgraderThree'}});
    }
    
    //UpgraderNine - Mines the room in 9 o clock position for controller
    var upgradersNine = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderNine');

    if(upgradersNine.length < upgradersNineCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin) {
        var newName = 'UpgraderNine' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,WORK,MOVE,MOVE,CARRY,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgraderNine'}});
    }
    
    //builder
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    var constructionSites = Game.rooms['W7N7'].find(FIND_CONSTRUCTION_SITES);
    if(builders.length < buildersCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin && constructionSites.length !== 0) {
        var newName = 'Builder' + Game.time;
        //console.log('Spawning new Builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,WORK,MOVE,MOVE,CARRY], newName, 
            {memory: {role: 'builder'}});
    }
    
    //Soldiers to defend the main room
    var soldiers = _.filter(Game.creeps, (creep) => creep.memory.role == 'soldier');

    if(soldiers.length < soldiersCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin) {
        var newName = 'Soldier' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK], newName, 
            {memory: {role: 'soldier'}});
    }
    
    //Soldiers to defend the 3 o clock room

    if(soldiersThree.length < soldiersThreeCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin) {
        var newName = 'SoldierrThree' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], newName, 
            {memory: {role: 'soldierThree'}});
    }
    
    //Soldiers to defend the 9 o clock room
    var soldiersNine = _.filter(Game.creeps, (creep) => creep.memory.role == 'soldierNine');

    if(soldiersNine.length < soldiersNineCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin) {
        var newName = 'SoldierNine' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK], newName, 
            {memory: {role: 'soldierNine'}});
    }
    
    //Scout to attack Andy
    var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout');

    if(scouts.length < scoutsCount && harvesters.length >= harvesterMin && upgraders.length >= upgraderMin) {
        var newName = 'Scout' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK], newName, 
            {memory: {role: 'scout'}});
    }
    
    
    //ROOM2
    
    //harvesters fast that harvest for room 2
    var harvestersRoom2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterRoom2');

    if(harvestersRoom2.length < harvestersRoom2Min) {
        var newName = 'HarvesterRoom2' + Game.time;
        //console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,MOVE,CARRY,MOVE], newName, 
            {memory: {role: 'harvesterRoom2'}});
    }
    
    
    //UpgraderRoom2 
    var upgradersRoom2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderRoom2');

    if(upgradersRoom2.length < upgradersRoom2Min && harvestersRoom2.length >= harvestersRoom2Min) {
        var newName = 'UpgraderRoom2' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,MOVE,WORK], newName, 
            {memory: {role: 'upgraderRoom2'}});
    }
    
    //UpgraderRoom2Six - mines 6 o clock position
    var upgradersRoom2Six = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderRoom2Six');

    if(upgradersRoom2Six.length < upgradersRoom2SixCount && harvestersRoom2.length >= harvestersRoom2Min) {
        var newName = 'UpgraderRoom2Six' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,MOVE,WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgraderRoom2Six'}});
    }
    
    //builderRoom2
    var buildersRoom2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builderRoom2');
    var constructionSitesRoom2 = Game.rooms['W8N6'].find(FIND_CONSTRUCTION_SITES);
    if(buildersRoom2.length < buildersRoom2Min  && harvestersRoom2.length >= harvestersRoom2Min && constructionSitesRoom2.length !== 0) {
        var newName = 'BuilderRoom2' + Game.time;
        //console.log('Spawning new Builder: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,MOVE,WORK,CARRY], newName, 
            {memory: {role: 'builderRoom2'}});
    }
    
    //SoldierrRoom2Six - protects 6 o clock position
    var soldiersRoom2Six = _.filter(Game.creeps, (creep) => creep.memory.role == 'soldierRoom2Six');

    if(soldiersRoom2Six.length < soldiersRoom2SixCount && harvestersRoom2.length >= harvestersRoom2Min) {
        var newName = 'SoldierRoom2Six' + Game.time;
        //console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], newName, 
            {memory: {role: 'soldierRoom2Six'}});
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    if(Game.spawns['Spawn2'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn2'].spawning.name];
        Game.spawns['Spawn2'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn2'].pos.x + 1, 
            Game.spawns['Spawn2'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    var tower = Game.getObjectById('935117afd65bd87');
    var tower2 = Game.getObjectById('bb38a67c036e783');
    var tower3 = Game.getObjectById('a45cbafed887b0b');
    var towers = [];
    towers.push(tower);
    towers.push(tower2);
    towers.push(tower3);
    towers.forEach(function(tower){
        if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure && tower.store.getFreeCapacity(RESOURCE_ENERGY) < 200) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    });
    
    /*if(Game.spawns['Spawn1'].store.getUsedCapacity(RESOURCE_ENERGY) > 200){
        Game.spawns['Spawn1'].room.createConstructionSite( 16, 9, STRUCTURE_TOWER );
    }*/
    
}