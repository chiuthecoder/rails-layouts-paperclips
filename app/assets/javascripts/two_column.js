  $(document).ready(function(){
    $('#new_user_form').submit(function(){
      $.post(
        $(this).attr('action'),
        $(this).serialize(),
        function(data){
          console.log('Data Received from the Ajax call', data);
          //put additional codes here to update html, etc.
          //for example things like
          $('#message').html(data.message);
        },
        "json"
      );
      return false;
    });
  });