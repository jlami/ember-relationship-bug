import DS from "ember-data";
import {Model} from "ember-pouch";

export default Model.extend({
	test: DS.attr('string'),
	parent: DS.belongsTo('test', {inverse: 'children'}),
	children: DS.belongsTo('test', {inverse: 'parent'}),
});