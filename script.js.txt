// Initialize i18next
i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'en', // Default language
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/translation.json'
    }
  }, function(err, t) {
    updateContent();
  });

// Update text based on current language
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    elem.innerHTML = i18next.t(key);
  });
}

// Listen for language changes
document.getElementById('languageSwitcher').addEventListener('change', function(e) {
  i18next.changeLanguage(e.target.value, updateContent);
});
