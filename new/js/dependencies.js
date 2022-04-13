import {whut, MainClass} from './libs/themeteor/main.js';

// Defining Variables
var themeManager = new MainClass();
var workInProgress = true;

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
  themeManager.setThemeThenCSSBuild('theme-test');
}
// registering functions in window storage
window.setPageThemeDark = setPageThemeDark;
window.setPageThemeLight = setPageThemeLight;
window.setPageThemeTest = setPageThemeTest;
window.themeManager = themeManager;

// Procedural actions
themeManager.createTheme('theme-test', 'background-color: #1184b9; color: #ffffff', 'bruh');
themeManager.setTheme('dark');
themeManager.build();

console.log(themeManager.getTheme('dark'));
if (window.workInProgress === true) {
  var documentTitle = document.title;
  
  document.title = documentTitle + ' | Work still in progress';
  console.log(`As the document is still a work in progress the title has been changed from [${documentTitle}] to [${document.title}]`);

  
}