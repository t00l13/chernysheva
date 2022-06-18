
// $(".education__list_hide").hide();
// $(".education__link").click(function() {
//     $(this).next(".education__list_hide").slideToggle();
//     $(this).text($(this).text() == "Скрыть" ? "Ещё" : "Скрыть");
// });
$(".events").each(function() {
    let more = $(this).find(".events__btn");
    let hide = $(this).find(".events__grid_hide");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Ещё" : "Скрыть");
    });
});

$(".education").each(function() {
    let more = $(this).find(".education__link");
    let hide = $(this).find(".education__list_hide");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Ещё" : "Скрыть");
    });
});

$(".reviews").each(function() {
    let more = $(this).find(".reviews__link");
    let hide = $(this).find(".reviews__grid_hide");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Ещё" : "Скрыть");
    });
});

$(".sertificat").each(function() {
    let more = $(this).find(".sertificat__link");
    let hide = $(this).find(".sertificat__list_hide");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Ещё" : "Скрыть");
    });
});