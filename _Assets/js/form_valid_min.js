$(document).ready(function () {
    $("#general-question").validate({
        messages: {
            first_name: {
                required: !0,
                minlength: 3
            },
            last_name: {
                required: !0,
                minlength: 3
            },
            phone: {
                required: !0,
                minlength: 7
            },
            email: {
                required: !0,
                email: !0
            },
            General_Question: {
                required: !0,
                minlength: 5
            },
            Permission_Received: "required"
        },
        messages: {
            first_name: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            last_name: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Your phone number must consist of at least 7 characters"
            },
            email: "Please enter a valid email address",
            General_Question: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            },
            Permission_Received: "Please accept our policy"
        }
    })

    $("#sales-question").validate({
        messages: {
            first_name: {
                required: !0,
                minlength: 3
            },
            last_name: {
                required: !0,
                minlength: 3
            },
            phone: {
                required: !0,
                minlength: 7
            },
            email: {
                required: !0,
                email: !0
            },
            State: {
                required: true
            },
            Sales_Question: {
                required: !0,
                minlength: 5
            }
        },
        messages: {
            first_name: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            last_name: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Your phone number must consist of at least 7 characters"
            },
            email: "Please enter a valid email address",
            State: "Please select your State",
            Sales_Question: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            }
        }
    })
});
$(window).load(function () { var li = $('.left-column-wrap > div'); var likeySelected; $(window).keydown(function (e) { if (e.which === 40) { if (likeySelected) { likeySelected.removeClass('key-selected'); next = likeySelected.next(); if (next.length > 0) { likeySelected = next.addClass('key-selected'); } else { likeySelected = li.eq(0).addClass('key-selected'); } } else { likeySelected = li.eq(0).addClass('key-selected'); } } else if (e.which === 38) { if (likeySelected) { likeySelected.removeClass('key-selected'); next = likeySelected.prev(); if (next.length > 0) { likeySelected = next.addClass('key-selected'); } else { likeySelected = li.last().addClass('key-selected'); } } else { likeySelected = li.last().addClass('key-selected'); } } }); }); $(document).ready(function () {
    $("#subscribe-form").validate({ messages: { email: { required: !0, email: !0 } }, messages: { email: { required: "Please enter a valid email address" } } }); $('#subscribe-form :input').focus(function () { $(this).parent().addClass("valid-group").children("label.label-focus").removeClass("label-focus").addClass("label-blur"); }); $("form :input").blur(function () { $(this).next("label.label-blur").removeClass("label-blur").addClass("label-focus"); }); if (window.location.href.indexOf("b309b5f2-3dd0-40b1-92c0-c0c605ff664e") > -1) { $("#subscribe-form").addClass("hide"); $(".thank-you").removeClass("hide"); $("html, body").animate({ scrollTop: $("#popup-fixed").offset().top - 150 }, 'fast'); }
    $("#subscribe-form").submit(function () { $.ajax({ type: 'POST', url: 'http://info.nthrive.com/l/311601/2017-06-14/d34n', data: { email: $("input[name=email]#email-1").val() }, success: function () { $("#subscribe-form").addClass("hide"); $(".thank-you").removeClass("hide"); } }); }); $("#subscribe-form-body").validate({ messages: { email: { required: !0, email: !0 } }, messages: { email: { required: "Please enter a valid email address" } } }); $("#subscribe-form-body :input").focus(function () { $(this).parent().addClass("valid-group").children('label.label-focus').removeClass("label-focus").addClass("label-blur"); }); $("form :input").blur(function () { $(this).next("label.label-blur").removeClass("label-blur").addClass("label-focus"); }); if (window.location.href.indexOf("WcoFormId=e03e8096-9bb4-4cf4-9006-1d86466b63a2") > -1) { $("#subscribe-form-body").addClass("hide"); $("#thank-you-body").removeClass("hide"); $("html, body").animate({ scrollTop: $("#subscribe-body-anchor").offset().top - 150 }, 'fast'); }
    $("#subscribe-form-body").submit(function () { $.ajax({ type: 'POST', url: 'http://info.nthrive.com/l/311601/2017-06-14/d34n', data: { email: $("input[name=email]#email-2").val() }, success: function () { $("#subscribe-form-body").addClass('hide'); $(".thank-you-body").removeClass('hide'); } }); });
});