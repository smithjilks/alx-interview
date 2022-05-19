#!/usr/bin/node

const request = require('request');

const cmdArgs = process.argv;

const url = 'https://swapi-api.hbtn.io/api/films/' + cmdArgs[2];

async function makeAsyncRequest (url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      resolve({ error, response, body });
    });
  });
}

async function displayCharacterNames (urls) {
  for (const url of urls) {
    const response = await makeAsyncRequest(url);
    const body = JSON.parse(response.body);
    console.log(body.name);
  }
}

request(url, function (error, response, body) {
  if (error) {
    return;
  }
  const res = JSON.parse(body);
  const characterUrls = res.characters;

  displayCharacterNames(characterUrls);
});
