export default class PageContentClass {
  constructor(ancestor, divId, contentID) {
    this.ancestor = ancestor;
    this.DOMObject = document.getElementById(divId);
    this.contentID = contentID;
  }

  build() {
    console.log('Constructing content of page:', this.contentID);

    if (this.contentID === 'main') {

      var contentHolder = document.createElement('div');
      contentHolder.style = "position: relative;";

      var blockTitle = document.createElement('div');
      blockTitle.className = "hi";
      blockTitle.innerText = "Welcome on my website! I'm Centaurus.";

      var navBox = document.createElement('div');
      navBox.className = 'main-nav';
      navBox.innerText = 'Test';

      contentHolder.appendChild(blockTitle);
      contentHolder.appendChild(navBox);

      this.DOMObject.appendChild(contentHolder);
    }
  }
}