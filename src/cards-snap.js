const cards = {
    locations: [
        {
            title: 'Asgard',
            ability: 'After turn 4, whoever is winning here draws 2'
        },
        {
            title: 'Atlantis',
            ability: 'If you only have one card here, it has +5 Power'
        },
        {
            title: 'Avengers Compound',
            ability: 'On turn 5, all cards must be played here'
        },
        {
            title: 'Baxter Building',
            ability: 'Whoever is winning this location gets +3 Power at the others'
        },
        {
            title: 'Castle Blackstone',
            ability: 'The player winning here gets +1 Energy each turn'
        },
        {
            title: 'Crimson Cosmos',
            ability: 'Cards that cost 1, 2, or 3 can\'t be played here'
        },
        {
            title: 'Crown City',
            ability: 'Whoever is winning here gets +4 Power at adjacent locations'
        },
        {
            title: 'Castle Zemo',
            ability: 'The first card you play here switches sides'
        },
        {
            title: 'Central Park',
            ability: 'Add a 1/1 squirrel to each location'
        },
        {
            title: 'Altar of Death',
            ability: 'After you play a card here, destroy it to get +2 Energy next turn'
        },
    ],
    characters: [
        {
            title: 'Misty Knight',
            cost: 1,
            power: 2,
            trigger: '',
            ability: '',
        },
        {
            title: 'Hawkeye',
            cost: 1,
            power: 1,
            trigger: 'On reveal',
            ability: 'If you play a card at this location next turn, +3 Power',
        },
        {
            title: 'Iron Fist',
            cost: 1,
            power: 2,
            trigger: 'On reveal',
            ability: 'After you play your next card, move it one location to the left',
        },
        {
            title: 'Nightcrawler',
            cost: 1,
            power: 2,
            trigger: '',
            ability: 'You can move this once'
        },
        {
            title: 'Nova',
            cost: 1,
            power: 1,
            trigger: '',
            ability: 'When this card is destroyed, give your cards +1 Power'
        },
        {
            title: 'Rocket Racoon',
            cost: 1,
            power: 1,
            trigger: 'On reveal',
            ability: 'If your opponent played a card here this turn, +4 Power'
        },
        {
            title: 'Blade',
            cost: 1,
            power: 3,
            trigger: 'On reveal',
            ability: 'Discard the rightmost card from your hand'
        },
        {
            title: 'Elektra',
            cost: 1,
            power: 2,
            trigger: 'On reveal',
            ability: 'Destroy an enemy 1-Cost card here'
        },
        {
            title: 'Agent 13',
            cost: 1,
            power: 2,
            trigger: 'On reveal',
            ability: 'Add a random card to your hand'
        },
        {
            title: 'Ant Man',
            cost: 1,
            power: 1,
            trigger: 'Ongoing',
            ability: 'If your side of this location is full, +4 Power'
        },
        {
            title: 'Squirrel Girl',
            cost: 1,
            power: 2,
            trigger: 'On reveal',
            ability: 'Add a 1-Power Squirrel to each other location'
        },
        {
            title: 'Yondu',
            cost: 1,
            power: 2,
            trigger: 'On reveal',
            ability: 'Destroy the lowest-Cost card in your opponent\'s hand'
        },
        {
            title: 'Medusa',
            cost: 2,
            power: 2,
            trigger: 'On reveal',
            ability: 'If this is the middle location, +3 Power'
        },
        {
            title: 'Kraven',
            cost: 2,
            power: 2,
            trigger: '',
            ability: 'When a card moves here, this gains +2 Power'
        },
        {
            title: 'Scarlet Witch',
            cost: 2,
            power: 3,
            trigger: 'On reveal',
            ability: 'Replace this location with a new one'
        },
        {
            title: 'Carnage',
            cost: 2,
            power: 2,
            trigger: 'On reveal',
            ability: 'Destroy your other cards here. +2 Power for each destroyed'
        },
        {
            title: 'Colossus',
            cost: 2,
            power: 3,
            trigger: 'Ongoing',
            ability: 'Can\'t be destroyed, moved, or have its Power reduced'
        },
        {
            title: 'Doctor Strange',
            cost: 2,
            power: 3,
            trigger: 'On reveal',
            ability: 'Move your highest-Power card(s) to this location'
        },
        {
            title: 'Forge',
            cost: 2,
            power: 2,
            trigger: 'On reveal',
            ability: 'Give the next card you play +2 Power'
        },
        {
            title: 'Angela',
            cost: 2,
            power: 0,
            trigger: '',
            ability: 'After you play a card here, +2 Power'
        },
        {
            title: 'Star-Lord',
            cost: 2,
            power: 2,
            trigger: 'On reveal',
            ability: 'If your opponent played a card here this turn, +4 Power'
        },
        {
            title: 'Dagger',
            cost: 2,
            power: 0,
            trigger: '',
            ability: 'When this card moves to a location, +3 Power for each enemy card there'
        },
        {
            title: 'Groot',
            cost: 3,
            power: 3,
            trigger: 'On reveal',
            ability: 'If your opponent played a card here this turn, +4 Power'
        },
        {
            title: 'Killmonger',
            cost: 3,
            power: 3,
            trigger: 'On reveal',
            ability: 'Destroy ALL 1-Cost cards'
        },
        {
            title: 'Lady Sif',
            cost: 3,
            power: 5,
            trigger: 'On reveal',
            ability: 'Discard the highest-cost card from your hand'
        },
        {
            title: 'Mister Fantastic',
            cost: 3,
            power: 2,
            trigger: 'Ongoing',
            ability: 'Adjacent locations have +2 Power'
        },
        {
            title: 'Punisher',
            cost: 3,
            power: 3,
            trigger: 'Ongoing',
            ability: '+1 Power for each enemy card here'
        },
        {
            title: 'Bishop',
            cost: 3,
            power: 1,
            trigger: '',
            ability: 'After you play a card, this gains +1 Power'
        },
        {
            title: 'Captain America',
            cost: 3,
            power: 3,
            trigger: 'Ongoing',
            ability: 'Your other cards here have +1 Power'
        },
        {
            title: 'Deathlok',
            cost: 3,
            power: 5,
            trigger: 'On reveal',
            ability: 'Destroy your other cards here'
        },
        {
            title: 'Jessica Jones',
            cost: 4,
            power: 5,
            trigger: 'On reveal',
            ability: 'If you don\'t play a card at this location next turn, +4 Power'
        },
        {
            title: 'Ka-Zar',
            cost: 4,
            power: 4,
            trigger: 'Ongoing',
            ability: 'Your 1-Cost cards have +1 Power'
        },
        {
            title: 'Namor',
            cost: 4,
            power: 6,
            trigger: 'Ongoing',
            ability: '+5 Power if this is your only card here'
        },
        {
            title: 'The Thing',
            cost: 4,
            power: 6,
            trigger: '',
            ability: ''
        },
        {
            title: 'Jubilee',
            cost: 4,
            power: 1,
            trigger: 'On reveal',
            ability: 'Add the top card of the draw pile to this location'
        },
        {
            title: 'Miles Morales',
            cost: 4,
            power: 5,
            trigger: '',
            ability: 'If a card moved last turn, this costs 1'
        },
        {
            title: 'Gamora',
            cost: 5,
            power: 8,
            trigger: 'On reveal',
            ability: 'If your opponent played a card here this turn, +4 Power'
        },
        {
            title: 'Iron Man',
            cost: 5,
            power: 0,
            trigger: 'Ongoing',
            ability: 'Your total Power is doubled here'
        },
        {
            title: 'Klaw',
            cost: 5,
            power: 4,
            trigger: 'Ongoing',
            ability: 'The location to the right has +8 Power'
        },
        {
            title: 'Blue Marvel',
            cost: 5,
            power: 3,
            trigger: 'Ongoing',
            ability: 'Your other cards have +1 Power'
        },
        {
            title: 'Hulk',
            cost: 6,
            power: 12,
            trigger: '',
            ability: ''
        },
        {
            title: 'Heimdall',
            cost: 6,
            power: 9,
            trigger: 'On reveal',
            ability: 'Move your other cards one location to the left'
        },
    ],
}

export default cards;