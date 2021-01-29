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
  const avatar = document.querySelector('#avatar')
  const name = document.querySelector('#name')

  name.textContent = `Conheça outras redes de ${data.name}`;
  avatar.src = data.avatar_url;
}





