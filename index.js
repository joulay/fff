//maybe convert to XML
//build out DOM elements

//then append

//create local object of employees



$(document).ready(function() {

    $.each(employees, function(id, emp) {
        $(".employee-container").append("<img src=" + emp.img +  " class=\"profile-image\" id="+id+"></img>");
      });

 

    $(".profile-image").click(function(i) {
        $("#pane1 .pane-heading").attr(i);
        console.log(i)
        $("#pane2 .pane-heading").attr("pane1")
        
    }) 
});


