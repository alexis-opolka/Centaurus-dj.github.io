import FooterClass from "./footer.js";
import HeaderClass from "./header.js";
import PageContentClass from "./content.js";

export function whut() {
  console.warning('Warning, my friend.');
}

export class MainClass {
  constructor(pageTitle, contentID) {
      this.name = 'Themeteor';
      this.version = 0.1;

      this.availableThemes = ['dark', 'light'];
      this.themes = {
        'dark': 'dark-bg white-fg',
        'light': 'light-bg black-fg'
      };
      this.CSSThemeData = {
        'dark': 'background-color: #1e1e1e; color: #ffffff;',
        'light': 'background-color: #c3c3c3; color: #000000;'
      };

      this.config = ''; // Here is added the configuration of the page
      this.CSSconfig = ''; // Here is added the configuration of the page in CSS code
      this.currentTheme = ''; // Here is added the current displayed theme of the page

      this.headerObject = new HeaderClass(this, 'page-header', pageTitle);
      this.footerObject = new FooterClass(this, 'page-footer');
      this.ContentObject = new PageContentClass(this, 'page-content', contentID);

  }

  createTheme(themeName, themeCSSCode, themeCSSClass) {
    if (this.availableThemes.includes(themeName) === false) {
      this.availableThemes.push(themeName);
      this.themes[themeName] = themeCSSClass;
      this.CSSThemeData[themeName] = themeCSSCode;
      console.debug("Theme created");
    } else {
      console.debug("Theme already created... No action taken...");
    }
  }

  setTheme(theme) {
    if (this.availableThemes.includes(theme)) {
      this.config = this.themes[theme];
      this.CSSconfig = this.CSSThemeData[theme];
      this.currentTheme = theme;
    }
  }

  getTheme(themeName) {
    if (this.availableThemes.includes(themeName)) {
      var themeData = this.themes[themeName];
      var themeOuput = {
        'name': themeName,
        'classData': themeData,
        'styleData': this.CSSThemeData[themeName]
      };
      return themeOuput;
    }
  }

  build() {
    document.body.classList = this.config;
    document.body.style = '';
    console.log('Built -> body-class-data: ' + this.config + '.');
    this.footerObject.build();
    console.log('Built -> footer-class-data: ' + this.footerObject.cssData + '.');
  }
  buildCSS() {
    document.body.classList = '';
    document.body.style = this.CSSconfig;
    console.log('Built -> body-style-data: ' + this.CSSconfig + '.');
    this.footerObject.buildCSS();
    console.log('Built -> footer-style-data: ' + this.footerObject.cssData + ".");
  }

  setThemeThenBuild(themeName) {
    this.setTheme(themeName);
    this.build();
  }
  setThemeThenCSSBuild(themeName) {
    this.setTheme(themeName);
    this.buildCSS();
  }
  getCurrentThemeName(){
    return this.currentTheme;
  }

  buildContent(){
    this.ContentObject.build();
  }
}
