const express = require('express');
// using express app we installed
const app = express();
// rename it

app.get('/hello', (req, res) => {
  res.send('Hello there!');
});
// create an object that has an array of different pets with different properties that we will look for later
//changed names to lowercase because of strictly equals and browser changed automatically

const pets = [
  { type: 'Puppy', name: 'mowgli', owner: `anusha` },
  { type: 'Bunny', name: 'fluffy', owner: `jon` },
  { type: 'Bird', name: 'tweety', owner: `granny` }
]

// use the endpoint to get the object we just made
// send it to the user when requesting that object with the endpoint
app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
});

app.get('/api/v1/pets/:owner', (req, res) => {
  let foundOwner = pets;

  // return owner to user with 
  // localhost:8080/api/v1/pets/owner?owner=jon (or any of owners)

  console.log(`REQ QUERY`, req.query);
  if (req.query.owner) {
    foundOwner = pets.filter((pet) => {
      return pet.owner === req.query.owner;
    })
  }

  res.send(foundOwner);
})

// find because we want any with this name
app.get('/api/v1/pets/:name', (req, res) => {
  let foundName = pets;

  console.log(`REQ PARAMS`, req.params);
  if (req.params.name) {
    foundName = pets.find((pet) => {
      return pet.name === req.params.name;
    })
  }

  res.send(foundName);
})

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});