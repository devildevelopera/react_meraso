import $ from "jquery";

$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
    });

    $("#sidebarCollapseUi").on("click", function() {
        $("#sidebar").toggleClass("active");
    });

    $(".onclick_display").hide();

    $(".onclick_event").focus(function() {
        $(".onclick_display").slideDown(500);
    });

    $(".onclick_event").focusout(function() {
        $(".onclick_display").slideUp(500);
    });

    // $(".onclick_event").click(function() {
    //     $(".post-info").addClass("show");
    //     $(this).data("clicked", false);

    //     $(".photo_gif").show();
    //     $(".public-option").show();
    //     $(".post-info + .post-edit").show();
    // });

    $("#communityListView").click(function() {
        $(".groups-detail").css({
            flexDirection: "column"
        });
        $(".groups-cards").css({
            width: "97%",
            margin: "auto",
            marginBottom: "1.2rem"
        });
        $(".groups-cards .group-banner img").css({
            height: "200px"
        });
    });
    $("#communityGridView").click(function() {
        $(".groups-detail").css({
            flexDirection: "row"
        });
        $(".groups-cards").css({
            width: "31%"
        });
    });

    $("#FriendsListView").click(function() {
        $(".new-profle-card .card").css({
            width: "97%",
            margin: "auto",
            display: "block",
            marginBottom: "1.2rem"
        });
    });
    $("#FriendsGridView").click(function() {
        $(".new-profle-card .card").css({
            width: "31%",
            display: "inline-block",
            margin: "10px 9px"
        });
    });

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
    // $(".select").niceSelect();
});

$(".photo_gif").hide();
$(".public-option").hide();
$(".post-info + .post-edit").hide();
