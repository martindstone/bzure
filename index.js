function main() {
  const el = document.querySelector('#content');
  const params = new URLSearchParams(location.search);
  const config = JSON.parse(params.get('config'));

  const subdomain = config.account.subdomain;
  el.innerHTML = '<h2>great. Configured on these services:</h2><ul>'
  for (key of config.integration_keys) {
    el.innerHTML += `
      <li><a href="https://${subdomain}.pagerduty.com/services/${key.id}">${key.name}</a> (routing key ${key.integration_key})
    `;
  }
  el.innerHTML += '</ul>'
}

(() => {
  document.addEventListener('DOMContentLoaded', main)
})();