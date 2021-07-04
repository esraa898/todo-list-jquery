

$(document).ready(function(){

// adding 
$("#add").on( 'click',function(e){ 
 
        e.preventDefault();
        if ($('#Todo').val()!==""){
      var add= $("<p class='design'></P>").text($('#Todo').val());
      var del=$("<button  class='del'> Delete</button>")
      var edit=$("<span class='edit' > Edit </span>")
     $("div .res").prepend(add);
      add.append(del,edit);
      $('#Todo').val("")
    }
     else{

       alert ("add task value")
   

 } });

 $(".res").on('click','.del',function(){
    $(this).parent().remove()
});
























});