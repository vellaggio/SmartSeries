var votation=true;
      
      if (votation) {
        var compiled_date = _.template("<%= date %>");
        var date = compiled_date({"date": "May 3, 2014 15:18:00" });
        $('#countdown').show();
        //countdown
        
        // set the date we're counting down to
        var target_date = new Date(date).getTime();
        
        // variables for time units
        var days, hours, minutes, seconds;
        
        // get tag element
        var countdown = document.getElementById("countdown");
        
        setInterval(function () {
          // find the amount of "seconds" between now and target
          var current_date = new Date().getTime();
          var seconds_left = (target_date - current_date) / 1000;
          if (seconds_left<60)
            $('#countdown').css("background-color", "rgba(255, 3, 3, 0.66)");

          days = parseInt(seconds_left / 86400);
          seconds_left = seconds_left % 86400;
           
          hours = parseInt(seconds_left / 3600);
          seconds_left = seconds_left % 3600;
            
          minutes = parseInt(seconds_left / 60);
          seconds = parseInt(seconds_left % 60);
          
          // format countdown string + set tag value
          countdown.innerHTML =  hours + " <sp><sp>"
          + minutes + "<sp><sp> " + seconds + "";      
        }, 1000);
        
        
        
      }