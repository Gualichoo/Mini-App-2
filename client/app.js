const $ = require('jQuery');


$('#frm1').on('submit', function(e){


  var data = $('frm1').val();
  console.log(data)
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/upload_json'",
    // data:,
    contentType: "application/json",
    success: function(data){alert(data);},
    failure: function(errMsg) {
      alert(errMsg);
    }
  });
  e.preventDefault();
  $('#data_result').append(data);
});