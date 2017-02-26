//Some JavaScript stuff
function addPerson(nameOfThePerson)
{
  var list = document.getElementById("personList");
  console.log("Adding a person : " + nameOfThePerson);
  list.innerHTML += "<p>" + nameOfThePerson + "</p>" ;
}

function addSomething(){
  var inputField = document.getElementById("somethingField");
  var result = document.getElementById("resultBox");

  var newElement = document.createElement("INPUT");
  newElement.setAttribute(`type`,`text`);
  newElement.setAttribute(`value`, inputField.value);
  result.appendChild(newElement);
}
