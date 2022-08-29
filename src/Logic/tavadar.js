const tavadar = {
  name: "Tavadar",
  race: "Aasimar",
  hp: {
    current: 45,
    max: 45,
  },
  class: [
    {
      class: "Monk",
      subClass: "Way of the Drunken Master",
      level: 5,
    },
    {
      class: "Warlock",
      subClass: "The Great Old One",
      level: 1,
    },
  ],
  stats: [
    {
      name: "Strength",
      base: 14,
      mod: 2,
      save: 5,
      pro: true,
    },
    {
      name: "Dexterity",
      base: 17,
      mod: 3,
      save: 6,
      pro: true,
    },
    {
      name: "Constitution",
      base: 13,
      mod: 3,
      save: 2,
      pro: false,
    },
    {
      name: "Intelligence",
      base: 9,
      mod: -1,
      save: -1,
      pro: false,
    },
    {
      name: "Wisdom",
      base: 15,
      mod: 4,
      save: 3,
      pro: false,
    },
    {
      name: "Charisma",
      base: 16,
      mod: 6,
      save: 4,
      pro: false,
    },
  ],

  skills: [
    {
      name: "Acrobatics",
      mod: "DEX",
      pro: true,
      bonus: 6,
    },
    {
      name: "Animal Handling",
      mod: "WIS",
      pro: false,
      bonus: 3,
    },
    {
      name: "Arcana",
      mod: "INT",
      pro: false,
      bonus: -1,
    },
    {
      name: "Athletics",
      mod: "STR",
      pro: false,
      bonus: 2,
    },
    {
      name: "Deception",
      mod: "CHA",
      pro: false,
      bonus: 4,
    },
    {
      name: "Histroy",
      mod: "INT",
      pro: false,
      bonus: -1,
    },
    {
      name: "Insight",
      mod: "WIS",
      pro: false,
      bonus: 3,
    },
    {
      name: "Intimidation",
      mod: "CHA",
      pro: false,
      bonus: 4,
    },
    {
      name: "Investigation",
      mod: "INT",
      pro: false,
      bonus: -1,
    },
    {
      name: "Medicine",
      mod: "WIS",
      pro: false,
      bonus: 3,
    },
    {
      name: "Nature",
      mod: "INT",
      pro: false,
      bonus: -1,
    },
    {
      name: "Perception",
      mod: "WIS",
      pro: false,
      bonus: 3,
    },
    {
      name: "Performance",
      mod: "CHA",
      pro: true,
      bonus: 7,
    },
    {
      name: "Persuasion",
      mod: "CHA",
      pro: false,
      bonus: 4,
    },
    {
      name: "Religion",
      mod: "INT",
      pro: false,
      bonus: -1,
    },
    {
      name: "Sleight of Hand",
      mod: "DEX",
      pro: false,
      bonus: 3,
    },
    {
      name: "Stealth",
      mod: "DEX",
      pro: true,
      bonus: 6,
    },
    {
      name: "Survival",
      mod: "WIS",
      pro: false,
      bonus: 3,
    },
  ],

  misc: {
    ac: 16,
    speed: 40,
    initiative: 3,
    inspiration: true,
  },

  languages: ["common", "celesital"],

  attacks: [
    {
      name: "A Fucking Gun",
      type: "Ranged Weapon",
      hit: 4,
      range: 50,
      damage: {
        num: 2,
        type: 6,
        add: 4,
      },
    },
    {
      name: "Luck Blade",
      type: "Shortsword",
      hit: 6,
      range: 5,
      damage: {
        num: 1,
        type: 6,
        add: 3,
      },
    },

    {
      name: "Chill Touch",
      type: "Cantrip-Warlock",
      hit: 7,
      range: 120,
      damage: {
        num: 2,
        type: 8,
        add: 0,
      },
    },
    {
      name: "Eldritch Blast",
      type: "Cantrip-Warlock",
      hit: 7,
      range: 120,
      damage: {
        num: 1,
        type: 10,
        add: 0,
      },
    },
    {
      name: "Unarmed Strike",
      type: "Melee Attack-Martial Arts",
      hit: 6,
      range: 5,
      damage: {
        num: 1,
        type: 6,
        add: 3,
      },
    },
  ],

  spells: [
    {
      name: "Chill Touch",
      type: "Cantrip",
      hit: 7,
      range: 120,
      damage: {
        num: 2,
        type: 8,
        add: 0,
      },
    },
    {
      name: "Eldritch Blast",
      type: "Cantrip",
      hit: 7,
      range: 120,
      damage: {
        num: 1,
        type: 10,
        add: 0,
      },
    },
    {
      name: "Armor of Agathys",
      type: "Warlock",
      hit: undefined,
      range: "Self",
      damage: {
        num: 0,
        type: null,
        add: 5,
        other: "5 Ice Damage on Touch",
      },
    },
    {
      name: "Hellish Rebuket",
      type: "Warlock",
      hit: 15,
      range: 60,
      damage: {
        num: 2,
        type: 10,
        add: 0,
      },
    },
  ],
  bonusAttack: [
    {
      name: "Unarmed Strike",
      type: "Melee Attack-Martial Arts",
      hit: 6,
      range: 5,
      damage: {
        num: 1,
        type: 6,
        add: 3,
      },
    },
    {
      name: "Flurry of Blows",
      type: "Melee Attack-Martial Arts",
      hit: 6,
      range: 5,
      damage: {
        num: 1,
        type: 6,
        add: 3,
      },
    },
  ],
  reactions: [
    {
      name: "Deflect Missiles",
      type: "",
      hit: "-",
      range: 0,
      damage: {
        num: 1,
        type: 10,
        add: 8,
      },
    },
    {
      name: "Deflect Missiles Attack",
      type: "Ranged Attack-Martial Arts",
      hit: 6,
      range: 20,
      damage: {
        num: 1,
        type: 6,
        add: 3,
      },
    },
  ],
};

export default tavadar;
