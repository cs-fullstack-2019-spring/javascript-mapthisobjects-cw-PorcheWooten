//Use .map to create a new array of objects where each object has a property for petnumber and pettype based on the elements in the array.
// Print the new array of objects.

let arr = ["dog", "cat", "pig", "hamster"];
// let pet_objects = [];
// new array to hold objects
var petObj=arr.map(function (currentValue, idx)
{
 let newObj = [];
    newObj.petType=currentValue ;
    newObj.petNumber=idx;
    return newObj;
});

console.log(petObj);
