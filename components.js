import EntityManager from 'ensy';

let manager = new EntityManager();

// Create a component and add it to the manager.
const PlayerComponent = {
    name: 'Player',
    description: "The player's state",
    state: {
        life: 100,
        strength: 18,
        charisma: 3,
    }
};
manager.addComponent(PlayerComponent.name, PlayerComponent);
console.log(manager);

// Create a new entity.
var playerId = manager.createEntity(['Player']);

// Update the player's state:
var playerData = manager.getComponentDataForEntity('Player', playerId);
playerData.life = 80;

// Which is equivalent to:
manager.updateComponentDataForEntity('Player', playerId, {
    life: 80,
});

console.log(playerData);
// { life: 80, strength: 18, charisma: 3 }
