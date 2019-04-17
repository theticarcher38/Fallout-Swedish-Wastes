//Character constructor where the player and enemies will receive their //attributes from.n
function Character(health, maxHealth) {
    this.health = health;
    this.max_health = maxHealth;
    this.do_dmg = do_dmg;

    //calculates amount of damage done by by finding the 
    // lower number between a (rand int from 0 to personal health - a rand int from 0 to enemy health) and
    function do_dmg(enemy) {
        var m = Math;
        var randDmg = m.round(m.random() * this.health) - m.round(m.random() * enemy.health);
        if (randDmg < 0) randDmg = 0;
        var dmg = m.min(randDmg, enemy.health);
        $('#hp').text(this.health);
        $('#ehp').text(enemy.health -= dmg);
        if (dmg === 0) {
            console.log(this.name + " evades " + enemy.name + "'s attack!");
        } else {
            console.log(this.name + " hurts " + enemy.name + " for " + dmg);
            return enemy.health <= 0;
        }
    }
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