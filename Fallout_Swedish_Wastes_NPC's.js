
//Character constructor where the player and enemies will receive their //attributes from.n
function Character(health, maxHealth) {
    this.health = health;
    this.maxHealth = maxHealth;
}
var statarray = [health, Exhaustion, XP];
// A hero is a Character + a few properties
function Hero (health, maxHealth) {
    //
    Character.apply(this, arguments);
    //
    this.state = "normal";
    this.awoken = Math.round(Math.random());
    this.Exhaustion = 10;
    this.maxExhaustion = 10;
    this.XP = 0;
    this.level = 1;
    this.nextLevel = this.level + 1;
}
