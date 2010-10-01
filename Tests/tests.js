var MyObject = function(selector, options){
	
	this.jQuery = $(selector);
	
}; MyObject.prototype = {
	
	prop: 'foo',
	
	addArgs: function(arg, arg2, arg3){
		return arg + arg2 + arg3;
	},
	
	returnThis: function(){
		return this;
	}
	
};

var instance, fixture;



$(function(){


test("The jQuery.addObject function should", function() {
	
	expect(7);
	
	fixture = $('#qunit-fixture');	
	jQuery.addObject('myObject', MyObject);
	ok(!!jQuery.fn.myObject, 'add the object to the jQuery prototype');
	
	fixture.myObject({});
	ok(!!fixture.myObject(), "construct an instance" );

  equals('foo', fixture.myObject('prop'), "get properties" );

	var returned = fixture.myObject('prop', 'bar');
  equals('bar', fixture.myObject('prop'), "set properties" );
	
	ok(returned == fixture, 'return the jQuery after setting properties');	
	
	equals(6, fixture.myObject('addArgs', 1, 2, 3), "pass arguments to methods and return values");

	ok(fixture == fixture.myObject('returnThis'), "return the jQuery when method returns the object");
	
});


test("The object should pass all the same tests with vanilla JavaScript API", function() {
	
	expect(4);
	
	instance = new MyObject({});
	
	ok(!!instance, "construct an instance" );

  equals('foo', instance.prop, "get properties" );

	instance.prop = 'bar';
  equals('bar', instance.prop, "set properties" );

	equals(6, instance.addArgs(1, 2, 3), "pass arguments to methods and return values");
	
});


});
