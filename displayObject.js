
		function book(title,author,page){
			this.title = title;
			this.author = author;
			this.page = page;

			this.display = function(){
				console.log(this);
			}
		}

		var book1 = new book("Kahramanlar","yakup",10);
		book1.display();
