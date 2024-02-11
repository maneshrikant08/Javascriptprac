// const student={
//     name:"Shrikant Mane",
//     rollno:18,
//     id:19010861,
//     city:"Nanded"
// }
// //console.log(student.name);
// //console.log(student.rollno);
// const client1=new Object(); // singalton
// const client2={

// }
// client2.id=120755;
// client2.name="sam";
// client2.isLoggedin=false;
// console.log(client2);
//-----------------------------------//
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e"};
//const obj3={obj1,obj2}

const obj3=Object.assign({},obj1,obj2) //good practice
console.log(obj3);