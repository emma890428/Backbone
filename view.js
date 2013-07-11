Task = Backbone.View.extend({
	el: $('#container'),

	initialize: function(){
		this.render();
	},

	render: function(){
		var template = _.template($('#task_template').html(), {});

		this.$el.html(template);
	},

	events:{
		"click input[id='btn']": "addTask"
	},

	addTask: function () {
		alert($('#task_desc').val() + " task has been added");
	}
});

var task = new Task();