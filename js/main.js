(function(){

    "use strict";

    function addEventListeners() {

        // Toggle class
        function toggleClass(element, classToBeToggled){
            var elementClasses = element.className.toString();
            var classRegex = new RegExp('\\b' + classToBeToggled + '\\b');
            var elementHasClass = elementClasses.match(classRegex);
            if (elementHasClass) {
                element.className = elementClasses.replace(classRegex, '');
            } else {
                element.className = elementClasses + " " + classToBeToggled;
            }
        }

        // Find all the project info buttons
        var actionIcons = document.querySelectorAll('.options-button');

        for ( var i = 0; i < actionIcons.length; i++){
            actionIcons[i].addEventListener('click', function(event) {
                var el = event.currentTarget;
                var grandParent = el.parentNode.parentNode;
                var descriptionContainer = el.parentNode.nextSibling.nextSibling;
                toggleClass(grandParent, 'full-height');
                toggleClass(descriptionContainer, 'hidden-away');
            });
        }
    }

    /*
        'complete means the document and all its subresources have finished loading and the 'load' event is about to be fired
        'loading' means the document is still loading
     */
    if (document.readyState === 'complete' || (document.readyState === 'loading' && !document.documentElement.doScroll)) {
        addEventListeners();
    } else {
        document.addEventListener('DOMContentLoaded', addEventListeners);
    }

})();
