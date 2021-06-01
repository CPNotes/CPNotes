
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
function mappopup(){
  const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
})
  Swal.fire({
  title: 'We are expecting you',
  title: '<u>चौधरी PHOTOSTAT</u>',
  text: "IIT DELHI Office is temporary closed due to COVID-19. Please do visit us at Dwarka Mor...",
  icon: 'success',
  showCancelButton: true,
  confirmButtonText: 'Jia Sarai-IIT Delhi',
  //confirmButtonText: '<a href="https://www.google.com/maps/dir//Choudhary+Photostat,+23,+Near+IIT,+Jia+Sarai,+Hauz+Khas,+New+Delhi,+Delhi+110016/@28.5459888,77.1894687,19.93z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1def6aef05a3:0x8ec1f339a6ae5f1e!2m2!1d77.189612!2d28.546233" target="_blank" style="color: white;">Jia Sarai-IIT Delhi</a>',
  //cancelButtonText: '<li nopopup()><a href="https://www.google.com/maps/dir//CP+Notes/@28.6171871,76.9471246,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d0507d0875345:0x3a699e1fed1cbf5b!2m2!1d77.0171649!2d28.6172051" target="_blank" style="color: white;">Dwarka Mor</a></li>',
  cancelButtonText: '<a href="https://www.google.com/maps/dir//CP+Notes/@28.6171871,76.9471246,12zdata=!4m8!4m7!1m0!1m5!1m1!1s0x390d0507d0875345:0x3a699e1fed1cbf5b!2m2!1d77.0171649!2d28.6172051" target="_blank" style="color: white;">Dwarka Mor</a>',
  reverseButtons: true
  }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Visit us at Dwarka Mor',
          ' Due to Covid-19 we are Temporary closed at Jia Sarai-IIT Delhi',
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
