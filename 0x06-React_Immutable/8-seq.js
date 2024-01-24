import { seq } from 'immutable';
// const seq = require('immutable.seq');
function printBestStudents(obj) {
  const seq = seq(obj);
  const filtered = seq.filter((stud) => {
    stud.firstName.charAt(0).toUpperCase() + stud.firstName.slice(1);
    stud.lastName.charAt(0).toUpperCase() + stud.lastName.slice(1);
    return stud.score > 70;
  });
  console.log(filtered.toJS());
  // const ansObj = filtered.toJS();
  // Object.keys(ansObj).map((row) => {
  //   ansObj[row].firstName.charAt(0).toUpperCase() + ansObj[row].firstName.slice(1);
  //   ansObj[row].lastName.charAt(0).toUpperCase() + ansObj[row].firstName.slice(1);
  // });
  // console.log(ansObj);
}



// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   }
// };
// const ans = printBestStudents(grades);
// console.log(ans);
