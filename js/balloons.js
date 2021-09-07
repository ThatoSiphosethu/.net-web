$(function(){
    //page load
    var loader = randomSeeker();
    $("#loadSeeker").removeClass().addClass("animate__animated").addClass(loader);

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    //toast for submit btn
    $("#submit").on("click", function(e) {
        e.preventDefault();
        if(!$("#red").is(":checked") && !$("#green").is(":checked") && !$("#blue").is(":checked")) {
            $("#toast").toast({autohide: false}).toast("show");
        }
    });

    //unckeck/check all ballons
    $("#checkAll").click(function() {
        $("input:checkbox").not(this).prop("checked", this.checked);

    });

    

    //hover
    $(".form-check-label").hover(function() {
        $("#hoverOver").css("color", $(this).data("color"));
    },
            function() {
                $("#hoverOver").css("color", "");
            
        
    });

    //checkbox color
     // event listener for check/uncheck
     $('#checkAll').on('change', function () {
         $(".form-check-input").each(function (){
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    

    
});





function randomSeeker(){

// // color
//     var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
//         jQuery(".font-style").animate({color: newColor}, 2000); // animate
//     // if()

        const seekers = [
            "animate__flipInY",
            "animate__flipInY",
            "animate__fadeOut",
            "animate__rotateIn",
            "animate__hinge",
            "animate__slideInDown",
            "animate__wobble"
        ];

        var randomEntry = Math.floor(Math.random() * seekers.length);

        return seekers[randomEntry];
    }
    
});