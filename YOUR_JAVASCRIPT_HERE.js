// Declaring Hero Object 

const hero = {
    name: "Ice",
    heroic: true,
    inventory: [],
    health: 10,
    weapon:{
        type: "Sword",
        damage: 2
    }
}

// Resting function 

function rest(person) { 
    if (person.health === 10) {
      alert('Full Health')
    }
    person.health = 10
    return person
  }

// Picking up items function

function pickUpItem(person, weapon){
  person.inventory.push(weapon)
}

// Equipping a weapon

function equipWeapon(person) {
	if (person.inventory.length < 1) {
		return
	}
	person.weapon = person.inventory[0]
}

// Restore health

document.getElementById('inn').onclick = function(){
  hero.health = 10
}

// Equip hero w/ first inventory item

document.getElementById('bag').onclick = function(){
  hero.weapon = hero.inventory[0]
}

// Setting your hero's name

const inputName = hero.name(window.prompt("Type your Hero's name here", ""))
