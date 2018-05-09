var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
  

function deleteFromOBjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}
