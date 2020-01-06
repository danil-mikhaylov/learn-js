// function modify(str, n) {
//   return ++n + 'str';
// }
// console.log(modify('jsbot', 123));
//
// function modifyObj(person){
//   delete person.info;
//   person.age = 25;
//   person.work.level = "middle";
//   return person;
// }
//
// function singIn(login,password){
//   let result;
//   if (login === 'admin' &&  password === 'admin2019') {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }

// function switched(a){
//   let res;
//   switch(a){
//     case 0: res = false;
//       break;
//     case 1: res = true;
//       break;
//     case 2: case 3: res ="error";
//       break;
//     default: res = false;
//       break;
//   }
//   return res;
// }


function checkUser(name){
  let access;
  access = (name == 'admin') ? 'Без доступа к статистике':
    (name == 'director') ? 'Полный доступ':
      (name == '') ? 'Введите логин': '-';
  return access;
}