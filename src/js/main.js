"use strict";

(function(){
    $(document).ready(function(){
        console.log('jQuery is loaded and ready to go...');
        $(document).on('click', '.featured-work-information', function(){
            $(this).toggleClass('full-height');
        })
    });
})();
