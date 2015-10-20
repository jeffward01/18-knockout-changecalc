
$(document).ready(function () {
    alert("jQuery Working!");
$("#resultsArea").text("");
    $("#totalChange").change(function () {
        var TotalchangeElement = $("#totalChange").val();

        while(TotalchangeElement =! undefined)
            {
                $("$resultsArea").show();
            }
        else {
            $("#resultsArea").hide();
        }

    });


}); // End Document Readdy