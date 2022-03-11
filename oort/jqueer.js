$('#button').toggle( 
    function() {
        $('#right').animate({ left: 100 }, 'slow', function() {
            $('#button').html('Back >');
        });
    }, 
    function() {
        $('#right').animate({ left: 0 }, 'slow', function() {
            $('#button').html('< Links');
        });
    }
);
//jqueiry stuff
