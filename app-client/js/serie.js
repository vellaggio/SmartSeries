var renderQuestion = function(data){
  if (data == undefined) {
    console.log("no question");
    return;
  }
  data = data[0];
  console.log(data);
  var compiled_question = _.template("<%= question %>");
  var compiled_answer = _.template(
	"<li class='table-view-cell' style='background-color:<%= color %>'>"+
          "<%= text %>"+
          "<a class='btn btn-outlined btn-white'"+
          "onclick='vote(<%= id %>)'" +
          ">VOTA</a>"+
        "</li>");
  $(function(){
    $('#countdown').countdown({date: data.date_end});
    $('#qHeader').append(compiled_question(data));
    $.each(data.answers, function(index, answer) {
          console.log(index);
          console.log(answer);
          $('.options_list').append(compiled_answer(answer));
        });
  });

};

//get serie id
var path = $(location).attr('href');
var spath=path.split("?");
path=spath[1];
var params = path.split("&");
var i, id, values;
for (i=0; i<params.length; i++){
  if (params[i].indexOf("id")!=-1) { //id
    values = params[i].split("=");
    var id= values[1];
  }
  if (params[i].indexOf("name")!=-1) { //id
    values = params[i].split("=");
    var name= values[1].replace("%20", " ");
    $(function(){
      $('title').text(name);
      $('#serie_title').text(name);
  });
  }
}
function vote(id)
{
  $.ajax({
  type : "get",
  dataType: "jsonp",
  jsonpCallback: "redirect",
  url: server_address + "/vote/"+id ,
});
}
var redirect = function(){window.location.href="vote.html"};

$.ajax({
  dataType: "jsonp",
  jsonpCallback: "renderQuestion",
  url: server_address + "/series/"+id+"/questions" ,
});


