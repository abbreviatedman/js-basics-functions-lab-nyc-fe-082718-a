// Code your solution in this file!

// function distanceFromHqInBlocks(block) {
//   return distanceTravelledInBlocks(block, 42)
// }

// function distanceFromHqInFeet(block) {
//   return distanceTravelledInFeet(block, 42);
// }

// function distanceTravelledInFeet(block1, block2) {
//   return distanceTravelledInBlocks(block1, block2) * 264;
// }

// function distanceTravelledInBlocks(block1, block2) {
//   return Math.abs(block1 - block2);
// }

// function calculatesFarePrice(start, destination) {
//   const distance = distanceTravelledInFeet(start, destination);
//   const freeFeet = 400;
//   const flatFare = 25;
  
//   if (distance <= freeFeet) {
//     return 0;
//   }
  
//   if (distance <= 2000) {
//     return (distance - freeFeet) * 0.02
//   }
  
//   if (distance <= 2500) {
//     return flatFare;
//   }
  
//   return 'cannot travel that far';
// }



const hq = 42;

function abs(number) {
  if (number < 0) {
    return number * -1;
  }
  
  return number;
}


function distanceFromHqInBlocks(location) {
  // return the distance from location to 42nd street
  return distanceTravelledInBlocks(hq, location);
}


function distanceFromHqInFeet(location) {
  // 1 block === 264 feet
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(location1, location2) {
  return distanceTravelledInBlocks(location1, location2) * 264
}

function distanceTravelledInBlocks(location1, location2) {
  return abs(location1 - location2);
}

function calculatesFarePrice(location1, location2) {
  const feetTravelled = distanceTravelledInFeet(location1, location2);
  
  // if the distance is less than 400 feet, return 0
  if (feetTravelled < 400) {
    return 0;
  } else if (feetTravelled < 2000) {
    return (feetTravelled - 400 * 2 / 100)
  }
}