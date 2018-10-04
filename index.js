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







function distanceFromHqInBlocks(location) {
  // return the distance from location to 42nd street
  return abs(42 - location);
}

function abs(number) {
  if (number < 0) {
    return number * -1;
  }
  
  return number;
}

const distance = distanceFromHqInBlocks(34);



