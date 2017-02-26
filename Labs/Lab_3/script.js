//Some JavaScript stuff
function addPerson(nameOfThePerson) {
  if (localStorage.length)
    var j = localStorage.length;
  else
    var j = 0 ;

  if (j > 9){
    localStorage.clear() ;
    j = 0 ;
  }
  localStorage.setItem(j , nameOfThePerson);
    personList.innerHTML = "<p>Here is a list which is supposed to be stored localy, it reset every 10 items</p>" ;
    /*for (var i=j ; i>=0 ; i--){
      var key = localStorage.key(i);
      var value = localStorage[key];
      console.log(key + " => " + value);
      personList.innerHTML += "<p>" + value + "</p>" ;
    }*/
    for (var i=0 ; i<=j ; i++){
      /*var key = localStorage.key(i);
      var value = localStorage[key];
      console.log(key + " => " + value);*/
      personList.innerHTML += "<p>" + localStorage[i] + "</p>" ;
    }
    //localStorage.clear();
  //var list = document.getElementById("personList");
  /*for(var i in localStorage){
    console.log("Adding a person : " + localStorage[i]);
    localStorage.innerHTML += "<p>" + localStorage[i] + "</p>" ;
  }*/
}

function playTrack(val) {
    var player = document.getElementById('mytrack');
    player.play() ;
}

function stopTrack(val) {
    var player = document.getElementById('mytrack');
    player.pause();
}

function SetVolume(val) {
    var player = document.getElementById('mytrack');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}
