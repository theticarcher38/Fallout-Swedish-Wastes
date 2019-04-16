var rooms = {
    "Supply Closet": {
        "description": "The supply closet is small, and after you overlook it there really is nothing of use here. A couple spare-parts and other misc. things. You can leave the supply closet by going <b>south</b>.",
        "directions": {
            "south": "Hallway1"
        }
    },

    "Hallway1": {
        "description": "The narrow hallway leads <b>north</b> to what looks to be a supply closet maybe something\
        in there. It also leads <b>east</b> into what you believe is another bedroom. It also leads <b>south</b>, deeper into the vault.",
        "directions": {
            "west": "Bedroom1",
            "east": "Bedroom2",
            "south": "Hallway2",
            "north": "Supply Closet"
        }
    },

    "Bedroom1": {
        "description": "You awaken, upon opening your eyes which seem to have been shut for ages\
        you are met with a floor that is covered in water. You notice at the foot of your bed there\
        is a small metal box with a baseball bat laying next to it. The only exit that can be seen is\
        a door that leads <b>east</b>.",
        "directions": {
            "east": "Hallway1"
        }
    },
    
    "Bedroom2": {
        "description": "This bedroom is in fairly bad condition. The water has weakened the bed and it has collapsed. A skeleton lays slumped against the wall, a 9mm Pistol in his hand. There is a closet ",
        "directions": {
        "west": "Hallway1"
        }
    },

    "Hallway2": {
        "description": "Text Goes Here",
        "directions": {
            "west": "Water Treatement Plant",
            "east": "Power Station",
            "south": "Hallway3"
        }
    },

    "Water Treatement Plant": {
        "description": "Text Goes Here",
        "directions": {

        }
    },

    "Power Station": {
        "description": "Text Goes Here",
        "directions": {

        }
    },

    "Hallway3": {
        "description": "Text Goes Here",
        "directions": {

        }
    }


};
