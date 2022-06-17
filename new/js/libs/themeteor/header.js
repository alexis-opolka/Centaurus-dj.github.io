export default class HeaderClass {
  constructor(ancestor, headerId, headerTitle) {
    this.ancestor = ancestor;
    this.id = headerId;
    this.title = headerTitle;

    this.DOMData = document.getElementById(this.id);

    // We construct the Header
    this.constructHeader();
  }
  constructHeader(){
    function createThemeButton(id, textContent) {
      var button = document.createElement('button');
      button.className = themeButtonClass;
      button.id = id;
      button.type = 'button';
      button.name = 'button';
      button.textContent = textContent;
      return button;
    }
    // Debug sentence
    var debugStart = '[themeteor.main:HeaderClass.constructHeader]:';

    // Creating the holders of content
    var titleHolder = document.createElement('div');
    var toolsHolder = document.createElement('div');

    // Creating variables for classes
    var titleClass = 'header-title';
    var toolsClass = 'header-tools';
    var themeButtonClass = 'theme-button';

    // Creating the Header title and its anchor + its specs and its Holder
    titleHolder.className = titleClass;
    var titleDOM = document.createElement('a');
    titleDOM.href = './';
    titleDOM.textContent = this.title;

    // Creating the Header tools and its buttons + its specs and its Holder
    toolsHolder.className = toolsClass;
    // to be short, we use tBtn[0:2] -> ToolsButton[0 to 2 (its index)]
    var tBtn0 = createThemeButton('dark-theme-bt', 'Dark Theme');
    tBtn0.addEventListener('click', event => {
      this.ancestor.setTheme('dark');
      this.ancestor.build();
    });
    var tBtn1 = createThemeButton('light-theme-bt', 'Light Theme');
    tBtn1.addEventListener('click', event => {
      this.ancestor.setThemeThenBuild('light');
    });
    var tBtn2 = createThemeButton('blue-theme-bt', 'Blue Test Theme');
    tBtn2.addEventListener('click', event => {
      this.ancestor.setThemeThenCSSBuild('theme-test');
    });


    // Appending all the Childs to their respective Parents
    titleHolder.appendChild(titleDOM);
    toolsHolder.appendChild(tBtn0);
    toolsHolder.appendChild(tBtn1);
    toolsHolder.appendChild(tBtn2);
    this.DOMData.appendChild(titleHolder);
    this.DOMData.appendChild(toolsHolder);
  }
}