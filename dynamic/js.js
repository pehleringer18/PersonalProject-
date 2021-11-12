$(function() {
  $( "#draggable" ).draggable();
  
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
        var draggable = ui.draggable;
        var id = draggable.attr("id");
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        $('#counter').html(function(i, val) {
            if (id == "draggable1") {
                return val * 1 + 1;
            }
        });
      }
    });
});

$(function() {
    $( "#draggable1" ).draggable();
    
    $( "#droppable1" ).droppable({
      drop: function( event, ui ) {
        var draggable = ui.draggable;
        var id = draggable.attr("id");
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        $('#counter').html(function(i, val) {
            if (id == "draggable4") {
                return val * 1 + 1;
            }
          });
        }
      });
  });

  $(function() {
    $( "#draggable2" ).draggable();
    
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        var draggable = ui.draggable;
        var id = draggable.attr("id");
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        $('#counter').html(function(i, val) {
            if (id == "draggable") {
                return val * 1 + 1;
            }
          });
        }
      });
  });

  $(function() {
    $( "#draggable3" ).draggable();
    
    $( "#droppable3" ).droppable({
      drop: function( event, ui ) {
        var draggable = ui.draggable;
        var id = draggable.attr("id");
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        $('#counter').html(function(i, val) {
            if (id == "draggable3") {
                return val * 1 + 1;
            }
          });
        }
      });
  });

  $(function() {
    $( "#draggable4" ).draggable();
    
    $( "#droppable4" ).droppable({
      drop: function( event, ui ) {
        var draggable = ui.draggable;
        var id = draggable.attr("id");
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        $('#counter').html(function(i, val) {
            if (id == "draggable2") {
                return val * 1 + 1;
            }
          });
        }
      });
  });