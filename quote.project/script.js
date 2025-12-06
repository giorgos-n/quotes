const quotes = [
  "Be yourself; everyone else is already taken.",
  "Simplicity is the ultimate sophistication.",
  "Every moment is a fresh beginning.",
  "Dream big and dare to fail.",
  "Do what you can, with what you have."
];

const quoteEl = document.getElementById('quote');
const btn = document.getElementById('btn');
const themeBtn = document.getElementById('themeToggle');


function showRandomQuote() {
  
  quoteEl.style.opacity = '0';
  quoteEl.style.transform = 'translateY(8px)';
  
  setTimeout(() => {
    const idx = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[idx];
    
    quoteEl.style.opacity = '1';
    quoteEl.style.transform = 'translateY(0)';
  }, 420);
}


function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
    themeBtn.setAttribute('aria-label', 'Switch to light theme');
  } else {
    document.body.classList.remove('dark-mode');
    themeBtn.textContent = '🌙';
    themeBtn.setAttribute('aria-label', 'Switch to dark theme');
  }
  
  try {
    localStorage.setItem('quoteThemeDark', isDark ? '1' : '0');
  } catch (e) {  }
}


(function initTheme(){
  let isDark = false;
  try {
    const val = localStorage.getItem('quoteThemeDark');
    if (val === '1') isDark = true;
    else if (val === '0') isDark = false;
    else {
      
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } catch (e) {
    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme(isDark);
})();


btn.addEventListener('click', showRandomQuote);

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  applyTheme(isDark);
});


window.addEventListener('load', () => {
  
  setTimeout(() => {
    showRandomQuote();
  }, 80);
});