function ShowDropDowns(dropdownid, indicid){
    dropdown = document.getElementById(dropdownid);
    indic = document.getElementById(indicid);
    dropdown.classList.toggle("show");
    if(indic.innerHTML === "-"){
      indic.innerHTML = "+";
    } else {
      indic.innerHTML = "-";
    }
  };

function AccessSitesForm(){
  if(window.accessasked === true){
    window.location.href = "#"
  }else {
    window.accessasked = true;
    const root = document.getElementById("main-page");
    root.innerHTML = ""
    const body = document.createElement("div");
    const formTitle = document.createElement("div");
    const formDirectForm = document.createElement("form");
    const formDirectText = document.createElement("p");
    const formDirectEntry = document.createElement("input");
    const formDirectSubmit = document.createElement("input");
    const formGuestText = document.createElement("p");
    const formGuestDiv = document.createElement("div");
    const formGuestTokenForm = document.createElement("form");
    const formGuestTokenTxt = document.createElement("p");
    const formGuestTokenEntry = document.createElement("input");
    const formGuestTokenSubmit = document.createElement("input");
    const br = document.createElement("br");
    
    root.appendChild(body);
    body.appendChild(formTitle);
    body.appendChild(formDirectText);
    body.appendChild(formDirectForm)
    formDirectForm.appendChild(formDirectEntry);
    formDirectForm.appendChild(formDirectSubmit);
    body.appendChild(formGuestText);
    body.appendChild(formGuestDiv);
    formGuestDiv.appendChild(formGuestTokenForm)
    formGuestTokenForm.appendChild(formGuestTokenTxt);
    formGuestTokenForm.appendChild(formGuestTokenEntry);
    formGuestTokenForm.appendChild(formGuestTokenSubmit);
    body.appendChild(br);

    body.setAttribute("class", "SitesForm dark-grey-bg white-text mid-text");
    body.setAttribute("id", "MainForm");
    formTitle.setAttribute("class", "center-text mid-dark-orange-text");
    formDirectEntry.setAttribute("type", "text");
    formDirectEntry.setAttribute("id", "DirectEntry");
    formDirectSubmit.setAttribute("type", "submit");
    formDirectSubmit.setAttribute("onclick", "GoToSiteCondition('DirectEntry', 'Direct')");
    formGuestTokenEntry.setAttribute("type", "text");
    formGuestTokenEntry.setAttribute("id", "TokenEntry");
    formGuestTokenSubmit.setAttribute("type", "submit");
    formGuestTokenSubmit.setAttribute("onclick", "GoToSiteCondition('TokenEntry', 'Token')");
    

    formTitle.innerHTML = "Méthodes d'accès";
    formDirectText.textContent = "Accès direct, via nom du site :";
    formGuestText.textContent = "Accès via token :";
    formGuestTokenTxt.textContent = "Veuillez saisir votre token";
    
  }
};


function GoToSiteCondition(inputid, fromEntry){
  console.log("GotToSiteCondition() function is touched");
  const input = document.getElementById(inputid).value;
  const jsondata = '{ "Sites": ['+
        '{ "name": "Vervet-Editions", "link": "/sites/Vervet-Editions/index.html", "token": "VE123.chs" },'+
        '{ "name": "Octopot", "link": "/sites/Octopot/index.html", "token": "Oc456.cps" }]}';
  const obj = JSON.parse(jsondata);

  if(document.getElementById("EntryInfos")){} else {
    const entryInfos = document.createElement("div");
    document.getElementById("MainForm").appendChild(entryInfos);
    entryInfos.setAttribute("id", "EntryInfos");
    entryInfos.setAttribute("class", "WarnDiv little-mid-text");
  }
  const warndiv = document.getElementById("EntryInfos");
  if (input){
    warndiv.textContent = "We are redirecting you... ";
    if (fromEntry === "Direct"){
      if (input === obj.Sites[0].name){
        warndiv.textContent = "We are redirecting you, wait a minute...";
        window.location.href = obj.Sites[0].link;
      } else {
        warndiv.textContent = "I'm sorry but the name you entered is not corresponding to any sites in our data base..."
      }
    } else if(fromEntry === "Token"){
      if(input === obj.Sites[0].token){
        warndiv.textContent = "We are redirecting you, wait a minute...";
        window.location.href = obj.Sites[0].link;
      } else if(input === obj.Sites[1].token){
        warndiv.textContent = "We are redirecting you, wait a minute...";
        window.location.href = obj.Sites[1].link;
      }
    }
  } else {
    warndiv.textContent = "You haven't entered something";
  }
};

// Used to toggle the menu on small screens when clicking on the menu button
function ShowNavBar() {
  var x = document.getElementById("phone-nav");
  if (x.style.display === "none") {
    console.log("Elem opened");
    OpenPhoneNav();
  } else { 
    console.log("Elem Closed");
    ClosePhoneNav();
  }
};
function OpenPhoneNav(){
    var x = document.getElementById("phone-nav");
    var y = document.getElementById("computer-nav");
    y.style.transition = "1.7s"
    x.style.display = "block";
    y.style.marginLeft = "0";
    y.style.zIndex = "2";
    y.style.width = "fit-content"
};
function ClosePhoneNav(){
    var x = document.getElementById("phone-nav");
    var y = document.getElementById("computer-nav");
    x.style.display = "none";
    y.style.marginLeft = "-10%";
    y.style.zIndex = "2";
    y.style.width = "25%"
}

accessasked = false;
