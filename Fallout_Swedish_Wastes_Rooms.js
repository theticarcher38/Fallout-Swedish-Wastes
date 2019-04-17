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
            "west": "Bedroom3",
            "east": "Bedroom4",
            "south": "Hallway2",
            "north": "Supply Closet"
        }
    },
        
        "Bedroom1": {
            "description": "You awaken, upon opening your eyes which seem to have been shut for ages\
            you are met with a floor that is covered in water. You notice at the foot of your bed there\
            is a small metal box with a baseball bat laying next to it. The only exit that can be seen is\
            a door that leads <b>east</b>. There is also a closed metal door to the <b>north</b>. Probably the closet...",
            "directions": {
                "east": "Hallway1",
                "north": "Closet1"
            }
        },
        
        "Bedroom3": {
            "description": "This bedroom is still flooded, and now you notice that the light is flickering. Power could be failing across the vault along with the water plant. <b>north</b> is your closet, and <b>east</b> is the exit.",
            "directions": {
                 "east": "Hallway1",
                "north": "Closet1"
            }
        },
    
    "Bedroom2": {
        "description": "This bedroom is in fairly bad condition. The water has weakened the bed and it has collapsed. A skeleton lays slumped against the wall, a <i>9mm Pistol</i> in his hand. There is a closet to the <b>north</b> which is closed behind its metal door. You can aslo go <b>west</b> back into the hallway. ",
        "directions": {
        "west": "Hallway1",
        "north": "Closet2"
        }
    },
    
    "Bedroom4": {
        "description": "The skeleton lays with his hands open, the pistol gone as you have taken it. The bed starts to collapse even more with the vibrations of your feet.",
        "directions": {
        "west": "Hallway1",
        "north": "Closet2"
        }
    },
    

    "Hallway2": {
        "description": "The hallway widens, two large blast-doors on the sides house the power station and water treatment plant. <b>east</b> is the Power Station and <b>west</b> is the Water Treatment Plant... Also, to the <b>south</b> there lies another hallway.",
        "directions": {
            "west": "Water Treatement Plant",
            "east": "Power Station",
            "south": "Hallway3"
        }
    },

    "Water Treatement Plant": {
        "description": "Text Goes Here",
        "directions": {
            "west": "Hallway2",
        }
    },

    "Power Station": {
        "description": "Text Goes Here",
        "directions": {
            "west": "Hallway2",
        }
    },

    "Hallway3": {
        "description": "Text Goes Here",
        "directions": {

        }
    },
    
    "Closet1": {
        "description": "The closet is baren, and nothing is left besides a few vault suits. Something red catches your eye, and a flashback to when you were a child envelops your memories. You see your <i>lucky hat</i>, which was given to you by your father when you were young.",
        "directions": {
            "south": "Bedroom3"
        }
    },
    
     "Closet2": {
        "description": "Text Goes Here",
        "directions": {
            "south": "Bedroom4"
        }
    }

};
