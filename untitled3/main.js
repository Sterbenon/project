//   На странице post-details.html:
//   7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//   8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//   post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//   Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
let com = document.createElement('h2');
com.innerText=`Comments and info from post`;
document.body.appendChild(com);

let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
url.searchParams.get(id);
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  .then(resp => resp.json())
  .then(posts => {
    for (const post of posts) {
      let div = document.createElement('div');
      div.innerText = `Full info about post:
      UserID:${post.userId}
      ID:${post.id}
      Title:${post.title}
      Body:${post.body}`;
      document.body.appendChild(div);
      div.classList.add('first');
  }
  });

let url2 = new URL(location.href);
console.log(url);
let id1 = url2.searchParams.get('id');
url2.searchParams.get(id1);
console.log(id1);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(resp => resp.json())
  .then(posts => {
    for (const post of posts) {
      let div = document.createElement('div');
      div.innerText = `PostID:${post.postId}
      ID:${post.id}
      Name:${post.name}
      Email:${post.email}
      Body:${post.body}`;
      document.body.appendChild(div);
      div.classList.add('comment');
    }
  });
