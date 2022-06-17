import {whut, MainClass} from './libs/themeteor/main.js';

// Defining Variables
var themeManager = null;
var workInProgress = true;

// Functions defining section

function hello() {
  console.log('Hello World');
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
  themeManager.setThemeThenCSSBuild('theme-test');
}

function CreateThemeManager(pageTitle, contentID) {
  window.themeManager = new MainClass(pageTitle, contentID);
  window.themeManager.createTheme('theme-test', 'background-color: #1184b9; color: #ffffff', 'bruh');
  window.themeManager.setTheme('dark');
  window.themeManager.build();
}

// registering functions in window storage
window.setPageThemeDark = setPageThemeDark;
window.setPageThemeLight = setPageThemeLight;
window.setPageThemeTest = setPageThemeTest;
window.themeManager = themeManager;
window.CreateThemeManager = CreateThemeManager;

// Procedural actions
if (window.workInProgress === true) {
  var documentTitle = document.title;

  document.title = documentTitle + ' | Work still in progress';
  console.log(`As the document is still a work in progress the title has been changed from [${documentTitle}] to [${document.title}]`);
}
if (window.pageTitle != null) {
  console.log('ThemeManager Launched! IDs:', window.pageTitle, window.contentID);
  CreateThemeManager(window.pageTitle, window.contentID);
  window.themeManager.buildContent();
} else {
  console.log('ThemeManager Not Launched!');
}