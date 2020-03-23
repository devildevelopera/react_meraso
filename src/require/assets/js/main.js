import $ from "jquery";

$(document).ready(function() {
    "use strict";

    $(".sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
    });
    $(".slimscroll").slimscroll({
        width: "100%",
        height: "100% - 69px"
    });
    // sticky
    var wind = $(window);
    var sticky = $("header");
    wind.on("scroll", function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass("sticky");
        } else {
            sticky.addClass("sticky");
        }
    });
    // NiceSeclectore
    $(".select").niceSelect();
});
