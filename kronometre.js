var saniye = 0;

		function kronometre(){
			var dak = Math.floor(saniye/60);
			var saat = Math.floor(saniye/3600);
			var dakika = dak%60;
			var san = saniye%60;

			document.write(saat+" : "+dakika+" : "+san);
			document.write("<br />");

			saniye++;
		}

		setInterval("kronometre()",1000);
