/**
 * 
 * Basic JavaScript: Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property".

lookUpProfile("Kristian", "lastName") should return "Vos"

lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

lookUpProfile("Harry", "likes") should return an array

lookUpProfile("Bob", "number") should return "No such contact"

lookUpProfile("Bob", "potato") should return "No such contact"

lookUpProfile("Akira", "address") should return "No such property"

 * 
 */



 // Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for(let index = 0; index < contacts.length; index++) {
    if(contacts[index].firstName === name){
        if(!contacts[index][prop]) {
            return "No such property";
        }

        return contacts[index][prop];

    }

    if(index + 1 === contacts.length) {
        return "No such contact";
    }
 }
// Only change code above this line
}

// lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"))