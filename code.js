$(document).ready(function(){
    $("#btadd").click(function(e){
        $("#all").append('<div><input type="text" name="ayed"><a href="#" class="remove_field">Remove</a></div>');
        $("#all").on("click",".remove_field", function(e){ 
       // e.preventDefault(); 
        $(this).parent('div').remove();
    })

})
})




