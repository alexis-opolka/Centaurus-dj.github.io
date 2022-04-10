export function whut() {
  console.warning('Warning, my friend.');
}

export class MainClass {
  constructor() {
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

      this.headerObject = new HeaderClass('header');
      this.footerObject = new FooterClass('page-footer');
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
}

class FooterClass {
  constructor(footerId) {
    this.themeName = "dark-footer";
    this.cssData = "position: absolute; bottom: 0; right: 0; left: 0; padding: 5px; color: #6d6b6b; background-color: #111111; text-align: center; border-top: #727272 solid 1px;";

    this.copyrightDate = "2020-2022";
    this.copyrightHolder = "Alexis Opolka (Centaurus)";
    this.rightsHeld = "All Rights Reserved";

    this.findMeHref = "/new/me/#cloud-repositories";
    this.homePageHref = "/new/";
    this.aboutPageHref = "/new/about/";
    this.contactPageHref = "/new/contact";
    this.privacyPolicyPageHref = "/new/privacy-policy/";

    this.footerId = footerId;
    this.footerDiv = document.getElementById(this.footerId);

    // We construct the footer ourselves
    this.constructFooter();
  }

  constructFooter() {
    // Legal data
    var linkCopyrightHolder = document.createElement('a');
    linkCopyrightHolder.href = this.findMeHref;
    linkCopyrightHolder.textContent = this.copyrightHolder;

    var legalData = document.createElement('div');
    legalData.id = "legal-data";

    var loveImg = document.createElement('img');
    loveImg.src = "/new/src/png/heart.png";
    loveImg.alt = "Love";
    loveImg.style = "width: 20px; height: 20px;";

    var hostData = document.createElement('a');
    hostData.href = "https://github.com";
    hostData.textContent = "GitHub";
    hostData.target = "_blank";

    var hostingData = document.createElement('div');
    hostingData.id = "hosting-data";
    hostingData.innerHTML = `Hosted with ${loveImg.outerHTML} by ${hostData.outerHTML}`;

    var copyrightData = document.createElement('div');
    copyrightData.id = "copyright-data";
    copyrightData.innerHTML = `Copyright &copy; ${this.copyrightDate} ${linkCopyrightHolder.outerHTML} - ${this.rightsHeld}`;

    legalData.appendChild(hostingData);
    legalData.appendChild(copyrightData);

    // Footer links
    var linksHolder = document.createElement('div');
    linksHolder.id = "footer-links-holder";
    linksHolder.className = "footer-wrap";

    var linksLeftSubholder = document.createElement('div');
    linksLeftSubholder.id = "footer-links-left-subholder";
    linksLeftSubholder.className = "footer-subwrap";

    var linksRightSubHolder = document.createElement('div');
    linksRightSubHolder.id = "footer-links-right-subholder";
    linksRightSubHolder.className = "footer-subwrap";

    var linkHomepage = document.createElement('div');
    var anchorLinkHomepage = document.createElement('a');
    anchorLinkHomepage.href = this.homePageHref;
    anchorLinkHomepage.textContent = "Home Page";
    linkHomepage.appendChild(anchorLinkHomepage);

    var linkAbout = document.createElement('div');
    var anchorLinkAbout = document.createElement('a');
    anchorLinkAbout.href = this.aboutPageHref;
    anchorLinkAbout.textContent = "About";
    linkAbout.appendChild(anchorLinkAbout);

    var linkContact = document.createElement('div');
    var anchorLinkContact = document.createElement('a');
    anchorLinkContact.href = this.contactPageHref;
    anchorLinkContact.textContent = "Contact me";
    linkContact.appendChild(anchorLinkContact);

    var linkPrivacy = document.createElement('div');
    var anchorLinkPrivacy = document.createElement('a');
    anchorLinkPrivacy.href = this.privacyPolicyPageHref;
    anchorLinkPrivacy.textContent = "Privacy Policy";
    linkPrivacy.appendChild(anchorLinkPrivacy);

    // Append the childs
    this.footerDiv.appendChild(linksHolder);

    linksHolder.appendChild(linksLeftSubholder);
    linksLeftSubholder.appendChild(linkHomepage);
    linksLeftSubholder.appendChild(linkContact);

    linksHolder.appendChild(linksRightSubHolder);
    linksRightSubHolder.appendChild(linkAbout);
    linksRightSubHolder.appendChild(linkPrivacy);

    this.footerDiv.appendChild(legalData);
  }

  applyTheme(themeData) {
    console.log(themeData);
    this.themeName = themeData.name;
    this.footerDiv.classList = themeData.classData;
  }
  applyCSSTheme(themeData) {
    this.cssData = themeData;
    if (this.footerDiv.classList == '' | this.footerDiv.classList == "undefined") {
      this.footerDiv.style = this.cssData;
    }
  }
  build() {
    this.footerDiv.classList = "footer";
    this.footerDiv.style = "";
  }
  buildCSS() {
    this.footerDiv.classList = "";
    this.footerDiv.style = this.cssData;
  }
}

class HeaderClass {
  constructor(headerid) {
    this.id = headerid;
  }
}
