function init(){
//add your javascrip between these two lines of code
  function AlertMe(){
	  var input = document.getElementById('entryinput');
	  var clickButton = document.getElementById('entrybutton');
	  var output = document.getElementById('textoutput');
	  var names = document.getElementByName('Immanuel Downs');
	  alert(names.value + ": " + input.value)
  }
  
  pressButton.addEventListener('click', Alertme);







window.addEventListener('load', init);