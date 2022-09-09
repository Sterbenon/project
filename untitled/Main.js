// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const wrap = document.createElement('div');
    for (const user of users) {
    const div = document.createElement('div');
    div.innerText = `ID: ${user.id} Name: ${user.name}`;
    document.body.appendChild(div);
    div.classList.add('member');
    wrap.appendChild(div);

    const a = document.createElement('a');
    a.href = `../untitled2/index.html?id=${user.id}`;
    a.innerText='(user-detailes)';
    div.appendChild(a);
    a.classList.add('button');

    document.body.appendChild(wrap);
   wrap.classList.add('wrap');
  }
  });







