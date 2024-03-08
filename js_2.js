//2a
let firstname = prompt("Enter firstname: ");
let lastname = prompt("Enter lastname");
//2b
let fullname =  firstname + " "+ lastname;
//2c,2d
console.log(`Your firstnmae is ${firstname.toUpperCase()}. Your lastname is ${lastname.toLowerCase()} and your full name is ${fullname}`);
console.log(`Your initials are ${firstname[0].toUpperCase()}.${lastname[0].toUpperCase()}`);
//2e
if(firstname.includes("o") && lastname.includes("a")){
    console.log('Your firstname has letter "o" and your lastname has letter "a"');
    
}
else{
    console.log('Your firstname do not have letter "o" and your lastname do not have letter "a"');
}
//2f
let word= "Three Mississippi's is the standard staring time.";

let wrdsplit=word.split(" ");

console.log(wrdsplit);

let substring1 = word.substring(0,4);
console.log(substring1);

let substring2=word.substring(5,8);
console.log(substring2);


