import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);
  const filtered = seq.filter((stud) => {
    stud.firstName.charAt(0).toUpperCase() + stud.firstName.slice(1);
    stud.lastName.charAt(0).toUpperCase() + stud.lastName.slice(1);
    return stud.score > 70;
  });
  console.log(filtered.toJS());
}
