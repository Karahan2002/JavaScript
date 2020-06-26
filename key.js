// 65 = a
//when you click "a" button in keyboard the programm will run alert function as shown

window.addEventListener("keydown",click,false);

		function click(key){
			if(key.keyCode == "65"){
				alert("true");
			}
		}
