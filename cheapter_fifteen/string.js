var age = 23;
var name = `Samiul`;
console.log("My name is " + name + " and i am " + age + ` years old`); //aita ES5 er system
console.log(
  `My name is ${name} and i am ${age} years old. I am ${
    age < 18 ? `not ` : ` `
  }adult.`
);
console.log(name.padStart(15, `*`)); //ata length k puron korar jnno kisu akta bosay, aita te * diye puron kora hoiyese
console.log(name.padEnd(15, `#`));
console.log(`S`.repeat(10));
