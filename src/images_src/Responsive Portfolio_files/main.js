"use strict";

(function(){
    $(document).ready(function(){
        console.log('jQuery is loaded and ready to go...');
        $(document).on('click', '.arrow', function(){
            $(this).parent().parent().toggleClass('full-height');
            $(this).parent().parent().find('div.featured-work-description').toggleClass('hidden-away');
        })
    });
})();
