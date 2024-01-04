document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {
            done: "Select"
        },
        defaultDate: new Date(),
        setDefaultDate: true
    })

    // select initialization
    let select = document.querySelectorAll("select");
    M.FormSelect.init(select);

    // collapsible
    let collapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsible);

});


