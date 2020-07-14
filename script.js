var top = document.getElementById('second-top0');
var img = document.getElementById('imgMobile1');
var navbarTogglerIcon = document.getElementById('togglerIcon');
navbarTogglerIcon === 'clicked';
navbarTogglerIcon.addEventListener('click', function myFunction() {
    if( navbarTogglerIcon += 'clicked'){
     document.getElementById('second-top0').style.background = 'linear-gradient(to bottom, rgb(209, 207, 207), rgb(209, 207, 207))';
    var element = document.getElementById("navbarTogglerDemo02");
    element.classList.toggle("mystyle");
    }
    else{
        top.style.background = 'white';
        var element = document.getElementById("navbarTogglerDemo02");
        element.classList.toggle("mystyle");
      
    }
 });
