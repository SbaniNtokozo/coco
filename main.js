

jQuery(document).ready(function () {

    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            iteams: 1,
            duration: 650,
            pauseOnHover: false
        },
        auto: true,
        iteams: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }

    });
    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 140) {
            $("header").addClass('second');
        } else {
            if ($("header").addClass('second')) {
                $("header").removeClass('second');
            }
        }
    })


});

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}


function whatsapp(){
    document.location.href = 'https://api.whatsapp.com/send?phone=+27 81 561 4372';
}



