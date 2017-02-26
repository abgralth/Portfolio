function doStuff(){
  $.ajax({
    dataType: "jason",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
  })
}

function jsonCallback(json){

}
