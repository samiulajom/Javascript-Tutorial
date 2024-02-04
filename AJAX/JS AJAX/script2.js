//!NIJER TRY 


const getButton = document.getElementById(`get`);
const sendButton = document.getElementById(`set`);

function sendRequest(method, url, data) {
  const promaise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        //APPLICATIN ERROR HANDLING
      if (this.status >= 400) {
        reject(
          `There was an appliction error and the response is ${this.status}.`
        );
      } else {
        resolve(this.response);
      }
    };
    xhr.onerror = function () {
      reject(`There was an error.`);
    };

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send(data);
  });
  return promaise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((resData) => {
      console.log(resData);
    })
    .catch((err) => {
      console.log(err);
    });
}

//CREATE DATA FOR SEND
let myObj = {
  title: "samiul",
  body: "studen",
  userId: 518782,
};

function sendData() {
  sendRequest(
    "POST",
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
