const themeChanger = document.querySelector('.themer');
const darkThemeIcon = themeChanger.querySelector('#dark');
const lightThemeIcon = themeChanger.querySelector('#light');

themeChanger.addEventListener('click', () => {
  const currTheme = document.documentElement.classList;
  const lightTheme = currTheme.contains('light-mode');
  if (!lightTheme) {
    lightThemeIcon.style.display = 'none';
    darkThemeIcon.style.display = 'block';
  } else {
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'block';
  }

  currTheme.toggle('light-mode');
});
