var nodeList = document.getElementsByTagName('li');

var i;

for(i = 0; i < nodeList.length; i++){




    var span = document.createElement('span');
    var Txt = document.createTextNode("\u00d7");
    

    span.className = "close";


    span.appendChild(Txt);
    nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
  var i;

  var textInput = document.getElementById("muInput");
  textInput.addEventListener("keyup", function(event){
    event.preventDefault();
    document.getElementById("myBtn").click();
  })

  for(i = 0; i < close.length; i++){
      close[i].onclick = function(){
          var div = this.parentElement;
          div.style.display = "none"
          
      }
  }


  function newElement(){
    var  li = document.createElement("li");
  var InputValue =   document.getElementById('myInput').value;

  var t = document.createTextNode(InputValue);
  li.appendChild(t);

  if(InputValue === "" ){
      alert("type something")
  }else{
      document.getElementById("myUl").appendChild(li);
      li.className = "list-group-item";
  }
  document.getElementById('myInput').value = "";

  var span = document.createElement("span");
  var text =  document.createTextNode('\u00d7');
  span.className = "close"


  span.appendChild(text);
  li.appendChild(span);

  for(i = 0; i < close.length; i++){
      close[i].onclick = function(){
          var div = this.parentElement;
          div.style.display = "none";
      }
  }
  }

