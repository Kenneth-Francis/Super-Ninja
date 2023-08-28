class Ninja {
  constructor(name, health=90, speed=3, strength=3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(this.name);
    return this;
  }

  showStats() {
    console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
    return this;
  }

  drinkSake() {
    console.log(`${this.name} drank sake. Health bolstered`);
    this.health += 10;
    return this;
  }
}

const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName().showStats().drinkSake().showStats();


class Sensei extends Ninja {
  constructor(name, wisdom=10) {
    super(name, 200, 10, 10)
    this.wisdom = wisdom
  }

  speakWisdom() {
    super.drinkSake();
    console.log("Mayoeba Yabureru - Hesitation is Defeat");
    return this;
  }
}

const sensei1 = new Sensei("Isshin Ashina")
sensei1.speakWisdom().showStats()
