jQuery('body').append('<div id="nightmode"><span class="eye"></span></div>');


jQuery('#nightmode').click(function() {
    console.log(localStorage.nightmode);
    if(!localStorage.nightmode || localStorage.nightmode == 0) {
        var link = '<link id="nightmodecss" rel="stylesheet" type="text/css" href="https://byondpanel.com/BYOND-NightMode/nightmode.css">';
        jQuery('body').append(link);
        localStorage.nightmode = 1;
    } else {
        localStorage.nightmode = 0;
        jQuery('#nightmodecss').remove();
    }
});