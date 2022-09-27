$().ready(function() {
    // $("#send").validate({
    //     rules: {
    //       name: {
    //         required: true,
    //         minlength: 3
    //       },
    //       email: {
    //         required: true,
    //         email: true
    //       },
    //       agree: {
    //         required: true},
    //       comment: {
    //         required: true
    //       }
    //     }
    //     });

    $('#send').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "/mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $(this).find("textarea").val("");
            $('#send').trigger('reset');
        });
        return false;
        });
})


 
