//!string concate
let a=`Hello`;
let b=`World`;
let c=a.concat(` `,b);
console.log(c);
//!trim
let d= `       gape          `;
console.log(d.trim())
//?trimStart
console.log(d.trimStart());
//?trimEnd
console.log(d.trimEnd());
//!lenght
let text1=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
console.log(text1.length)// total index songha dkhay
//!====
let text2=`Samiul`
console.log(text2.charAt(2));// koto number index a ki ase 
console.log(text2.charAt(2));
console.log(text2[1]);
//!====
/* 
    slice(start, end)
    substring(start, end)
    substr(start, length)

 */
let fruits= `Apple, Banana, Kiwi`;
//console.log(fruits.slice(7,13));// sudu index ang ses index er majer gulo dkhabe
//console.log(fruits.slice(-12,-6))//This example slices out a portion of a string from position -12 to position -6:
//console.log(fruits.slice(15));//suru index number theke ses porjonto dkhabe
//console.log(fruits.slice(-12))// ses theke index guna suru korbe; abond folafor dkhabe
//!======sunstring
//console.log(fruits.substring(7,13));
//console.log(fruits.substring(7));
//!====substr=====
console.log(fruits.substr(7,6));
// surur man abong tr por koy gor porjonto nite hobe ta ;
//!UPPOER CASE
let text3=`my name is samiul`;
console.log(text3.toUpperCase());
//!LOWER CASE
let text4=`MY NAME IS SAMIUL`;
console.log(text4.toLocaleLowerCase());
//!Repeat
let y=`Hello world!`;
console.log(y.repeat(3));
//!Replace
let y2=y.replace(`world`,`Students`);
console.log(y2)
//!ReplaceALL
let p1=`I love Cats. Cats are so cute.`;
let p2=p1.replaceAll(`Cats`,`Dogs`);
console.log(p2);
//!Split
let borno= `a,b,c,d,e,f`;
console.log(borno.split(`,`));// koma diye split kore hoiyese
let myself=`My name is Samiul`;
console.log(myself.split(` `))// space diye split kora hoiyese
//!  starWith
console.log(myself.startsWith(`My name`))
//!endswith
console.log(myself.endsWith(`Samiul`))