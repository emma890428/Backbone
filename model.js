
Person = Backbone.Model.extend({
	initialize: function(){
		console.log("Object is created");

		this.on('change', function(){
			alert("Name attribute value has been changed");
		});
	},

	defaults: {
		name: "default",
		age: "0"
	},

	getNameAndAge: function(){
		console.log("Name is: " + this.get('name') + " and Age is: " + this.get('age'));
	}
});

var steve = new Person();
console.log(steve.get('name'));
console.log(steve.get('age'));

var simon = new Person({name:"Simon", age:"30"});
console.log(simon.get('name'));
console.log(simon.get('age'));

steve.getNameAndAge();

steve.set({name:"Steve"});
steve.set({age:"40"});