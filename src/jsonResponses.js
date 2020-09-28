const users = {//will eventually put this into another file just have 1 for an example pull
    "Axe":{
        Name: "Axe",
        Stats:{
            Attack: 50,
            Armor: 3,
        },
        Skills:{
            Skill_1: {
                Name: "Berserker's Call",
                Level: 1,
                Description: "Axe taunts nearby enemy units, forcing them to attack him, while he gains bonus armor during the duration.",
            },
            Skill_2: {
                Name: "Battle Hunger",
                Level: 1,
                Description: "Enrages an enemy unit, causing it to be slowed and take damage over time until it kills another unit or the duration ends. Axe gains movement speed for each unit affected with Battle Hunger, half speed from creeps.",
            },
            Skill_3: {
                Name: "Counter Helix",
                Level: 1,
                Description: "When attacked, Axe has a chance to perform a helix counter attack, dealing pure damage to all nearby enemies.",
            },
            Skill_4: {
                Name: "Culling Blade",
                Level: 1,
                Description: "Axe spots a weakness and strikes, instantly killing an enemy unit with low health, or dealing moderate damage otherwise. When an enemy hero is killed with Culling Blade, its cooldown is reset, and Axe and nearby allied units gain bonus movement speed.",
            },
        }	 
    }
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
  getUsers,
  //addUser,
  getUsersMeta,
  updateUser,
  notFound,
  notFoundMeta,
};
