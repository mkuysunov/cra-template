/**
 * Object deep freeze
 * @param {object} obj  - object deep freezing
 * @returns {object} - freezed object
 */
export function deepFreeze(obj) {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
}
