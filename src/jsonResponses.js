const users = {//will eventually put this into another file just have 1 for an example pull
    "Axe":{
        Name: "Axe",
        Stats:{
            Strength:25,
            Strength_Scale:3.4,
            Agility: 20,
            Agility_Scale:2.2,
            Intelligence:18,
            Intelligence_Scale:1.6,
            Health_Base: 200,
            Health_Regen_Base:2.75,
            Mana_Base:75,
            Mana_Regen_Base:0,
            Armor_Base:-1,
            Attacks_Per_Second_Base:0.59,
            Damage_Base_Low_End: 27,
            Damage_Base_Top_End: 31,
            Magic_Resistance:25,
            Movement_Speed:310,
            Attack_Speed:100,
            Turn_Rate:0.6,
            Vision_Range_Low_End:800,
            Vision_Range_Top_End:1800,
            Attack_Range:150,
            Projectile_Speed:"Instant",
            Attack_Animation_Attack_Point:0.5,
            Attack_Animation_Back_Swing:0.5,
            Base_Attack_Time:1.7,
            Damage_Block:8,
            Collision_Size:24,
            Legs:2,
        },
        Skills:{
            Skill_1: {
                Name: "Berserker's Call",
                Levels: 4,
                Skill_Attributes:{
                    Att_1_Name:"Cast Animation",
                    Att_1_Desc:"0.4s Cast Point, 0.5s Cast Backswing",
                    Att_2_Name:"Radius",
                    Att_2_Desc:"300 (+ 100 with Berserker's Call Talent)",
                    Att_3_Name:"Armor Bonus",
                    Att_3_Desc:"30",
                    Att_4_Name:"Duration",
                    Att_4_Desc:"2s/2.4s/2.8s/3.2s",
                    Att_5_Name:"Cooldown",
                    Att_5_Desc:"16s/14s/12s/10s",
                    Att_6_Name:"Mana Cost",
                    Att_6_Desc:"80/90/100/110"
                },
                Description: "Axe taunts nearby enemy units, forcing them to attack him, while he gains bonus armor during the duration.",
            },
            Skill_2: {
                Name: "Battle Hunger",
                Levels: 4,
                Skill_Attributes:{
                    Att_1_Name:"Damage Type",
                    Att_1_Desc:"Magical",
                    Att_2_Name:"Cast Animation",
                    Att_2_Desc:"0.3s Cast Point, 0.5s Cast Backswing",
                    Att_3_Name:"Cast Range",
                    Att_3_Desc:"750",
                    Att_4_Name:"Radius",
                    Att_4_Desc:"0 (400 with Aghanim's Scepter)",
                    Att_5_Name:"Damage per Second",
                    Att_5_Desc:"16/24/32/40 (+ 100 with Battle Hunger talent)",
                    Att_6_Name:"Enemy Movement Speed Slow",
                    Att_6_Desc:"12%",
                    Att_7_Name:"Self Movement Speed Bonus",
                    Att_7_Desc:"12%",
                    Att_8_Name:"Enemy Damage Reduction",
                    Att_8_Desc:"0% (30% with Aghanim's Scepter)",
                    Att_9_Name:"Duration",
                    Att_9_Desc:"2s/2.4s/2.8s/3.2s",
                    Att_10_Name:"Cooldown",
                    Att_10_Desc:"16s/14s/12s/10s",
                    Att_11_Name:"Mana Cost",
                    Att_11_Desc:"80/90/100/110"
                },
                Description: "Enrages an enemy unit, causing it to be slowed and take damage over time until it kills another unit or the duration ends. Axe gains movement speed for each unit affected with Battle Hunger, half speed from creeps.",
            },
            Skill_3: {
                Name: "Counter Helix",
                Levels: 4,
                Skill_Attributes:{
                    Att_1_Name:"Damage Type",
                    Att_1_Desc:"Pure",
                    Att_2_Name:"Radius",
                    Att_2_Desc:"275",
                    Att_3_Name:"Proc Chance",
                    Att_3_Desc:"17%/18%/19%/20%",
                    Att_4_Name:"Damage",
                    Att_4_Desc:"60/100/140/180",
                    Att_5_Name:"Cooldown",
                    Att_5_Desc:"0.3s",
                },
                Description: "When attacked, Axe has a chance to perform a helix counter attack, dealing pure damage to all nearby enemies.",
            },
            Skill_4: {
                Name: "Culling Blade",
                Levels: 3,
                Skill_Attributes:{
                    Att_1_Name:"Damage Type",
                    Att_1_Desc:"Magical/Instant Kill",
                    Att_2_Name:"Cast Animation",
                    Att_2_Desc:"0.3s Cast Point, 0.5s Cast Backswing",
                    Att_3_Name:"Cast Range",
                    Att_3_Desc:"150",
                    Att_4_Name:"Kill Speed Bonus Radius",
                    Att_4_Desc:"900",
                    Att_5_Name:"Damage",
                    Att_5_Desc:"150/250/300",
                    Att_6_Name:"Kill health Threshhold",
                    Att_6_Desc:"250/350/450 (+150 with Culling Blade Talent)",
                    Att_7_Name:"Kill Movement Speed Bonus",
                    Att_7_Desc:"30%",
                    Att_8_Name:"Kill Attack Speed Bonus",
                    Att_8_Desc:"30",
                    Att_9_Name:"Kill Bonus Duration",
                    Att_9_Desc:"6s",
                    Att_10_Name:"Cooldown",
                    Att_10_Desc:"75s/65s/55s",
                    Att_11_Name:"Mana Cost",
                    Att_11_Desc:"60/120/180"
                },
                Description: "Axe spots a weakness and strikes, instantly killing an enemy unit with low health, or dealing moderate damage otherwise. When an enemy hero is killed with Culling Blade, its cooldown is reset, and Axe and nearby allied units gain bonus movement speed.",
            },
        },
        Talents:{
            Level:{
                10:{
                    Choice_1:"+20 Movement Speed",
                    Choice_2:"+25 Attack Speed",
                },
                15:{
                    Choice_1:"Attacks Procs (Skill)Counter Helix",
                    Choice_2:"+2 Mana Regen",
                },
                20:{
                    Choice_1:"+20 health Regen",
                    Choice_2:"+150 (Skill) Culling Blade Threshhold",
                },
                25:{
                    Choice_1:"+100 (Skill) Battle Hunger DPS",
                    Choice_2:"+100 (Skill) Berserker's Call AoE",
                },
            }
        },
        Lore: "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best."
    },
    "Kunkka":{
        Name: "Kunkka",
        Stats:{
            Strength:24,
            Strength_Scale:3.8,
            Agility: 14,
            Agility_Scale:1.3,
            Intelligence:18,
            Intelligence_Scale:1.5,
            Health_Base: 200,
            Health_Regen_Base:0,
            Mana_Base:75,
            Mana_Regen_Base:0,
            Armor_Base:1,
            Attacks_Per_Second_Base:0.59,
            Damage_Base_Low_End: 26,
            Damage_Base_Top_End: 36,
            Magic_Resistance:25,
            Movement_Speed:300,
            Attack_Speed:100,
            Turn_Rate:0.6,
            Vision_Range_Low_End:800,
            Vision_Range_Top_End:1800,
            Attack_Range:150,
            Projectile_Speed:"Instant",
            Attack_Animation_Attack_Point:0.4,
            Attack_Animation_Back_Swing:0.3,
            Base_Attack_Time:1.7,
            Damage_Block:8,
            Collision_Size:24,
            Legs:2,
        },
        Skills:{
            Skill_1: {
                Name: "Torrent",
                Levels: 4,
                Skill_Attributes:{
                    Att_1_Name:"Cast Animation",
                    Att_1_Desc:"0.4s Cast Point, 0s Cast Backswing",
                    Att_2_Name:"Radius",
                    Att_2_Desc:"300 (+ 100 with Berserker's Call Talent)",
                    Att_3_Name:"Radius",
                    Att_3_Desc:"300 (+ 100 with Berserker's Call Talent)",
                    Att_4_Name:"Armor Bonus",
                    Att_4_Desc:"30",
                    Att_5_Name:"Duration",
                    Att_5_Desc:"2s/2.4s/2.8s/3.2s",
                    Att_6_Name:"Cooldown",
                    Att_6_Desc:"16s/14s/12s/10s",
                    Att_7_Name:"Mana Cost",
                    Att_7_Desc:"80/90/100/110"
                },
                Description: "Axe taunts nearby enemy units, forcing them to attack him, while he gains bonus armor during the duration.",
            },
            Skill_2: {
                Name: "Battle Hunger",
                Levels: 4,
                Skill_Attributes:{
                    Att_1_Name:"Damage Type",
                    Att_1_Desc:"Magical",
                    Att_2_Name:"Cast Animation",
                    Att_2_Desc:"0.3s Cast Point, 0.5s Cast Backswing",
                    Att_3_Name:"Cast Range",
                    Att_3_Desc:"750",
                    Att_4_Name:"Radius",
                    Att_4_Desc:"0 (400 with Aghanim's Scepter)",
                    Att_5_Name:"Damage per Second",
                    Att_5_Desc:"16/24/32/40 (+ 100 with Battle Hunger talent)",
                    Att_6_Name:"Enemy Movement Speed Slow",
                    Att_6_Desc:"12%",
                    Att_7_Name:"Self Movement Speed Bonus",
                    Att_7_Desc:"12%",
                    Att_8_Name:"Enemy Damage Reduction",
                    Att_8_Desc:"0% (30% with Aghanim's Scepter)",
                    Att_9_Name:"Duration",
                    Att_9_Desc:"2s/2.4s/2.8s/3.2s",
                    Att_10_Name:"Cooldown",
                    Att_10_Desc:"16s/14s/12s/10s",
                    Att_11_Name:"Mana Cost",
                    Att_11_Desc:"80/90/100/110"
                },
                Description: "Enrages an enemy unit, causing it to be slowed and take damage over time until it kills another unit or the duration ends. Axe gains movement speed for each unit affected with Battle Hunger, half speed from creeps.",
            },
            Skill_3: {
                Name: "Counter Helix",
                Levels: 4,
                Skill_Attributes:{
                    Att_1_Name:"Damage Type",
                    Att_1_Desc:"Pure",
                    Att_2_Name:"Radius",
                    Att_2_Desc:"275",
                    Att_3_Name:"Proc Chance",
                    Att_3_Desc:"17%/18%/19%/20%",
                    Att_4_Name:"Damage",
                    Att_4_Desc:"60/100/140/180",
                    Att_5_Name:"Cooldown",
                    Att_5_Desc:"0.3s",
                },
                Description: "When attacked, Axe has a chance to perform a helix counter attack, dealing pure damage to all nearby enemies.",
            },
            Skill_4: {
                Name: "Culling Blade",
                Levels: 3,
                Skill_Attributes:{
                    Att_1_Name:"Damage Type",
                    Att_1_Desc:"Magical/Instant Kill",
                    Att_2_Name:"Cast Animation",
                    Att_2_Desc:"0.3s Cast Point, 0.5s Cast Backswing",
                    Att_3_Name:"Cast Range",
                    Att_3_Desc:"150",
                    Att_4_Name:"Kill Speed Bonus Radius",
                    Att_4_Desc:"900",
                    Att_5_Name:"Damage",
                    Att_5_Desc:"150/250/300",
                    Att_6_Name:"Kill health Threshhold",
                    Att_6_Desc:"250/350/450 (+150 with Culling Blade Talent)",
                    Att_7_Name:"Kill Movement Speed Bonus",
                    Att_7_Desc:"30%",
                    Att_8_Name:"Kill Attack Speed Bonus",
                    Att_8_Desc:"30",
                    Att_9_Name:"Kill Bonus Duration",
                    Att_9_Desc:"6s",
                    Att_10_Name:"Cooldown",
                    Att_10_Desc:"75s/65s/55s",
                    Att_11_Name:"Mana Cost",
                    Att_11_Desc:"60/120/180"
                },
                Description: "Axe spots a weakness and strikes, instantly killing an enemy unit with low health, or dealing moderate damage otherwise. When an enemy hero is killed with Culling Blade, its cooldown is reset, and Axe and nearby allied units gain bonus movement speed.",
            },
        },
        Talents:{
            Level:{
                10:{
                    Choice_1:"+20 Movement Speed",
                    Choice_2:"+25 Attack Speed",
                },
                15:{
                    Choice_1:"Attacks Procs (Skill)Counter Helix",
                    Choice_2:"+2 Mana Regen",
                },
                20:{
                    Choice_1:"+20 health Regen",
                    Choice_2:"+150 (Skill) Culling Blade Threshhold",
                },
                25:{
                    Choice_1:"+100 (Skill) Battle Hunger DPS",
                    Choice_2:"+100 (Skill) Berserker's Call AoE",
                },
            }
        },
        Lore: "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best."
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

//const addUser = (request, response, body) => {
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
//};

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
  //addUser,
  getUsersMeta,
  updateUser,
  notFound,
  notFoundMeta,
};
