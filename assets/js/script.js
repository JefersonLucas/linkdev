/*!
 * Jeferson Luckas - LinkDev
 *
 * Copyright (c) 2021 Jeferson Lucas
 * Released under the MIT license
 * https://github.com/JefersonLucas/linkdev
 *
 */

window.addEventListener('load', () => {
  const url = 'https://api.github.com/users/JefersonLucas';
  fetch(url).then((res) => {
    res.json().then((data) => {
      showData(data);
    });
  });
});

function showData(data) {
  const title = document.querySelector('title');
  const user = document.querySelector('h1');
  const login = document.querySelector('p');
  const avatar = document.querySelector('img');

  title.textContent = `${data.name} | LinkDev`;
  user.textContent = data.name;
  login.textContent = `@${data.login}`;
  avatar.src = data.avatar_url;
}
