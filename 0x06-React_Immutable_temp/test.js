import getImmutableObject from './0-fromjs';
const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};



// import getImmutableObject from './1-map.mjs'
const immutableObject = getImmutableObject(object);
console.log(immutableObject);
export default getImmutableObject;