//after run this code you have to type name of the object and its functions as "peron.print();"

var person = {
			ad: "yakup",
			soyad: "karahan",
			anne_ad: "serpil",
			baba_ad: "huseyin",

			print: function(){
				return "ad : "+this.ad +"<br />"+
					   "soyad : "+this.soyad+"<br />"+
					   "anne ad : "+this.anne_ad+"<br />"+
					   "baba ad : "+this.baba_ad+"<br />";
			}
		};
		person.print();
