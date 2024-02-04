//alert(`Hi i am alert message!`)
var rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log(`I am Rectangle`);
    console.log(` My width is ` + this.width); //!nijer object er properti access korte (this) keyword use korte hobe
    console.log(` My height is ` + this.height);
  },
};
rect.draw();
rect.height = 200;
rect.draw();
