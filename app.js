

$.getJSON("https://jsonplaceholder.typicode.com/photos", function(data){
  console.log(data);
  var j='a';
for(var i=0;i<data.length;i++){
    var image = data[i].url;
    $('#'+j).attr('src', image);
    j=String.fromCharCode(j.charCodeAt(0)+1);
 }
});

$("button").on("click",function(event){
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
    });
     event.stopPropagation();
 });