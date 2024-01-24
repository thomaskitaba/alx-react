import { Map } from 'immutabal';

export function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
