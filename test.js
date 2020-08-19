$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=d0f50e54a9a6bc4cb85e754393ccaead', function(data) {
console.log(data);
  
  $.each(data, function(index, value) {
    console.log(value);
    
    var city = value.name;
   // var temp = value.main;
    //var city = "test city"
    var temp = "9001"
    
   $('.city').text(city);
   $('.temp').text(temp);
   $('.image img'.attr('src', "https://media.apnarm.net.au/media/images/2018/10/24/imagev19ad7d458a44d1af8f6dfeda0f1fd0eb6-67gwwj38cojd07c86r2_t1880.jpg");
  });  
});
