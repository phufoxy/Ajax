var API = "http://localhost:3000";
$(document).ready(function () {
    $("body").on("click", "#save-add", function () {
        event.preventDefault();
        var name = $("#name").val();
        var age = $("#age").val();
        data = { name: name, age: age };
        $.ajax({
            url: API + "/profile",
            method: "POST",
            data: data,
            success: function (data) {
                console.log(data);
                window.location.replace("index.html");
            }
        })
    });
})