
import Ember from "ember";

export default Ember.Route.extend({
	model() {
		return this.store.findAll('test');
	},
	
	actions: {
		fill: function() {
			let t1 = this.store.createRecord('test', {test: 'Test 1'});
			let t2 = this.store.createRecord('test', {test: 'Test 2'});
			
			t1.save().then(() => {
				t2.set('parent', t1);
				t2.save().then(()=>{
					t1.get('children').pushObject(t2);
					t1.save();
					});
				});
		},
		saveAll: function() {
			this.get('currentModel').forEach(o => {
				o.save();
			});
		}
	},
});
