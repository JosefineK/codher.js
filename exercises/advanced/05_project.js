// Include this file in the provided html template and return a JSON version of friends

// Seed Data
var friends = [{
  id: 1,
  first_name: "James",
  last_name: "Bond",
  full_name: "James Bond",
  age: 39,
  email: "[redacted]"
},
{
  id: 2,
  first_name: "Dora",
  last_name: "the Explorer",
  full_name: "Dora the Explorer",
  age: 5,
  email: "dora@explorers.org"
},
{
  id: 3,
  first_name: "Charles",
  last_name: "Brown",
  full_name: "Charles Brown",
  age: 10,
  email: "charliebrown@peanuts.com"
},
{
  id: 4,
  first_name: "Mickey",
  last_name: "Mouse",
  full_name: "Mickey Mouse",
  age: 120,
  email: "mickey@disney.com"
}];

var my_friends = function() {
  return JSON.stringify(friends);
};
