// Initialize i18next
i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en', // fallback if translation not found
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/translation.json'
    }
  }, function(err, t) {
    if (err) return console.error(err);
    updateContent(); // Load default language
  });

// Function to update page content
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    elem.innerHTML = i18next.t(key);
  });
}

// Listen for language changes
document.getElementById('languageSwitcher').addEventListener('change', function(e) {
  const selectedLang = e.target.value;
  i18next.changeLanguage(selectedLang, (err, t) => {
    if (err) console.error('Language change error:', err);
    updateContent();
  });
});

