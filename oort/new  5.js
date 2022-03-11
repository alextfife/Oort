//javescripy
$('#button').toggle( 
    function() {
        $('#right').animate({ left: 100 }, 'fast', function() {
            $('#button').html('Close');
        });
    }, 
    function() {
        $('#right').animate({ left: 0 }, 'fast', function() {
            $('#button').html('Menu');
        });
    }
);