
import Ember from "ember";

export default Ember.Controller.extend({
	test2: Ember.on('init', Ember.observer('model.@each.parent', function() {
		console.log('parent changed');
		Ember.run.once(this, () => {
			console.log('should only run once?');
		});
	})),
});
	