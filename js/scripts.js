$(function() {
    $(".carousel").carousel({interval: 2000, pause: false});
    $("#carouselButton").on("click", function() {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });
    $("#reserveButton").on("click", function() {
        $("#reserveModal").modal("show");
    });
    $("#loginButton").on("click", function() {
        $("#loginModal").modal("show");
    });
});
