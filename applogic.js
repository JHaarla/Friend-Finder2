$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();

        function validateForm() {
            let isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        //Create an object from the user's data if the form validation passes
        if (validateForm()) {
            const userInput = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val(),
                ]
            };

            //AJAX POST the userInput object to the friends object in friends.js
            $.post("/api/friends", userInput, function (data) {

                // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#match-name").text(data.name);
                $("#match-img").attr("src", data.photo);

                // Show the modal with the best match
                $("#results-modal").modal("toggle");

            });
        } else {
            alert("Please fill out all fields before submitting!");
        } //end of form validation function

    }); //end of click event
}); //end of document.ready function