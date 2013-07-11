FirstView = Backbone.View.extend({
	el: $('#container'),

	initialize: function(){
		this.render();
	},

	render: function(){
		var template = _.template($('#first_template').html(), {});

		this.$el.html(template);
	}
});

SecondView = Backbone.View.extend({
	el: $('#container'),

	initialize: function(){
		this.render();
	},

	render: function(){
		var template = _.template($('#second_template').html(), {});

		this.$el.html(template);
	}
});

MyRouter = Backbone.Router.extend({
	routes:{
		"": "firstPage",
		"first": "firstPage",
		"second": "secondPage"
	},

	firstPage: function(){
		new FirstView();
	},

	secondPage: function(){
		new SecondView();
	}	
});

var router = new MyRouter();
Backbone.history.start();