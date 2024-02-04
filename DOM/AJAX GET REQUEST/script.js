let load = document.getElementById(`load`);
let postList = document.getElementById(`posts`);
let URL = `https://jsonplaceholder.typicode.com/posts`;

load.addEventListener(`click`, function () {
    fetch(URL)
      .then((response) => response.json())
      //!nijer tyr comment er ongso
    //   .then((data) => {
    //     //console.log(typeof data);
    //     [...data].forEach((post,index)=>{
    //         let list=listItemGenaretor(post,index+1);
    //         postList.appendChild(list);
    //     })
    //   })
      .then((posts) => {
        posts.forEach((post, index) => {
          let listItem = listItemGenaretor(post, index + 1);
          // console.log(listItem);
          postList.appendChild(listItem);
        });
      })
      .catch((e) => console.log(message));
  });

function listItemGenaretor(item, index) {
    let li = document.createElement(`li`);
    li.className = `list-item`;
    li.innerHTML = `<span>${index}.</span> ${item.title}`;
    return li;
  }
