import {whut, MainClass} from './libs/themeteor/main.js';

var themeManager = new MainClass();

// Functions defining section

function hello() {
  console.log('Hello World')
}

function setPageThemeDark() {
  themeManager.setTheme('dark');
  themeManager.build();
}

function setPageThemeLight() {
  themeManager.setTheme('light');
  themeManager.build();
}

function setPageThemeTest() {
  themeManager.createTheme('theme-test', 'background-color: #1184b9; color: #ffffff', 'bruh');
  themeManager.setThemeThenCSSBuild('theme-test');
}

function setFooterCopyright() {
  var footer = document.getElementById('footer');

  footer.textContent = 'Copyright (c) 2021 Centaurus - All Rights Reserved';
  console.debug('Footer created')
}

// registering functions in window storage
window.setPageThemeDark = setPageThemeDark;
window.setPageThemeLight = setPageThemeLight;
window.setPageThemeTest = setPageThemeTest;
window.themeManager = themeManager;

// Procedural actions

themeManager.setTheme('dark');
themeManager.build();

console.log(themeManager.getTheme('dark'));
