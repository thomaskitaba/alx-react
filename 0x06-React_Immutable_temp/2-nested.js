import { fromJS } from 'immutable';
export default function accessImmutableObject(object, array) {
  const obj = fromJS(object);
  const obj1 = obj.getIn(array, undefined);
  return obj1;
}
