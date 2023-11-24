// // let a = 5;
// // function multiple(num) {
// //   let ans = num * num;
// //   return ans;
// // }

// // {
// //   let x = 2;
// //   var s = 2;
// //   //   const scsc = 'xc'
// // }

// // // console.log(x);
// // console.log(s);

// // let me = [1, 2, 3, 4];
// // for (var i = 0; i < 3; i++) {
// //   console.log("hey");
// //   console.log(me[i]);
// // }
// // console.log(i,'mera i ')
// // console.log(me[i]);
// // // hey
// // // hey
// // // hey
// // // 1
// // // 2
// // // 3
// // // 4 this is all wrong hey 1 hey 2 hey 3 is the output

// // // for(let i = 5; i<10){
// // //     console.log(i)
// // // }

// // hey();
// // let x = 0;

// // function hey() {
// //   console.log(x);
// // }

// // console.log("x:", x); // undedfined`
// // console.log("me:", me); //  f .....lik k ayeg a
// let x = 2;
//  function me() {
//   console.log(`yes`);
// //   return "fe";
// };
// me()
// // if nor usef return keyword then undefined
// console.log("me:", me()); // not a function
// window.alert("hgfgf");

// -----------------------------------------------------------------------

//  starts form it

// hositing :  a js concept in which function are accessible before intailzed.
// bcz  in GEC and variable and function are first allocated to mempory space
//  but varible they are store as undefined , in case function they are store as it is
//
// in case of arrow function is not hosited as it is a varible.
//  "let" and "const" are not hoisted they are stored in temporal dead zone.

// but in case of "var" it is hosited we can access it it will give sepacail value as undefined.
// ex :
// console.log(a); //  gives undefined
// var a = "nil";
// // console.log(ab); // cannot access before intialzied : reference error
// let ab = "nil";
// // console.log(abc); // cannot access before intialzied : reference error
// const abc = "nil";

// hey(); // yes accessible
// function hey() {
//   console.log("hey...");
// }
// hey2; // undifeined
// // hey2(); // is not function
// var hey2 = () => {
//   // i m arrow function
//   console.log("hey 2 ");
// };
// let hey3 = () => {  // cannot access before intialized ( "let" & "const")
//   // i m arrow function
//   console.log("hey 3.. ");
// };

// hello();      // undefined
// var hello1 = "yes tell";
// function hello() {
//   console.log(hello1);
// }


// const hello1 = "yes tell";
// hello(); // will give output
// function hello() {
//   console.log(hello1);
// }


// hello(); // CANOT NOT ACCESS BEFORE INTIALIZED
// const hello1 = "yes tell";
// function hello() {
//   console.log(hello1);
// }

// var hello1 = "yes tell";
// hello(); // will give output
// function hello() {
//   console.log(hello1);
// }

// hello(); // undefined 
// var hello1 = "yes tell";
// function hello() {
//   console.log(hello1);
// }