var currentRoom = "Bedroom1";
var commands = ["go", "pickup", "inventory", "talk", "stats", "directions"];
var inventory = ["Baseball Bat", "Lucky Hat"];
var directions = ["north", "n", "south", "s", "west", "w", "east", "e"];
var userInput = ('#user-input');

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + userInput + "</p>");
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    }
    else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }


}

function pickUp(item) {
    if(rooms[currentRoom].items[item] !== undefined) {
        items = rooms[currentRoom].items[item];
        var item = userInput.split(" ")[0]
        $('#game-text').append(`<p> ${userInput} </p>`);
        $('#game-text').append(`<p>You picked up ${item}</p>`)
        inventory.push(userInput.split(" ")[0]);
        console.log(`${userInput}`)
        console.log(`${items}`)
    } else {
     $('#game-text').append(`<p>No such item exists in ${currentRoom}</p>`)
     console.log(`${items}`)
    }
}

function diplayCommand() {

}

function displayStats() {
    $('#game-text').append("Here are your stats: " + Character);
}

function showHelp() {
    $('#game-text').append("<p>Here are the possible commands: </p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");

}

function showDirections() {
    $('#game-text').append("<p>Here are the possible directions: </p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < directions.length; i++) {
        $('#game-text').append("<li>" + directions[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function showInventory() {
    if (inventory.length === 0) {
        $('#game-text').append("<p>You are not carrying anything!</p>");
        return;
    }
    $('#game-text').append("<p>Here is your inventory: </p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");

}

function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        case "stats":
            displayStats();
            break;
        case "directions":
            showDirections();
            break;
        case "pickup":
            var item = input.split(" ")[1];
            pickUp(item);
            break;
        default:
            $('#game-text').append("<p>Invalid command!</p>");
    }
}


$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.Bedroom1.description + "</p>");

    $(document).keypress(function(key) {
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value);
        }
    });

});
