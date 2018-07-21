class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}. I'm a ${this.type}`)
  }
}

class Wizard extends Player{
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`Weeeee, I'm a ${this.type}.`)
  }
}

const wizard1 = new Wizard('Jeff', 'Healer');
const wizard2 = new Wizard('Michelle', 'Dark Magic');
const wizard3 = new Wizard('Hedwig', 'Owl');
const wizard4 = new Wizard('Dallin', 'Random Wizard');
const wizard5 = new Wizard('Preston', 'Booty Slapper');
