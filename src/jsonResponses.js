const users = { // will eventually put this into another file
  Axe: {
    Name: 'Axe',
    Stats: {
      Strength: 25,
      Strength_Scale: 3.4,
      Agility: 20,
      Agility_Scale: 2.2,
      Intelligence: 18,
      Intelligence_Scale: 1.6,
      Health_Base: 200,
      Health_Regen_Base: 2.75,
      Mana_Base: 75,
      Mana_Regen_Base: 0,
      Armor_Base: -1,
      Attacks_Per_Second_Base: 0.59,
      Damage_Base_Low_End: 27,
      Damage_Base_Top_End: 31,
      Magic_Resistance: 25,
      Movement_Speed: 310,
      Attack_Speed: 100,
      Turn_Rate: 0.6,
      Vision_Range_Low_End: 800,
      Vision_Range_Top_End: 1800,
      Attack_Range: 150,
      Projectile_Speed: 'Instant',
      Attack_Animation_Attack_Point: 0.5,
      Attack_Animation_Back_Swing: 0.5,
      Base_Attack_Time: 1.7,
      Damage_Block: 8,
      Collision_Size: 24,
      Legs: 2,
    },
    Skills: {
      Skill_1: {
        Name: "Berserker's Call",
        Levels: 4,
        Skill_Attributes: {
          Att_1_Name: 'Cast Animation',
          Att_1_Desc: '0.4s Cast Point, 0.5s Cast Backswing',
          Att_2_Name: 'Radius',
          Att_2_Desc: "300 (+ 100 with Berserker's Call Talent)",
          Att_3_Name: 'Armor Bonus',
          Att_3_Desc: '30',
          Att_4_Name: 'Duration',
          Att_4_Desc: '2s/2.4s/2.8s/3.2s',
          Att_5_Name: 'Cooldown',
          Att_5_Desc: '16s/14s/12s/10s',
          Att_6_Name: 'Mana Cost',
          Att_6_Desc: '80/90/100/110',
        },
        Description: 'Axe taunts nearby enemy units, forcing them to attack him, while he gains bonus armor during the duration.',
      },
      Skill_2: {
        Name: 'Battle Hunger',
        Levels: 4,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Magical',
          Att_2_Name: 'Cast Animation',
          Att_2_Desc: '0.3s Cast Point, 0.5s Cast Backswing',
          Att_3_Name: 'Cast Range',
          Att_3_Desc: '750',
          Att_4_Name: 'Radius',
          Att_4_Desc: "0 (400 with Aghanim's Scepter)",
          Att_5_Name: 'Damage per Second',
          Att_5_Desc: '16/24/32/40 (+ 100 with Battle Hunger talent)',
          Att_6_Name: 'Enemy Movement Speed Slow',
          Att_6_Desc: '12%',
          Att_7_Name: 'Self Movement Speed Bonus',
          Att_7_Desc: '12%',
          Att_8_Name: 'Enemy Damage Reduction',
          Att_8_Desc: "0% (30% with Aghanim's Scepter)",
          Att_9_Name: 'Duration',
          Att_9_Desc: '2s/2.4s/2.8s/3.2s',
          Att_10_Name: 'Cooldown',
          Att_10_Desc: '16s/14s/12s/10s',
          Att_11_Name: 'Mana Cost',
          Att_11_Desc: '80/90/100/110',
        },
        Description: 'Enrages an enemy unit, causing it to be slowed and take damage over time until it kills another unit or the duration ends. Axe gains movement speed for each unit affected with Battle Hunger, half speed from creeps.',
      },
      Skill_3: {
        Name: 'Counter Helix',
        Levels: 4,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Pure',
          Att_2_Name: 'Radius',
          Att_2_Desc: '275',
          Att_3_Name: 'Proc Chance',
          Att_3_Desc: '17%/18%/19%/20%',
          Att_4_Name: 'Damage',
          Att_4_Desc: '60/100/140/180',
          Att_5_Name: 'Cooldown',
          Att_5_Desc: '0.3s',
        },
        Description: 'When attacked, Axe has a chance to perform a helix counter attack, dealing pure damage to all nearby enemies.',
      },
      Skill_4: {
        Name: 'Culling Blade',
        Levels: 3,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Magical/Instant Kill',
          Att_2_Name: 'Cast Animation',
          Att_2_Desc: '0.3s Cast Point, 0.5s Cast Backswing',
          Att_3_Name: 'Cast Range',
          Att_3_Desc: '150',
          Att_4_Name: 'Kill Speed Bonus Radius',
          Att_4_Desc: '900',
          Att_5_Name: 'Damage',
          Att_5_Desc: '150/250/300',
          Att_6_Name: 'Kill health Threshhold',
          Att_6_Desc: '250/350/450 (+150 with Culling Blade Talent)',
          Att_7_Name: 'Kill Movement Speed Bonus',
          Att_7_Desc: '30%',
          Att_8_Name: 'Kill Attack Speed Bonus',
          Att_8_Desc: '30',
          Att_9_Name: 'Kill Bonus Duration',
          Att_9_Desc: '6s',
          Att_10_Name: 'Cooldown',
          Att_10_Desc: '75s/65s/55s',
          Att_11_Name: 'Mana Cost',
          Att_11_Desc: '60/120/180',
        },
        Description: 'Axe spots a weakness and strikes, instantly killing an enemy unit with low health, or dealing moderate damage otherwise. When an enemy hero is killed with Culling Blade, its cooldown is reset, and Axe and nearby allied units gain bonus movement speed.',
      },
    },
    Talents: {
      Level: {
        10: {
          Choice_1: '+20 Movement Speed',
          Choice_2: '+25 Attack Speed',
        },
        15: {
          Choice_1: 'Attacks Procs (Skill)Counter Helix',
          Choice_2: '+2 Mana Regen',
        },
        20: {
          Choice_1: '+20 health Regen',
          Choice_2: '+150 (Skill) Culling Blade Threshhold',
        },
        25: {
          Choice_1: '+100 (Skill) Battle Hunger DPS',
          Choice_2: "+100 (Skill) Berserker's Call AoE",
        },
      },
    },
    Lore: "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best.",
  },
  Kunkka: {
    Name: 'Kunkka',
    Stats: {
      Strength: 24,
      Strength_Scale: 3.8,
      Agility: 14,
      Agility_Scale: 1.3,
      Intelligence: 18,
      Intelligence_Scale: 1.5,
      Health_Base: 200,
      Health_Regen_Base: 0,
      Mana_Base: 75,
      Mana_Regen_Base: 0,
      Armor_Base: 1,
      Attacks_Per_Second_Base: 0.59,
      Damage_Base_Low_End: 26,
      Damage_Base_Top_End: 36,
      Magic_Resistance: 25,
      Movement_Speed: 300,
      Attack_Speed: 100,
      Turn_Rate: 0.6,
      Vision_Range_Low_End: 800,
      Vision_Range_Top_End: 1800,
      Attack_Range: 150,
      Projectile_Speed: 'Instant',
      Attack_Animation_Attack_Point: 0.4,
      Attack_Animation_Back_Swing: 0.3,
      Base_Attack_Time: 1.7,
      Damage_Block: 8,
      Collision_Size: 24,
      Legs: 2,
    },
    Skills: {
      Skill_1: {
        Name: 'Torrent',
        Levels: 4,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Magical',
          Att_2_Name: 'Cast Animation',
          Att_2_Desc: '0.4s Cast Point, 0s Cast Backswing',
          Att_3_Name: 'Cast Range',
          Att_3_Desc: '1500',
          Att_4_Name: 'Effect Radius',
          Att_4_Desc: '225 (+ 80 with Torrent Talent)',
          Att_5_Name: 'Effect Delay',
          Att_5_Desc: '1.6s',
          Att_6_Name: 'Total Damage',
          Att_6_Desc: '75/150/225/300',
          Att_7_Name: 'Move Speed Slow',
          Att_7_Desc: '35%',
          Att_8_Name: 'Slow Duration',
          Att_8_Desc: '1s/2s/3s/4s',
          Att_9_Name: 'Stun Duration',
          Att_9_Desc: '1.6s',
          Att_10_Name: 'Slow Duration',
          Att_10_Desc: '1/2/3/4',
          Att_11_Name: 'Cooldown',
          Att_11_Desc: '16s/14s/12s/10s',
          Att_12_Name: 'Mana Cost',
          Att_12_Desc: '90/100/110/120',
        },
        Description: 'Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed.',
      },
      Skill_2: {
        Name: 'Tidebringer',
        Levels: 4,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Physical',
          Att_2_Name: 'Cast Range',
          Att_2_Desc: '150',
          Att_3_Name: 'Starting Radius',
          Att_3_Desc: '150',
          Att_4_Name: 'Distance',
          Att_4_Desc: '650/800/950/1100',
          Att_5_Name: 'End Radius',
          Att_5_Desc: '500/550/600/650',
          Att_6_Name: 'Cleave Damage',
          Att_6_Desc: '165% (+ 110% with Tide Bringer Talent)',
          Att_7_Name: 'Attack Damage Bonus',
          Att_7_Desc: '25/50/75/100',
          Att_8_Name: 'Cooldown',
          Att_8_Desc: '16s/14s/12s/10s',
        },
        Description: "Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike.",
      },
      Skill_3: {
        Name: 'X Marks the Spot',
        Levels: 4,
        Skill_Attributes: {
          Att_1_Name: 'Cast Animation',
          Att_1_Desc: '0.4s Cast Point, 0s Cast Backswing',
          Att_2_Name: 'Cast Range',
          Att_2_Desc: '400/600/800/1000',
          Att_3_Name: 'Enemy Duration',
          Att_3_Desc: '4s',
          Att_4_Name: 'Allies Duration',
          Att_4_Desc: '8s',
          Att_5_Name: 'Cooldown',
          Att_5_Desc: '38s/30s/22s/14s',
          Att_6_Name: 'Mana Cost',
          Att_6_Desc: '50',
        },
        Description: 'Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds. Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes.',
      },
      Skill_4: {
        Name: 'Return',
        Levels: 1,
        Skill_Attributes: {
          Att_1_Name: 'Cast Animation',
          Att_1_Desc: '0.4s Cast Point, 0s Cast Backswing',
          Att_2_Name: 'Cooldown',
          Att_2_Desc: '1s',
        },
        Description: 'Returns the marked hero to the X.',
      },
      Skill_5: {
        Name: 'Ghostship',
        Levels: 3,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Magical',
          Att_2_Name: 'Cast Animation',
          Att_2_Desc: '0.3s Cast Point, 0s Cast Backswing',
          Att_3_Name: 'Cast Range',
          Att_3_Desc: '1000',
          Att_4_Name: 'Ship Radius',
          Att_4_Desc: '425',
          Att_5_Name: 'Travel Distance',
          Att_5_Desc: '2000',
          Att_6_Name: 'Number of Ships',
          Att_6_Desc: '1 (+ 2 with Ghostship Talent)',
          Att_7_Name: 'Ship Spawn Interval',
          Att_7_Desc: '3.35s',
          Att_8_Name: 'Kill Attack Speed Bonus',
          Att_8_Desc: '30',
          Att_9_Name: 'Impact Damage',
          Att_9_Desc: '400/500/600',
          Att_10_Name: 'Rum Movespeed Bonus',
          Att_10_Desc: '10%',
          Att_11_Name: 'Rum Damage Reduction',
          Att_11_Desc: '40%',
          Att_12_Name: 'Rum Duration',
          Att_12_Desc: '10s',
          Att_13_Name: 'Rum Hangover Duration',
          Att_13_Desc: '10s',
          Att_14_Name: 'Stun Duration',
          Att_14_Desc: '1.5s',
          Att_15_Name: 'Cooldown',
          Att_15_Desc: '80s/70s/60s',
          Att_16_Name: 'Mana Cost',
          Att_16_Desc: '125/175/225',
        },
        Description: "Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage. Allied heroes touched by the Ghostship are given a swig of The Admiral's Rum, receiving bonus movement speed and a delayed reaction to incoming damage.",
      },
      Skill_6: {
        Name: 'Torrent Storm',
        Levels: 1,
        Skill_Attributes: {
          Att_1_Name: 'Damage Type',
          Att_1_Desc: 'Magical',
          Att_2_Name: 'Cast Animation',
          Att_2_Desc: '0.4s Cast Point, 0.53s Cast Backswing',
          Att_3_Name: 'Torrent Spawn Radius Min',
          Att_3_Desc: '300',
          Att_4_Name: 'Torrent Spawn Radius Max',
          Att_4_Desc: '1100',
          Att_5_Name: 'Torrent Spawn Interval',
          Att_5_Desc: '0.25s',
          Att_6_Name: 'Torrent Storm Duration',
          Att_6_Desc: '5s',
          Att_7_Name: 'Cooldown',
          Att_7_Desc: '70s',
          Att_8_Name: 'Mana Cost',
          Att_8_Desc: '250',
        },
        Description: 'Releases a visible Torrent in a random area around you once every 0.25 for 5 seconds. Spawns in within 1100 range of you.',
      },
    },
    Talents: {
      Level: {
        10: {
          Choice_1: '+20 6 Armor',
          Choice_2: '+30 Damage',
        },
        15: {
          Choice_1: '+100 (Skill) Torrent Damage',
          Choice_2: '+8 Health Regen',
        },
        20: {
          Choice_1: '+18 Strength',
          Choice_2: '+80 (Skill) Torrent AoE',
        },
        25: {
          Choice_1: '+110% (Skill) Tidebringer Cleave Damage',
          Choice_2: '+2 (Skill) Ghostship Fleets',
        },
      },
    },
    Lore: "As Admiral of the mighty Claddish Navy, Kunkka was charged with protecting the isles of his homeland when the Demons of the Cataract made a concerted grab at the lands of men. After years of small sorties, and increasingly bold and devastating attacks, the Demon Fleet flung all its carnivorous ships at the Trembling Isle. Desperate, the Suicide-Mages of Cladd committed their ultimate rite, summoning a host of ancestral spirits to protect the fleet. Against the Demons, this was just barely enough to turn the tide. As Kunkka watched the Demons take his ships down one by one, he had the satisfaction of wearing away their fleet with his ancestral magic. But at the battle's peak, something in the clash of demons, men and atavistic spirits must have stirred a fourth power that had been slumbering in the depths. The waves rose up in towering spouts around the few remaining ships, and Maelrawn the Tentacular appeared amid the fray. His tendrils wove among the ships, drawing demon and human craft together, churning the water and wind into a raging chaos. What happened in the crucible of that storm, none may truly say. The Cataract roars off into the void, deserted by its former denizens. Kunkka is now Admiral of but one ship, a ghostly rig which endlessly replays the final seconds of its destruction. Whether he died in that crash is anyone's guess. Not even Tidehunter, who summoned Maelrawn, knows for sure.",
  },
};

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.end();
};

const getUsers = (request, response) => {
  const responseJSON = {
    users,
  };

  return respondJSON(request, response, 200, responseJSON);
};

const getUsersMeta = (request, response) => respondJSONMeta(request, response, 200);

// const addUser = (request, response, body) => {
//  const responseJSON = {
//    message: 'Name and age are both required',
//  };
//
//  if (!body.name || !body.age) {
//    responseJSON.id = 'missingParams';
//    return respondJSON(request, response, 400, responseJSON);
//  }
//
//  let responseCode = 201;
//
//  if (users[body.name]) {
//    responseCode = 204;
//  } else {
//    users[body.name] = {};
//    users[body.name].name = body.name;
//  }
//
//  users[body.name].age = body.age;
//
//  if (responseCode === 201) {
//    responseJSON.message = 'Created Successfully!';
//    return respondJSON(request, response, responseCode, responseJSON);
//  }
//
//  return respondJSONMeta(request, response, responseCode);
// };

const updateUser = (request, response) => {
  const newUser = {
    createdAt: Date.now(),
  };

  users[newUser.createdAt] = newUser;

  return respondJSON(request, response, 201, newUser);
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found!',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  users,
  getUsers,
  // addUser,
  getUsersMeta,
  updateUser,
  notFound,
  notFoundMeta,
};
