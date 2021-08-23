// Code your solution here

function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }
  

// ^ same as above, except it is a lot neater to do the arrow function

//   function findMatching(drivers, string) {
//     const matchingDrivers = drivers.filter(function(driver) {
//         return driver.toUpperCase() === string.toUpperCase();
//     });
//     return matchingDrivers;
// }

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }