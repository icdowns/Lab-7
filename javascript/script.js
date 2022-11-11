function init(){
//add your javascrip between these two lines of code
  var input = document.getElementById('entryinput')
  var clickButton = document.getElementById('entrybutton')
  var output = document.getElementById('textoutput')
  
  function AlertMe(){
	  
	 
	  alert('Immanuel Downs:' + input.value);
	  output.innerHTML = input.value;
	  
  }
  
  pressButton.addEventListener('click', AlertMe);

}





window.addEventListener('load', init);