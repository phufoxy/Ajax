var API = "http://localhost:3000";
$(document).ready(function () {
    function HTML(value) {
        var HTML =
            `<tr>
        <th scope="row">`+ value.id + `</th>
        <td>`+ value.name + `</td>
        <td>`+ value.age + `</td>
        <td> <a class="btn btn-danger" id="btn-delete" data-id="`+ value.id + `">Delete</a> </td>
        </tr>`;
        return HTML;
    }
    function getListAll() {
        $.ajax({
            url: API + "/profile?_sort=id&_order=desc",
            method: "GET",
            success: function (data) {
                $.each(data, function (key, value) {
                    console.log(value);
                    $('.list-item').append(HTML(value));
                });
            }
        });
    }
    getListAll();
    $('.form').click(function () {
        window.location.replace("form.html");
    });
    function DeleteID(id) {
        $.ajax({
            url: API + "/profile/" + id,
            method: "DELETE",
            success: function (data) {
                console.log("Delete Success");
            }
        });
    }
    $("body").on("click", "#btn-delete", function () {
        var id = $(this).attr('data-id');
        if (confirm(`You want delete Id ` + id)) {
            DeleteID(id);
            $(this).parent('td').parent().remove();
        } else {
            console.log('Not Delete');
        }

    });



})