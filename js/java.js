// hide()/show() example with a switch statement 

$(document).ready(function(){
    
    
    // function to hide all divs 
    function hideAll() {
        $('#track01').hide();
        $('#track02').hide();
        $('#track03').hide();
        $('#track04').hide();
    }
    
    // run that function right away
    hideAll();
    
    // when any animal is clicked, make the suitable div appear
    $('.musicclick').click (function() {
        // but first, hide all the divs to ensure that 
        // only one will be open, ever 
        hideAll();
                
        // here is a switch statement - this was in Codecademy 
        // "More on Control Flow in JS" 
        
        // we can get the ID of the thing that was clicked - 
        switch ( $(this).attr("id") ) {
            case "track1" :
                $('#track01').show();
                break;
            case "track2" :
                $('#track02').show();
                break;
            case "track3" :
                $('#track03').show();
                break;
            case "track4" :
                $('#track04').show();
                break;
        }
    });  // end of function for clicking 

    
});





