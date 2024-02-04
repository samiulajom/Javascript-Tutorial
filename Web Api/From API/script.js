function myFun() {
  let inputObj = document.getElementById("id1");
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity(`Range so large... `);
  }else if(inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity(`Range so smaller...`)
  }else if(inputObj.validity.valueMissing){
    inputObj.setCustomValidity(`Please input some vlaue of number...`)
  }



    if (!inputObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}
