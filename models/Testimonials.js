var keystone = require('keystone');
var Types = keystone.Field.Types;

var Testimonial = new keystone.List('Testimonial', {
	label: 'Testimonial',
	autokey: { from: 'testimonial', path: 'key', unique: true },
});

Testimonial.add({
	parentName: { type: Types.Name, required: true, initial: true },
	parentImagePath: { type: String, required: true, initial: true },
	studentName: { type: Types.Name, required: true, initial: true },
	relationWithStudent: {
		type: Types.Select,
		options: 'Father, Mother, Guardian, Relative, Friend',
		initial: true,
		required: true,
	},
	testimonial: { type: Types.Textarea, required: true, initial: true }
});

Testimonial.defaultColumns = 'parentName, studentName,testimonial';
Testimonial.register();
