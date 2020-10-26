/**
 * 
 * Basic JavaScript: Record Collection
You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the collection object is used for the tests.

After updateRecords(collection, 5439, "artist", "ABBA"), artist should be ABBA

After updateRecords(collection, 5439, "tracks", "Take a Chance on Me"), tracks should have Take a Chance on Me as the last element.

After updateRecords(collection, 2548, "artist", ""), artist should not be set

After updateRecords(collection, 1245, "tracks", "Addicted to Love"), tracks should have Addicted to Love as the last element.

After updateRecords(collection, 2468, "tracks", "Free"), tracks should have 1999 as the first element.

After updateRecords(collection, 2548, "tracks", ""), tracks should not be set

After updateRecords(collection, 1245, "albumTitle", "Riptide"), albumTitle should be Riptide

 */


 // Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {

    // if prop isnt tracks and value isnt an empty string, upa
    if(prop !== "tracks" && value) {
        object[id][prop] = value;
    } else if(prop === "tracks" && !object[id][prop]) {
        object[id][prop] = [value];
    } else if (prop === "tracks" && value){
        object[id][prop].push(value);
    } else if(!value){
        delete object[id][prop];
    }
    return object;
  }



  
 updateRecords(collection, 5439, 'artist', 'ABBA');
 updateRecords(collection, 5439, "tracks", "Take a Chance on Me")
 updateRecords(collection, 2468, "tracks", "Purple Rain")
