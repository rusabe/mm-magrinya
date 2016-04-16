$(function () {

    $("#btnSend").click(function () {
        alert('here:');

        $.ajax({
                type:"POST",
                data: $("#contact-form").serialize(),
                url:"contact.php",
                success: function() {
                    alert('success');
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('.contacta').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    alert('error');
                    $('.contacta').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
    });

});
