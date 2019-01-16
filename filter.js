//Use .filter to create an array of pet objects that only holds the hamsters.
let pets = [
{
  name: 'Spot',
  type: 'Hamster'
},
{
  name: 'Harry',
  type: 'Hamster'
},
{
  name: 'Kitty',
  type: 'Cat'
}
];

// let hamsters = []; // new array to hold objects

let hamOnly = pets.filter(function (petType) {
    return (petType.type === "Hamster");
});
console.log(hamOnly);
// function hamsters(petType) {
//     return ("Hamster");
// }