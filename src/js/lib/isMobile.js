/*----------  Variables globales para precargas  ----------*/

window.timeLoad = 0;
window.delay =4000;
window.global = 1;

/*----------  Validar driver  ----------*/

window.delayFC = function(){
   // window.timeLoad+=(window.timeLoad+delay)*.08;
   window.timeLoad+=(delay)*.09;
    return window.timeLoad;
}
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};