// const user={
//     name:"shrikant",
//     price:100,
//     welcomemessage:function(){
//         console.log(`${this.name}, welcome sir`); // current contest
//         console.log(this); // this is how it works
//     }
    

// }
// user.welcomemessage()
// user.name="sam"
// user.welcomemessage()
// console.log(this); // will show {} empty
//----------------*************--------------------
const chai=()=>{
    let user="Shrikant"
    console.log(user); //we can not use this with function or arrow function
}
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,4));
const addtwo2=(num1,num2)=>num1+num2 // for one line no need to add curley braces and return statement
console.log(addtwo2(3,4));
const addtwo3=(num1,num2)=>({username:"shrikant"}) // we will need () {} for objects
console.log(addtwo3(3,4));
//----------******------
// IIFE immediatly invoke function  to stop global level variable pollution
