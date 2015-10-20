


 $(document).ready(function () {
      var TotalchangeElement = $("#totalChange").val();
 if (TotalchangeElement == "" || TotalchangeElement == null) {
     $("#resultsArea").hide();
 }
     alert("jQuery Working!");

     $("#totalChange").change(function () {


         if (TotalchangeElement == "") {
             $("#resultsArea").hide();
         }

     });


 }); // End Document Readdy
