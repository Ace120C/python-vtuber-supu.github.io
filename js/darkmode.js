const darkmodeToggle = document.querySelector('#darkmode-toggle');

darkmodeToggle.addEventListener('change', () => {
  if (darkmodeToggle.checked) {
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
  }else {
    document.body.classList.add('lightmode');
    document.body.classList.remove('darkmode');
  }
});

