
    $( "#draggable" ).draggable();
    
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          $('#counter').html(function(i, val) {
            return val * 1 + 1;
          });
        }
      });
