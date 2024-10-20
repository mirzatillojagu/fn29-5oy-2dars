// regular function
// function sum(a, b){
//     return a + b;
// }

// express function
// const sum1 = function(a, b){
//     return a + b;
// }

// arrow function
// const sum2 = (a, b) => {
//     return a + b;
// }

// (function(){
//     var  test = 'salom'

//     function abs (){
//         console.log("abs");

//     }
// })()

// let user = {
//     name: "John",
//     age: 56,
//     phones: ["+2345678", "2345678909"],
//     email: "test@gmail.com",
//     family:{
//         father: "Alex",
//         mother: "Alisa"
//     },
//     isMarried: false
// }

// console.log(user.age);
// console.log(user.phones[1]);

//////////////////////////Masalalar Massivlarga oid///////////////////

// 1

//     let arr = ["banan", "car", "apple", "old", "qwerkrjrm"];
//     function test(arr) {
//     return arr
//       .filter((arr) => arr.length >= 5)
//       .map((arr) => arr.charAt(0).toUpperCase() + arr.slice(1));
//   }

// console.log(test(arr));

// 2
// const user = [
//   { name: "Shoijahon", age: 16 },
//   { name: "Dilhushbek", age: 15 },
//   { name: "John", age: 21 },
// ];

// function test(test) {
//   const test = user.find(test => test.age >= 20);
//   return test.name.toUpperCase();
// }
// console.log(test(user));


// const talaba = [
//     {name: 'Mirzatillo', age: 23,} , 
//       { name: 'Shohjahon', age: 16,},
//       {name: 'Dilhushbek', age: 15,},
//   ]
//   function talabalar(talaba) {
//       const studen = talaba.find(talaba => talaba.age >= 20)
//       return studen.name.toUpperCase()
//   }
//   console.log(talabalar(talaba));
  


// 3
// const arr =[10000, 12000,5000]
// function sum(arr){
//     return arr
//     .filter(narx => narx > 10000)
//     .reduce((total,narx) => total + narx)
// }
// console.log(sum(arr));


// 4
// const arr = [1, 2, 3, 4, 5, 6];

// function sum (arr){
//     if(arr.every(arr => arr > 0)){
//         console.log('Musbat son');
//     }else{
//         console.log('Manfiy son');
        
//     }
//     if(arr.some(arr => arr > 100)){
//         console.log('Katta son bor');
        
//     }

// }
// sum(arr)


// 5
// let arr = [1, 2, 3, 4, 5];
// let res = test(arr);

// function test(arg) {
//     return arr.map(function (a) {
//         return a * a;
//     });
// }

// function sum(arr) {
//     arr.forEach(function (b) {
//         console.log(b);
//     });
// }

// sum(res);



////////////////////////////////////Yozuvlarga oid.////////////////////////


// 1
// let arr = ["salom", "xayr"];

// function test(arg) {
//     return arg.map(function(v) {
//         return v.toUpperCase();
//     });
// }

// console.log(test(arr));



// 3
// let str = "JavaScript"
// function test(str){
//     return str.replace(/JavaScript/,'JS')
// }
// console.log(soz(str));


// 4
// let arr ='salom'
// function soz(arr){
//     return arr.split('').reverse().join('')
// }
// console.log(soz(arr));

