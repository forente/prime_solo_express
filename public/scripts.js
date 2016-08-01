$(Document).ready(function(){


  $("button").click(function(){
    console.log('clicked');
      $.get({url: "/balance", success: function(result){
          $("#account_num").html(result);
      }});
      console.log('delay');
  });

});
