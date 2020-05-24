      

    var input = document.querySelectorAll("input");
        for(var i = 0; i < input.length; i++){
        input[i].addEventListener("input", function(){
            var red = 255-(document.getElementById("sldv").value/1.301);
            var grn = 255-(document.getElementById("sldv").value/1.321);
            var blu = 255-(document.getElementById("sldv").value/1.386);
            
                var  achtergrond = document.getElementById("achtergrond");
            achtergrond.style.background = "rgb("+red+", "+grn+", "+blu+")";
        });
    }

       
    
         
window.addEventListener('keydown', event => {
  switch (event.keyCode) {
      case 65:
        setBackgroundColor('rgb(168, 252, 252)');
    
  }
});
      
function setBackgroundColor(color) {
    document
      .querySelector('body')
      .style
      .background= color;
}     
           
               

    function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}


