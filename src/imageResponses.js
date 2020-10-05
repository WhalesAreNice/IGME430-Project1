const fs = require('fs'); // pull in the file system module

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const getImage = (request, response, params) => {
  const responseJSON = {
    message: 'This request has the required query parameters',
    id: 'badRequest',
  };

  if (params.heroName && params.imageType) {
    const portrait = fs.readFileSync(`${__dirname}/../images/Heroes/${params.heroName}/${params.imageType}.png`);
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(portrait);
    response.end();
  } else if (params.imageType) {
    const logo = fs.readFileSync(`${__dirname}/../images/${params.imageType}.png`);
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(logo);
    response.end();
  } else {
    responseJSON.message = 'Missing valid query parameter set equal to true';
    respondJSON(request, response, 400, responseJSON);
  }
};

module.exports.getImage = getImage;
