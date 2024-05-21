const cards = {
    "locations": [
        {
            "title": "Boreal Forest",
            "ability": "After turn 4, whoever is winning here draws 2"
        },
        {
            "title": "Lonely Island",
            "ability": "If you only have one card here, it has +5 Influence"
        },
        {
            "title": "Coniferous Woodlands",
            "ability": "On turn 5, all cards must be played here"
        },
        {
            "title": "Natural Escarpment",
            "ability": "Whoever is winning this location gets +3 Influence at the others"
        },
        {
            "title": "Crowded City",
            "ability": "The player winning here gets +1 Energy each turn"
        },
        {
            "title": "Rocky Outcrops",
            "ability": "Cards that cost 1, 2, or 3 can't be played here"
        },
        {
            "title": "Urban Park",
            "ability": "Whoever is winning here gets +4 Influence at adjacent locations"
        },
        {
            "title": "Swampy Marsh",
            "ability": "The first card you play here switches sides"
        },
        {
            "title": "Nature Reserve",
            "ability": "Add a 1/1 squirrel token to each location"
        },
        {
            "title": "Forest Clearing",
            "ability": "After you play a card here, destroy it to get +2 Energy next turn"
        }
    ],
    "characters": [
        {
            "title": "Monarch Butterfly",
            "cost": 1,
            "power": 2,
            "trigger": "",
            "ability": "",
            "description": "A delicate butterfly, symbolizing subtle beginnings."
        },
        {
            "title": "Dragonfly",
            "cost": 1,
            "power": 1,
            "trigger": "On reveal",
            "ability": "If you play a card at this location next turn, +3 Influence",
            "description": "A small but agile insect, thriving with care."
        },
        {
            "title": "Ant",
            "cost": 1,
            "power": 2,
            "trigger": "On reveal",
            "ability": "After you play your next card, move it one location to the left",
            "description": "Essential for colony life, supporting group movement."
        },
        {
            "title": "Grasshopper",
            "cost": 1,
            "power": 2,
            "trigger": "",
            "ability": "You can move this once",
            "description": "A nimble insect that can jump to find better conditions."
        },
        {
            "title": "Beetle",
            "cost": 1,
            "power": 1,
            "trigger": "",
            "ability": "When this card is destroyed, give your cards +1 Influence",
            "description": "Thrives in various environments, symbolizing resilience."
        },
        {
            "title": "Wasp",
            "cost": 1,
            "power": 1,
            "trigger": "On reveal",
            "ability": "If your opponent played a card here this turn, +4 Influence",
            "description": "Toxic and defensive, deterring threats effectively."
        },
        {
            "title": "Praying Mantis",
            "cost": 1,
            "power": 3,
            "trigger": "On reveal",
            "ability": "Your opponent randomly discards a card from your hand",
            "description": "A predatory insect that captures prey."
        },
        {
            "title": "Ladybug",
            "cost": 1,
            "power": 2,
            "trigger": "On reveal",
            "ability": "Destroy an enemy 1-Cost card here",
            "description": "A beneficial insect, protecting plants from pests."
        },
        {
            "title": "Cricket",
            "cost": 1,
            "power": 2,
            "trigger": "On reveal",
            "ability": "Add the top card of the draw pile to your hand",
            "description": "Calling out for a mate."
        },
        {
            "title": "Caterpillar",
            "cost": 1,
            "power": 1,
            "trigger": "Ongoing",
            "ability": "If your side of this location is full, +4 Influence",
            "description": "Forms dense colonies, benefiting from group growth."
        },
        {
            "title": "Firefly",
            "cost": 1,
            "power": 2,
            "trigger": "On reveal",
            "ability": "Add a 1/1 Firefly token to each other location",
            "description": "Illuminates the night, symbolizing spread of light."
        },
        {
            "title": "Hornet",
            "cost": 1,
            "power": 2,
            "trigger": "On reveal",
            "ability": "Destroy the lowest-Cost card in your opponent's hand",
            "description": "Aggressive and invasive, outcompeting others."
        },
        {
            "title": "Brook Trout",
            "cost": 2,
            "power": 2,
            "trigger": "On reveal",
            "ability": "If this is the middle location, +3 Influence",
            "description": "A well-balanced fish, thriving in central waters."
        },
        {
            "title": "Salamander",
            "cost": 2,
            "power": 2,
            "trigger": "",
            "ability": "When a card moves here, this gains +2 Influence",
            "description": "Adaptable and resilient, thriving in various conditions."
        },
        {
            "title": "Northern Pike",
            "cost": 2,
            "power": 3,
            "trigger": "On reveal",
            "ability": "Replace this location with a new one",
            "description": "A predatory fish that can alter its environment."
        },
        {
            "title": "Bullfrog",
            "cost": 2,
            "power": 2,
            "trigger": "On reveal",
            "ability": "Destroy your other cards here. +2 Influence for each destroyed",
            "description": "Benefits from clearing its territory."
        },
        {
            "title": "Snapping Turtle",
            "cost": 2,
            "power": 3,
            "trigger": "Ongoing",
            "ability": "Can't be destroyed, moved, or have its Influence reduced",
            "description": "A tough and defensive creature, immune to most threats."
        },
        {
            "title": "Rainbow Trout",
            "cost": 2,
            "power": 3,
            "trigger": "On reveal",
            "ability": "Move your highest-Influence card(s) to this location",
            "description": "Valued for its strength and adaptability."
        },
        {
            "title": "Perch",
            "cost": 2,
            "power": 2,
            "trigger": "On reveal",
            "ability": "Give the next card you play +2 Influence",
            "description": "A small fish that enhances the ecosystem."
        },
        {
            "title": "Sunfish",
            "cost": 2,
            "power": 0,
            "trigger": "",
            "ability": "After you play a card here, +2 Influence",
            "description": "Gains strength with support."
        },
        {
            "title": "Pickerel",
            "cost": 2,
            "power": 2,
            "trigger": "On reveal",
            "ability": "If your opponent played a card here this turn, +4 Influence",
            "description": "A competitive fish, thriving in challenging conditions."
        },
        {
            "title": "Mudpuppy",
            "cost": 2,
            "power": 0,
            "trigger": "",
            "ability": "When this card moves to a location, +3 Influence for each enemy card there",
            "description": "Thrives in shadowy environments, amid dense growth."
        },
        {
            "title": "Blue Jay",
            "cost": 3,
            "power": 3,
            "trigger": "On reveal",
            "ability": "If your opponent played a card here this turn, +4 Influence",
            "description": "A cunning and resourceful bird, often seen as competitive."
        },
        {
            "title": "Red-Winged Blackbird",
            "cost": 3,
            "power": 3,
            "trigger": "On reveal",
            "ability": "Destroy ALL 1-Cost cards",
            "description": "Aggressive defender of its territory, eliminating small intruders."
        },
        {
            "title": "Northern Cardinal",
            "cost": 3,
            "power": 5,
            "trigger": "On reveal",
            "ability": "Discard the highest-cost card from your hand",
            "description": "A bright and bold bird, making decisive actions."
        },
        {
            "title": "Chickadee",
            "cost": 3,
            "power": 2,
            "trigger": "Ongoing",
            "ability": "Adjacent locations have +2 Influence",
            "description": "Small and social, enhancing the energy of its surroundings."
        },
        {
            "title": "Common Grackle",
            "cost": 3,
            "power": 3,
            "trigger": "Ongoing",
            "ability": "+1 Influence for each enemy card here",
            "description": "Forms large flocks, gaining strength from numbers."
        },
        {
            "title": "Song Sparrow",
            "cost": 3,
            "power": 1,
            "trigger": "",
            "ability": "After you play a card, this gains +1 Influence",
            "description": "A cheerful bird, gaining energy from its surroundings."
        },
        {
            "title": "American Robin",
            "cost": 3,
            "power": 3,
            "trigger": "Ongoing",
            "ability": "Your other cards here have +1 Influence",
            "description": "A common bird, known for its positive impact on its environment."
        },
        {
            "title": "Red-tailed Hawk",
            "cost": 3,
            "power": 5,
            "trigger": "On reveal",
            "ability": "Destroy your other cards here",
            "description": "An aggressive bird, often taking over its space."
        },
        {
            "title": "Chipmunk",
            "cost": 4,
            "power": 5,
            "trigger": "On reveal",
            "ability": "If you don't play a card at this location next turn, +4 Influence",
            "description": "Stores food for later, planning for future gain."
        },
        {
            "title": "Red Squirrel",
            "cost": 4,
            "power": 4,
            "trigger": "Ongoing",
            "ability": "Your 1-Cost cards have +1 Influence",
            "description": "Known for its energy and resourcefulness, enhancing small gains."
        },
        {
            "title": "Flying Squirrel",
            "cost": 4,
            "power": 5,
            "trigger": "",
            "ability": "If a card moved last turn, this costs 1",
            "description": "Glides between trees, thriving with movement."
        },
        {
            "title": "Groundhog",
            "cost": 4,
            "power": 6,
            "trigger": "",
            "ability": "",
            "description": "Known for burrowing and predicting seasons."
        },
        {
            "title": "Hare",
            "cost": 4,
            "power": 1,
            "trigger": "On reveal",
            "ability": "Add the top card of the draw pile to this location",
            "description": "Quick and agile, known for rapid reproduction."
        },
        {
            "title": "Porcupine",
            "cost": 4,
            "power": 6,
            "trigger": "Ongoing",
            "ability": "+5 Influence if this is your only card here",
            "description": "Defends itself with sharp quills, deterring attackers."
        },
        {
            "title": "Beaver",
            "cost": 5,
            "power": 0,
            "trigger": "Ongoing",
            "ability": "Your total Influence is doubled here",
            "description": "Builds strong dams, creating safe habitats."
        },
        {
            "title": "Bobcat",
            "cost": 5,
            "power": 8,
            "trigger": "On reveal",
            "ability": "If your opponent played a card here this turn, +4 Influence",
            "description": "A stealthy and powerful hunter, influencing its territory."
        },
        {
            "title": "Fox",
            "cost": 5,
            "power": 4,
            "trigger": "Ongoing",
            "ability": "The location to the right has +8 Influence",
            "description": "Clever and strategic, impacting nearby areas."
        },
        {
            "title": "Coyote",
            "cost": 5,
            "power": 3,
            "trigger": "Ongoing",
            "ability": "Your other cards have +1 Influence",
            "description": "A versatile and social predator, enhancing group strength."
        },
        {
            "title": "Moose",
            "cost": 6,
            "power": 12,
            "trigger": "",
            "ability": "",
            "description": "A massive and powerful mammal, dominating its environment."
        },
        {
            "title": "Black Bear",
            "cost": 6,
            "power": 9,
            "trigger": "On reveal",
            "ability": "Move your other cards one location to the left",
            "description": "A strong and adaptable animal, rearranging its surroundings."
        }
    ]
}

export default cards;