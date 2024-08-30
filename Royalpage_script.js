let currentScrollPosition = 0;

window.addEventListener('scroll', () => {
    currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('Aktuelle Scrollposition:', currentScrollPosition);
});
