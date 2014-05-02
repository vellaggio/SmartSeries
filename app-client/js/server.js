function getSeries()
{
  $.ajax({
            type: 'get',
            url: 'https://api.qualifiedaddress.com/street-address/',
            dataType: 'jsonp',
            async: false,
            data: {
                'auth-token': 'YOUR_AUTHENTICATION_TOKEN_OR_HTML_IDENTIFIER',
                'street': givenAddress.delivery_line_1
            },
            success: function (data) {
                
                // Show the candidate addresses (along with the user input)
                $('#candidates').empty();
                $('#invalid').hide();
                data.push(givenAddress);
                $("#address-candidate-template").tmpl(data).appendTo("#candidates");
                if (data.length === 1)
                    $('#invalid').show();
                $('#dialog').dialog({
                    title: 'Which address is best?',
                    autoOpen: false,
                    show: 'clip',
                    hide: 'clip'
                });
                $('#dialog').dialog('open');
            }
        });
}