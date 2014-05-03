

//get params
var path = $(location).attr('href');
var spath=path.split("?");
path=spath[1];
var params = path.split("&");
var i, values, name;
for (i=0; i<params.length; i++){
  if (params[i].indexOf("name")!=-1) { 
    values = params[i].split("=");
    name= values[1].replace("%20", " ");
    $(function(){
      $('#chat_title').text(name);
    });
  }
  if (params[i].indexOf("img")!=-1) { 
    values = params[i].split("=");
    img= values[1];
    $(function(){
      $('.img_chat').attr("src", "img/"+img+"");
    });
  }
}
function sendM(){
  $("#mesage_you").empty().text($('#input_send').val());
  $("#mesage_you").parent().show();
  $("#input_send").remove();
  var $input = "<input id='input_send' type='text' placeholder='Type here your message'>"
  $('#text_send').append($input);
}


function getCName()
{
  return name;
}

function getCImg()
{
  return img;
}


