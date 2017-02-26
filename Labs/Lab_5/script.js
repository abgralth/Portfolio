//Some JavaScript stuff
function addPerson(nameOfThePerson)
{
  /*var list = document.getElementById("personList");
  console.log("Adding a person : " + nameOfThePerson);
  list.innerHTML += "<p>" + nameOfThePerson + "</p>" ;*/
  $("#personList").append("<p>" + nameOfThePerson + "</p>");
}

function jsonCallback(json){
  $.each(json, function (key, json) {
  console.log(json.name +" " + json.email);
  $("#buttonList").append("<p>" + json.name + " email : <a href="+ json.email +">" + json.email + "</a></p>" )
});
}

function ajaxList(){
  $.ajax({
  url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
  dataType: "jsonp"
});
}
