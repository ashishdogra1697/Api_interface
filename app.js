

$.getJSON("https://jsonplaceholder.typicode.com/photos", function(data){
  console.log(data);
/* for(var i=0;i<data.length;i++){
    var image = data[i].url;
    var id = "card" + i;
    $('id').attr('src', image);
 }*/
  var image = data[0].url;
  $('#a').attr('src', image);
  
  var image = data[1].url;
  $('#b').attr('src', image);

  var image = data[2].url;
  $('#c').attr('src', image);

  var image = data[3].url;
  $('#d').attr('src', image);

  var image = data[4].url;
  $('#e').attr('src', image);

  var image = data[5].url;
  $('#f').attr('src', image);

  var image = data[6].url;
  $('#g').attr('src', image);

  var image = data[7].url;
  $('#h').attr('src', image);

  var image = data[8].url;
  $('#i').attr('src', image);

});


$("button").on("click",function(event){
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
    });
     event.stopPropagation();
 });