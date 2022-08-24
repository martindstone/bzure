function main() {
  const el = document.querySelector('#content');
  const params = new URLSearchParams(location.search);
  el.innerHTML = '';
  for (const [k, v] of params.entries()) {
    el.innerHTML += `${k}: ${v}<br>`;
  }
}

(() => {
  document.addEventListener('DOMContentLoaded', main)
})();