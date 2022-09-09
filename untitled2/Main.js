// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//   6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
url.searchParams.get(id);
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  .then(response => response.json())
  .then(users => {
    for (const user of users) {
      let com = document.createElement('h2');
      com.innerText=`User details`;
      const div = document.createElement('div');
       div.classList.add('member');
      const div1 = document.createElement('div');
      div1.innerText =`ID:${user.id}`;
      const div2= document.createElement('div');
      div2.innerText =`Name:${user.name}`;
      const div3= document.createElement('div');
      div3.innerText =`Username:${user.username}`;
      const div4= document.createElement('div');
      div4.innerText =`Emaile:${user.email}`;
      const div5= document.createElement('div');
      div5.innerText =`Address:${user.address.city} ${user.address.street} ${user.address.suite} ${user.address.zipcode}`;
      const div6= document.createElement('div');
      div6.innerText =`Suite:${user.address.suite}`;
      const div7= document.createElement('div');
      div7.innerText =`Zipcode:${user.address.zipcode}`;
      const div8= document.createElement('div');
      div8.innerText =`Geo:${user.address.geo.lat} ${user.address.geo.lng}`;
      const div9= document.createElement('div');
      div9.innerText =`Phone:${user.phone} }`;
      const div10= document.createElement('div');
      div10.innerText =`Company:${user.company.name} ${user.company.catchPhrase} BS:${user.company.bs}`;
      div.appendChild(com);
      div.appendChild(div1);
      div.appendChild(div2);
      div.appendChild(div3);
      div.appendChild(div4);
      div.appendChild(div5);
      div.appendChild(div6);
      div.appendChild(div7);
      div.appendChild(div8);
      div.appendChild(div9);
      div.appendChild(div10);
      document.body.appendChild(div);


    }
  })

let divpost =document.createElement('div');
document.body.appendChild(divpost);
let buttonpost =document.createElement('button');
buttonpost.innerText = 'post of current user';
divpost.classList.add('button');
document.body.appendChild(buttonpost);
buttonpost.onclick = (e) =>{
  e.preventDefault();
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(resp => resp.json())
    .then(posts => {
      for (const post of posts) {
        let ul = document.createElement('ul');
        ul.innerText = `${post.id} - ${post.title}`;
        divpost.classList.add('member');
        let a = document.createElement('a');
        a.href = `../untitled3/postdetailes.html?id=${id}`;
        a.innerText = '(full info about post)';
        ul.appendChild(a);
        divpost.appendChild(ul);
      }
    })}
