import EntityManager from 'ensy';

let manager = new EntityManager();

// Create a component and add it to the manager.
const WizardComponent = {
    name: 'Wizard',
    description: "The Wizard's state",
    state: {
        life: 100,
        strength: 18,
        charisma: 3,
    },
    spellbook: {

    }
};
manager.addComponent(WizardComponent.name, WizardComponent);
console.log(manager);

// Create a new entity.
var WizardId = manager.createEntity(['Wizard']);

// Update the Wizard's state:
var WizardData = manager.getComponentDataForEntity('Wizard', WizardId);
WizardData.life = 80;

// Which is equivalent to:
manager.updateComponentDataForEntity('Wizard', WizardId, {
    life: 80,
});

console.log(WizardData);
// { life: 80, strength: 18, charisma: 3 }
