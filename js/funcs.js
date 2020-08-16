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
    alert("You can't call twice the process, wait a little longer before the form appear");
  }else {
    window.accessasked = true;
    const body = document.createElement("div");
    const formTitle = document.createElement("div");
    const formDirectText = document.createElement("p");
    const formDirectEntry = document.createElement("input");
    const formGuestText = document.createElement("p");
    const formGuestDiv = document.createElement("div");
    const formGuestTokenTxt = document.createElement("p");
    const formGuestTokenEntry = document.createElement("input");

    document.getElementById("main-page").appendChild(body);
    body.appendChild(formTitle);
    body.appendChild(formDirectText);
    body.appendChild(formDirectEntry);
    body.appendChild(formGuestText);
    body.appendChild(formGuestDiv);
    formGuestDiv.appendChild(formGuestTokenTxt);
    formGuestDiv.appendChild(formGuestTokenEntry);

    body.setAttribute("class", "SitesForm dark-grey-bg white-text little-mid-text");
    formTitle.setAttribute("class", "center-text mid-dark-orange-text")

    formTitle.innerHTML = "Méthodes d'accès";
    formDirectText.textContent = "Accès direct, via nom du site :";
    formGuestText.textContent = "Accès via token :";
    formGuestTokenTxt.textContent = "Veuillez saisir votre token :";
    
  }
};




function TestAccessSites(){
  document.write('<div id=\"cache\">Veuillez patienter...<\/div>');
    document.write('<script type=\"text\/javascript\">');
    var nava = (document.layers);
    var dom = (document.getElementById);
    var iex = (document.all);
    if (nava) { cach = document.cache }
    else if (dom) { cach = document.getElementById("cache").style }
    else if (iex) { cach = cache.style }
    largeur = screen.width;
    cach.visibility = "visible";
    document.write('<\/script>');
}

accessasked = false;