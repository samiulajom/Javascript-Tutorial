let cookieEnabled = document.getElementById(`cookieEnabled`);
let appCodeName = document.getElementById(`appCodeName`);
let platform = document.getElementById(`platform`);
let appName = document.getElementById(`appName`);
let product = document.getElementById(`product`);
let appVersion = document.getElementById(`appVersion`);
let userAgent = document.getElementById(`userAgent`);
let language = document.getElementById(`language`);
let online = document.getElementById(`online`);

let javaEnabled = document.getElementById(`javaEnabled`);

cookieEnabled.innerHTML =
  `<span>cookieEnabled is:</span>` + navigator.cookieEnabled;
appCodeName.innerHTML = `<span>appCodeName is:</span> ` + navigator.appCodeName;
platform.innerHTML = `<span>platform is:</span>` + navigator.platform;
appName.innerHTML = `<span>appName is:</span>` + navigator.appName;
product.innerHTML = `<span>product is:</span>` + navigator.product;
appVersion.innerHTML = `<span>App version is :</span>` + navigator.appVersion;
userAgent.innerHTML = `<span>User agent is:</span>` + navigator.userAgent;
language.innerHTML = `<span>language is:</span>` + navigator.language;
online.innerHTML = `<span>Online is:</span>` + navigator.onLine;

  `<span>Java enabled is:</span` + navigator.javaEnabled();
