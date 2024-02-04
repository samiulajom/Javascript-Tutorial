function changeToInt(v) {
  let result = Number.parseInt(v);
  if (!result) {
    return `Please Provide a value which is able to convert in Integer`;
  }
  return result;
}
let result = changeToInt();
console.log(result);
