let postForm = document.getElementById(`post-form`);
let posts = document.getElementById(`posts`);
let URL = `https://jsonplaceholder.typicode.com/posts`;
postForm.addEventListener(`submit`, function (e) {
  e.preventDefault();
  //   console.log(this.title);
  //   console.log(this.body);
  let title = this.title.value || undefined;
  let body = this.body.value || undefined;
  if (title && body) {
    let postObj = {
      userId: 101,
      title,
      body,
    };
    fetch(URL, {
      method: `POST`,
      headers: {
        "content-type": "Application/JSON",
      },
      body: JSON.stringify(postObj),
    })
      .then((response) => response.json())
      .then((post) => {
        let listItem = listItemGenaretor(post);
        posts.appendChild(listItem);
        this.reset();
      })

      .catch((e) => console.log(e.message));
  } else {
    alert(`please provide every details`);
  }
});

function listItemGenaretor(item) {
  let li = document.createElement(`li`);
  li.className = `list-group-item `;
   li.innerHTML = `<span>${item.id}.</span> ${item.title} By user ID-${item.userId}`;

  return li;
}
