
//<!-- Function used to shrink nav bar removing paddings and adding black background -->
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.mynav').addClass('affix');
        console.log("OK");
    } else {
        $('.mynav').removeClass('affix');
    }
});
$('.mynavTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mymainListDiv").toggleClass("show_list");
$("#mymainListDiv").fadeIn();
});

//<!-- functions to pop-up-->

function contactpopup(){
  Swal.fire({
    icon: 'success',
    title: 'Whatsapp/Call',
    text: '+91 98189 09565 cpnotesofficial@gmail.com',
  });
}

//For Single Address
/*
function mappopup(){
  Swal.fire({
    title: 'We are expecting you',
    title: '<u>चौधरी PHOTOSTAT</u>',
    text: "WELCOME, Please do visit us...",
    icon: 'success',
    confirmButtonText: 'Jia Sarai-IIT Delhi',
    confirmButtonText: '<a href="https://www.google.com/maps/place/CP+Notes/@28.6172344,77.0144589,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0507d0875345:0x3a699e1fed1cbf5b!8m2!3d28.6172297!4d77.0170338!16s%2Fg%2F11kfbvld_z?entry=ttu" target="_blank" style="color: white;">Jia Sarai-IIT Delhi</a>',

  });
}*/

// For multiple address
function mappopup(){
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
    confirmButton: 'btn btn-success'
	},
	})
   Swal.fire({
   title: 'We are expecting you',
   title: '<u>चौधरी PHOTOSTAT</u>',
   text: "WELCOME, Please do visit us...",
   icon: 'success',
   showCancelButton: true,
   confirmButtonText: 'Jia Sarai-IIT Delhi',
   //confirmButtonText: '<a href="https://www.google.com/maps/dir//Choudhary+Photostat,+23,+Near+IIT,+Jia+Sarai,+Hauz+Khas,+New+Delhi,+Delhi+110016/@28.5459888,77.1894687,19.93z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1def6aef05a3:0x8ec1f339a6ae5f1e!2m2!1d77.189612!2d28.546233" target="_blank" style="color: white;">Jia Sarai-IIT Delhi</a>',
   
   
   //cancelButtonText: '<li nopopup()><a href="https://www.google.com/maps/dir//CP+Notes/@28.6171871,76.9471246,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d0507d0875345:0x3a699e1fed1cbf5b!2m2!1d77.0171649!2d28.6172051" target="_blank" style="color: white;">Dwarka Mor</a></li>',
   cancelButtonText: '<a href="https://www.google.com/maps/place/CP+Notes/@28.6172297,77.0144589,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0507d0875345:0x3a699e1fed1cbf5b!8m2!3d28.6172297!4d77.0170338!16s%2Fg%2F11kfbvld_z?entry=ttu" target="_blank" style="color: white;">Dwarka Mor</a>',
   reverseButtons: true
    })
.then((result) => {
       if (result.isConfirmed) {
         swalWithBootstrapButtons.fire(
           'Visit us at Dwarka Mor \n कृपया हमारी द्वारका मोड़ शाखा में आएं।',
           'We are Temporary closed at Jia Sarai-IIT Delhi \n हम जिया सराय-आईआईटी दिल्ली में अस्थायी रूप से बंद हैं',
		   
           'info',
         )}
 })
 }
 function nopopup(){
   Swal.fire({
     icon: 'error',
     title: 'Out of Work',
     text: 'We are working from Dwarka due to Covid-19!',
  });
 }

//back to Top
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
