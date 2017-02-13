
$(function(){
    //key  AIzaSyAKlZh-yaEKVySjN3g9hb94PF-I-7xroFU
    $('head').append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKlZh-yaEKVySjN3g9hb94PF-I-7xroFU&callback=initMap">');
    if (isMobile.any()) {
       $('#organic-blob').remove();
     }else{
        resumir = "[resumen]";
     }
	$(document).foundation();

})

function initMap(){
    console.log('mapa listo');
}