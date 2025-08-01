// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case  'All or Nothing': 
      return 5;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

  //  "small": 6,
  //  "medium": 8,
  //  "large": 10
  let idx = 0;
  let numberOfLimes = 0;
  let totalWedges = 0;
  
  while (totalWedges <= wedgesNeeded) {
    if (wedgesNeeded <= 0) { return totalWedges; };
    if (limes[idx] === "small") { numberOfLimes = numberOfLimes + 1; idx += 1; totalWedges = totalWedges + 6};
    if (limes[idx] === "medium") { numberOfLimes = numberOfLimes + 1; idx += 1; totalWedges = totalWedges + 8};
    if (limes[idx] === "large") { numberOfLimes = numberOfLimes + 1; idx += 1; totalWedges = totalWedges + 10};
  
    if (idx >= limes.length) { break; };  
  }
  
  return numberOfLimes;
  
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // timeLeft, Array[orders] -> [orders that can not be started]
  // timeToMixJuice(orders)
 // let remainingOrders;
  let juicePrepTime = 0;
  let idx = 0;

  while (idx <= orders.length) {
    juicePrepTime += timeToMixJuice(orders[idx]);
    idx += 1;

    if (juicePrepTime >= timeLeft) {
      return orders.slice(idx);
    }
  }
}
