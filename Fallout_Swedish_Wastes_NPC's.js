//Character constructor where the player and enemies will receive their //attributes from.n
function Character(health, maxHealth) {
    this.health = health;
    this.max_health = maxHealth;
}

// A hero is a Character + a few properties
function Hero (name, health, max_health) {
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
