const getButton = document.getElementById(`get`);
const sendButton = document.getElementById(`set`);
/*
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(JSON.parse(this.responseText));//string korte chaile aivbe kra jebe..ar jsi json parse korte na chai.tahole agei responserType json kore dite hobe..ja open er por korte hobe
    console.log(this.response);
  };
  xhr.open(`get`, "https://jsonplaceholder.typicode.com/todos/1");
  xhr.responseType = "json";
  xhr.send();
}*/
function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      //handle application error
      if (this.status >= 400) {
        reject(
          `There was an appliction error and the response is ${this.status}.`
        );
      } else {
        resolve(this.response);
      }
    };
    xhr.onerror = function () {
      reject("There was an error.");
    };
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send(data);
  });
  return promise;
}

function getData() {
  sendRequest(`get`, "https://jsonplaceholder.typicode.com/todos/1")
    .then((resData) => {
      console.log(resData);
    })
    .catch((err) => {
      console.log(err);
    });
}
//!crate a data for send
let myObj = {
  title: "samiul",
  body: "studen",
  userId: 518782,
};

function sendData() {
  sendRequest(
    `POST`,
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(myObj)
  )
    .then((resData) => {
      console.log(resData);
    })
    .catch((err) => {
      console.log(err);
    });
}

getButton.addEventListener(`click`, getData);
sendButton.addEventListener(`click`, sendData);
