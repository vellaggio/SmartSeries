var renderSeries = function(data){

      var compilated_serie =
	"<li class='table-view-cell media'>"+
	"<a class='navigate-right' href='serie_view.html' data-transition='slide-in'>"+
	  "<img class='media-object pull-left' src='img/<%= serie.img %>'>"+
	  "<div class='media-body'>"+
	    "<%= serie.name %>"+
	    "<p class='serie_desc'><%= serie.description %></p>"+
	  "</div>"+
	"</a>"+
      "</li>";
      console.log(data);
      $.each(data, function(index, serie) {
        console.log(index);
        console.log(serie);
        $('#series_list').append(_.template(compilated_serie, serie));
      });
};

$(function()
{
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "renderSeries",
    url: "http://10.252.165.64:8181/series/" ,
    success: function(){
      alert("succesed");
    },
    fail: function(){
      alert("something went wrong");
    }
  });
});

