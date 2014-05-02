var renderSeries = function(data){

      var compiled_serie = _.template(
	"<li class='table-view-cell media'>"+
	"<a class='navigate-right' href='serie_view.html' data-transition='slide-in'>"+
	  "<img class='media-object pull-left' src='img/<%= image_url %>'>"+
	  "<div class='media-body'>"+
	    "<%= name %>"+
	    "<p class='serie_desc'><%= description %></p>"+
	  "</div>"+
	"</a>"+
      "</li>")
      $.each(data, function(index, serie) {
        console.log(index);
        console.log(serie);
        $('#series_list').append(compiled_serie(serie));
      });
};

$(function()
{
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "renderSeries",
    url: "http://10.252.165.64:8181/series/" ,
  });
});

