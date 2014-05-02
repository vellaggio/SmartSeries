function getSeries()
{
  $.ajax({
            type: 'get',
            url: 'https://10.252.165.64:8181/series',
            dataType: 'json',
            async: false,
            success: function (data) {
              
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
              //Example object
              $(data).each(function(serie) {
                $('#series_list').append(_.template(compilated_serie, serie));
                }
              )           
            }
        });
}