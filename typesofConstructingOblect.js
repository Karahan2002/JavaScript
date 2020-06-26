// In this code we create 3 objects and run as 3 types of creating objects 


//book1

		function book(title,author,page){
			this.title = title;
			this.author = author;
			this.page = page;

			this.display = function(){
				console.log(this);
			}
		}

		var book1 = new book("kahramanlar","yakup",70);
		book1.display();
		

		//book2

		var book2 = {
			title: "kahramanlar 2",
			author: "yakup",
			page: 80,
			display: function(){
				console.log(this);
			}
		}
		book2.display();

		//book3

		var book3 = new Object();
		book3.title = "kahramanlar3";
		book3.author = "yakup";
		book3.page = 100;
		book3.display = function(){
			console.log(this);
		}
		book3.display();
