
// const yelp = require('yelp-fusion');
// const apiKey = 'p7pqhAhOBOUl2TTVv5dv3wG5aJeF5B88Omtb6vTw_yQv9qT75lLeB_0KnVsG__KXNTBte05YWGixZixSprR1XpLuL4QCuVMhHZ4ydate1TEBdHCpSluwzkBb2ja6XnYx';

// const searchRequest = {
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };

// const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });