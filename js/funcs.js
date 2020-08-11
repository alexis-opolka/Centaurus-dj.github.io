function ShowDropDowns(dropdownid, indicid){
    dropdown = document.getElementById(dropdownid);
    indic = document.getElementById(indicid);
    dropdown.classList.toggle("show");
    if(indic.innerHTML === "-"){
      indic.innerHTML = "+";
    } else {
      indic.innerHTML = "-";
    }
  }
  