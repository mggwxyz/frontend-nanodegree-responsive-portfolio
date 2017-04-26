(function(){

    "use strict";

    $(document).ready(function(){
        $(document).on('click', '.actions-icon', function(){
            $(this).toggleClass('invert');
            $(this).parent().parent().toggleClass('full-height');
            $(this).parent().parent().find('div.featured-work-description-container').toggleClass('hidden-away');
        })
    });

})();
