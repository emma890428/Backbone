Student = Backbone.Model.extend({
	defaults:{
		name: "",
		age: ""
	}
});

ClassRoom = Backbone.Collection.extend({
	model: Student
});

var student1 = new Student({name: "Naveed", age: "26"});
var student2 = new Student({name: "Steve", age: "30"});
var student3 = new Student({name: "Simon", age: "28"});
var collection = new ClassRoom([student1,student2,student3]);