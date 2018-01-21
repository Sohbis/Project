alert();
$(document).ready(function () {
    $('#p1').click(function () {
        $('#p1').hide();
    })
    $("#1").click(function () {
        $("#p1").css("background-color", "yellow");
        // $("#1").addClass("ColorChange");
        $("#p1").addClass("Heading");
        // $("#2").removeClass("ColorChange");
        // $("#3").removeClass("ColorChange");

    })
    $("#2").click(function () {
        $("#p1").css("background-color", "red");
        // $("#2").addClass("active");
        // $("#1").removeClass("ColorChange");
        // $("#3").removeClass("ColorChange");

    })
    $("#3").click(function () {
        $("#p1").css("background-color", "blue");
        // $("#3").addClass("ColorChange");
        // $("#1").removeClass("ColorChange");
        // $("#2").removeClass("ColorChange");

    })

    $("#Home").click(function () {

        $("#p1").addClass("Heading");
    });



    
    
    
    
    
    // document.getElementById("p1").innerHTML = "New text";
    
})
        function myFunc(id) {
            $('#'+id).addClass('active');
            [1,2,3].forEach(function(num) {
                if(id != num) {
                    $('#'+num).removeClass('active');
                }
            })
        }
