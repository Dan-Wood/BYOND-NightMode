jQuery('body').append('<div id="nightmode"><span class="eye"></span></div>');

var link = '<link id="nightmodecss" rel="stylesheet" type="text/css" href="https://byondpanel.com/BYOND-NightMode/nightmode.css">';

if(localStorage.nightmode == 1) {
    jQuery('body').append(link);
}

jQuery('#nightmode').click(function() {
    console.log(localStorage.nightmode);
    if(localStorage.nightmode == 0) {
        jQuery('body').append(link);
        localStorage.nightmode = 1;
    } else {
        localStorage.nightmode = 0;
        jQuery('#nightmodecss').remove();
    }
});