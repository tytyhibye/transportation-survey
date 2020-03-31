$(document).ready(function() {
  $("form#transportation-survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transport]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>")
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transport]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $("#fun-responses").append(funTransportationMode + "<br>")
    });
    $("#transportation-survey").hide();
  });
});