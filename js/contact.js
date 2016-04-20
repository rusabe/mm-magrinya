$(function () {
    $("#btnSend").click(function () {
        if($("#contact-form").valid()){
            $.ajax({
                type:"POST",
                data: $("#contact-form").serialize(),
                url:"contact.php",
                success: function() {
                    $('#success').fadeIn();
                },
                error: function() {
                    $('#error').fadeIn();
                }
            });
        }
    });

});
