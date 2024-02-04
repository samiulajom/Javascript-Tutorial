async function myFun() {
  const myres = await fetch(`demo.txt`);
  console.log(myres);
  //   const data = await myres.text();
  //   console.log(data);
  //   const textData = JSON.parse(data);
  const textData = await myres.json();
  console.log(textData);
  console.log(textData.age)
}
myFun();
